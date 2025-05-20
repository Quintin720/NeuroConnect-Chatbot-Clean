import React from "react";
import Chatbot from "../components/Chatbot";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to NeuroConnect Chatbot</h1>
        <p>This is the homepage. You can try the chatbot below.</p>
        <Chatbot />
      </main>
    </div>
  );
}
