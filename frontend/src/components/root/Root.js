import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import MainPage from "../mainpage/MainPage";

export default function Root() {
  return (
    <DndProvider backend={Backend}>
      <MainPage />
    </DndProvider>
  );
}
