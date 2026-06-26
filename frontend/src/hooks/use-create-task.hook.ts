import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../api/apiFetch";
import type { Task } from "../types/task.type";

type CreateTask = {
    title: string;
    description: string;
}

type CreateTaskResponse = {
    task: Task
    message: string;
}

const createTask = (data : CreateTask) => 
    apiFetch<CreateTaskResponse>("/api/tasks", {
        method: "POST",
        data
    })

export default function useCreateTask () {
    return useMutation({
        mutationFn: (data : CreateTask) => createTask(data),
    })
}