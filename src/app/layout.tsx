import "./globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body className="h-screen">
        <div className="grid grid-cols-[1fr_4fr] gap-9 p-4">
          <Image className="w-52  min-w-[150px]" src={logo} alt={"Logo"} />
          <Profile />
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
