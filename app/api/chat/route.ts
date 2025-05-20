
// app/api/chat/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message || "";

    // Dummy response (this is the part you'd replace with real chatbot logic)
    const reply = `You said: ${message}`;

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
