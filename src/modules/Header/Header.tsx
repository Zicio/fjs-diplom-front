import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileLogo from "@/modules/Profile/components/ProfileLogo";
import Profile from "@/modules/Profile/Profile";
import styles from "./Header.module.scss";
import ProfileButtonSignIn from "@/modules/Profile/components/ProfileButtonSignIn";
import ProfileButtonSignOut from "@/modules/Profile/components/ProfileButtonSignOut";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__image} href="/">
        <Image src={logo} alt={"Logo"} width={200} />
      </Link>
      <Profile>
        <ProfileButtonSignIn />
        <ProfileButtonSignOut />
        <ProfileLogo />
      </Profile>
    </header>
  );
};

export default Header;
