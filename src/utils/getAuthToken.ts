import Cookies from "js-cookie";
import { Roles } from "@/utils/getCurrentUserRole";

export interface AccessTokenData {
  id: string;
  email: string;
  name: string;
  role: Roles;
}

const getAuthToken = () => {
  return Cookies.get(process.env.AUTH_TOKEN_NAME || "access_token");
};

export default getAuthToken;
