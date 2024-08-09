import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const auth = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hshPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hshPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully!");
  } catch (error) {
    next(error);
    // We created an error and check it Headers, will use it later.
    // next(errorHandler(550, "This error is from fucntion!"));
  }
};
