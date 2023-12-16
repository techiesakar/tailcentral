import { z } from "zod";

export const BlockSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Block must be at least 2 characters",
    })
    .max(20),
});

export const ComponentSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Block must be at least 2 characters",
    })
    .max(20),

  blockId: z.string().min(2, {
    message: "Required",
  }),

  code: z.string(),
});
