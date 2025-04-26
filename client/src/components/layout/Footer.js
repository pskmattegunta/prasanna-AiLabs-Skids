// client/src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Prasanna-AILabs-Skids</h3>
            <p>A compassionate platform using AI to support special needs children with tools, guidance, and resources.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tools">Tools</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Email:</strong> <a href="mailto:pskmattegunta@gmail.com">pskmattegunta@gmail.com</a></p>
            <p><strong>Address:</strong> 11435 Glenlaurel Oaks Cir, Jacksonville FL 32257</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">FB</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">IG</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Prasanna-AILabs-Skids. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;