import React from 'react';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay organized and productive with our intuitive task management system. 
            Add, complete, and organize your tasks with ease.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Add Tasks
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Quickly add new tasks with a simple and intuitive interface.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Track Progress
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Monitor your completion rate with visual progress indicators.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Filter Tasks
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Organize your view with filters for all, active, and completed tasks.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-9 4h12a2 2 0 002 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Persist Data
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your tasks are automatically saved and persist between sessions.
            </p>
          </div>
        </div>

        {/* Task Manager Component */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <TaskManager />
        </div>

        {/* Usage Tips */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            💡 Tips for Better Task Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Keep Tasks Specific
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Write clear, actionable tasks that can be completed in a reasonable timeframe.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Use Filters Effectively
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use the filter buttons to focus on what's important - active tasks for work, completed for progress.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Regular Cleanup
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Periodically clear completed tasks to keep your list focused and manageable.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Track Your Progress
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Watch the progress bar fill up as you complete tasks - it's a great motivator!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;