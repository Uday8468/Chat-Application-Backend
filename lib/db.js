import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {

      console.log("DatabaseConnected")
    });
    await mongoose.connect(`${process.env.MONGODBURI}/Cluster0`);
  } catch (err) {
    console.log(err)
  }
};
