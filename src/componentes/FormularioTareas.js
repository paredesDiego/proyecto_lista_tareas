import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({ addTask, errorMessage }) => {
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
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {/* Mostrar el mensaje de error si existe */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default FormularioTareas;