import express from "express";
import { auth, google, signin } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", auth);
router.post("/signin", signin);
router.post("/google", google);

export default router;
