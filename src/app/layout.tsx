import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthenticationProviders from "@/lib/authenticationProviders";
import { Toaster } from "react-hot-toast";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
        <Toaster />
      </body>
    </html>
  );
}
