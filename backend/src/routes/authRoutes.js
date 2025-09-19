import express from "express";
import {
  loginUser,
  logoutUser,
  // registerUser,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { googleLogin } from "../controllers/googleAuthController.js";

const router = express.Router();

// Register route
// router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Logout route
router.post("/logout", logoutUser);

// Get current user (protected)
router.get("/me", protect, getMe);

// Google login route
router.post("/google", googleLogin);

// Dev-only debug route to inspect cookies
router.get("/debug/cookies", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(404).json({ message: "Not found" });
  }
  res.json({ cookies: req.cookies || {} });
});

export default router;
