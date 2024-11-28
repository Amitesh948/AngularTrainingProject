// app.js
import { addTask, updateTask, deleteTask, viewTasks } from './taskManager.js';

const task1 = { id: 1, title: 'Finish Project', description: 'Complete the project by deadline', priority: 'High' };
const task2 = { id: 2, title: 'Grocery Shopping', description: 'Buy vegetables and fruits', priority: 'Low' };

let tasks = [
    { id: 1, title: 'Finish Project', description: 'Complete the project by deadline', priority: 'High' },
    { id: 2, title: 'Grocery Shopping', description: 'Buy vegetables and fruits', priority: 'Low' }
]

addTask(task1);
addTask(task2);

viewTasks();  // Display tasks

updateTask(1, { priority: 'Medium' });  // Update task 1

viewTasks();  // Display updated tasks

deleteTask(2);  // Delete task 2

viewTasks();  // Display remaining tasks
