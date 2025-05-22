import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./../globals.css";
import AuthenticationProviders from "@/lib/authenticationProviders";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wastain",
  description: "Welcome to Wastain | Waste Sustainable",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOption);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbars session={session!} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
