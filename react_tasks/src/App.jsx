import React from "react";
import Photo from "./components/Photo";
import Name from "./components/Name";
import Section from "./components/Section";
import './App.css'

// TODO: Добавить хедер и футер
function App() {
  return (
    <div className="app">
      <Photo />
      <Name />
      <Section/>
    </div>
  );
}

export default App
