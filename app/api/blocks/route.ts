import { db } from "@/app/lib/db";
import { revalidate } from "@/components/navigation/sidebar/sidebar";
import { revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const { title: name } = await req.json();

    const slug_name = slugify(name);

    const isBlockExist = await db.block.findUnique({
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

    const block = await db.block.create({
      data: {
        title: name,
        slug: slug_name,
      },
    });

    revalidateTag("blocks");

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
  try {
    const result = await db.block.findMany({
      include: {
        components: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!result) {
      return NextResponse.json([]);
    }

    return NextResponse.json({
      result,
      statusCode: 201,
      status: "success",
    });
  } catch (error) {
    console.error("[Block_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
