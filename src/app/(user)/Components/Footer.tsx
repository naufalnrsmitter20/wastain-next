import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-primary-green rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="block text-base text-white sm:text-center font-medium ">
            © 2025{" "}
            <Link href="https://www.naufalnr.xyz" className="hover:underline">
              Naufalnr
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}
