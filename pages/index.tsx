// pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>NeuroConnect Chatbot</h1>
      <p>This is your new chatbot homepage!</p>
      <p>👉 Try it at <a href="/api/chat">/api/chat</a></p>
    </div>
  );
}
