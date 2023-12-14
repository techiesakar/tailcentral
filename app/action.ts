"use server";
import { auth } from "@/auth";
import { BlockType } from "@/types/definitions";
import { z } from "zod";
import slugify from "slugify";
import client from "./utils/db";
import { revalidatePath } from "next/cache";

export async function findAdmin() {
  const session = await auth();
  if (session?.user?.email === "techiesakar@gmail.com") return true;
  return false;
}

const BlockSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Block must be at least 2 characters",
    })
    .max(20),
});

export type BlockState = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createBlock(values: BlockType) {
  try {
    const isAdmin = await findAdmin();
    if (!isAdmin) {
      throw new Error("Only Admin can Create Block");
    }

    const validatedData = BlockSchema.parse(values);

    const isBlockExist = await client.block.findUnique({
      where: {
        title: validatedData.title,
      },
    });
    if (isBlockExist) {
      return {
        status: 401,
        message: "Block already exists",
      };
    }

    const result = await client.block.create({
      data: {
        title: validatedData.title,
        slug: slugify(validatedData.title),
      },
    });

    return {
      status: 201,
      message: `${result.title} added successfully`,
      result,
    };
  } catch (error) {
    return {
      status: 500,
      message: `Something went wrong`,
    };
  }
}
