import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Sidebar.css';

function Sidebar({ isLoggedIn }) {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink> {/* NavLink for Home with active class */}
                </li>
                {isLoggedIn && (
           <li>
           <NavLink to="/surgeon-dashboard" activeClassName="active">Dashboard</NavLink> {/* NavLink for Dashboard with active class */}
       </li>
          )}
                
            </ul>
        </div>
    );
}

export default Sidebar;
