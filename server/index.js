import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import productRouter from './routes/product.route.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017/Demo")
    .then(() => {
        console.log("Connected to server");
    })
    .catch((err) => {
        console.log(err);
    });


app.listen(3001, () => {
    console.log("Server listening on port 3001");
});

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)