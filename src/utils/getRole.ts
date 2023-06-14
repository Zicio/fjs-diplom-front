import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export type Roles = "client" | "admin" | "manager";

interface AccessTokenData {
  id: string;
  email: string;
  name: string;
  role: Roles;
}

const getRole = () => {
  const accessToken = Cookies.get(
    process.env.AUTH_TOKEN_NAME || "access_token",
  );

  let role: Roles | undefined;
  if (accessToken) {
    const accessTokenData: AccessTokenData | undefined =
      jwt_decode(accessToken);
    role = accessTokenData?.role;
  }
  return role;
};

export default getRole;
