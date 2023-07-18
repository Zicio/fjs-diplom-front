"use client";

import { useContext } from "react";
import { ProfileContext } from "@/modules/Profile/Profile";
import Button from "@/components/Button/Button";

const ProfileButton = () => {
  const isAuth = useContext(ProfileContext);
  return <Button type={"button"} text={isAuth ? "Выйти" : "Войти"} />;
};

export default ProfileButton;
