import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./../globals.css";
import AuthenticationProviders from "@/lib/authenticationProviders";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wastain",
  description: "Welcome to Wastain | Waste Sustainable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
