"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const ProfileButtonSignIn = () => {
  const router = useRouter();
  const pathname = usePathname();

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
