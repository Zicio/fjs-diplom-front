import "../styles/globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Navbar from "@/modules/NavBar/Navbar";
import Profile from "@/modules/Profile/Profile";
import { Roboto } from "next/font/google";
import Link from "next/link";
import ProfileButton from "@/modules/Profile/components/ProfileButton";
import ProfileLogo from "@/modules/Profile/components/ProfileLogo";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <div className="main-container">
          <Link href="/">
            <Image className="main-logo" src={logo} alt={"Logo"} />
          </Link>
          <Profile>
            <ProfileButton />
            <ProfileLogo />
          </Profile>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
