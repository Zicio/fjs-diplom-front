import { NextRequest, NextResponse } from "next/server";
import { isAdmin, isManager } from "@/utils/role";

export const middleware = (request: NextRequest) => {
  if (
    (request.nextUrl.pathname.startsWith("/admin") && isAdmin(request)) ||
    (request.nextUrl.pathname.startsWith("/manager") && isManager(request))
  ) {
    return;
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/admin/:path*", "/manager/:path*"],
};
