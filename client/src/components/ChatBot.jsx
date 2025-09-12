import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Floating chatbot - persistent bottom-right on all scroll positions
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mb-4 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-teal-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us!</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                Hi! I'm here to help you with your digital marketing needs. How
                can I assist you today?
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-teal-100 p-3 rounded-lg text-sm ml-8">
                I'm interested in SEO services
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                Great! I can help you learn more about our SEO packages. Would
                you like me to connect you with our SEO specialist?
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t p-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
                Send
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
