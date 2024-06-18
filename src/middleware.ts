import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const httpMethod = req.method;

  const authToken =
    req.cookies.get("next-auth.session-token")?.value ??
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  // If the user has an authToken and tries to access the login page, redirect to /dashboard
  if (authToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Check if the request is for the dashboard or any subpath of the dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (!authToken) {
    if (pathname === "/api/project" && httpMethod !== "GET") {
      return new NextResponse(JSON.stringify({ error: "Unauthorized!" }), {
        status: 401,
      });
    } else if (pathname === "/api/auth/signup") {
      return new NextResponse(
        JSON.stringify({
          error: "Unauthorized! Only existing admin can add new admin",
        }),
        {
          status: 401,
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/project/:path*", "/api/auth/:path*", "/login"],
};
