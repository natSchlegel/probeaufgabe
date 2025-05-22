//function called when loading the page responsible for tracking visitor
export async function TrackVisitor() {
//exceptions treatment
  try {
    //if prod uses env variable, if not port default 
  const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';
      //this fetch is not client side run because is fetched on the page rendering
    await fetch(`${baseUrl}/api/visitors`, { method: "POST" });
    return { success: true };
  } catch (error) {
    console.error("Visitor tracking failed:", error);
    return { success: false, error: "Failed to register visitor" };
  }
}
