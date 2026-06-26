import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../api/apiFetch";
import type { Task } from "../types/task.type";

type GetTasks = {
    tasks: Task[]
    total: number
    page: number
    totalPages: number;
}

type GetTasksParams = {
    page: number;
    limit: number;
    search?: string;
    filter?: string;
}

const getTasks = (params: GetTasksParams) => 
    apiFetch<GetTasks>("/api/tasks", {
        method: "GET",
        params
    })

export default function useGetTasks (params : GetTasksParams) {
    return useQuery<GetTasks, Error>({
        queryKey: ['tasks', params],
        queryFn: () => getTasks(params),
        refetchOnWindowFocus: false
    })
}