import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST() {
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

export async function GET() {
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
