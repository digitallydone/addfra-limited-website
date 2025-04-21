"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function createEnquiry(formData) {
  try {
    const session = await getServerSession(authOptions);

    // Validate required fields
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const vehicleId = formData.get("vehicleId");

    if (!firstName || !lastName || !email || !phone || !message || !vehicleId) {
      return { success: false, message: "Missing required fields" };
    }

    console.log("Creating enquiry with data:", {
      firstName,
      lastName,
      email,
      phone,
      message,
      vehicleId,
    });
    // Check if user is logged in

    // Create enquiry in database
    const enquiry = await prisma.enquiry.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        message,
        vehicle: {
          connect: { id: vehicleId },
        },
        // userId: session?.user?.id ?? "",
      },
    });

    revalidatePath("/admin/enquiries");
    return {
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    };
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return { success: false, message: "Failed to submit enquiry" };
  }
}

export async function updateEnquiryStatus(id, status) {
  try {
    const session = await getServerSession(authOptions);

    // Check if user is admin
    if (!session?.user || session.user.role !== "admin") {
      return { success: false, message: "Unauthorized" };
    }

    // Update enquiry status
    const enquiry = await prisma.enquiry.update({
      where: { id },
      data: { status, updatedAt: new Date() },
    });

    revalidatePath("/admin/enquiries");
    return {
      success: true,
      message: "Enquiry status updated successfully",
      enquiry,
    };
  } catch (error) {
    console.error("Error updating enquiry status:", error);
    return { success: false, message: "Failed to update enquiry status" };
  }
}

export async function deleteEnquiry(id) {
  try {
    const session = await getServerSession(authOptions);

    // Check if user is admin
    if (!session?.user || session.user.role !== "admin") {
      return { success: false, message: "Unauthorized" };
    }

    // Delete enquiry
    await prisma.enquiry.delete({
      where: { id },
    });

    revalidatePath("/admin/enquiries");
    return { success: true, message: "Enquiry deleted successfully" };
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return { success: false, message: "Failed to delete enquiry" };
  }
}

export async function getEnquiries({
  page = 1,
  limit = 10,
  status = "all",
  search = "",
  sort = "newest",
}) {
  try {
    const session = await getServerSession(authOptions);

    // Check if user is admin
    if (!session?.user || session.user.role !== "admin") {
      return {
        enquiries: [],
        pagination: {
          total: 0,
          totalPages: 0,
          currentPage: page,
          limit,
        },
      };
    }

    // Build filter conditions
    const where = {};

    if (status && status !== "all") {
      where.status = status.toLowerCase();
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { message: { contains: search, mode: "insensitive" } },
      ];
    }

    // Build sort options
    let orderBy = {};

    switch (sort) {
      case "newest":
        orderBy = { createdAt: "desc" };
        break;
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "name-asc":
        orderBy = { name: "asc" };
        break;
      case "name-desc":
        orderBy = { name: "desc" };
        break;
      default:
        orderBy = { createdAt: "desc" };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get enquiries with pagination
    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        vehicle: {
          select: {
            make: true,
            model: true,
            year: true,
            images: true,
          },
        },
      },
    });

    // Get total count for pagination
    const total = await prisma.enquiry.count({ where });
    const totalPages = Math.ceil(total / limit);

    return {
      enquiries,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return {
      enquiries: [],
      pagination: {
        total: 0,
        totalPages: 0,
        currentPage: page,
        limit,
      },
    };
  }
}
