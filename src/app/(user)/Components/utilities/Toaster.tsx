import React from "react";
import { Toast, ToastToggle } from "flowbite-react";

//import { HiCheck } from "react-icons/hi";

interface toastProops {
  children: React.ReactNode;
  type: any;
}

export default function Toaster({ children, type }: toastProops) {
  return (
    <React.Fragment>
      <div className="fixed top-4 left-4">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">{type}</div>
          <div className="ml-3 text-sm font-normal">{children}</div>
          <ToastToggle />
        </Toast>
      </div>
    </React.Fragment>
  );
}

// example

// <Toaster type={<HiCheck className="w-5 h-5" />}>Data berhasil diperbarui </Toaster>
