import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TaskList from "./components/TaskList/TaskList"
import { useEffect, useState } from "react";
import type { Task } from "./types/task.type";
import TaskModal from "./components/TaskModal/TaskModal";
import { Toaster } from "sileo";
import Button from "./components/ui/Button";

function App() {
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <TaskList setSelectedTask={setSelectedTask} setShow={setShow}/>
        <TaskModal 
          open={show}
          close={() => {
            setShow(false);
            setSelectedTask(null)
          }}
          task={selectedTask}
        />
        <div className="flex justify-end">
          <Button className="mt-6" onClick={() => setShow(true)}>
            Create Task
          </Button>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
