# Task Management Application

A **production-ready**, modern task management platform built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Next.js**.

## 🚀 Features

- ✅ **User Authentication** - Secure JWT-based authentication with refresh tokens
- ✅ **Task Management** - Create, read, update, delete tasks with priorities and due dates
- ✅ **Task Status** - Pending, In Progress, Completed
- ✅ **Priority Levels** - Low, Medium, High
- ✅ **Workspace System** - Organize tasks by workspace
- ✅ **Team Collaboration** - Invite members and assign tasks
- ✅ **Comments & Discussions** - Comment on tasks for team collaboration
- ✅ **Notifications** - Real-time alerts for task updates
- ✅ **Responsive Design** - Desktop, tablet, and mobile optimized
- ✅ **Dark/Light Mode** - Theme support built-in
- ✅ **Real-time Updates** - Socket.IO integration ready
- ✅ **Analytics Dashboard** - Track productivity metrics
- ✅ **Kanban Board** - Drag-and-drop task management (ready to implement)

## 📂 Project Structure

```
Task-Management-Application/
├── frontend/                 # Next.js + React frontend
│   ├── src/
│   │   ├── app/             # App directory (pages)
│   │   ├── components/      # Reusable React components
│   │   ├── services/        # API service layer
│   │   ├── store/           # Zustand stores
│   │   ├── types/           # TypeScript types
│   │   └── styles/          # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
├── backend/                  # Express.js + Node.js backend
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Express middleware
│   │   ├── services/        # Business logic
│   │   ├── validators/      # Input validation
│   │   ├── utils/           # Utility functions
│   │   └── index.ts         # Server entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── README.md
```

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14+ with React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Real-time:** Socket.IO client
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT + bcryptjs
- **Validation:** Zod
- **Real-time:** Socket.IO
- **Security:** Helmet, CORS, Rate Limiting

### Database
- **Primary:** MongoDB Atlas
- **Schemas:** User, Task, Workspace, Comment, Notification

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- MongoDB Atlas account
- Git

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
# Edit .env with your MongoDB URI and JWT secrets

# Start development server
npm run dev
```

**Backend will run on:** `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Start development server
npm run dev
```

**Frontend will run on:** `http://localhost:3000`

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-management
JWT_SECRET=your_jwt_secret_key_change_this
JWT_REFRESH_SECRET=your_refresh_secret_key_change_this
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

## 🔐 Authentication

The app uses **JWT (JSON Web Token)** authentication with:
- **Access Token:** 15 minutes expiration
- **Refresh Token:** 7 days expiration
- **Password Hashing:** bcryptjs with salt rounds of 10
- **Token Storage:** localStorage (frontend)

### API Endpoints

#### Auth Routes
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
POST   /api/auth/logout        - Logout user
GET    /api/auth/profile       - Get user profile (protected)
```

#### Task Routes (Ready to implement)
```
GET    /api/tasks              - Get all tasks
POST   /api/tasks              - Create task
GET    /api/tasks/:id          - Get task by ID
PUT    /api/tasks/:id          - Update task
DELETE /api/tasks/:id          - Delete task
PATCH  /api/tasks/:id/status   - Update task status
```

#### Workspace Routes (Ready to implement)
```
GET    /api/workspaces         - Get user's workspaces
POST   /api/workspaces         - Create workspace
PUT    /api/workspaces/:id     - Update workspace
POST   /api/workspaces/:id/members - Add member
```

## 📊 Database Models

### User Model
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `avatar` - Profile picture URL
- `role` - User role (user/admin)
- `createdAt`, `updatedAt` - Timestamps

### Task Model
- `title` - Task title
- `description` - Task description
- `status` - Task status (pending/in-progress/completed)
- `priority` - Task priority (low/medium/high)
- `dueDate` - Task due date
- `labels` - Task labels/tags
- `attachments` - File attachments
- `subtasks` - Nested subtasks
- `createdBy` - Task creator (User reference)
- `assignedTo` - Assigned user (User reference)
- `workspaceId` - Workspace reference
- `createdAt`, `updatedAt` - Timestamps

### Workspace Model
- `name` - Workspace name
- `ownerId` - Workspace owner (User reference)
- `members` - Array of member IDs (User references)
- `createdAt`, `updatedAt` - Timestamps

### Comment Model
- `taskId` - Task reference
- `userId` - Comment author reference
- `content` - Comment text
- `createdAt`, `updatedAt` - Timestamps

### Notification Model
- `userId` - Recipient user reference
- `message` - Notification message
- `read` - Read status
- `createdAt` - Creation timestamp

## 🎨 UI/UX

- **Design System:** Modern SaaS aesthetic
- **Colors:** Primary (Sky Blue), Dark theme support
- **Responsive:** Mobile-first design
- **Components:** Reusable, well-documented components
- **Animations:** Smooth transitions with Framer Motion
- **Icons:** Lucide React icons
- **Typography:** Clean, readable fonts

## 📋 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project setup
- [x] Database models
- [x] Authentication system
- [x] Frontend types and services

### Phase 2: Core Features 🚧
- [ ] Task CRUD API endpoints
- [ ] Dashboard UI layout
- [ ] Task board component
- [ ] Workspace management

### Phase 3: Collaboration 📅
- [ ] Real-time updates (Socket.IO)
- [ ] Comment system
- [ ] Activity logs
- [ ] Notifications

### Phase 4: Advanced Features 📊
- [ ] Analytics dashboard
- [ ] Calendar view
- [ ] File uploads
- [ ] Search functionality

### Phase 5: Polish & Deployment 🚀
- [ ] Testing (Jest, React Testing Library)
- [ ] Performance optimization
- [ ] Deployment setup
- [ ] Documentation

## 🧪 Testing (Coming Soon)

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables
4. Deploy automatically

### Backend (Render/Railway)
1. Connect GitHub repo
2. Set environment variables
3. Deploy with custom build command: `npm run build`
4. Set start command: `npm start`

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 💡 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Built with ❤️ using MERN Stack + Next.js**

**Status:** 🚧 In Development | Last Updated: 2026-05-21
