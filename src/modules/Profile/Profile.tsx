"use client";

import Image from "next/image";
import default_avatar from "../../../public/default_avatar.svg";
import AuthMenu from "@/modules/AuthMenu/AuthMenu";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [isAuthForm, setIsAuthForm] = useState(false);
  const token: MutableRefObject<number> = useRef(-1);

  const handleIsAuthForm = () => {
    setIsAuthForm(!isAuthForm);
    return;
  };

  useEffect(() => {
    token.current = document.cookie.indexOf("jwt_token=");
  }, []);

  return (
    <div className={styles.profile}>
      {token.current !== -1 ? (
        <button type="submit">Выйти</button>
      ) : (
        <button type="button" onClick={handleIsAuthForm}>
          <span>{isAuthForm ? "▾" : "▸"}</span>
          Войти
        </button>
      )}
      <div className={styles.profile__avatar}>
        <Image src={default_avatar} width={40} alt="неизвестный пользователь" />
      </div>
      <div
        className={`transition-opacity duration-200 ${
          isAuthForm ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <AuthMenu />
      </div>
    </div>
  );
};

export default Profile;
