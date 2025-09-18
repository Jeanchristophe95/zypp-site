import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, city, availability, note } = await req.json();
    if (!fullName || !email || !phone || !city || !availability) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const created = await prisma.rechargeurApplication.create({
      data: { fullName, email, phone, city, availability, note },
    });
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


