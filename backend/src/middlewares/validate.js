import { MESSAGES } from "../utils/constants.js";

// Middleware to validate request body against a schema
export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body); // Validate request body
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({
        success: false,
        message: MESSAGES.VALIDATION_ERROR,
        errors: err.errors.map((e) => e.message),
      });
    } else {
      return res.status(400).json({
        success: false,
        message: MESSAGES.VALIDATION_ERROR,
        errors: [err.message],
      });
    }
  }
};
