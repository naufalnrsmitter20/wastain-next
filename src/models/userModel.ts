import mongoose, { Schema } from "mongoose";

interface userRole {
  role: "Customer" | "Seller" | "Admin";
}

interface IUser extends userRole {
  username: string;
  email: string;
  password: string;
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
});
