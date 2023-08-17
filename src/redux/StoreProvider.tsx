"use client";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
