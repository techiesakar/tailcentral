"use server";
import { auth } from "@/auth";
import { BlockType, ComponentType } from "@/types/definitions";
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

const ComponentSchema = z.object({
  blockId: z.string(),
  title: z
    .string()
    .min(3, {
      message: "Block must be at least 2 characters",
    })
    .max(20),

  code: z.string(),
});
export async function findAllBlocks() {
  try {
    const navItems = await client.block.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
      },
    });
    return navItems;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

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
    console.log(error);
    return {
      status: 500,
      message: `Something went wrong`,
    };
  }
}

/**
 * Create Components
 */
export async function createComponent(values: ComponentType) {
  try {
    const isAdmin = await findAdmin();
    if (!isAdmin) {
      throw new Error("Only Admin can Create Block");
    }
    const validatedData = ComponentSchema.parse(values);
    const { blockId, ...componentData } = validatedData;
    console.log(blockId);
    const result = await client.component.create({
      data: {
        ...componentData,
        block: { connect: { id: blockId } },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: `Something went wrong`,
    };
  }
}
