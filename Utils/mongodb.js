import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (err) {
        console.log(err)
        console.log("DB Connection error");
    }
};