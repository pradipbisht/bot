import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { botApi, deleteAllBotMessagesApi } from "../api/Bots/apiBot";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm here to help you with your digital marketing needs. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await botApi(input);
      setMessages((prev) => [
        ...prev,
        { text: res.botResponse || "Bot replied.", sender: "bot" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Handle chat close: delete all bot messages from DB and reset chat
  const handleClose = () => {
    setIsOpen(false);
    setMessages([
      {
        text: "Hi! I'm here to help you with your digital marketing needs. How can I assist you today?",
        sender: "bot",
      },
    ]);
    // Delete messages in background
    deleteAllBotMessagesApi();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mb-4 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-teal-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us!</h3>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 h-64 overflow-y-auto flex-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`${
                    msg.sender === "user" ? "bg-teal-100 ml-8" : "bg-gray-100"
                  } p-3 rounded-lg text-sm max-w-[80%]`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="mb-4 flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[80%]">
                  Bot is typing...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t p-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={loading}
              />
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors"
                onClick={handleSend}
                disabled={loading}>
                {loading ? "..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

export default ChatBot;
