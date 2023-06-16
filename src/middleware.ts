import { NextRequest, NextResponse } from "next/server";
import getCurrentUserRole from "@/utils/getCurrentUserRole";

const isClient = () => getCurrentUserRole() === "client";

const isManager = () => getCurrentUserRole() === "manager";

const isAdmin = () => getCurrentUserRole() === "admin";

export const middleware = (request: NextRequest) => {
  if (
    (request.nextUrl.pathname.startsWith("/admin") && !isAdmin()) ||
    (request.nextUrl.pathname.startsWith("/manager") && !isManager()) ||
    (request.nextUrl.pathname.startsWith("/client") && !isClient())
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/admin/:path*", "/manager/:path*"],
};
