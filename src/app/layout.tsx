import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReactNode } from "react";
import Navbar from "@/components/NavBar/Navbar";

const roboto: NextFont = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <div className="main-container">
          <Header />
          <Navbar />
          <main className="content-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
