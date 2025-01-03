import React from 'react';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = section.offsetTop;
    if (section) {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      setActivePage(sectionId.toLowerCase());
    }
  };

  return (
    <div className={"nav_bar"}>
      <div className="left">
        <p><span>Shirley</span> ☻</p>
      </div>
      <div className="right">
        <p className={activePage === 'home' ? 'active' : ''} onClick={() => scrollToSection('Home')}>home</p>
        <p className={activePage === 'about' ? 'active' : ''} onClick={() => scrollToSection('About')}>about</p>
        <p className={activePage === 'work' ? 'active' : ''} onClick={() => scrollToSection('Work')}>work</p>
        <p className={activePage === 'projects' ? 'active' : ''} onClick={() => scrollToSection('Projects')}>projects</p>
        <p className={activePage === 'contact' ? 'active' : ''} onClick={() => scrollToSection('Contact')}>contact</p>
      </div>
    </div>
  );
}
