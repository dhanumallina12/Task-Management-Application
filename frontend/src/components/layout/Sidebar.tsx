'use client';

import React from 'react';
import { Plus, Calendar, Users, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export default function Sidebar() {
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { icon: <Plus size={20} />, label: 'Create Task', href: '#' },
    { icon: <Calendar size={20} />, label: 'Calendar', href: '/dashboard/calendar' },
    { icon: <Users size={20} />, label: 'Teams', href: '/dashboard/teams' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-primary-500 text-white p-2 rounded-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-dark-800 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="p-6 border-b border-light-200 dark:border-dark-600">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            TaskHub
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Workspace</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-light-100 dark:hover:bg-dark-700 transition-colors"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-light-200 dark:border-dark-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm font-medium"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
