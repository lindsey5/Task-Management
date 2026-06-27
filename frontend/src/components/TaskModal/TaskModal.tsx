import { useForm } from "react-hook-form";
import type { Task } from "../../types/task.type";
import Modal from "../ui/Modal";
import { type CreateTaskFormData, createTaskSchema, type UpdateTaskFormData, updateTaskSchema } from "../../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import TextField from "../ui/TextField";
import useUpdateTask from "../../hooks/use-update-task.hook";
import useCreateTask from "../../hooks/use-create-task.hook";
import { promiseToast } from "../../utils/sileo";
import Button from "../ui/Button";
import { cn } from "../../utils/utils";

interface TaskModalProps {
    task: Task | null;
    close: () => void;
    open: boolean;
}

export default function TaskModal ({
    open,
    close,
    task
} : TaskModalProps) {

    const updateTaskMutation = useUpdateTask();
    const createTaskMutation = useCreateTask();

    const { register, reset, formState: { errors }, setValue, watch, handleSubmit } = useForm<UpdateTaskFormData | CreateTaskFormData>({
        resolver: zodResolver(task ? updateTaskSchema : createTaskSchema)
    })

    useEffect(() => {
        if(task) {
            reset({
                title: task.title,
                description: task.description,
                status: task.status
            })
        }else reset({ title: "", description: "" });
    }, [task, reset])

    const onSubmit = async (data : any) => {
        const isConfirmed = confirm(`Are you sure you want to ${task ? "update" : "create"} this task`)

        if(!isConfirmed) return;

        promiseToast(
            task ? updateTaskMutation.mutateAsync({ data, id: task.id}) : createTaskMutation.mutateAsync(data)
        )
    }

    return (
        <Modal
            onClose={close}
            open={open}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-white border border-gray-300 shadow-md rounded-md p-5 space-y-3"
            >
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
                    {task ? "Update" : "Create"} Task
                </h1>
                <TextField 
                    label="Title"
                    placeholder="Enter task title"
                    registration={register("title")}
                    error={errors.title?.message}
                />

                <div>
                    <label className="text-xs xl:text-sm text-primary font-medium">Description</label>
                    <textarea
                        placeholder="Enter task description"
                        className={cn(
                            "w-full rounded-lg resize-none border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-900",
                            errors.description?.message &&  "border-red-500 focus:border-red-500"
                        )}
                        rows={4}
                        {...register("description")}
                    />
                    <span className="text-xs text-red-500">{errors.description?.message}</span>
                </div>

                {task && (
                    <div className="flex flex-col gap-1">
                        <label className="text-xs xl:text-sm text-primary font-medium">Status</label>
                        <select
                            value={watch('status')}
                                onChange={(e) => setValue("status", e.target.value)}
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                            >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Incomplete">Incomplete</option>
                        </select>
                    </div>
                )}

                <div className="flex justify-end">
                    <Button
                        className="mt-4"
                        type="submit"
                        disabled={updateTaskMutation.isPending || createTaskMutation.isPending}
                    >
                        {task ? "Save changes" : "Submit"}
                    </Button>
                </div>
            </form>

        </Modal>
    )
}