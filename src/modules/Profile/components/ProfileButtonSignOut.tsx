"use client";

import React, { useContext } from "react";
import { ProfileContext } from "@/modules/Profile/Profile";

const ProfileButtonSignOut = () => {
  const isAuth = useContext(ProfileContext);

  if (!isAuth) {
    return null;
  }

  return (
    <button
      type="reset"
      className={`button activeButton`}
      // onClick={() => redirect("/auth")} TODO: реализовать signOut
    >
      Войти
    </button>
  );
};

export default ProfileButtonSignOut;
