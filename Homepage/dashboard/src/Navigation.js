import React from "react";

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    // Remove authentication token from local storage
    localStorage.removeItem("authToken");
    setIsLoggedIn(false); // Update the authentication state
  };

  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Navigation;
