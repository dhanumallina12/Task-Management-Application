'use client';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
          Task Management Application
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Coming soon... Building your modern task management platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </main>
  );
}
