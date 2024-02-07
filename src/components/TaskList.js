
import React from 'react';
import Task from './Tasks';

function TaskList({ tasks, toggleTaskStatus, removeTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
