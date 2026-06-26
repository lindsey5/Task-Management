import { Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../../types/task.type";
import { cn } from "../../utils/utils";
import useDeleteTask from "../../hooks/use-delete-task.hook";
import { promiseToast } from "../../utils/sileo";

interface TaskListItemProps {
    task: Task;
    setSelectedTask: Dispatch<SetStateAction<Task | null>>;
    setShow: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export default function TaskListItem({
    setSelectedTask,
    setShow,
    task,
    className,
}: TaskListItemProps) {
    const deleteTaskMutation = useDeleteTask();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        const isConfirmed = confirm("Are you sure you want to delete this task?");

        if (!isConfirmed) return;

        promiseToast(deleteTaskMutation.mutateAsync(task.id));
    };

    return (
        <div
        className={cn(
            "flex cursor-pointer items-start justify-between p-5 transition hover:bg-gray-100",
            className
        )}
        onClick={() => {
            setSelectedTask(task);
            setShow(true);
        }}
        >
        <div className="space-y-1">
            <h2 className="font-medium text-gray-900">{task.title}</h2>

            <p className="text-sm text-gray-500">{task.description}</p>
        </div>

        <div className="flex items-center gap-3">
            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600">
            {task.status}
            </span>

            <button
                onClick={handleDelete}
                disabled={deleteTaskMutation.isPending}
                className="cursor-pointer rounded-md p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Delete task"
            >
            <Trash2 size={18} />
            </button>
        </div>
        </div>
    );
}