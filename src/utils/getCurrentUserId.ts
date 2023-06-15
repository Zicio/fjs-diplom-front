import getAuthToken, { AccessTokenData } from "@/utils/getAuthToken";
import jwt_decode from "jwt-decode";

const getCurrentUserId = (): string | undefined => {
  const accessToken: string | undefined = getAuthToken();
  if (accessToken) {
    const accessTokenData: AccessTokenData | undefined =
      jwt_decode(accessToken);
    return accessTokenData?.id;
  }
  return;
};

export default getCurrentUserId;
