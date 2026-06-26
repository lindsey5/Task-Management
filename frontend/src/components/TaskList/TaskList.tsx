import { useState, type Dispatch, type SetStateAction } from "react";
import useGetTasks from "../../hooks/use-get-tasks.hook";
import Pagination from "./Pagination";
import TaskListSkeleton from "./TaskListSkeleton";
import { useDebounce } from "../../hooks/useDebounce";
import TaskStatusFilter from "./TaskStatusFilter";
import TextField from "../ui/TextField";
import { Search } from "lucide-react";
import type { Task } from "../../types/task.type";
import TaskListItem from "./TaskListItem";

interface TaskListProps {
  setSelectedTask: Dispatch<SetStateAction<Task | null>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function TaskList({ 
  setSelectedTask,
  setShow
} : TaskListProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>("");

  const searchDebounced = useDebounce(search, 800);

  const { data, isLoading } = useGetTasks({
    page,
    limit: 10,
    search: searchDebounced,
    filter,
  });

  if (isLoading) {
    return <TaskListSkeleton />;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Tasks
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {data?.total} tasks
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          Page {data?.page} / {data?.totalPages}
        </span>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <TextField 
          className="flex-1"
          placeholder="Search Tasks"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          icon={<Search size={20}/>}
        />
        <TaskStatusFilter 
          filter={filter} 
          setFilter={setFilter}
          setPage={setPage}
        />
      </div>

      {/* Task List */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {data?.tasks.length ? (
          data.tasks.map((task, index) => (
            <TaskListItem 
              key={task.id}
              className={`${index !== data.tasks.length - 1 && "border-b border-gray-100"}`}
              setSelectedTask={setSelectedTask}
              setShow={setShow}
              task={task}
            />
          ))
        ) : (
          <div className="py-16 text-center text-gray-500">
            No tasks found.
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
}