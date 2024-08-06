import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Conneted to the database");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

app.use("/api/routes", userRouter);
app.use("/api/auth", authRouter);
