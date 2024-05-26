import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import AuthenticationProviders from "@/lib/authenticationProviders";

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AuthenticationProviders>{children}</AuthenticationProviders>
      </body>
    </html>
  );
}
