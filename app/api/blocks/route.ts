import client from "@/app/utils/db";
import { NextResponse, NextRequest } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const { title: name } = await req.json();

    const slug_name = slugify(name);

    const isBlockExist = await client.block.findUnique({
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

    const block = await client.block.create({
      data: {
        title: name,
        slug: slug_name,
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
