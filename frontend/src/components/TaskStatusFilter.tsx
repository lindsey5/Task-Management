import type { Dispatch, SetStateAction } from "react";

interface TaskStatusFilterProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
}

export default function TaskStatusFilter ({
    filter,
    setFilter
} : TaskStatusFilterProps) {
    return (
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
        >
          <option value="">All Status</option>
          <option value="To Do">To Do</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
    )
}