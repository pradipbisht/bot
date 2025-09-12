import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { createUser } from "../controllers/adminController.js";

const router = express.Router();

// Admin-only route to create a user
router.post("/create-user", protect, adminOnly, createUser);

export default router;
