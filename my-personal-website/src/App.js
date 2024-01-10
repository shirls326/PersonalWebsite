
import React, { useEffect, useState } from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';


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
      <Navbar visible={navbarVisible} />
      <Home/>
      <About/>
      <Work/>
      <Skills/>
    </div>
  );
}

export default App;
