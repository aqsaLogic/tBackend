import express from "express";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";
import { connectRedis } from "./Utils/redis.js";

dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.sendStatus(200);
    next();
});

app.use(express.json());

connectRedis();
ConnectMongodb();

app.use("/", URLRoute);

app.listen(process.env.PORT || 5050, () => {
    console.log("I am working");
});