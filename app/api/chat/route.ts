import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  // Basic placeholder logic — this is where AI integration would go
  const reply = `You said: "${message}"`;

  return NextResponse.json({ reply });
}
