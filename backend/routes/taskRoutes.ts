import { Router } from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskController";
import validateBody from "../middlewares/validateBody";
import { createTaskSchema } from "../schemas/createTaskSchema";
import { updateTaskSchema } from "../schemas/updateTaskSchema";

const router = Router();

router.get('/', getTasks);

router.post(
    '/',
    validateBody(createTaskSchema),
    createTask
)

router.put(
    '/:id',
    validateBody(updateTaskSchema),
    updateTask
)

router.delete(
    '/:id',
    deleteTask
)

const taskRoutes = router;

export default taskRoutes