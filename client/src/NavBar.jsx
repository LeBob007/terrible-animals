import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/navStyles.css';

const NavBar = () => {
  return (
    <div>
      <nav className="page-nav">
        <div className="link-outer-container">
          <div className="link-inner-container">
            <div className="nav-li">
              <NavLink className="link-text" to="/home">Home</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/about">About</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
        <div className="nav-icon-outer-container">
          <div className="nav-icon-inner-container">
            <div className="nav-li">
              <NavLink className="link-text" to="/">Logout</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
