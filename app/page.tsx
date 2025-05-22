import Chatbot from '../components/Chatbot';

export default function Page() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to NeuroConnect Chatbot</h1>
      <p>This is the homepage. You can try the chatbot below.</p>
      <Chatbot />
    </main>
  );
}
