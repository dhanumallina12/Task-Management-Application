import { z } from 'zod';

export const taskValidator = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  dueDate: z.string().datetime().optional(),
  labels: z.array(z.string()).optional(),
  attachments: z.array(z.string()).optional(),
  workspaceId: z.string().optional(),
});

export const updateTaskValidator = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  dueDate: z.string().datetime().optional(),
  labels: z.array(z.string()).optional(),
  attachments: z.array(z.string()).optional(),
  assignedTo: z.string().optional(),
});

export const statusUpdateValidator = z.object({
  status: z.enum(['pending', 'in-progress', 'completed']),
});
