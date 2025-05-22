import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to NeuroConnect</h1>
      <p>Explore resources and support for Autistic talent.</p>

      <a href="https://neuroconnect-chatbot.vercel.app" target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: '#F5B800',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          🤝 Chat with Our Autistic-Trained Assistant
        </button>
      </a>
    </div>
  );
}
