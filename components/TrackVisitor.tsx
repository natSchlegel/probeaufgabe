// Runs when the page loads to track the visitor
export async function TrackVisitor() {
  // Handle errors
  try {
    // Use env URL in production, localhost in development
    const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';

    // Send POST request (runs on server during rendering)
    await fetch(`${baseUrl}/api/visitors`, { method: "POST" });

    return { success: true };
  } catch (error) {
    console.error("Visitor tracking failed:", error);
    return { success: false, error: "Failed to register visitor" };
  }
}
