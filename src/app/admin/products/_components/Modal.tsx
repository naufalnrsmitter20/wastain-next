"use client";
import { PrimaryButton, SecondaryButton } from "@/app/(user)/Components/utilities/Buttons";
import { DropDown, TextField } from "@/app/(user)/Components/utilities/InputField";
import { updateProductById } from "@/utils/actions/ServerActions";
import { Kategori, Prisma } from "@prisma/client";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

export default function Modal({ setIsOpenModal, data }: { setIsOpenModal: Dispatch<SetStateAction<boolean>>; data?: Prisma.ProductsGetPayload<{}> }): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [Images, setimage] = useState<File>();
  const [namaBarang, setNamaBarang] = useState(data?.nama_barang || "");
  const [slug, setSlug] = useState(data?.nama_barang?.replace(/\s+/g, "-").toLowerCase() || "");

  const handleNamaBarangChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNamaBarang(value);
    setSlug(value.replace(/\s+/g, "-").toLowerCase());
  };

  const HandleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const toastId = toast.loading("Loading...");
      const formData = new FormData(e.target);
      const image = formData.get("image") as File | undefined;
      formData.append("image", image as File);
      const dataset = await updateProductById(data?.id as string, formData);
      if (dataset.error === false) {
        toast.success("Sukses mengupdate product!", { id: toastId });
        setIsLoading(false);
        setIsOpenModal(false);
      } else {
        setIsLoading(false);
        console.log(dataset);
        toast.error("Gagal mengupdate product!", { id: toastId });
      }
    } catch (error) {
      console.log(error as Error);
      toast.error((error as Error).message);
      setIsLoading(false);
    }
  };

  return (
    <div className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50 `}>
      <div className="relative p-4 w-full max-w-4xl mt-10 mb-36 mx-auto max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900">Data Product</h3>
            <button onClick={() => setIsOpenModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-8">
            <form onSubmit={HandleSubmit}>
              <TextField type="file" label="Image" name="image" handleChange={(e) => setimage(e.target.files![0])} placeholder="Image" />
              <Image
                src={Images ? URL.createObjectURL(Images) : data?.image || "https://res.cloudinary.com/dhjeoo1pm/image/upload/v1747842726/y253dmrpacbjbg3srisg.jpg"}
                alt="photo_profile"
                width={100}
                height={100}
                unoptimized
                className="w-44 h-44 object-cover"
              />
              <TextField required type="text" label="Nama Barang" name="nama_barang" defaultValue={namaBarang} handleChange={handleNamaBarangChange} placeholder="Nama Lengkap" />
              <TextField required type="text" label="Slug" name="slug" defaultValue={slug} placeholder="Slug" />
              <TextField required type="number" label="Stok" name="stok" defaultValue={data?.stok} placeholder="Stok" />
              <TextField required type="text" label="Deskripsi" name="deskripsi" defaultValue={data?.deskripsi} placeholder="Deskripsi" />
              <TextField required type="text" label="Tipe" name="tipe" defaultValue={data?.tipe} placeholder="Tipe" />
              <DropDown
                name="kategori"
                defaultValue={data?.kategori}
                label="Kategori"
                options={Object.values(Kategori).map((x) => ({
                  label: x,
                  value: x,
                }))}
                required
              />
              <DropDown
                name="isFeatured"
                defaultValue={data?.isFeatured ? "true" : "false"}
                label="Is Featured"
                options={Object.values(["true", "false"]).map((x) => ({
                  label: x,
                  value: x,
                }))}
                required
              />
              <TextField required type="text" label="Location" name="location" defaultValue={data?.location as string} placeholder="Location" />
              <TextField required type="number" label="Harga" name="harga" defaultValue={data?.harga} placeholder="Harga" />
              <TextField required type="number" label="Diskon" name="diskon" defaultValue={(data?.diskon as number) ?? 0} placeholder="Diskon" />
              <TextField required type="number" label="Rating" name="rating" defaultValue={data?.rating} placeholder="Rating" />
              <div className="flex justify-end w-full gap-x-4 pb-4 mt-4">
                <SecondaryButton className="w-full text-sm" type="button" onClick={() => setIsOpenModal(false)}>
                  Close
                </SecondaryButton>
                <PrimaryButton className="w-full text-sm" type="submit">
                  {!isLoading ? (
                    "Submit"
                  ) : (
                    <div className="flex gap-x-3 items-center justify-center">
                      <svg aria-hidden="true" className="inline w-5 h-5 animate-spin text-primary-green fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span>Loading...</span>
                    </div>
                  )}
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
