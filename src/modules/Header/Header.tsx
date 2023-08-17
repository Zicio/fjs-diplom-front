"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileLogo from "@/modules/Profile/components/ProfileLogo";
import Profile from "@/modules/Profile/Profile";
import styles from "./Header.module.scss";
import ProfileButtonSignIn from "@/modules/Profile/components/ProfileButtonSignIn";
import ProfileButtonSignOut from "@/modules/Profile/components/ProfileButtonSignOut";
import { useEffect, useState } from "react";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(!!localStorage.user); // TODO: Передать user в некий глобальный стейт и смотреть уже по нему
  }, [isAuth]);

  return (
    <header className={styles.header}>
      <Link className={styles.header__image} href="/">
        <Image src={logo} alt={"Logo"} width={200} />
      </Link>
      <Profile>
        {isAuth ? <ProfileButtonSignOut /> : <ProfileButtonSignIn />}
        {/*<ProfileButtonSignIn />*/}
        {/*<ProfileButtonSignOut />*/}
        <ProfileLogo />
      </Profile>
    </header>
  );
};

export default Header;
