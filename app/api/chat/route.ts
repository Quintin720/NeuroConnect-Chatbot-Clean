
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
    errorBody = JSON.stringify(err);
  }

  console.error("OpenAI API error:", errorBody);

  // Return the error directly in the reply message
  return new Response(
    JSON.stringify({ reply: `OpenAI Error: ${errorBody}` }),
    {
      headers: { "Content-Type": "application/json" },
      status: 500,
    }
  );
}
