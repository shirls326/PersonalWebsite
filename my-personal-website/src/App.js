import logo from './logo.svg';
import group1img from'./Group 1.png';
import React, { useState } from 'react';


import './App.css';

function App() {
  return (

    <div className = "App">

      {/* Home container */}
      <div className="Home" id ="Container">
        <div className = "nav_bar">
          <div className = "left">
            <p>Shirley</p>
          </div>
          <div className = "right">
            <p>home</p>
            <p>about</p>
            <p>work</p>
            <p>contact</p>
          </div> 
        </div>
        <div className = "home-Main">
          <h1>Hello! I'm<br></br><span class="shirley">Shirley</span>✨</h1>
          <img src={group1img} alt="Logo" className = "star" />
        </div>
 
      </div>


      <div className="About" id ="Container">
      </div>  



    </div>

  );
}

export default App;
