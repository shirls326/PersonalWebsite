import React from 'react'
import group1img from'../Group 1.png';
import './Home.css'

export default function Home() {
  return (
    <div className="Home" id ="Container">
        <div className = "home-Main">
          <h1>Hello! I'm<br></br><span class="shirley animate__animated animate__fadeIn">Shirley</span>✨</h1>
          <img src={group1img} alt="Logo" className = "star" />
        </div>
 
      </div>
  )
}
