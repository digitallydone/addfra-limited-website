"use server"

import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { z } from "zod"

import prisma from "@/lib/prisma"

// Define validation schema
const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export async function register(formData: FormData) {
  try {
    // Extract and validate form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    }

    // Validate data
    const validatedData = registerSchema.safeParse(data)
    if (!validatedData.success) {
      return { success: false, errors: validatedData.error.flatten().fieldErrors }
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return { success: false, errors: { email: ["Email already in use"] } }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Create user
    await prisma.user.create({
      data: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        hashedPassword,
      },
    })

    revalidatePath("/auth/login")
    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, errors: { _form: ["An unexpected error occurred"] } }
  }
}

// Define login schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export async function login(formData: FormData) {
  try {
    // Extract and validate form data
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    // Validate data
    const validatedData = loginSchema.safeParse(data)
    if (!validatedData.success) {
      return { success: false, errors: validatedData.error.flatten().fieldErrors }
    }

    // Authentication is handled by NextAuth
    // This function is just for form validation
    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, errors: { _form: ["An unexpected error occurred"] } }
  }
}

