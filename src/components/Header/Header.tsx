import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Profile from "@/components/Profile/Profile";
import styles from "./Header.module.css";
import ProfileButtonSignIn from "@/components/ProfileButton/ProfileButtonSignIn";
import ProfileButtonSignOut from "@/components/ProfileButton/ProfileButtonSignOut";
import { cookies } from "next/headers";

const Header = () => {
  const cookieStore = cookies();
  const isUser = cookieStore.get("access_token");

  return (
    <header className={styles.header}>
      <Link className={styles.header__image} href="/">
        <Image src={logo} alt={"Logo"} width={200} />
      </Link>
      <Profile>
        {isUser ? <ProfileButtonSignOut /> : <ProfileButtonSignIn />}
      </Profile>
    </header>
  );
};

export default Header;
