import mongoose, { Schema, Types } from "mongoose";
import clothesBookedSchema from "./clothesBookedModel";
import bcrypt from "bcrypt";

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

  comparePassword(candidatePassword: string): Promise<boolean>;
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
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
