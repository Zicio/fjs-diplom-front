import Link from "next/link";
import { FC } from "react";

const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li className="mb-8 last:mb-0">
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLink;
