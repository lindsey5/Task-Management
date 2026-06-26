import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../../types/task.type";
import { cn } from "../../utils/utils";

interface TaskListItemProps {
    task: Task;
    setSelectedTask: Dispatch<SetStateAction<Task | null>>;
    setShow: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export default function TaskListItem ({ 
    setSelectedTask,
    setShow,
    task,
    className
} : TaskListItemProps) {
    return (
        <div
            className={cn(
                "flex items-start justify-between p-5 transition hover:bg-gray-100 cursor-pointer",
                className
            )}
            onClick={() => {
                setSelectedTask(task);
                setShow(true)
            }}
        >
            <div className="space-y-1">
            <h2 className="font-medium text-gray-900">
                {task.title}
            </h2>

            <p className="text-sm text-gray-500">
                {task.description}
            </p>
            </div>

            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600">
            {task.status}
            </span>
        </div>
    )
}