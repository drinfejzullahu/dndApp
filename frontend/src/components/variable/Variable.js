import React, { useState } from "react";
import { Button, Input } from "antd";

import VariableBlock from "./VariableBlock";

export default function Variable() {
  const [variable, setVariable] = useState("");
  const [variables, setVariables] = useState([]);

  const handleVariableChange = (e) => {
    setVariable(e.target.value);
  };

  const addVariableHandler = () => {
    let variablesLocal = [...variables];
    if (variable !== "") {
      variablesLocal.push({ name: variable, id: Math.round(Math.random()) });
      setVariables(variablesLocal);
      setVariable("");
    }
  };

  const onVariableClick = (item) => {
    let localVariables = variables.filter((k) => k !== item);
    setVariables(localVariables);
  };

  console.log(variables);
  return (
    <div>
      <Input
        placeholder="Keyword"
        size="large"
        onChange={(e) => handleVariableChange(e)}
        value={variable}
        type="text"
      />
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ marginTop: "20px", backgroundColor: "#2b2626" }}
          type="primary"
          shape="round"
          onClick={addVariableHandler}
        >
          Add Variable
        </Button>
        <h3 style={{ marginTop: "15px" }}>Variables</h3>

        {variables.map((variable) => {
          return (
            <VariableBlock
              onVariableClick={onVariableClick}
              variable={variable}
            />
          );
        })}
      </div>
    </div>
  );
}
