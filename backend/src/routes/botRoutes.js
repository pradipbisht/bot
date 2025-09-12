import express from "express";
import { BotCreate } from "../controllers/botController.js";

const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.send("Bot route is working");
});

router.post("/bot-create", BotCreate);

export default router;
