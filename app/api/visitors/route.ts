import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

//api to send data using prisma allowing me to map data objects on the database , first I define them on lib prisma, then I can send/request a specific object/column by using the variable prisma 
export async function POST() {
  // treatment of exceptions
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

//api to request data frmo the database / treatment of exceptions
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
