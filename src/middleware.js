import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  if (pathname.startsWith("/admin")) {
    
    // Allow login page to pass through
    if (pathname === "/admin/login") {
      // Optional: Redirect to /admin if already logged in (can add logic here)
      return NextResponse.next();
    }

    const token = request.cookies.get("admin_token")?.value;

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
  matcher: "/admin/:path*",
};
