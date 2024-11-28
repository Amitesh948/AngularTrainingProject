// taskManager.js


let tasks = [];


export const addTask = ({ id, title, description, priority = 'Medium' }) => {
  const task = { id, title, description, priority };
  tasks = [...tasks, task];  
  console.log(`Task added: ${title}`);
};

export const updateTask = (id, updatedFields) => {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, ...updatedFields } : task
  );
  console.log(`Task with ID ${id} updated`);
};


export const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);  
  
  console.log(`Task with ID ${id} deleted`);
};



export const viewTasks = () => {
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Priority: ${task.priority}`);
    });
  }
};


export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};

// Example of async/await usage
export const loadTasks = async () => {
  const allTasks = await fetchTasks();
  console.log('Loaded tasks:', allTasks);
};
