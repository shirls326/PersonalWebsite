import React from 'react';
import './Navbar.css'

export default function Navbar({ visible }) {
    return (
        <div className = 'nav_bar' style={{ display: !visible && 'none' }}>
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
    );
}

