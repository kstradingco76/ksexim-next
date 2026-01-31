import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Check credentials against environment variables
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create JWT
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "default_secret_key"
      );
      
      const token = await new SignJWT({ role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h") // Token expires in 2 hours
        .sign(secret);

      // Create response with HTTPOnly cookie
      const response = NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 }
      );

      response.cookies.set({
        name: "admin_token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 7200, // 2 hours in seconds
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
