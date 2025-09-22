import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {data} = await request.json();
    if(!data.email || !data.name) return NextResponse.json({error: "Missing email or name"}, {status: 400});
    const user = await prisma.user.upsert(
      {
        where: {
          email: data.email,
        },
        update: {
          email: data.email,
          name: data.name,
        },
        create: {
          email: data.email,
          name: data.name,
        },
      }
    );
    return NextResponse.json({id:user.id}, {status: 200});
  } catch (error) {
    console.log("Create user error", error);
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
}


