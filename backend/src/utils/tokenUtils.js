import jwt from "jsonwebtoken";

// Generate a JWT token and set it as an HTTP-only cookie
export const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "12h", // Token expires in 12 hours
  });

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevent client-side access to the cookie
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 12 * 60 * 60 * 1000, // Cookie expires in 12 hours
  });

  return token; // Return the generated token
};
