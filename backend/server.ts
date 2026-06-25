import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from "./config/db";
import morgan from 'morgan';
import taskRoutes from "./routes/taskRoutes";
dotenv.config();


const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});