// client/src/components/layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'; // Re-enable this import
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Prasanna-AILabs-Skids</h1>
              <span className="tagline">AI Support for Special Needs</span>
            </Link>
          </div>
          <Navbar /> {/* Add the Navbar component back */}
        </div>
      </div>
    </header>
  );
};

export default Header;