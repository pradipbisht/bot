import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import os from "os";
import fileUpload from "express-fileupload";
import rateLimit from "express-rate-limit";
import compression from "compression";
import morgan from "morgan"; // <-- add this

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import botRoutes from "./routes/botRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import connectDb from "./config/db.js";
import { errorHandler } from "./utils/errorHandler.js";
import User from "./models/userModel.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB and start server
const app = express();
const PORT = process.env.PORT || 5000;

// Ensure a default admin exists if env vars provided
const ensureDefaultAdmin = async () => {
  try {
    // If any admin user exists, skip
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log(
        "Admin user already exists, skipping default admin creation."
      );
      return;
    }

    const email = process.env.DEFAULT_ADMIN_EMAIL;
    const password = process.env.DEFAULT_ADMIN_PASSWORD;
    const name = process.env.DEFAULT_ADMIN_NAME || "Administrator";

    if (!email || !password) {
      console.log(
        "DEFAULT_ADMIN_EMAIL or DEFAULT_ADMIN_PASSWORD not set — skipping default admin creation."
      );
      return;
    }

    const admin = await User.create({
      name,
      email,
      password,
      role: "admin",
      isVerified: true,
    });
    console.log(`Created default admin: ${admin.email}`);
  } catch (err) {
    console.error("Failed to create default admin:", err.message || err);
  }
};

// Apply security-related middleware
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
// Parse urlencoded bodies (for traditional form posts)
app.use(express.urlencoded({ extended: true }));
// Parse multipart/form-data file uploads
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: os.tmpdir(),
    createParentPath: true,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  })
);
app.use(cookieParser());

// Logging middleware
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined")); // detailed logs for production
} else {
  app.use(morgan("dev")); // concise colorful logs for dev
}

// Apply compression
app.use(compression());

// Rate limiting
if (process.env.NODE_ENV === "production") {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: "Too many requests, try again later",
    })
  );
} else {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 1000,
      message: "Too many requests, try again later",
    })
  );
}

// Register API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/bot", botRoutes);
app.use("/health", healthRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

// Global error handler
app.use(errorHandler);

// Start the server
const startServer = async () => {
  await connectDb();
  await ensureDefaultAdmin();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
