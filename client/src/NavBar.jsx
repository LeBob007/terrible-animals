import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/styles.css';
import Logo from './assets/paw-green-small.png';

const NavBar = () => {
  return (
    <div>
      <nav className="page-nav">
        <img id="app-logo" src={Logo} alt="TechStyles" />
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
