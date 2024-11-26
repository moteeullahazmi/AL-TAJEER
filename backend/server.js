import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudaniry from "./config/cloudaniry.js";
import userRouter from "./routes/userRoute.js";

// App Config
const app =express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudaniry();

// middlewares
app.use(express.json());
app.use(cors());  //any ip connect

// api endpoint
app.use("/api/user", userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log("Server started on PORT:" + port)
})