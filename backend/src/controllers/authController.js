import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/tokenUtils.js";
import { MESSAGES } from "../utils/constants.js";

// Login user
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401);
      return next(new Error(MESSAGES.UNAUTHORIZED));
    }
    generateToken(res, user._id);
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500);
    return next(new Error(MESSAGES.SERVER_ERROR));
  }
};

// Logout user
export const logoutUser = (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  res.cookie("token", "", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    expires: new Date(0),
    path: "/",
  });
  res.status(200).json({ message: "Logout successful" });
};

// Get current user
export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500);
    return next(new Error(MESSAGES.SERVER_ERROR));
  }
};
