import "../styles/globals.css";
import Navbar from "@/modules/NavBar/Navbar";
import { Roboto } from "next/font/google";
import Header from "@/modules/Header/Header";
import StoreProvider from "@/redux/StoreProvider";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReactNode } from "react";
import WithUser from "@/redux/WithUser";

const roboto: NextFont = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <StoreProvider>
          <WithUser>
            <div className="main-container">
              <Header />
              <Navbar />
              <main className="content-container">{children}</main>
            </div>
          </WithUser>
        </StoreProvider>
      </body>
    </html>
  );
}
