"use client";
import { Prisma } from "@prisma/client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";
import { deleteProductById, deleteUserById } from "@/utils/actions/userServerActions";
import AddUser from "./AddUser";
import Modal from "./Modal";
import Image from "next/image";

export default function ProductTable({ product }: { product: Prisma.ProductsGetPayload<{}>[] }) {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState<Prisma.ProductsGetPayload<{}> | null>(null);
  const [loader, setLoader] = useState(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredStudent, setFilteredStudent] = useState<Prisma.ProductsGetPayload<{}>[]>(product);
  const router = useRouter();

  useEffect(() => {
    const filterProjects = () => {
      const filteredByName = product.filter((x) => x.nama_barang.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredStudent(filteredByName);
    };
    filterProjects();
  }, [product, searchInput]);
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const columns: TableColumn<Prisma.ProductsGetPayload<{}>>[] = [
    {
      name: "Image",
      cell: (row) => (
        <div className="w-16 h-16 my-2">
          <Image width={64} height={64} src={row.image} alt={row.nama_barang} className="w-full h-full object-cover rounded-lg" />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Nama Barang",
      selector: (row) => row.nama_barang,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Tipe",
      selector: (row) => row.tipe,
      sortable: true,
    },
    {
      name: "Deskripsi",
      selector: (row) => row.deskripsi,
      sortable: true,
    },
    {
      name: "Stok",
      selector: (row) => row.stok,
      sortable: true,
    },
    {
      name: "Harga",
      selector: (row) => row.harga,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location as string,
      sortable: true,
    },
    {
      name: "Is Featured",
      selector: (row) => (row.isFeatured ? "Yes" : "No"),
      sortable: true,
    },
    {
      name: "Updated At",
      selector: (row) => row.updatedAt.toUTCString(),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-x-3">
          <button title="Edit" onClick={() => editUserData(row)} className="p-2 bg-blue-500 text-white rounded-lg hover:scale-110 active:scale-105 duration-150">
            <Pencil size={14} />
          </button>
          <button title="Delete" onClick={() => deteleUserData(row.id)} className="p-2.5 bg-red-500 text-white rounded-md hover:scale-110 active:scale-105 duration-150">
            <Trash2 size={14} />
          </button>
        </div>
      ),
      sortable: false,
    },
  ];
  function editUserData(data: Prisma.ProductsGetPayload<{}>) {
    setUserData(data);
    setModal(true);
  }

  const deteleUserData = async (id: string) => {
    if (!confirm("Anda yakin ingin menghapus user ini?")) return;
    const toastId = toast.loading("Loading...");
    const result = await deleteProductById(id);
    if (!result.error) {
      toast.success(result.message, { id: toastId });
      router.refresh();
    } else toast.error(result.message, { id: toastId });
  };

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) return;
  <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-primary-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>;

  return (
    <>
      <div className="relative">
        <div className="flex gap-4 items-center mb-4 my-4">
          <input
            type="search"
            className="block border rounded-lg border-primary-green bg-white focus-within:ring-primary-green focus-within:ring-2 font-poppins w-full px-4 py-3 text-sm text-gray-900 outline-none border-none "
            placeholder="Cari Produk"
            value={searchInput}
            onChange={handleSearchInput}
            required
          />
          <button type="submit" className="focus:outline-none text-white bg-primary-green peer-focus:bg-green-700 hover:bg-green-700 focus:ring-2 focus:ring-green-300 font-medium text-sm px-5 py-2.5 me-2 flex w-fit items-center rounded-md">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <section className=" min-h-screen w-full bg-[#F6F6F6] p-4 outline outline-1 outline-slate-200">
        <div className="flex justify-end items-center">
          <AddUser />
        </div>

        <div className="w-full border-b-2 border-gray-300 mt-4"></div>
        <div className="mx-auto mt-4">
          <DataTable pagination highlightOnHover data={filteredStudent} columns={columns} />
        </div>
        {modal && <Modal setIsOpenModal={setModal} data={userData!} />}
      </section>
    </>
  );
}
