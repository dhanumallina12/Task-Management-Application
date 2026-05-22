import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password required')
});

export const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  dueDate: z.string().datetime().optional(),
  labels: z.array(z.string()).optional(),
  attachments: z.array(z.string()).optional(),
  workspaceId: z.string().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  dueDate: z.string().datetime().optional(),
  labels: z.array(z.string()).optional(),
  attachments: z.array(z.string()).optional(),
  assignedTo: z.string().optional(),
});

export const statusUpdateSchema = z.object({
  status: z.enum(['pending', 'in-progress', 'completed']),
});
