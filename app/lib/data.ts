"use server";
import { cache } from "react";
import { db } from "./db";

export const getAllBlocks = cache(async () => {
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
});
