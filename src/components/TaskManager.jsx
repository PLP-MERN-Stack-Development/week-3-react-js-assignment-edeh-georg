import React, { useState } from 'react';
import Button from './Button';
import { useLocalStorage } from '../hooks/useCustomHooks';

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useTaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('plp-tasks', [
    { id: 1, text: 'Welcome to PLP Task Manager!', completed: false, createdAt: new Date().toISOString() },
    { id: 2, text: 'Try adding a new task below', completed: false, createdAt: new Date().toISOString() },
    { id: 3, text: 'Mark tasks as completed by clicking the checkbox', completed: false, createdAt: new Date().toISOString() }
  ]);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks(prev => [...prev, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return { tasks, addTask, toggleTask, deleteTask, clearCompleted, clearAll };
};

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted, clearAll } = useTaskManager();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle adding new task
  const handleAddTask = () => {
    addTask(newTaskText);
    setNewTaskText('');
  };

  // Handle enter key in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header with Statistics */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Task Manager
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalTasks}</div>
            <div className="text-sm text-blue-600 dark:text-blue-400">Total Tasks</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{completedTasks}</div>
            <div className="text-sm text-green-600 dark:text-green-400">Completed</div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{activeTasks}</div>
            <div className="text-sm text-orange-600 dark:text-orange-400">Active</div>
          </div>
        </div>

        {/* Progress Bar */}
        {totalTasks > 0 && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Task Input */}
      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 text-lg border rounded-lg border-gray-300 dark:border-gray-600
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       bg-white dark:bg-gray-700 dark:placeholder-gray-400 
                       text-gray-900 dark:text-gray-100"
          />
          <Button
            variant="primary"
            onClick={handleAddTask}
            disabled={!newTaskText.trim()}
            className="px-6 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Task
          </Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-6">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({totalTasks})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({activeTasks})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTasks})
        </Button>
      </div>

      {/* Task List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              {filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {filter === 'all' 
                ? 'Add a task above to get started!' 
                : `You have no ${filter} tasks at the moment.`
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTasks.map((task) => (
              <div key={task.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300 dark:border-gray-500 dark:bg-gray-700"
                    />
                    <div className="min-w-0 flex-1">
                      <span
                        className={`block text-lg ${
                          task.completed 
                            ? 'line-through text-gray-500 dark:text-gray-400' 
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {task.text}
                      </span>
                      {task.createdAt && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          Created: {new Date(task.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                    className="ml-3 flex-shrink-0"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {totalTasks > 0 && (
        <div className="flex justify-center gap-3">
          {completedTasks > 0 && (
            <Button
              variant="warning"
              onClick={clearCompleted}
            >
              Clear Completed ({completedTasks})
            </Button>
          )}
          <Button
            variant="danger"
            onClick={() => {
              if (window.confirm('Are you sure you want to delete all tasks? This action cannot be undone.')) {
                clearAll();
              }
            }}
          >
            Clear All Tasks
          </Button>
        </div>
      )}
    </div>
  );
};

export default TaskManager;