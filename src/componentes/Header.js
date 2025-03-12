import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ hideCompleted, setHideCompleted }) => {
  return (
    <header>
      <h1>Lista de Tareas</h1>
      <div className="button-container">
        <button 
          className={hideCompleted ? "active" : ""} 
          onClick={() => setHideCompleted(!hideCompleted)}
        >
          <FontAwesomeIcon icon={hideCompleted ? faEye : faEyeSlash} />  
          {hideCompleted ? " Mostrar Completadas" : " No mostrar Completadas"}
        </button>
      </div>
    </header>
  );
};

export default Header;
