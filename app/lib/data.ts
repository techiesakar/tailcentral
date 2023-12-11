"use server";
import { db } from "./db";

export const getAllBlocks = async () => {
  const allBlocks = await db.block.findMany({
    include: {
      components: {
        select: {
          id: true,
        },
      },
    },
  });
  return allBlocks;
};
