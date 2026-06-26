# Task Management
A full-stack task management application that allows users to create, update, delete, search, filter, and manage tasks.

## Features
- Create tasks
- Update existing tasks
- Delete tasks
- Search tasks with debouncing
- Filter tasks by status
- Pagination
- Form validation with Zod
- Loading skeletons
- Toast notifications
- RESTful API

## Tech Stack
### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack React Query
- React Hook Form
- Zod
- Lucide React

### Backend
- Node.js
- Express.js
- TypeScript
- Sequelize ORM
- MySQL
- Zod

## Project Structure
```bash
backend/
├── config/
├── controllers/
├── middlewares/
├── migrations/
├── models/
├── routes/
└── schemas

frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── schemas/
│   ├── types/
│   └── utils/
```

## Dependencies

### Backend
```bash
"dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "dotenv-cli": "^11.0.0",
    "express": "^5.2.1",
    "morgan": "^1.11.0",
    "mysql2": "^3.22.5",
    "sequelize": "^6.37.8",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/morgan": "^1.9.10",
    "@types/node": "^26.0.1",
    "nodemon": "^3.1.14",
    "sequelize-cli": "^6.6.5",
    "ts-node": "^10.9.2",
    "typescript": "^6.0.3"
  }
```
### Frontend
```bash
"dependencies": {
    "@hookform/resolvers": "^5.4.0",
    "@tailwindcss/vite": "^4.3.1",
    "@tanstack/react-query": "^5.101.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.42.0",
    "lucide-react": "^1.21.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-hook-form": "^7.80.0",
    "sileo": "^0.1.5",
    "tailwind-merge": "^3.6.0",
    "tailwindcss": "^4.3.1",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.2",
    "oxlint": "^1.69.0",
    "typescript": "~6.0.2",
    "vite": "^8.1.0"
  }
```

## Quick Start (Recommended)
## 1. Clone the repository
```bash
git clone https://github.com/lindsey5/Task-Management.git
```

## 2. Install Dependecies
### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 3. Setup Environment Variables
Create a .env file in both the frontend and backend directories.

### Backend
```bash
PORT=3000
DB=[yourdbname]
DB_USERNAME=[yourdbusername]
DB_PASSWORD=[yourdbpassword]
DB_HOST=[yourdbhost]
DB_PORT=[yourdbport]
```

### Frontend
```bash
VITE_API_URL=http://localhost:3000
```

## 4. Run migrations
```bash
cd backend
npx sequelize-cli db:migrate
```

## 5. Start the Application

### Frontend
```bash
cd frontend
npm run dev
```

### Backend
```bash
cd backend
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Current page number |
| `limit` | number | Number of tasks per page |
| `search` | string | Search tasks by title |
| `filter` | string | Filter tasks by status |

Example:
```bash
GET /api/tasks?page=1&limit=10&search=meeting&filter=Completed
```

## Task Status
- To Do
- In Progress
- Completed
- Incomplete
