import * as z from "zod";

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

export type CreateTaskFormData = z.infer<typeof createTaskSchema>

export const updateTaskSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(100, "Title must not exceed 100 characters"),

    description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .max(200, "Description must not exceed 200 characters"),
        
    status: z.string()
})

export type UpdateTaskFormData = z.infer<typeof updateTaskSchema>