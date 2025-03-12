import React from "react";

const Header = ({ hideCompleted, setHideCompleted }) => {
  return (
    <header>
      <h1>Lista de Tareas</h1>
      <div className="button-container">
        <button 
          className={hideCompleted ? "active" : ""} 
          onClick={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? "Mostrar Completadas" : "No mostrar Completadas"}
        </button>
      </div>
    </header>
  );
};

export default Header;
