"use client";

import {
  Context,
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export enum AuthTypes {
  signIn = "signIn",
  signUp = "signUp",
}

interface IAuthContextValue {
  authType: AuthTypes;
  setAuthType: Dispatch<SetStateAction<AuthTypes>>;
}

export const AuthContext: Context<IAuthContextValue> =
  createContext<IAuthContextValue>({
    authType: AuthTypes.signIn,
    setAuthType: () => {},
  });

const Auth: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [authType, setAuthType] = useState(AuthTypes.signIn);
  return (
    <AuthContext.Provider
      value={{ authType: authType, setAuthType: setAuthType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
