import Image from "next/image";
import React from "react";

import logo from "@/public/logo-wastain.png";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="flex justify-between px-32 bg-white pt-10 py-28 border-t border-gray-1">
        <div></div>
        <Image src={logo} width={400} alt="wastain logo" />
      </footer>
    </React.Fragment>
  );
}
