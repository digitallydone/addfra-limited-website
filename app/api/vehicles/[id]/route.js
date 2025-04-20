import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"

export async function GET(request, { params }) {
  try {
    const { id } = params

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    })

    if (!vehicle) {
      return NextResponse.json({ message: "Vehicle not found" }, { status: 404 })
    }

    return NextResponse.json(vehicle)
  } catch (error) {
    console.error("Error fetching vehicle:", error)
    return NextResponse.json({ message: "Error fetching vehicle" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and is an admin
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const data = await request.json()

    // Validate required fields
    if (!data.make || !data.model || !data.year || !data.price) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Update vehicle
    const vehicle = await prisma.vehicle.update({
      where: { id },
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
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(vehicle)
  } catch (error) {
    console.error("Error updating vehicle:", error)
    return NextResponse.json({ message: "Error updating vehicle" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and is an admin
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    // Delete vehicle
    await prisma.vehicle.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Vehicle deleted successfully" })
  } catch (error) {
    console.error("Error deleting vehicle:", error)
    return NextResponse.json({ message: "Error deleting vehicle" }, { status: 500 })
  }
}
