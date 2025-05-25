import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// API to send data to database using Prisma
export async function POST() {
  // Handle errors
  try {
    await prisma.visitor.create({});
    return NextResponse.json({ status: "OK" }, { status: 200 });
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
    const count = await prisma.visitor.count();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { status: "Error", message: "Failed to retrieve visitor count." },
      { status: 500 }
    );
  }
}
