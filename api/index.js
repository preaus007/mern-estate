import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// CORS options to allow only specific origins
// const corsOptions = {
//   origin: 'https://example.com', // Replace with your allowed origin
//   methods: 'GET,POST', // Restrict allowed HTTP methods
//   allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
// };

// Enable CORS with specific options
// app.use(cors(corsOptions));

// Enable CORS for all routes
app.use(cors());

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
app.use((err, req, res, next) => {
  // Ensure that the error is an instance of Error
  if (!(err instanceof Error)) {
    err = new Error(err);
  }

  // Set status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Log the error (for debugging purposes)
  // if (process.env.NODE_ENV !== "production") {
  //   console.error(err);
  // }

  // Send the error response
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
