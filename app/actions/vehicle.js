"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"

export async function deleteVehicle(id) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is admin
    if (!session?.user || session.user.role !== "admin") {
      return { success: false, message: "Unauthorized" }
    }

    // Delete the vehicle
    await prisma.vehicle.delete({
      where: { id },
    })

    revalidatePath("/admin/vehicles")
    return { success: true, message: "Vehicle deleted successfully" }
  } catch (error) {
    console.error("Error deleting vehicle:", error)
    return { success: false, message: "Failed to delete vehicle" }
  }
}

export async function getVehicles({ page = 1, limit = 10, status = "all", search = "", sort = "newest" }) {
  try {
    // Build filter conditions
    const where = {}

    if (status && status !== "all") {
      where.status = status.toLowerCase()
    }

    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { year: { contains: search, mode: "insensitive" } },
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
      case "price-high":
        orderBy = { price: "desc" }
        break
      case "price-low":
        orderBy = { price: "asc" }
        break
      default:
        orderBy = { createdAt: "desc" }
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Get vehicles with pagination
    const vehicles = await prisma.vehicle.findMany({
      where,
      orderBy,
      skip,
      take: limit,
    })

    // Get total count for pagination
    const total = await prisma.vehicle.count({ where })
    const totalPages = Math.ceil(total / limit)

    return {
      vehicles,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
      },
    }
  } catch (error) {
    console.error("Error fetching vehicles:", error)
    return {
      vehicles: [],
      pagination: {
        total: 0,
        totalPages: 0,
        currentPage: page,
        limit,
      },
    }
  }
}
