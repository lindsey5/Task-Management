import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../api/apiFetch";

const deleteTask = (id: number) => 
    apiFetch<{ message: string }>(`/api/tasks/${id}`, {
        method: "DELETE",
    })

export default function useDeleteTask () {
    return useMutation({
        mutationFn: (id: number) => deleteTask(id),
    })
}