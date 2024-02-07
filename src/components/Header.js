// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Todo App</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/todo">Todo</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
