import jwt_decode from "jwt-decode";
import getAuthToken, { AccessTokenData } from "@/utils/getAuthToken";

// export type Roles = "client" | "admin" | "manager";

export enum Roles {
  client = "client",
  admin = "admin",
  manager = "manager",
}

const getCurrentUserRole = (): Roles | undefined => {
  const accessToken: string | undefined = getAuthToken();
  let role: Roles | undefined;
  if (accessToken) {
    const accessTokenData: AccessTokenData | undefined =
      jwt_decode(accessToken);
    role = accessTokenData?.role;
  }
  return role;
};

export default getCurrentUserRole;
