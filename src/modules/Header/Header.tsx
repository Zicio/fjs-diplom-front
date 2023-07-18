import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileButton from "@/modules/Profile/components/ProfileButton";
import ProfileLogo from "@/modules/Profile/components/ProfileLogo";
import Profile from "@/modules/Profile/Profile";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__image} href="/">
        <Image src={logo} alt={"Logo"} width={200} />
      </Link>
      <Profile>
        <ProfileButton />
        <ProfileLogo />
      </Profile>
    </header>
  );
};

export default Header;
