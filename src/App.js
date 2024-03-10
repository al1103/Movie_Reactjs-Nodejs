import React from "react";
import { Routes } from "react-router-dom";
// import "./App.css";
import RoutersManager from "./routers/index";


function App() {
  if (false) {
    // Removed debugging statement
    return null; // Improved readability by explicitly returning null
  } else {
    return (
      <div>
        <RoutersManager></RoutersManager>
      </div>
    );
  }
}

export default App;
