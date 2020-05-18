import React, { useState } from "react";
import { ItemTypes } from "../../utils/items";
import { useDrop } from "react-dnd";

export default function Target(props) {
  const [variable, setVariable] = useState("");

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.VARIABLE,
    drop: (item, monitor) => {
      console.log(item, "Target");
      props.setItem(item);
      setVariable(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        display: "inline-block",
        width: variable.variable ? "" : 100,
        height: 16,
        margin: "0px 6px",
        padding: "0px 8px 20px 8px",
        border: "1px solid #bfbfbf",
        backgroundColor: isOver ? "#c2c2c2" : "#f2f2f2",
      }}
    >
      {variable.variable}
    </div>
  );
}
