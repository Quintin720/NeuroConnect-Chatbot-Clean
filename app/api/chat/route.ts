import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: 'No message provided.' }, { status: 400 });
    }

    const reply = `You said: "${message}"`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ reply: 'Internal server error.' }, { status: 500 });
  }
}
