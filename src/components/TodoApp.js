
// import React, { useState } from 'react';
// import TaskList from './TaskList';
// import CreateTask from './CreateTask';
// // import Task from './Tasks';
// import '../styles/TodoApp.css';

// function TodoApp() {
//   const [tasks, setTasks] = useState([
//     {
//       title: "Grab some Pizza",
//       completed: true
//     },
//     {
//       title: "Do your workout",
//       completed: true
//     },
//     {
//       title: "Hangout with friends",
//       completed: false
//     }
//   ]);

//   const addTask = title => {
//     const newTasks = [...tasks, { title, completed: false }];
//     setTasks(newTasks);
//   };

//   const toggleTaskStatus = index => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//   };

//   const removeTask = index => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   const tasksRemaining = tasks.filter(task => !task.completed).length;

//   return (
//     <div className="todo-container">
//       <div className="header">Pending tasks ({tasksRemaining})</div>
//       <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} removeTask={removeTask} />
//       <div className="create-task">
//         <CreateTask addTask={addTask} />
//       </div>
//     </div>
//   );
// }

// export default TodoApp;
