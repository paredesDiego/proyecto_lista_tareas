import React, { useState } from "react";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addTask = (text) => {
    const taskExists = tasks.some((task) => task.text === text);

    if (taskExists) {
      setErrorMessage("¡Ya existe una tarea con ese nombre!"); 
      return; 
    }

    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setErrorMessage(""); 
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
      <Header hideCompleted={hideCompleted} setHideCompleted={setHideCompleted} />
      <FormularioTareas addTask={addTask} errorMessage={errorMessage} />
      <ListaTareas
        tasks={tasks}
        hideCompleted={hideCompleted}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;