import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  async function sendMessage() {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.answer);
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>NeuroConnect Chatbot</h1>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={50} />
      <br />
      <button onClick={sendMessage}>Ask</button>
      <p><strong>Answer:</strong> {response}</p>
    </main>
  );
}
