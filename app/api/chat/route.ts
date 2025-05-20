import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: "Missing message" }, { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant called NeuroBot." },
        { role: "user", content: message },
      ],
    });

    const reply = response.choices?.[0]?.message?.content || "Sorry, I couldn’t think of a reply.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ reply: "An error occurred while generating a response." }, { status: 500 });
  }
}
