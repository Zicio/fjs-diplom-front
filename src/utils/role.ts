import jwt_decode from "jwt-decode";
import { NextRequest } from "next/server";

type Roles = "client" | "admin" | "manager";

interface AccessTokenData {
  id: string;
  email: string;
  name: string;
  role: Roles;
}

const getRole = (request: NextRequest) => {
  const accessToken = request.cookies.get(
    process.env.AUTH_TOKEN_NAME || "access_token",
  )?.value;

  let accessTokenData: AccessTokenData | undefined;
  let role: Roles | undefined;
  if (accessToken) {
    accessTokenData = jwt_decode(accessToken);
    role = accessTokenData?.role;
  }
  return role;
};

export const isClient = (request: NextRequest) => {
  return getRole(request) === "client";
};

export const isManager = (request: NextRequest) => {
  return getRole(request) === "manager";
};

export const isAdmin = (request: NextRequest) => {
  return getRole(request) === "admin";
};
