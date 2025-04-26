// client/src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const SimpleNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
            </svg>
          </div>
        </a>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/resources" className="nav-link">Resources</a>
          </li>
          <li className="nav-item">
            <a href="/ai-speech-therapy" className="nav-link">AI Speech Therapy</a>
          </li>
          <li className="nav-item nav-item-button">
            <a href="/start" className="nav-button">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SimpleNavbar;