import api from "../axios";
import { logError } from "../Auth/apiLogs";
// import { logError } from "../logs/apiLogs";

// Call backend bot feature
export const botApi = async (text) => {
  try {
    const { data } = await api.post("/api/bot/bot-create", { text });
    return data;
  } catch (error) {
    logError("Error accessing bot feature", error);
    throw error;
  }
};

export const deleteAllBotMessagesApi = async () => {
  try {
    await api.delete("/api/bot/delete-all");
  } catch (error) {
    logError("Error deleting bot messages", error);
  }
};
