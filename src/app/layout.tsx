import "../styles/globals.css";
import Navbar from "@/modules/NavBar/Navbar";
import { Roboto } from "next/font/google";
import Header from "@/modules/Header/Header";

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
          <Header />
          <Navbar />
          <main className="content-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
