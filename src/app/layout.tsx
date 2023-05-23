import "../styles/globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Navbar from "@/modules/NavBar/Navbar";
import Profile from "@/modules/Profile/Profile";
import { Roboto } from "next/font/google";

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
        {/*<Providers>*/}
        <div className="main-container">
          <Image className="main-logo" src={logo} alt={"Logo"} />
          <Profile />
          <Navbar />
          <main>{children}</main>
        </div>
        {/*</Providers>*/}
      </body>
    </html>
  );
}
