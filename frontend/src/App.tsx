import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TaskList from "./components/TaskList"

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TaskList />
    </QueryClientProvider>
  )
}

export default App
