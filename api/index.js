import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

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
