import { NextFunction, Request, Response } from "express";
import Task from "../models/Task";
import { Op } from "sequelize";

// Get all tasks with pagination, search, and filtering
export const getTasks = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Current page number
        const page = Number(req.query.page) || 1;

        // Number of records per page
        const limit = Number(req.query.limit) || 10;

        // Calculate how many records to skip
        const skip = (page - 1) * limit;

        // Search term for task title
        const search = req.query.search as string;

        // Status filter
        const filter = req.query.filter ? String(req.query.filter).toLowerCase() : "";

        // Dynamic where clause
        const whereClause: any = {};

        // Search tasks by title
        if (search) {
            whereClause.title = {
                [Op.like]: `%${search}%`,
            };
        }

        // Filter tasks by status
        if (filter) {
            switch(filter){
                case "active":
                    whereClause.status = "To Do"
                    break;
                case "inactive":
                    whereClause[Op.or] = [
                        { status: 'Completed' },
                        { status: 'Incomplete'}
                    ]
                default: 
                    whereClause.status = filter;
            }
        }

        // Fetch tasks and total count
        const { rows: tasks, count: total } = await Task.findAndCountAll({
            where: whereClause,
            offset: skip,
            limit,
        });

        // Return paginated response
        res.status(200).json({
            tasks,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        next(err);
    }
};

// Create a new task
export const createTask = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Create task using request body
        const task = await Task.create(req.body);

        // Return created task
        res.status(201).json({
            message: "Task successfully created",
            task
        });
    } catch (err) {
        next(err);
    }
};

// Update an existing task
export const updateTask = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Get task ID from route parameters
        const id = String(req.params.id);

        // Find task by primary key
        const task = await Task.findByPk(id);

        // Return 404 if task does not exist
        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        // Update task fields
        await task.update(req.body);

        // Return updated task
        return res.status(200).json({
            message: "Task updated successfully",
            task,
        });
    } catch (err) {
        next(err);
    }
};

// Delete a task
export const deleteTask = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Get task ID from route parameters
        const id = String(req.params.id);

        // Find task by primary key
        const task = await Task.findByPk(id);

        // Return 404 if task does not exist
        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        // Remove task from database
        await task.destroy();

        // Return success response
        res.status(200).json({
            message: "Task successfully deleted",
        });
    } catch (err) {
        next(err);
    }
};