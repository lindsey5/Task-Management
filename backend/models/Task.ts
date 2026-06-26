import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface TaskAttributes {
    id: number;
    title: string;
    description: string;
    status: "To Do" | "Completed" | "Incomplete"
}

interface TaskCreationAttributes
    extends Optional<TaskAttributes, "id"> {}

class Task
    extends Model<TaskAttributes, TaskCreationAttributes>
    implements TaskAttributes
{
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: "To Do" | "Completed" | "Incomplete";
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM(
                "To Do",
                "Completed",
                "Incomplete"
            ),
            allowNull: false,
            defaultValue: "To Do",
        },
    },
    {
        sequelize,
        modelName: "Task",
        tableName: "tasks",
        timestamps: false,
    }
);

export default Task;