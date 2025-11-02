import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface IUser {
  id: string;
  email: string;
  role: "ADMIN" | "DOCTOR" | "PATIENT";
  exp: number;
  iat: number;
}

const roleBaseRoutes = {
  ADMIN: ["/admin/dashboard"],
  DOCTOR: ["/doctor/dashboard"],
  PATIENT: [
    "/patient/dashboard",
    "/patient/appointments",
    "/patient/medical-records",
  ],
};

const authRoutes = ["/login", "/register", "/forgot-password"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const refreshToken = request.cookies.get("refreshToken")?.value;

  const { pathname } = request.nextUrl;

  if (!accessToken && !refreshToken && !authRoutes.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  let user: IUser | null = null;

  try {
    if (accessToken) {
      user = jwtDecode(accessToken);
    }
  } catch (error: any) {
    console.log("error decoding access token:", error.message);
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  if (!user && refreshToken) {
    try {
      const refresher = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (refresher.ok) {
        const newAccessToken = request.cookies.get("accessToken")?.value;
        user = jwtDecode(newAccessToken!);

        // return NextResponse.redirect(new URL(pathname, request.url));

        return NextResponse.next();
      } else {
        const response = NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url)
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
      }
    } catch (error) {
      console.log("error decoding refresh token:", error);
      const response = NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  if (user) {
    const allowedRoutes = user ? roleBaseRoutes[user.role] : [];
    if (allowedRoutes && allowedRoutes.some((r) => pathname.startsWith(r))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/"));
  }

  // const protectedPaths = [
  //   "/dashboard",
  //   "/profile",
  //   "/settings",
  //   "/appointments",
  // ];

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/profile",
    "/settings",
    "/appointments",
  ],
};
