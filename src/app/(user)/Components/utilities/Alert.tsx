"use client";
import { Alert } from "flowbite-react";

export const contentAlert = () => {
  return (
    <p className="font-medium text-[16px] leading-normal mt-4">
      Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.{" "}
    </p>
  );
};

export function AlertsLight() {
  return (
    <Alert color="light" onDismiss={() => console.log("")} className="max-w-md shadow-sm shadow-primary-green" rounded>
      <span className="font-bold text-[24px] tracking-wide">Pembayaran Berhasil!</span>
    </Alert>
  );
}
