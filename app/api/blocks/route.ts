import { PrismaClient } from "@prisma/client";

import { NextResponse, NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to force-static

const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const { title: name } = await req.json();
    console.log(name);

    const isBlockExist = await prisma.block.findUnique({
      where: {
        title: name,
      },
    });

    if (isBlockExist) {
      return NextResponse.json({
        statusCode: 409,
        status: "failed",
        message: "Oops! Block already exists",
      });
    }

    const block = await prisma.block.create({
      data: {
        title: name,
      },
    });

    return NextResponse.json({
      block,
      statusCode: 201,
      status: "success",
    });
  } catch (error) {
    console.error("[Block_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // const queryString = req.nextUrl.searchParams.get("b");
  try {
    const blocks = await prisma.block.findMany({
      include: {
        components: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!blocks) {
      return NextResponse.json([]);
    }

    return NextResponse.json({
      blocks,
      statusCode: 201,
      status: "success",
    });
  } catch (error) {
    console.error("[Block_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
