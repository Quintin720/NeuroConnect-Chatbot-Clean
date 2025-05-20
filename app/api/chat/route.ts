export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Temporary dummy response (you’ll replace this with real logic later)
    const reply = `You said: ${message}`;

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
