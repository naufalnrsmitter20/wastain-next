import mongoose, { Schema } from "mongoose";

export interface IClothes {
  nama_barang: string;
  kategori: string;
  tipe: string;
  harga: number;
  deskripsi: string;
  image: string;
}

const clothesSchema = new Schema<IClothes>({
  nama_barang: {
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
  deskripsi: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const clothes = mongoose.model("Clothes", clothesSchema);
export default clothes;
