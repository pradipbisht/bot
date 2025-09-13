import jwt from "jsonwebtoken";

// Generate a JWT token and set it as an HTTP-only cookie
export const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "12h", // Token expires in 12 hours
  });

  // Determine cookie attributes based on environment
  const isProd = process.env.NODE_ENV === "production";
  // Use relaxed SameSite in development so browsers will send the cookie on localhost
  // In production, require SameSite='none' and secure=true for cross-site cookies over HTTPS
  const cookieOptions = {
    httpOnly: true,
    secure: isProd, // true in production (HTTPS required), false in dev
    sameSite: isProd ? "none" : "lax",
    maxAge: 12 * 60 * 60 * 1000,
    path: "/",
  };

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, cookieOptions);

  return token; // Return the generated token
};
