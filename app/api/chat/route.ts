
} catch (err: unknown) {
  let errorBody = "Unknown error";

  if (err instanceof Response) {
    try {
      errorBody = await err.text();
    } catch {
      errorBody = "Failed to read error response";
    }
  } else if (err instanceof Error) {
    errorBody = err.message;
  } else {
    errorBody = String(err);
  }

  console.error("OpenAI API error:", errorBody);

  // This sends the actual error to the UI so you can debug it
  return new Response(JSON.stringify({ reply: "OpenAI Error: " + errorBody }), {
    headers: { "Content-Type": "application/json" },
    status: 500,
  });
}
