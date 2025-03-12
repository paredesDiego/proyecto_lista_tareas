import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tasks, hideCompleted, toggleComplete, editTask, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => !hideCompleted || !task.completed);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Tarea key={task.id} task={task} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default ListaTareas;
