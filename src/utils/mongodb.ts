import mongoose from "mongoose";

let uri = process.env.MONGODB_URI as string;

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri);
    console.log("Mongoose Connected");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
