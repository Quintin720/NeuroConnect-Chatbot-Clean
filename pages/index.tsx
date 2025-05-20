// pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to NeuroConnect Chatbot</h1>
      <p>Try the chatbot <a href="/api/chat">here</a>.</p>
    </div>
  );
}
