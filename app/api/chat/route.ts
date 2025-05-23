export async function POST(req: Request) {
  const { message } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return new Response("Missing API Key", { status: 500 });
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      temperature: 0.7,
    })
  });

  const data = await response.json();
  const aiMessage = data.choices?.[0]?.message?.content?.trim();

  return new Response(JSON.stringify({ reply: aiMessage }), {
    headers: { "Content-Type": "application/json" }
  });
}
