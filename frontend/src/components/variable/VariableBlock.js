import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/items";

export default function VariableBlock(props) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.VARIABLE,
      // id: props.variable.id,
      variable: props.variable.name,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <div
        style={{
          marginTop: "7px",
          border: "1px solid #e3e3e3",
          padding: "5px",
          borderRadius: "25px",
          opacity: isDragging ? "0.5" : "1",
        }}
        key={props.variable.name}
        ref={drag}
      >
        {props.variable.name}
      </div>
    </>
  );
}
