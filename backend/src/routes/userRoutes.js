import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all users (admin only)
router.get("/get-all", protect, adminOnly, getAllUsers);

// Get a single user by ID (admin only)
router.get("/:id", protect, adminOnly, getUserById);

// Update user (admin only)
router.put("/:id", protect, adminOnly, updateUser);

// Delete user (admin only)
router.delete("/:id", protect, adminOnly, deleteUser);

export default router;
