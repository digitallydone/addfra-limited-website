import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import OrdersPage from "./page"

export default async function OrdersPageWrapper({ searchParams }) {
  // Check if user is admin
  const session = await getServerSession(authOptions)
  if (!session?.user || session.user.role !== "admin") {
    redirect("/auth/login?callbackUrl=/admin/orders")
  }

  // Extract query parameters
  const page = Number(searchParams.page) || 1
  const limit = Number(searchParams.limit) || 10
  const status = searchParams.status || "all"
  const paymentStatus = searchParams.payment || "all"
  const search = searchParams.search || ""
  const sort = searchParams.sort || "newest"

  // Build filter conditions
  const where = {}

  if (status && status !== "all") {
    where.status = status.toLowerCase()
  }

  if (paymentStatus && paymentStatus !== "all") {
    where.paymentStatus = paymentStatus.toLowerCase()
  }

  if (search) {
    where.OR = [
      { orderNumber: { contains: search, mode: "insensitive" } },
      { user: { name: { contains: search, mode: "insensitive" } } },
      { user: { email: { contains: search, mode: "insensitive" } } },
    ]
  }

  // Build sort options
  let orderBy = {}

  switch (sort) {
    case "newest":
      orderBy = { createdAt: "desc" }
      break
    case "oldest":
      orderBy = { createdAt: "asc" }
      break
    case "amount-high":
      orderBy = { total: "desc" }
      break
    case "amount-low":
      orderBy = { total: "asc" }
      break
    default:
      orderBy = { createdAt: "desc" }
  }

  // Calculate pagination
  const skip = (page - 1) * limit

  // Get orders with pagination
  const orders = await prisma.order.findMany({
    where,
    orderBy,
    skip,
    take: limit,
    include: {
      items: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })

  // Get total count for pagination
  const total = await prisma.order.count({ where })
  const totalPages = Math.ceil(total / limit)

  const pagination = {
    total,
    page,
    limit,
    totalPages,
  }

  return <OrdersPage orders={orders} pagination={pagination} searchParams={searchParams} />
}
