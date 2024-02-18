import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { rootRouter } from "./routes/root-route.js";
import { todoRouter } from "./routes/todo-route.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 6000;

app.use("/api", rootRouter);
app.use("/api/todo", todoRouter);
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error occured", error);
  });
