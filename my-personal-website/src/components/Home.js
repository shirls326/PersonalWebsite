import React from 'react';
import group1img from '../Group 1.png';
import './Home.css';

export default function Home() {
  return (
    <div className="Home Container" id="Home">
      <div className="home-Main">
        <h1>
          <span className="hello animate__animated animate__fadeIn">Hello! </span>
          <span className="im animate__animated animate__fadeIn">I'm<br></br></span>
          <span className="shirley shirleyfade animate__animated animate__fadeIn">Shirley</span>
          <span className="sparkle animate__animated animate__fadeIn">✨</span>
        </h1>
        <img src={group1img} alt="Logo" className="star" />
      </div>
    </div>
  );
}
