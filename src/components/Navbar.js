import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🌸 FundraiseHer</div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <li>
  <NavLink
    to="/inspirational"
    className={({ isActive }) => (isActive ? 'active' : '')}
  >
    Inspirational Women
  </NavLink>
</li>

          <NavLink
            to="/leaderboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
