import express from "express";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

dotenv.config();

const app = express();

// CORS manually — koi library nahi
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});

app.use(express.json());

ConnectMongodb();

app.use("/", URLRoute);

app.listen(process.env.PORT || 5050, () => {
    console.log("I am working");
});