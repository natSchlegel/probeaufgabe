import { prisma } from "./prisma";

export async function createVisitorRecord() {
  try {
    await prisma.visitor.create({});
    return { success: true };
  } catch (error) {
    console.error("Database error creating visitor record:", error);
    return { success: false, error: "Failed to create visitor record" };
  }
}

export async function getVisitorCount() {
  try {
    const count = await prisma.visitor.count();
    return { success: true, count };
  } catch (error) {
    console.error("Database error fetching visitor count:", error);
    return { success: false, error: "Failed to fetch visitor count" };
  }
}