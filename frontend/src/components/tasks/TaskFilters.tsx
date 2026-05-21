'use client';

import React from 'react';
import { Filter } from 'lucide-react';

interface TaskFiltersProps {
  onFilterChange: (filters: { status?: string; priority?: string }) => void;
}

export default function TaskFilters({ onFilterChange }: TaskFiltersProps) {
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onFilterChange({
      status: newStatus || undefined,
      priority: priority || undefined,
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPriority = e.target.value;
    setPriority(newPriority);
    onFilterChange({
      status: status || undefined,
      priority: newPriority || undefined,
    });
  };

  const handleClear = () => {
    setStatus('');
    setPriority('');
    onFilterChange({});
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Filter size={18} />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      <select
        value={status}
        onChange={handleStatusChange}
        className="px-3 py-2 border border-light-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={handlePriorityChange}
        className="px-3 py-2 border border-light-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {(status || priority) && (
        <button
          onClick={handleClear}
          className="text-sm text-primary-500 hover:text-primary-600 font-medium"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
