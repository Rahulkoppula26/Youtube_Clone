import express from "express";
import mongoose from "mongoose";
import { videoRoutes } from "./Routes/Video-routes.js";
import cors from "cors"
import { userRoutes } from "./Routes/user-routes.js";
import { channelRoutes } from "./Routes/channel-routes.js";

const app =express();
const router = express.Router();

app.use("/",router);
app.use(cors())
app.use(express.json());
videoRoutes(app);
userRoutes(app);
channelRoutes(app) 
// creating a server at port 3000
app.listen("3000",()=>{
    console.log("server running on port 3000");
});
// connecting to mongodb 
mongoose.connect("mongodb://localhost:27017/")
const db = mongoose.connection;
db.on("open",()=>{
    console.log("Connection success");
})
db.on("error",()=>{
    console.log("Connection unnsucessful");
})