import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="center-container" style={{ backgroundColor: 'rgb(39,78,19)' }}>
      <img id="app-logo" src={Logo} alt="TechStyles" />
    </div>
  );
};

export default Header;
