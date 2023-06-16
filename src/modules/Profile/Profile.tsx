"use client";

import Image from "next/image";
import default_avatar from "../../../public/default_avatar.svg";
import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./Profile.module.css";
import signOutRequest from "@/modules/Profile/signOut-Api";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  // const [isAuthForm, setIsAuthForm] = useState(false);
  const token: MutableRefObject<number> = useRef(-1);

  // const handleIsAuthForm = () => {
  //   setIsAuthForm(!isAuthForm);
  //   return;
  // };

  const handleSignOut = async () => {
    try {
      await signOutRequest();
      localStorage.removeItem("user");
    } catch (e) {
      throw new Error((e as Error).message);
    }
  };

  useEffect(() => {
    token.current = document.cookie.indexOf("token");
  }, []);

  return (
    <div className={styles.profile}>
      {token.current !== -1 ? (
        <button type="submit" onClick={handleSignOut}>
          Выйти
        </button>
      ) : (
        <button type="button" onClick={() => router.push("/auth")}>
          Войти
        </button>
      )}
      <div className={styles.profile__avatar}>
        <Image src={default_avatar} width={40} alt="неизвестный пользователь" />
      </div>
      {/*<div // TODO вынести стили в css файл*/}
      {/*  className={`transition-opacity duration-200 ${*/}
      {/*    isAuthForm ? "opacity-100" : "opacity-0 pointer-events-none"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <AuthMenu />*/}
      {/*</div>*/}
    </div>
  );
};

export default Profile;
