'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setMessages((prev) => [...prev, `🧑 You: ${input}`]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, `🤖 Bot: ${data.reply}`]);
      setInput('');
    } catch (error) {
      setMessages((prev) => [...prev, `❌ Error: Failed to get response.`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NeuroConnect Chatbot</h2>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          height: '300px',
          overflowY: 'auto',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9',
        }}
      >
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          placeholder="Ask the chatbot..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{ flexGrow: 1, padding: '0.5rem', borderRadius: '4px' }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{ padding: '0.5rem 1rem' }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
