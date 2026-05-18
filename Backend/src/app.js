import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from 'node:dns';
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
dns.setDefaultResultOrder('ipv4first');
dotenv.config();
const dbUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ac-ijf3fzi-shard-00-00.iorkjqv.mongodb.net:27017,ac-ijf3fzi-shard-00-01.iorkjqv.mongodb.net:27017,ac-ijf3fzi-shard-00-02.iorkjqv.mongodb.net:27017/?ssl=true&replicaSet=atlas-sit47m-shard-0&authSource=admin&appName=Cluster0`
console.log(process.env.PORT);
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}))
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);
const start = async() =>{
    const connectionDb = await mongoose.connect(dbUrl);
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
        server.listen(app.get("port"), ()=>{
        console.log("server is listening on port 8000")
    });
}
start();