"use client";

import { useContext } from "react";
import { ProfileContext } from "@/modules/Profile/Profile";
import button from "@/components/Button/Button";

const ProfileButton = () => {
  const isAuth = useContext(ProfileContext);
  return <button>{isAuth ? "Выйти" : "Войти"}</button>;
};

export default ProfileButton;
