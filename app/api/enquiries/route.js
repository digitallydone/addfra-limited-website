import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.message
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create enquiry in database
    const enquiry = await prisma.enquiry.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        enquiryType: data.enquiryType,
        message: data.message,
        vehicle: data.vehicleId,
        // vehicle: {
        //   connect: { id: data.vehicleId },
        // },
      },
    });

    // Sen
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { message: "Failed to create enquiry" },
      { status: 500 }
    );
  }
}
