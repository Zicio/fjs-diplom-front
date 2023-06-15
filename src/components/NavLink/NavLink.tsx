"use client";

import Link from "next/link";
import { FC } from "react";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => {
  const pathname: string = usePathname();
  return (
    <Link
      className={`${pathname === href && styles.nav__link__inactive} ${
        styles.nav__link
      }`}
      href={href}
    >
      <li>{text}</li>
    </Link>
  );
};

export default NavLink;
