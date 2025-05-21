// app/api/chat/route.ts

import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response("Missing API Key", { status: 500 });
    }

    const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      }),
    });

    const data = await openAiRes.json();

    const aiMessage = data?.choices?.[0]?.message?.content?.trim();

    if (!aiMessage) {
      return new Response("No response from AI", { status: 500 });
    }

    return new Response(JSON.stringify({ reply: aiMessage }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const errorBody = err instanceof Response ? await err.text() : err.message || String(err);
console.error("OpenAI API error:", errorBody);
    return new Response("Server error", { status: 500 });
  }
}
