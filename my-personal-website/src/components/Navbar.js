import React from 'react';
import './Navbar.css';

export default function Navbar({ visible, activePage }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`nav_bar ${visible ? 'visible' : ''}`}>
      <div className="left">
        <p>Shirley ☻</p>
      </div>
      <div className="right">
        <p className={activePage === 'home' ? 'active' : ''} onClick={() => scrollToSection('Home')}>home</p>
        <p className={activePage === 'about' ? 'active' : ''} onClick={() => scrollToSection('About')}>about</p>
        <p className={activePage === 'work' ? 'active' : ''} onClick={() => scrollToSection('Work')}>work</p>
        <p className={activePage === 'skills' ? 'active' : ''} onClick={() => scrollToSection('Skills')}>skills</p>
        <p className={activePage === 'contact' ? 'active' : ''} onClick={() => scrollToSection('Contact')}>contact</p>
      </div>
    </div>
  );
}
