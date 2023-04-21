"use client";

import Image from "next/image";
import default_avatar from "../../public/default_avatar.svg";
import AuthForm from "@/components/AuthForm";
import { useState } from "react";

const Profile = () => {
  const [authActive, setAuthActive] = useState(false);

  const handleAuth = () => {
    setAuthActive(!authActive);
    return;
  };

  return (
    <div className="flex justify-end items-center bg-white p-3 rounded-md relative">
      <button className="flex items-center" type="button" onClick={handleAuth}>
        <span>{authActive ? "▾" : "▸"}</span> Войти
        <Image
          className="w-10 ml-4"
          src={default_avatar}
          alt="неизвестный пользователь"
        />
      </button>
      <div
        className={`transition-opacity duration-200 ${
          authActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <AuthForm />
      </div>
    </div>
  );
};

export default Profile;
