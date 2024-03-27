import React from "react";
import Navigation from "./Navigation";
import BrainModel from "./BrainModel";
import "./App.css"; // Make sure you have this file for CSS
import Login from "./components/UserManagement/Login";
import SignUp from "./components/UserManagement/SignUp";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BrainModel />
      {/* <Login/> */}
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
