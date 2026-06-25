import { z } from "zod";

export const createTaskSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(100, "Title must not exceed 100 characters"),

    description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .max(200, "Description must not exceed 200 characters")
})
.strict();