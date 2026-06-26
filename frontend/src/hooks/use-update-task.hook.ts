import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../api/apiFetch";
import type { Task } from "../types/task.type";

type UpdateTask = {
    title: string;
    description: string;
    status: string;
}

type UpdateTaskResponse = {
    task: Task
    message: string;
}

const updateTask = (data : UpdateTask) => 
    apiFetch<UpdateTaskResponse>("/api/tasks", {
        method: "PUT",
        data
    })

export default function useUpdateTask () {
    return useMutation({
        mutationFn: (data : UpdateTask) => updateTask(data),
    })
}