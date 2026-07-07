import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.set("port",(process.env.PORT || 4000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);
app.get("/home",(req,res)=>{
    return res.json({"hello":"World"});
});
const start = async()=>{
app.set("Videocluster")
    const connectionDb = await mongoose.connect("mongodb+srv://Videocluster:3EZBT05FDX0rHByP@simple.nsdhyc3.mongodb.net/");
    console.log("MongoDB connected host:",connectionDb.connection.host);
    server.listen(app.get("port"),()=>{
        console.log("LISTENING ON PORT 4000");
    });
};
start();