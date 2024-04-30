import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import BrainModel from "./BrainModel";
import Sidebar from "./Sidebar"; // Make sure to import the Sidebar
import "./App.css";



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
    <div className="App" >
  
      <div >
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <BrainModel isLoggedIn={isLoggedIn} />
        <Sidebar isLoggedIn={isLoggedIn}/> 
        

      </div>
      
    </div>
  );
};

export default App;
