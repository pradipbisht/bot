import express from "express";
import {
  getOverview,
  getAnalytics,
  inviteEmployee,
  updateEmployeeStatus,
  listAllowedUsers,
  createUser,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/overview", protect, adminOnly, getOverview);
router.get("/analytics", protect, adminOnly, getAnalytics);

// Additional admin routes can be added here
router.post("/invite", protect, adminOnly, inviteEmployee);
router.put("/update/:id", protect, adminOnly, updateEmployeeStatus);
router.get("/allowed-users", protect, adminOnly, listAllowedUsers);
router.post("/create-user", protect, adminOnly, createUser);

export default router;
