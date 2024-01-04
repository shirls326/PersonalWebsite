import group1img from'./Group 1.png';
import shirleyimg from'./Group 1.png';
import React, { useEffect, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';


function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;
  
    window.addEventListener('scroll', function (e) {
  
      // Get the new Value
      currentScrollPosition = window.scrollY;

      console.log(window.scrollY);
      // if(window.scrollY >= 0 &&){
      //   setNavbarVisible(true);
      // } else
  
      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setNavbarVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setNavbarVisible(true);
      }
  
      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  
  return (
    
    <div className = "App">
      

      {/* Home container */}
      <Navbar visible={navbarVisible} />
      <div className="Home" id ="Container">
        <div className = "home-Main">
          <h1>Hello! I'm<br></br><span class="shirley">Shirley</span>✨</h1>
          <img src={group1img} alt="Logo" className = "star" />
        </div>
 
      </div>


      <div className="About" id ="Container">
        <h2>I am a current Computer Science major in my 3rd year at Lehigh University. 
          I love to program and work on personal projects and problem solve for both myself and others. 
          I am a TA for Lehigh's CSE007 and CSE017 and enjoy assisting students into furthering their education on becoming a programmer. 
          In my free time, I like to sing, program, rock climb, ice skate and explore the world. ☻
        </h2>
        <h2>test womp womp!!!</h2>

      </div>  


      <div className="Work" id ="Container">
        <h2>I am a current Computer Science major in my 3rd year at Lehigh University. 
          I love to program and work on personal projects and problem solve for both myself and others. 
          I am a TA for Lehigh's CSE007 and CSE017 and enjoy assisting students into furthering their education on becoming a programmer. 
          In my free time, I like to sing, program, rock climb, ice skate and explore the world. ☻
        </h2>
        <h2>test womp womp!!!</h2>

      </div>  



    </div>

  );
}

export default App;
