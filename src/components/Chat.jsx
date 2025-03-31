import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import robotAnimation from "../assets/robot.json";
import { API_URL } from "../constants/api";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! I am Joel’s assistant, how can I help you?", sender: "bot" }
  ]);
  const [query, setQuery] = useState("");

  const handleQuery = async () => {
    if (!query) return;
    const newMessages = [...messages, { text: query, sender: "user" }];
    setMessages(newMessages);
    setQuery("");

    try {
      const res = await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setMessages([...newMessages, { text: data.answer, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    }
  };

  return (
    <motion.div className="w-full max-w-5xl mx-auto mt-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
      <motion.h1 className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        Chat with my Assistant
      </motion.h1>
      <motion.div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 rounded-2xl shadow-lg w-full from-gray-900 to-black"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <motion.div className="w-2/3 md:w-1/3"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <Lottie animationData={robotAnimation} loop autoPlay className="w-full h-auto" />
        </motion.div>
        <motion.div className="w-full md:w-2/3 bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-white text-lg font-bold text-center">Joel's Assistant</h2>
          <div className="p-4 mt-2 rounded-lg min-h-[200px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-2">
            {messages.map((msg, index) => (
              <motion.p key={index}
                className={`px-3 py-2 rounded-md w-fit shadow-sm ${msg.sender === "user" ? "bg-gradient-to-br from-[#ff0076] to-[#590fb7] ml-auto" : "bg-gradient-to-br from-[#402662] to-[#3900a6]"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}>
                {msg.text}
              </motion.p>
            ))}
          </div>
          <div className="mt-3 flex flex-col md:flex-row gap-2">
            <motion.input type="text" placeholder="Type a message..."
              className="flex-1 bg-gray-800 text-white p-2 rounded-lg outline-none placeholder-gray-400"
              value={query} onChange={(e) => setQuery(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }} />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: -5 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-sm"
              onClick={handleQuery}>
              Send
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChatAssistant;
