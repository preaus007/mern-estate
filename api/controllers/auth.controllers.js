import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const auth = async (req, res) => {
  const { username, email, password } = req.body;
  const hshPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hshPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
