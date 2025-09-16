import { body } from "express-validator";

export const createBlogValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 120 })
    .withMessage("Title must be at most 120 characters"),
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ max: 1000 })
    .withMessage("Content must be at most 1000 characters"),
  // Author will be taken from the authenticated user (req.user). Do not require in body.
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isIn([
      "all",
      "SEO",
      "Social Media",
      "PPC",
      "Content Marketing",
      "Email Marketing",
      "AI Solutions",
    ])
    .withMessage("Invalid category"),
  // image can be provided as URL in body or as uploaded file; make it optional here
  body("image").optional().isURL().withMessage("Image must be a valid URL"),
];

export const updateBlogValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ max: 120 })
    .withMessage("Title must be at most 120 characters"),
  body("content")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Content must be at most 1000 characters"),
  body("author")
    .optional()
    .isMongoId()
    .withMessage("Author must be a valid user id"),
  body("category")
    .optional()
    .trim()
    .isIn([
      "all",
      "SEO",
      "Social Media",
      "PPC",
      "Content Marketing",
      "Email Marketing",
      "AI Solutions",
    ])
    .withMessage("Invalid category"),
  body("image").optional().isURL().withMessage("Image must be a valid URL"),
];
