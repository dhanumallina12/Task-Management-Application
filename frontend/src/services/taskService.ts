'use client';

import apiClient from '@/services/apiClient';
import { ITask } from '@/types/task';
import { useTaskStore } from '@/store/taskStore';

export const taskService = {
  async fetchTasks(filters?: {
    status?: string;
    priority?: string;
    workspaceId?: string;
  }) {
    try {
      const params = new URLSearchParams();
      if (filters?.status) params.append('status', filters.status);
      if (filters?.priority) params.append('priority', filters.priority);
      if (filters?.workspaceId) params.append('workspaceId', filters.workspaceId);

      const response = await apiClient.get(`/tasks?${params.toString()}`);
      useTaskStore.setState({ tasks: response.data });
      return response.data;
    } catch (error) {
      useTaskStore.setState({ error: 'Failed to fetch tasks' });
      throw error;
    }
  },

  async createTask(taskData: any) {
    try {
      const response = await apiClient.post('/tasks', taskData);
      useTaskStore.getState().addTask(response.data);
      return response.data;
    } catch (error) {
      useTaskStore.setState({ error: 'Failed to create task' });
      throw error;
    }
  },

  async updateTask(id: string, taskData: any) {
    try {
      const response = await apiClient.put(`/tasks/${id}`, taskData);
      useTaskStore.getState().updateTask(id, response.data);
      return response.data;
    } catch (error) {
      useTaskStore.setState({ error: 'Failed to update task' });
      throw error;
    }
  },

  async updateTaskStatus(id: string, status: 'pending' | 'in-progress' | 'completed') {
    try {
      const response = await apiClient.patch(`/tasks/${id}/status`, { status });
      useTaskStore.getState().updateTask(id, { status });
      return response.data;
    } catch (error) {
      useTaskStore.setState({ error: 'Failed to update task status' });
      throw error;
    }
  },

  async deleteTask(id: string) {
    try {
      await apiClient.delete(`/tasks/${id}`);
      useTaskStore.getState().deleteTask(id);
    } catch (error) {
      useTaskStore.setState({ error: 'Failed to delete task' });
      throw error;
    }
  },

  async getTaskStats() {
    try {
      const response = await apiClient.get('/tasks/stats');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getTasksByWorkspace(workspaceId: string, filters?: {
    status?: string;
    priority?: string;
  }) {
    try {
      const params = new URLSearchParams();
      if (filters?.status) params.append('status', filters.status);
      if (filters?.priority) params.append('priority', filters.priority);

      const response = await apiClient.get(`/tasks/workspace/${workspaceId}?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
