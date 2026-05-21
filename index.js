import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js"
import { connectRedis } from "./Utils/redis.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

connectRedis();
ConnectMongodb();

app.use("/", URLRoute);

app.listen(5050, () => {
    console.log("I am working");
});