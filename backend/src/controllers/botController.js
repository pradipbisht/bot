import Bot from "../models/botModel.js";
import botTrainingData, {
  badWords,
  fallbackResponse,
} from "../utils/botDatabase.js";

const getBotResponse = (userMessage) => {
  const input = userMessage.toLowerCase();

  //   bad word warning
  for (let word of badWords) {
    if (input.includes(word)) {
      return "Please avoid using bad words.";
    }
  }

  for (let data of botTrainingData) {
    if (data.question.some((q) => input.includes(q))) {
      return data.answer;
    }
  }
  return fallbackResponse;
};
// Create a new bot message
const BotCreate = async (req, res) => {
  try {
    const { text } = req.body; // Extract text from request body

    if (!text || !text.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Text is required" });
    }

    // Create a new bot message in the database
    const userMessage = await Bot.create({ text, author: "bot" });

    const botResponse = getBotResponse(text);

    const normalizedResponse = botResponse
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return res.status(201).json({
      success: true,
      message: "Bot message created successfully",
      data: userMessage,
      botResponse: normalizedResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create bot message",
      error: error.message,
    });
  }
};

const deleteAllBotMessages = async (req, res) => {
  try {
    await Bot.deleteMany({});
    res
      .status(200)
      .json({ success: true, message: "All bot messages deleted" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete bot messages",
      error: error.message,
    });
  }
};

export { BotCreate, deleteAllBotMessages };
