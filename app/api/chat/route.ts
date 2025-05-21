// app/api/chat/route.ts

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ reply: "Missing OpenAI API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7
      })
    });

    const raw = await openAiRes.text();

    if (!openAiRes.ok) {
      return new Response(
        JSON.stringify({ reply: `OpenAI Error: ${raw}` }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = JSON.parse(raw);
    const aiMessage = data.choices?.[0]?.message?.content?.trim();

    if (!aiMessage) {
      return new Response(
        JSON.stringify({ reply: "No AI reply returned." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ reply: aiMessage }), {
      headers: { "Content-Type": "application/json" }
    });

} catch (err) {
  const errorBody = err instanceof Response ? await err.text() : String(err);
  console.error("OpenAI API error:", errorBody);
  return new Response("OpenAI Error: " + errorBody, { status: 500 });
}

    return new Response(
      JSON.stringify({ reply: `Server Error: ${errorMessage}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
