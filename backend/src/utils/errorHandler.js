// Common error response helper
export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err.stack || err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};
