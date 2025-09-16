import express from "express";
import {
  CreateBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlogById,
} from "../controllers/blogController.js";
import {
  createBlogValidator,
  updateBlogValidator,
} from "../validators/blogValidators.js";
import validateRequest from "../middlewares/validateRequest.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public
router.get("/list", getAllBlogs);
router.get("/single/:id", getBlogById);

// Protected: only authenticated users can create or update blogs
router.post(
  "/create",
  protect,
  createBlogValidator,
  validateRequest,
  CreateBlog
);
router.put(
  "/update/:id",
  protect,
  adminOnly,
  updateBlogValidator,
  validateRequest,
  updateBlog
);

// Delete: admin-only for now
router.delete("/delete/:id", protect, adminOnly, deleteBlogById);

export default router;
