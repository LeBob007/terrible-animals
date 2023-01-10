import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/styles.css';

const NavBar = () => {
  return (
    <div>
      <nav className="page-nav">
        <div className="link-outer-container">
          <div className="link-inner-container">
            <div className="nav-li">
              <NavLink className="link-text" to="/">Home</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/about">About</NavLink>
            </div>
            <div className="nav-li">
              <NavLink className="link-text" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
