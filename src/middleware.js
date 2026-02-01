import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin_token")?.value;

    // Handle login page specifically
    if (pathname === "/admin/login") {
      if (!token) return NextResponse.next();

      try {
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET || "default_secret_key"
        );
        await jwtVerify(token, secret);
        // If token is valid, redirect to dashboard
        return NextResponse.redirect(new URL("/admin", request.url));
      } catch (error) {
        // If token invalid, allow login page
        return NextResponse.next();
      }
    }

    // Protection for all other /admin paths
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "default_secret_key"
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
