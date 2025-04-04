import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const isAuthenticated = !!token
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard")

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && (isDashboardRoute || isAdminRoute)) {
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url),
    )
  }

  // Redirect non-admin users away from admin routes
  if (isAuthenticated && isAdminRoute && token.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*", "/dashboard/:path*"],
}

