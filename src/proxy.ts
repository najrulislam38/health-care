// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function proxy(request: NextRequest) {
//   const token = request.cookies.get("accessToken")?.value;

//   const { pathname } = request.nextUrl;

//   const protectedPaths = [
//     "/dashboard",
//     "/profile",
//     "/settings",
//     "/appointments",
//   ];

//   const authRoutes = ["/login", "/register", "/forgot-password"];

//   const isProtectedPath = protectedPaths.some((path) =>
//     pathname.startsWith(path)
//   );

//   const isAuthRoute = authRoutes.some((path) => pathname === path);

//   if (isProtectedPath && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (isAuthRoute && token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/profile",
//     "/settings",
//     "/appointments",
//   ],
// };
// old proxy setup

// new proxy setup
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

//exact = ["my-profile", "/settings"]
// patterns = ["/^\/dashboard/", "/^\/appointments/"]
type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const authProtectedRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/verify",
  "/reset-password",
];

const commonProtectedRoutes: RouteConfig = {
  exact: ["my-profile", "/settings"],
  patterns: [],
};

const doctorProtectedRoutes: RouteConfig = {
  patterns: [/^\/doctor\/./], // Routes starting with "/doctor/"
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin\/./], // Routes starting with "/admin/"
  exact: [],
};

const patientProtectedRoutes: RouteConfig = {
  patterns: [/^\/patient\/./], // Routes starting with "/patient/"
  exact: [],
};

const isAuthRoute = (pathname: string) => {
  return authProtectedRoutes.some((route) => {
    // return route.startsWith(pathname)
    return route === pathname;
  });
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }

  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));

  //if pathname === /dashboard/my-appointments => matches /^\/dashboard/ => true
};

const getRouteOwner = (
  pathname: string
): "ADMIN" | "DOCTOR" | "PATIENT" | "COMMON" | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, doctorProtectedRoutes)) {
    return "DOCTOR";
  }
  if (isRouteMatches(pathname, patientProtectedRoutes)) {
    return "PATIENT";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }
  return null;
};

const getDefaultDashboardRoute = (role: UserRole) => {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "DOCTOR":
      return "/doctor/dashboard";
    case "PATIENT":
      return "/dashboard";
    default:
      return "/";
  }
};

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const pathname = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value || null;

  let userRole: UserRole | null = null;

  if (accessToken) {
    const verifiedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET as string
    );

    if (typeof verifiedToken === "string") {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    userRole = verifiedToken.role;
  }

  const routeOwner = getRouteOwner(pathname);

  const isAuth = isAuthRoute(pathname);

  // Rule 1: User is logged in try to access auth route, redirect to default dashboard
  if (accessToken && isAuth) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
    );
  }

  // Rule 2: User is trying to access open public routes
  if (routeOwner === null) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Rule 3: User is trying to access common protected routes
  if (routeOwner === "COMMON") {
    return NextResponse.next();
  }

  // Rule 4: user is trying to access admin or doctor protected routes
  if (userRole === "ADMIN" || "DOCTOR" || "PATIENT") {
    if (userRole !== routeOwner) {
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
      );
    }
    return NextResponse.next();
  }

  console.log({ userRole });
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
