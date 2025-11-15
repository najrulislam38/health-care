export type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

//exact = ["my-profile", "/settings"]
// patterns = ["/^\/dashboard/", "/^\/appointments/"]
export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authProtectedRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/verify",
  "/reset-password",
];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["my-profile", "/settings"],
  patterns: [],
};

export const doctorProtectedRoutes: RouteConfig = {
  patterns: [/^\/doctor\/./], // Routes starting with "/doctor/"
  exact: [],
};

export const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin\/./], // Routes starting with "/admin/"
  exact: [],
};

export const patientProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard\/./], // Routes starting with "/patient/"
  exact: [],
};

export const isAuthRoute = (pathname: string) => {
  return authProtectedRoutes.some((route) => {
    // return route.startsWith(pathname)
    return route === pathname;
  });
};

export const isRouteMatches = (
  pathname: string,
  routes: RouteConfig
): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }

  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));

  //if pathname === /dashboard/my-appointments => matches /^\/dashboard/ => true
};

export const getRouteOwner = (
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

export const getDefaultDashboardRoute = (role: UserRole) => {
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

export const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "COMMON") {
    return true;
  }
  if (routeOwner === role) {
    return true;
  }

  return false;
};
