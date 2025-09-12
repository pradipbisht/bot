import Bot from "../models/botModel.js";

// Create a new bot message
const BotCreate = async (req, res) => {
  try {
    const { text } = req.body; // Extract text from request body

    // Create a new bot message in the database
    const bot = await Bot.create({ text, author: "bot" });

    return res.status(201).json({
      success: true,
      message: "Bot message created successfully",
      data: bot,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create bot message",
      error: error.message,
    });
  }
};

export { BotCreate };
