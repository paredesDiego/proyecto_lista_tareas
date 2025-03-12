import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      )}
      {isEditing ? (
        <button className="update-btn" onClick={handleEdit}>Actualizar</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default Tarea;
