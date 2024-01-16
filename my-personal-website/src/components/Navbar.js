import React from 'react';
import './Navbar.css';

export default function Navbar({ visible, activePage }) {
  return (
    <div className={`nav_bar ${visible ? 'visible' : ''}`}>
      <div className="left">
        <p>Shirley ☻</p>
      </div>
      <div className="right">
        <p className={activePage === 'home' ? 'active' : ''}>home</p>
        <p className={activePage === 'about' ? 'active' : ''}>about</p>
        <p className={activePage === 'work' ? 'active' : ''}>work</p>
        <p className={activePage === 'skills' ? 'active' : ''}>skills</p>
        <p className={activePage === 'contact' ? 'active' : ''}>contact</p>
      </div>
    </div>
  );
}
