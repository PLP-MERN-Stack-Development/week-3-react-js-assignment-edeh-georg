import React from 'react';
import ApiDataDisplay from '../components/ApiDataDisplay';

const ApiData = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            API Data Integration
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our API integration demo featuring data fetching from JSONPlaceholder API. 
            This section demonstrates modern React patterns including state management, 
            error handling, search functionality, and pagination.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Data Fetching
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Fetch and display data from external APIs with proper error handling and loading states.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Search & Filter
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Advanced search functionality with real-time filtering across multiple data fields.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18M13 8l4-4m0 0l-4-4m4 4H3" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Pagination
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Smart pagination system with configurable page sizes and navigation controls.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Error Handling
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Robust error handling with user-friendly messages and recovery options.
            </p>
          </div>
        </div>

        {/* API Data Display Component */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <ApiDataDisplay />
        </div>

        {/* Technical Details Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🔧 Technical Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    React Hooks Usage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Utilizes <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">useState</code> and <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">useEffect</code> hooks for state management and side effects handling.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 dark:bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Async Data Fetching
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Implements proper async/await patterns with the Fetch API for retrieving data from JSONPlaceholder.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 dark:bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    State Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Manages multiple state variables for posts, loading states, errors, search terms, and pagination.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with Tailwind CSS utilities for responsive grid layouts that adapt to different screen sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 dark:bg-red-400 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    User Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Includes loading indicators, error messages, empty states, and smooth transitions for better UX.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold">
                  6
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Component Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Demonstrates proper component composition using reusable Card and Button components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Information */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            📡 API Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Data Source
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This demo uses the JSONPlaceholder API, a free fake REST API for testing and prototyping.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  https://jsonplaceholder.typicode.com/posts
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Features Demonstrated
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time search functionality
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pagination with page navigation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Loading and error states
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive card-based layout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiData;