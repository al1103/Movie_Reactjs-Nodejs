import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import "./App.css";
import RoutersManager from "./routers/index";
import useDarkMode from "./darkmode";
import { useSelector } from "react-redux";

function App() {
  const currentTheme = useSelector((state) => state.Movie.mode);
  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

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
