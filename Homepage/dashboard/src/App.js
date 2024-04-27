import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import BrainModel from "./BrainModel";
import "./App.css"; // Make sure you have this file for CSS

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

  // Check if the user is logged in on component mount
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <BrainModel isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
