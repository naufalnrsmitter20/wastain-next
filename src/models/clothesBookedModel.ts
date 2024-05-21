import { Schema } from "mongoose";

// interface import
import notaPembelianSchema, { INotaPembelian } from "./notaPembelianModel";

export interface IClothesBooked {
  bookedId: string;
  nota_pembelian: INotaPembelian;
  metode_pembayaran: string;
}

const clothesBookedSchema = new Schema<IClothesBooked>({
  bookedId: {
    type: String,
    required: true,
  },
  nota_pembelian: {
    type: notaPembelianSchema,
    required: true,
  },
  metode_pembayaran: {
    type: String,
    enum: ["kartu kredit", "transfer bank", "tunai"],
    required: true,
  },
});

export default clothesBookedSchema;
