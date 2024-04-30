import React from "react";
import "./Navigation.css"; // Make sure this points to the correct CSS file

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-content">
        <div className="project-title">Epiprep: Epilepsy Brain Model</div>
        <ul className="nav-items">
          {!isLoggedIn && (
            <li>
              <a href="/login">
                <button>Login</button>
              </a>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
