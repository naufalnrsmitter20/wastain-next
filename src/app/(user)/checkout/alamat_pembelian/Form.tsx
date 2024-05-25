"use client";
import useCartServices from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm, ValidationRule } from "react-hook-form";
import { shippingAddress } from "@/models/orderModels";
import { InputFields } from "../../Components/utilities/InputField";
import CheckoutSteps from "../../Components/utilities/CheckOutSteps";
import { PrimaryButton } from "../../Components/utilities/Buttons";
import { Spinner } from "flowbite-react";
import SpinnerProops from "../../Components/utilities/Spinner";

function Form() {
  const router = useRouter();
  const { saveShippingAddrress, shippingAddress } = useCartServices();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<shippingAddress>({
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

  const formSubmit: SubmitHandler<shippingAddress> = async (form) => {
    saveShippingAddrress(form);
    console.log(form);
    router.push("/checkout/pembayaran");
  };

  const FormInput = ({ _id, name, required, pattern }: { _id: keyof shippingAddress; name: string; required?: boolean; pattern?: ValidationRule<RegExp> }) => (
    <div className="mb-2">
      <label className="text-[16px] font-medium" htmlFor={_id}>
        {name}
      </label>
      <InputFields
        type="text"
        id={_id}
        {...register(_id, {
          required: required && `${name} Harus diisi`,
          pattern,
        })}
      />
      {errors[_id]?.message && <div className="text-red-500">{errors[_id]?.message}</div>}
    </div>
  );
  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-4xl mx-auto  my-4 p-4">
        <div className="bg-white p-4">
          <h1 className="text-xl font-bold">Masukkan data Alamat anda</h1>
          <form className="mt-6" onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="username" _id="username" required={true} />
            <FormInput name="alamat" _id="alamat" required={true} />
            <FormInput name="kota" _id="kota" required={true} />
            <FormInput name="kode_pos" _id="kode_pos" required={true} />
            <FormInput name="negara" _id="negara" required={true} />
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
