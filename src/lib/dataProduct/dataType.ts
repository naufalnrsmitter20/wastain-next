import { StaticImageData } from "next/image";

export type dataClothes = {
  _id?: string;
  nama_barang: string;
  slug: string;
  kategori: string;
  tipe?: string;
  harga: number;
  diskon?: number;
  stok?: number;
  rating?: number;
  deskripsi: string;
  image: any;
};
