import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="page-nav">
        <div className="link-outer-container">
          <div className="link-inner-container">
            <div className="nav-li">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-li">
              <NavLink to="/about">About</NavLink>
            </div>
            <div className="nav-li">
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
