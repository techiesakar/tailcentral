// to perform fetch
"use server";

import { db } from "./db";

export async function fetchAllBlocks(queryString: string | null) {
  try {
    let whereCondition = {};

    if (queryString) {
      whereCondition = {
        title: {
          contains: queryString,
          mode: "insensitive",
        },
      };
    }
    const blocks = await db.block.findMany({
      where: whereCondition,
    });
    if (!blocks) {
      return [];
    }

    return blocks;
  } catch (e) {
    throw new Error("Failed to Fetch Task");
  }
}
export async function fetchComponentByCategory() {}
export async function fetchComponentById() {}
