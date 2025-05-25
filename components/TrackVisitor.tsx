import { createVisitorRecord } from '../lib/visitor';

// Runs when the page loads to track the visitor
export async function TrackVisitor() {
  // Handle errors
  try {
    const result = await createVisitorRecord();
    if (!result.success) {
      console.error("Visitor tracking failed:", result.error);
      return { success: false, error: result.error || "Failed to register visitor directly" };
    }
    return { success: true };
  } catch (error) {
    console.error("Visitor tracking failed:", error);
    return { success: false, error: "Failed to register visitor" };
  }
}
