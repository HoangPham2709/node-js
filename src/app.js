import mongoose from "mongoose";
import express from "express";
import productRouter from "../src/router/product";
const app = express();

app.use(express.json());

app.use("/api", productRouter);

mongoose.connect("mongodb://127.0.0.1:27017/demo-nodejs");


export const viteNodeApp = app;