"use client";
import { PrimaryButton, SecondaryButton } from "@/app/(user)/Components/utilities/Buttons";
import { DropDown, InputFields, TextField } from "@/app/(user)/Components/utilities/InputField";
import { updateUserById } from "@/utils/actions/ServerActions";
import ModalProfile from "@/utils/ModalProfile";
import { Prisma, Role } from "@prisma/client";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

export default function Modal({ setIsOpenModal, data }: { setIsOpenModal: Dispatch<SetStateAction<boolean>>; data?: Prisma.UserGetPayload<{}> }): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const HandleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const toastId = toast.loading("Loading...");
      const formData = new FormData(e.target);
      await updateUserById(data?.id as string, formData);
      toast.success("Sukses mengupdate siswa!", { id: toastId });
      setIsLoading(false);
      setIsOpenModal(false);
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
            <h3 className="text-xl font-semibold text-gray-900">Data Admin</h3>
            <button onClick={() => setIsOpenModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-8">
            <form onSubmit={HandleSubmit}>
              <TextField required type="text" label="Username" name="username" defaultValue={data?.username as string} placeholder="Nama Lengkap" />
              <TextField required type="text" label="Email" name="email" defaultValue={data?.email as string} placeholder="Email" />
              <TextField type="password" label="Password" name="password" disabled={data ? true : false} readOnly={data ? true : false} placeholder="Password" />
              <DropDown
                name="role"
                defaultValue={data?.role}
                label="Role"
                options={Object.values([Role["Admin"]]).map((x) => ({
                  label: x,
                  value: x,
                }))}
                required
              />
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
