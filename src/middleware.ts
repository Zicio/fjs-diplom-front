import { NextRequest, NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

type Roles = "client" | "admin" | "manager";

interface AccessTokenData {
  id: string;
  email: string;
  name: string;
  role: Roles;
}

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get(
    process.env.AUTH_TOKEN_NAME || "access_token",
  )?.value;

  let accessTokenData: AccessTokenData | undefined;
  let role: Roles | undefined;
  if (accessToken) {
    accessTokenData = jwt_decode(accessToken);
    role = accessTokenData?.role;
  }

  // if (request.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
  //   return new NextResponse(
  //     JSON.stringify({
  //       success: false,
  //       message: "Для доступа к этой странице требуются права администратора",
  //     }),
  //     { status: 401, headers: { "content-type": "application/json" } },
  //   );
  // }

  if (
    (request.nextUrl.pathname.startsWith("/admin") && role !== "admin") ||
    (request.nextUrl.pathname.startsWith("/manager") && role !== "manager")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/admin/:path*", "/manager/:path*"],
};
