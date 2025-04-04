import { PrismaAdapter } from "@auth/prisma-adapter"
import type { NextAuthOptions } from "next-auth"
import type { Adapter } from "next-auth/adapters"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import bcrypt from "bcrypt"

import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required")
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid email or password")
        }

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
        if (!isCorrectPassword) {
          throw new Error("Invalid email or password")
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role ?? "user", // Ensure role is assigned
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error", // Custom error page
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role ?? "user" // Assign default role if missing
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
