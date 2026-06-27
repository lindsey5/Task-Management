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
├── config/         # Database and application configuration
├── controllers/    # Handles request and response logic
├── middlewares/    # Custom Express middleware (validation, error handling, etc.)
├── migrations/     # Sequelize database migration files
├── models/         # Sequelize models representing database tables
├── routes/         # Defines API endpoints and routes
└── schemas/        # Zod validation schemas

frontend/
├── src/
│   ├── api/        # API request functions
│   ├── components/ # Reusable React components
│   ├── hooks/      # Custom React hooks
│   ├── schemas/    # Zod validation schemas
│   ├── types/      # TypeScript type definitions and interfaces
│   └── utils/      # Utility/helper functions
```

## Dependencies

### Backend

| Dependency | Purpose |
|------------|---------|
| Express.js | REST API framework |
| Sequelize | ORM for interacting with MySQL |
| MySQL2 | MySQL database driver |
| Zod | Request validation |
| CORS | Enables cross-origin requests |
| Morgan | HTTP request logging |
| Dotenv | Environment variable management |

### Frontend

| Dependency | Purpose |
|------------|---------|
| React | User interface library |
| TypeScript | Static type checking |
| Vite | Frontend build tool and development server |
| Tailwind CSS | Utility-first CSS framework |
| TanStack React Query | Server state management and data fetching |
| React Hook Form | Form state management |
| Zod | Form validation |
| Lucide React | Icon library |
| Framer Motion | Animations |
| clsx | Conditional class name utility |
| tailwind-merge | Merges Tailwind CSS class names |

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v20 or later recommended)
- **npm** (comes with Node.js)
- **MySQL** (v8.0 or later recommended)
- **Git** (for cloning the repository)

You can verify your installations with:

```bash
node -v
npm -v
mysql --version
git --version
```

## Quick Start (Recommended)
## 1. Clone the repository
```bash
git clone https://github.com/lindsey5/Task-Management.git
```

## 2. Install Dependencies
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
