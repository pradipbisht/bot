// backend/models/allowedUserModel.js
import mongoose from "mongoose";

const AllowedUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const AllowedUser = mongoose.model("AllowedUser", AllowedUserSchema);
export default AllowedUser;
