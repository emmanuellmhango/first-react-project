import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="header-links">
    <div className="header-title">
      <span>Math Magician</span>
    </div>
    <div className="links">
      <NavLink to="/" className="spacing link">Home</NavLink>
      {' | '}
      <NavLink to="/calculator" className="spacing link">Calculator</NavLink>
      {' | '}
      <NavLink to="/quote" className="spacing link">Quote</NavLink>
    </div>
  </div>
);

export default NavBar;
