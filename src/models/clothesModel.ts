import { Binary } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { StaticImageData } from "next/image";

export interface IClothes {
  nama_barang: string;
  kategori: string;
  slug: string;
  tipe: string;
  harga: number;
  stok: number;
  rating: number;
  diskon?: number;
  deskripsi: string;
  image: StaticImageData | File;
  isFeatured?: boolean;
}

const clothesSchema = new Schema<IClothes>(
  {
    nama_barang: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      enum: ["reuse", "recycle"],
      required: true,
    },
    tipe: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    stok: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    diskon: {
      type: Number,
      required: false,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    image: {
      type: new File([""], "image.jpg", { type: "image/jpg" }),
      required: true,
    },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const clothes = mongoose.models.Clothes || mongoose.model("Clothes", clothesSchema);
export default clothes;

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
  image: File;
};
