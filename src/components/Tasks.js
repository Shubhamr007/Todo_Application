
import React from 'react';

function Task({ task, index, toggleTaskStatus, removeTask }) {
  const handleComplete = () => {
    toggleTaskStatus(index);
  };

  const handleRemove = () => {
    removeTask(index);
  };

  return (
    <div className={"task" + (task.completed ? " completed" : "")}>
      {task.title}
      <button onClick={handleComplete}>{task.completed ? 'Pending' : 'Complete'}</button>
      <button onClick={handleRemove}>x</button>
    </div>
  );
}

export default Task;
