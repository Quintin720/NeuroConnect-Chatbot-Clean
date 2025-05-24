// app/page.tsx
'use client';

import Chatbot from '../../components/Chatbot'

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem' }}>
      <Chatbot />
    </main>
  );
}
