import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const status = searchParams.get("status") || "available"

    const skip = (page - 1) * limit

    const where = {}
    if (status !== "all") {
      where.status = status
    }

    const vehicles = await prisma.vehicle.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    })

    const total = await prisma.vehicle.count({ where })

    return NextResponse.json({
      vehicles,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching vehicles:", error)
    return NextResponse.json({ message: "Error fetching vehicles" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and is an admin
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()

    // Validate required fields
    if (!data.make || !data.model || !data.year || !data.price) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create vehicle
    const vehicle = await prisma.vehicle.create({
      data: {
        make: data.make,
        model: data.model,
        year: data.year,
        price: data.price,
        mileage: data.mileage,
        transmission: data.transmission,
        fuelType: data.fuelType,
        bodyType: data.bodyType,
        color: data.color,
        description: data.description,
        features: data.features,
        status: data.status,
        images: data.images,
      },
    })

    return NextResponse.json(vehicle)
  } catch (error) {
    console.error("Error creating vehicle:", error)
    return NextResponse.json({ message: "Error creating vehicle" }, { status: 500 })
  }
}
