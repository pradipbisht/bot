#!/usr/bin/env node
// Migration: convert AllowedUser.status === 'approved' to 'active'
import dotenv from "dotenv";
import connectDb from "../src/config/db.js";
import mongoose from "mongoose";
import AllowedUser from "../src/models/allowedUser.js";

dotenv.config({ path: process.cwd() + "/.env" });

const run = async () => {
  try {
    await connectDb();
    const filter = { status: "approved" };
    const docs = await AllowedUser.find(filter);
    if (!docs.length) {
      console.log("No AllowedUser documents with status 'approved' found.");
      process.exit(0);
    }

    const res = await AllowedUser.updateMany(filter, {
      $set: { status: "active" },
    });
    console.log(
      `Updated ${res.modifiedCount} AllowedUser documents to status 'active'.`
    );
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
};

run();
