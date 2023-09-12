"use client";

import { FC, ReactNode, useEffect } from "react";
import { userActions } from "@/redux/reducers/UserSlice";
import { useAppDispatch } from "@/redux/hooks";

const WithUser: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.user) {
      dispatch(userActions.setUser(JSON.parse(localStorage.user)));
    }
  }, [dispatch]);
  return <>{children}</>;
};

export default WithUser;
