// import { NextResponse } from "next/server"
// import { getToken } from "next-auth/jwt"

// export async function middleware(request) {
//   const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
//   const isAuthenticated = !!token
//   const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
//   const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
//   const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard")

//   // Redirect authenticated users away from auth pages
//   if (isAuthenticated && isAuthRoute) {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }

//   // Redirect unauthenticated users to login
//   if (!isAuthenticated && (isDashboardRoute || isAdminRoute)) {
//     return NextResponse.redirect(
//       new URL(`/auth/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url),
//     )
//   }

//   // Redirect non-admin users away from admin routes
//   if (isAuthenticated && isAdminRoute && token.role !== "admin") {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/admin/:path*", "/auth/:path*", "/dashboard/:path*"],
// }



// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const url = req.nextUrl;

//   const isAuthRoute = url.pathname.startsWith("/auth");
//   const isDashboardRoute = url.pathname.startsWith("/dashboard");
//   const isAdminRoute = url.pathname.startsWith("/admin");

//   // If not authenticated and trying to access protected routes
//   if (!token && (isDashboardRoute || isAdminRoute)) {
//     return NextResponse.redirect(
//       new URL(`/auth/login?callbackUrl=${encodeURIComponent(url.pathname)}`, req.url)
//     );
//   }

//   // If authenticated and trying to access auth pages like login/register
//   if (token && isAuthRoute) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   // If authenticated but role mismatch for dashboard
//   if (token && isDashboardRoute && token.role !== "user") {
//     return NextResponse.redirect(new URL("/admin", req.url));
//   }

//   // If authenticated but not admin accessing admin route
//   if (token && isAdminRoute && token.role !== "admin") {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/auth/:path*", "/dashboard/:path*"],
// };


import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  // Get the token with more flexible options
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production"
  })
  
  const isAuthenticated = !!token
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard")
  
  // For debugging - consider adding these to server logs
  // console.log(`Path: ${request.nextUrl.pathname}, Auth: ${isAuthenticated}, Role: ${token?.role}`)
  
  // Check if we're handling a redirect after login
  const callbackUrl = request.nextUrl.searchParams.get("callbackUrl")
  
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    const redirectUrl = callbackUrl || "/dashboard"
    return NextResponse.redirect(new URL(redirectUrl, request.url))
  }
  
  // Redirect unauthenticated users to login
  if (!isAuthenticated && (isDashboardRoute || isAdminRoute)) {
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url),
    )
  }
  
  // Redirect non-admin users away from admin routes
  if (isAuthenticated && isAdminRoute && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*", "/dashboard/:path*"],
}