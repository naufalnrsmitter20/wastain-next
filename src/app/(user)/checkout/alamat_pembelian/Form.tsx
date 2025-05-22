"use client";
import useCartServices from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm, ValidationRule } from "react-hook-form";
import CheckoutSteps from "../../Components/utilities/CheckOutSteps";
import { PrimaryButton } from "../../Components/utilities/Buttons";
import { Spinner } from "flowbite-react";
import SpinnerProops from "../../Components/utilities/Spinner";
import { ShippingAddress } from "@prisma/client";
import { Session } from "next-auth";

function Form({ session }: { session: Session }) {
  const router = useRouter();
  const { saveShippingAddrress, shippingAddress } = useCartServices();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      username: "",
      alamat: "",
      kota: "",
      kode_pos: "",
      negara: "",
    },
  });

  useEffect(() => {
    setValue("username", shippingAddress.username);
    setValue("alamat", shippingAddress.alamat);
    setValue("kota", shippingAddress.kota);
    setValue("kode_pos", shippingAddress.kode_pos);
    setValue("negara", shippingAddress.negara);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form);
    console.log(form);
    router.push("/checkout/pembayaran");
  };

  const FormInput = ({ id, name, required, pattern }: { id: keyof ShippingAddress; name: string; required?: boolean; pattern?: ValidationRule<RegExp> }) => (
    <div className="mb-2">
      <label className="text-[16px] font-medium" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        className="rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green"
        {...register(id, {
          required: required && `${name} Harus diisi`,
          pattern,
        })}
      />
      {errors[id]?.message && <div className="text-red-500">{errors[id]?.message}</div>}
    </div>
  );
  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-4xl mx-auto  my-4 p-4">
        <div className="bg-white p-4">
          <h1 className="text-xl font-bold">Masukkan data Alamat anda</h1>
          <form className="mt-6" onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="username" id="username" required />
            <FormInput name="alamat" id="alamat" required />
            <FormInput name="kota" id="kota" required />
            <FormInput name="kode_pos" id="kode_pos" required />
            <FormInput name="negara" id="negara" required />
            <div className="my-2">
              <PrimaryButton type="submit" className="px-8 mt-6" disabled={isSubmitting}>
                {isSubmitting && (
                  <span className="animate-spin mr-2">
                    <Spinner theme={SpinnerProops.spinner} color={"white"} />
                  </span>
                )}
                Lanjut
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
