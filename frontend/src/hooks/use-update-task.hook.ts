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

const updateTask = (id: number, data : UpdateTask) => 
    apiFetch<UpdateTaskResponse>(`/api/tasks/${id}`, {
        method: "PUT",
        data
    })

export default function useUpdateTask () {
    return useMutation({
        mutationFn: ({ data, id } : { data : UpdateTask, id: number}) => updateTask(id, data),
    })
}