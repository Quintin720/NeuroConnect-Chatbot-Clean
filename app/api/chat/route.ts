import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  // You can plug in your AI logic here
  const reply = `You said: "${message}"`;

  return NextResponse.json({ reply });
}
