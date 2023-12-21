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

  blockSlug: z.string().min(2, {
    message: "Required",
  }),
  darkThumb: z.string().min(1, {
    message: "Dark Thumb is required"
  }),
  lightThumb: z.string().min(1, {
    message: "Light Thumb is required"
  }),
  code: z.string().min(1, {
    message: "Code is required"
  }),

});
