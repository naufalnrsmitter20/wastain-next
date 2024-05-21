import mongoose, { Schema, Types } from "mongoose";
import clothesBookedSchema from "./clothesBookedModel";

// interface import
import { IClothesBooked } from "./clothesBookedModel";

interface userRole {
  role: "Customer" | "Seller" | "Admin";
}

interface IUser extends userRole {
  username: string;
  email: string;
  password: string;
  alamat: string;
  clothes_booked: IClothesBooked[];
  clothes: [
    {
      type: Types.ObjectId;
      ref: "Clothes";
    }
  ];
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Customer", "Seller", "Admin"],
    default: "Customer",
  },
  alamat: {
    type: String,
    required: function () {
      return this.role === "Customer";
    },
  },
  clothes_booked: {
    type: [clothesBookedSchema],
    required: function () {
      return this.role === "Customer";
    },
  },
  clothes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Clothes",
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
