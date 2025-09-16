import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel.js";
import { generateToken } from "../utils/tokenUtils.js";
import AllowedUser from "../models/allowedUser.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Handles Google Sign-In from the client (client obtains id_token and posts it here)
export const googleLogin = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      res.status(400);
      return next(new Error("Missing Google token"));
    }

    // ✅ Domain check
    // const allowedDomain = "mycompany.com"; // replace with your company domain
    // if (!email.endsWith(`@${allowedDomain}`)) {
    //   res.status(403);
    //   return next(new Error("Only company emails are allowed."));
    // }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload(); // contains email, name, picture, sub
    const email = payload.email;
    if (!email) {
      res.status(400);
      return next(new Error("Google account has no email"));
    }

    // Check if user is allowed to log in
    const allowed = await AllowedUser.findOne({ email });
    // The AllowedUser schema uses status: "pending" | "active" | "rejected"
    if (!allowed || allowed.status !== "active") {
      res.status(403);
      return next(
        new Error(
          "This email is not authorized to access the application. Please ask an admin to approve your invite."
        )
      );
    }

    // Check if user exists; if not, create a new user. Since password is required
    // by the User schema, create a random password for social signups (it will be hashed).
    let user = await User.findOne({ email });
    if (!user) {
      const randomPassword = Math.random().toString(36).slice(-8) + Date.now();
      user = await User.create({
        name: payload.name || email.split("@")[0],
        email,
        password: randomPassword,
        googleId: payload.sub,
        isVerified: true,
      });
    } else if (!user.googleId) {
      // Link googleId if this account existed previously
      user.googleId = payload.sub;
      await user.save();
    }

    // Generate JWT and set as HTTP-only cookie using existing util
    generateToken(res, user._id);

    // Return sanitized user object
    return res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      message: "Logged in via Google",
    });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(401);
    return next(new Error("Invalid Google token"));
  }
};
