import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

type Roles = "client" | "admin" | "manager";

interface AccessTokenData {
  id: string;
  email: string;
  name: string;
  role: Roles;
}

export const getUsers = async () => {
  const accessToken = Cookies.get(
    process.env.AUTH_TOKEN_NAME || "access_token",
  );
  if (!accessToken) {
    return null; // TODO сделать редирект на главную страницу
  }
  const accessTokenData: AccessTokenData = jwt_decode(accessToken);
  const role: Roles = accessTokenData.role;
  if (role !== "admin") {
    return null; // TODO сделать редирект на главную страницу
  }
  try {
    const response = await fetch(process.env.BACKEND_URL + "/api/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
