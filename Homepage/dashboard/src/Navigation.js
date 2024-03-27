import React from "react";

function Navigation() {
  return (
    <nav>
      <button>My Profile</button>
      <a href="/Login">
        <button>Login</button>
      </a>
      <button>Logout</button> {/* Future database redirection */}
    </nav>
  );
}

export default Navigation;
