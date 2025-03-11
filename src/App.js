import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

library.add(faEdit, faTrash, faCheck);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header setFilter={setFilter} filter={filter} />
      <FormularioTareas addTask={addTask} />
      <ListaTareas tasks={tasks} filter={filter} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

const Header = ({ setFilter, filter }) => (
  <header>
    <h1>Lista de Tareas</h1>
    <div className="button-container">
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Filtrar Completadas
      </button>
      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
      >
        Filtrar Pendientes
      </button>
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Mostrar Todas
      </button>
    </div>
  </header>
);

const FormularioTareas = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Agregar nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
};

const ListaTareas = ({ tasks, filter, toggleComplete, editTask, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Tarea key={task.id} task={task} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

const Tarea = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} onBlur={handleEdit} />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      )}
      <button onClick={() => setIsEditing(true)}>
        <FontAwesomeIcon icon="edit" />
      </button>
      <button onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
      <button onClick={() => toggleComplete(task.id)}>
        <FontAwesomeIcon icon="check" />
      </button>
    </li>
  );
};

export default App;
