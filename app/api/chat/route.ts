import { NextRequest, NextResponse } from 'next/server';
import data from '../../../data/NeuroConnect_QA_Full.json';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { message } = body;

  const found = data.find((item: any) =>
    message.toLowerCase().includes(item.question.toLowerCase())
  );

  const answer = found ? found.answer : "Sorry, I couldn’t find an answer to that.";

  return NextResponse.json({ answer });
}
