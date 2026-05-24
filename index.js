import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://fastidious-piroshki-eb959b.netlify.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200
}));

app.use(express.json());

ConnectMongodb();

app.use("/", URLRoute);

app.listen(process.env.PORT || 5050, () => {
    console.log("I am working");
});