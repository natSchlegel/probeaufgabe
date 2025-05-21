export async function TrackVisitor() {
  try {

  const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';

    await fetch(`${baseUrl}/api/visitors`, { method: "POST" });
    return { success: true };
  } catch (error) {
    console.error("Visitor tracking failed:", error);
    return { success: false, error: "Failed to register visitor" };
  }
}
