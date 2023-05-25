import Cookies from "js-cookie";

const isAuth = () => {
  return Cookies.get(process.env.AUTH_TOKEN_NAME || "access_token");
};

export default isAuth;
