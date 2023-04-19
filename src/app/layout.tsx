import "./globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="h-screen">
        <div className="grid grid-cols-[30%_70%] gap-9 p-2">
          <Image className="w-52  min-w-[100px]" src={logo} alt={"Logo"} />
          <div>
            Account
            {/*TODO<Account />*/}
          </div>
          <div>
            Navbar
            {/*TODO<Navbar />*/}
          </div>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
