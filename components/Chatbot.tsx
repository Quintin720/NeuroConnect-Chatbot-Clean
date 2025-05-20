"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to NeuroConnect Chatbot!" }
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await response.json();
    if (data?.message) {
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } else {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
    }
  }

  return (
    <div className="flex flex-col h-screen p-4 bg-white text-black">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
