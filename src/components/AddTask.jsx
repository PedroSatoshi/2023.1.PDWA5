import React, { useState } from "react";

import Button from "./Button";

import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
    setError(false); // Limpa o erro ao digitar algo no campo
  };

  const handleAddTaskClick = () => {
    if (inputData.trim() !== "") {
      handleTaskAddition(inputData);
      setInputData("");
      setError(false);
    } else {
      setError(true); // Define o erro se o campo estiver vazio
    }
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className={`add-task-input ${error ? "error" : ""}`}
        type="text"
      />
      {error && <p className="error-message">Campo não pode estar vazio</p>}
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
