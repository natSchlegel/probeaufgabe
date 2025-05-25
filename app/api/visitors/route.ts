import { NextResponse } from "next/server";
import { createVisitorRecord, getVisitorCount } from "../../../lib/visitor";

// API to send data to database using Prisma
export async function POST() {
  // Handle errors
  try {
    const result = await createVisitorRecord();
    if (result.success) {
      return NextResponse.json({ status: "OK" }, { status: 200 });
    } else {
      return NextResponse.json(
        { status: "Error", message: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating visitor:", error);
    return NextResponse.json(
      { status: "Error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// API to get data to database using Prisma
export async function GET() {
  // Handle errors
  try {
    const result = await getVisitorCount();
    if (result.success) {
      return NextResponse.json({ count: result.count }, { status: 200 });
    } else {
      return NextResponse.json(
        { status: "Error", message: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { status: "Error", message: "Failed to retrieve visitor count." },
      { status: 500 }
    );
  }
}