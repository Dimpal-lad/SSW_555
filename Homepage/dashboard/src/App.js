import React from "react";
import Navigation from "./Navigation";
import BrainModel from "./BrainModel";
import "./App.css"; // Make sure you have this file for CSS

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BrainModel />
    </div>
  );
};

export default App;
