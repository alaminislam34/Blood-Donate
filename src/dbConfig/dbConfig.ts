import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected");
    });
    connection.on("error", () => {
      console.log("Mongodb Connection error", error);
      process.exit()
      
    });
  } catch (err) {
    console.log(err);
  }
}
