"use client";

import React, { useContext } from "react";
import { ProfileContext } from "@/modules/Profile/Profile";
import { usePathname, useRouter } from "next/navigation";

const ProfileButtonSignIn = () => {
  const isAuth = useContext(ProfileContext);
  const router = useRouter();
  const pathname = usePathname();

  if (isAuth) {
    return null;
  }

  return (
    <button
      type="button"
      className={`button activeButton`}
      onClick={() => {
        if (pathname !== "/auth") {
          router.push("/auth");
        }
      }}
    >
      Войти
    </button>
  );
};

export default ProfileButtonSignIn;
