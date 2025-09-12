import { z } from "zod";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import winston from "winston";

// Configure logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/authMiddleware.log" }),
  ],
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[@$!%*?&#]/, "Must contain a special character"),
});

// Middleware to protect routes
export const protect = async (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    logger.warn("Unauthorized access attempt: No token provided");
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify token and attach user to request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    logger.error("Invalid token detected", { error: err.message });
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

// Middleware to restrict access to admin users
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // User is admin, proceed to the next middleware
  } else {
    res.status(403).json({ message: "Access denied: Admins only" });
  }
};
