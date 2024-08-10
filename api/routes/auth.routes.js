import express from "express";
import { auth, signin } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", auth);
router.post("/signin", signin);

export default router;
