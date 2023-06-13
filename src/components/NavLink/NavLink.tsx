import Link from "next/link";
import { FC } from "react";
import styles from "./NavLink.module.css";

const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li className={styles.nav__link}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLink;
