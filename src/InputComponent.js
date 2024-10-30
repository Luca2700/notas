import React, { useState } from "react";

const InputComponent = () => {
  const [inputs, setInputs] = useState([]);

  const handleButtonClick = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = {
      value: event.target.value,
      type: "button",
    };
    setInputs(newInputs);
  };

  return (
    <div class="secciones">
      {inputs.map((input, index) =>
        input.type === "button" ? (
          <input
            key={index}
            type="button"
            value={input.value}
            className="App-button"
          />
        ) : (
          <input
            key={index}
            type="text"
            value={input.value}
            className="titulo"
            maxLength={12}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Escribe aquí..."
          />
        )
      )}
      <input
        type="button"
        value={"+"}
        className="App-button"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default InputComponent;
