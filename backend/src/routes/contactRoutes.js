import express from "express";
import { sendContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// Public route for contact form submissions
router.post("/", sendContactMessage);

export default router;
