"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import prisma from "@/lib/prisma"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// Define validation schema for updating user role
const updateRoleSchema = z.object({
  role: z.enum(["user", "admin"]),
})

export async function updateUserRole(userId: string, formData: FormData) {
  try {
    // Check if current user is admin
    const session = await getServerSession(authOptions)
    if (!session?.user || session.user.role !== "admin") {
      return { success: false, errors: { _form: ["You don't have permission to update user roles"] } }
    }

    // Extract and validate form data
    const data = {
      role: formData.get("role") as string,
    }

    // Validate data
    const validatedData = updateRoleSchema.safeParse(data)
    if (!validatedData.success) {
      return { success: false, errors: validatedData.error.flatten().fieldErrors }
    }

    // Update user role
    await prisma.user.update({
      where: { id: userId },
      data: { role: data.role },
    })

    revalidatePath("/admin/users")
    return { success: true }
  } catch (error) {
    console.error("Error updating user role:", error)
    return { success: false, errors: { _form: ["An unexpected error occurred"] } }
  }
}

export async function getUserById(userId: string) {
  try {
    // Check if current user is admin
    const session = await getServerSession(authOptions)
    if (!session?.user || session.user.role !== "admin") {
      throw new Error("Unauthorized")
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        orders: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
        _count: {
          select: {
            orders: true,
          },
        },
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    return user
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error)
    throw error
  }
}

