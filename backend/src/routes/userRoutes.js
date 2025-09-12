import express from "express";
import { GetProfile, LoginUser } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Login route
router.post("/login", LoginUser);

// Get user profile (protected)
router.get("/profile", protect, GetProfile);

export default router;
