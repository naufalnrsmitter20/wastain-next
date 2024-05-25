"use client";
import useCartServices from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CheckoutSteps from "../../Components/utilities/CheckOutSteps";
import { PrimaryButton, SecondaryButton } from "../../Components/utilities/Buttons";

function Form() {
  const router = useRouter();
  const { savePaymentMethod, paymentMethod, shippingAddress } = useCartServices();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod(selectedPaymentMethod);
    router.push("/checkout/pesan");
  };

  useEffect(() => {
    if (!shippingAddress.alamat) {
      return router.push("/checkout/alamat_pembelian");
    }
    setSelectedPaymentMethod(paymentMethod || "QRIS");
  }, [paymentMethod, router, shippingAddress.alamat]);
  return (
    <div>
      <CheckoutSteps current={2} />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-4 my-4">
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-4">Metode Pembayaran</h1>
          <form onSubmit={handleSubmit}>
            {["QRIS", "MidTrans", "COD (Bayar di tempat)"].map((payment) => (
              <div key={payment}>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-4 h-4 text-primary-green bg-gray-100 border-gray-300 focus:ring-green-400 "
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                  />
                  <span className="ml-2 text-[16px] font-semibold">{payment}</span>
                </label>
              </div>
            ))}
            <div className="my-2 mt-6 flex gap-x-4">
              <SecondaryButton className="px-6" type="button" onClick={() => router.back()}>
                Back
              </SecondaryButton>
              <PrimaryButton className="px-6" type="submit">
                Next
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
