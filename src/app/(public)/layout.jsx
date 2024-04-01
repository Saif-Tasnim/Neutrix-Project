import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Copyright, TheFooter, TheHeader } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "USA Website Design",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TheHeader />
        <main className="p-2 lg:container">{children}</main>
        <TheFooter />
        <Copyright />
      </body>
    </html>
  );
}
