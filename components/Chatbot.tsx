'use client';

import React, { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = `You: ${input}`;
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch('https://neuroconnect-chatbot-clean.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages(prev => [...prev, `NeuroBot: ${data.reply}`]);
      } else {
        setMessages(prev => [...prev, `NeuroBot: ${data.error || 'Something went wrong.'}`]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, 'NeuroBot: Sorry, something went wrong.']);
    }

    setInput('');
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ask me something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
