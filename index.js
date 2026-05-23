import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";
import { connectRedis } from "./Utils/redis.js";

dotenv.config();

const app = express();

// connectRedis();
app.use(cors());
app.use(express.json());

ConnectMongodb();

app.use("/", URLRoute);

app.listen(process.env.PORT || 5050, () => {
    console.log("I am working");
});