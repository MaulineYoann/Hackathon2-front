import React from 'react';
import './Footer.css';
import logo from '../assets/Logo.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-text-container">
          <div className="text-footer">
            Association à but non lucratif loi 1901 @Hope Esport - 2021
          </div>
          <h1 className="mention-footer">Mentions légales</h1>
        </div>
        <img className="footer-logo" id="logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Footer;
