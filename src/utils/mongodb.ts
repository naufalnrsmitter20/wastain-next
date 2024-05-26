import mongoose from "mongoose";

let uri =
  "mongodb+srv://x3mnaufalnabilramadhan:HdaXP3DS7shZ3yJH@cluster0.hjimmxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
