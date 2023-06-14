import { NextRequest, NextResponse } from "next/server";
import getRole from "@/utils/getRole";

const isClient = () => getRole() === "client";

const isManager = () => getRole() === "manager";

const isAdmin = () => getRole() === "admin";

export const middleware = (request: NextRequest) => {
  if (
    (request.nextUrl.pathname.startsWith("/admin") && !isAdmin()) ||
    (request.nextUrl.pathname.startsWith("/manager") && !isManager())
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/admin/:path*", "/manager/:path*"],
};
