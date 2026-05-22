# Docker Setup Guide

## Prerequisites
- Docker installed: https://www.docker.com/products/docker-desktop
- Docker Compose (comes with Docker Desktop)

---

## Option 1: Run Everything with Docker Compose (EASIEST)

### 1.1 Setup Environment
```bash
cp .env.docker .env
```

### 1.2 Start All Services
```bash
docker-compose up
```

**Wait for:**
```
backend   | Server running on port 5000
frontend  | ▲ Next.js 14.x.x
mongo     | waiting for connections
```

### 1.3 Access Your App
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017

### 1.4 Stop Everything
```bash
docker-compose down
```

---

## Option 2: Build Individual Containers

### Backend Only
```bash
cd backend
docker build -t task-backend .
docker run -p 5000:5000 --env-file ../.env task-backend
```

### Frontend Only
```bash
cd frontend
docker build -t task-frontend .
docker run -p 3000:3000 --env-file ../.env task-frontend
```

---

## Useful Docker Commands

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongo

# Execute command in container
docker-compose exec backend npm run dev

# Remove everything
docker-compose down -v

# Rebuild images
docker-compose build --no-cache
```

---

## Troubleshooting

### Port Already in Use
```bash
# Change port in docker-compose.yml
# For example, change 5000:5000 to 5001:5000
```

### Container Won't Start
```bash
# View detailed logs
docker-compose logs backend

# Rebuild from scratch
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

### MongoDB Connection Error
```bash
# Check MongoDB is running
docker-compose ps mongo

# Verify connection string
# Should be: mongodb://admin:password@mongo:27017/task-management?authSource=admin
```

---

## Production Deployment with Docker

### Push to Docker Hub
```bash
# Build images
docker build -t yourusername/task-backend:latest ./backend
docker build -t yourusername/task-frontend:latest ./frontend

# Push to Docker Hub
docker push yourusername/task-backend:latest
docker push yourusername/task-frontend:latest
```

### Deploy to Cloud
Use docker-compose.yml on:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean

---

✅ **Your app is containerized!**
