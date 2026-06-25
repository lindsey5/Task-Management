import { z } from "zod";

export const updateTaskSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(100, "Title must not exceed 100 characters")
        .optional(),

    description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .max(200, "Description must not exceed 200 characters")
        .optional(),
        
    status: z
        .enum([
            "To Do",
            "In Progress",
            "Completed",
            "Incomplete",
        ])
        .optional(),
}).strict();