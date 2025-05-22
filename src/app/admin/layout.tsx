import type { Metadata } from "next";
import "./../globals.css";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "Wastain",
  description: "Admin | Wastain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="ml-72">{children}</div>
    </div>
  );
}
