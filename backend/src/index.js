import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import compression from "compression";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import botRoutes from "./routes/botRoutes.js";
import connectDb from "./config/db.js";
import { errorHandler } from "./utils/errorHandler.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply security-related middleware
app.use(helmet()); // Adds security headers
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Enable CORS for frontend
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Apply compression middleware
app.use(compression());

// Apply rate limiting to prevent abuse
// Apply rate limiting to prevent abuse
if (process.env.NODE_ENV === "production") {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per window
      message: "Too many requests, try again later",
    })
  );
} else {
  // Dev environment: higher limit or no limit
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 1000, // more generous for development
      message: "Too many requests, try again later",
    })
  );
}

// Register API routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/user", userRoutes); // User CRUD routes
app.use("/api/bot", botRoutes); // Bot routes
app.use("/health", healthRoutes); // Health check route

// Global error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
