import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#5C3D00' }}>Welcome to NeuroConnect</h1>
      <p style={{ fontSize: '1.1rem', marginTop: '1rem', color: '#444' }}>
        Explore resources and support for Autistic talent.
      </p>

      <a 
        href="https://neuroconnect-chatbot.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <button style={{
          backgroundColor: '#D4AF37',
          color: 'white',
          padding: '14px 28px',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '2rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#C3992D'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#D4AF37'}
        >
          🤝 Chat with Our Autistic-Trained Assistant
        </button>
      </a>
    </div>
  );
}
