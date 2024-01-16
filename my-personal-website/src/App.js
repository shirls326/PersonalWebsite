import React, { useEffect, useState } from "react";
import "./App.css";
import "animate.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home"); // Default active page is 'home'

  useEffect(() => {
    const handleScroll = () => {
      handleSetActivePage();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActivePage = () => {
    const scrollPosition = window.scrollY;
    const homeSection = document.getElementById('Home');
    const aboutSection = document.getElementById('About');
    const workSection = document.getElementById('Work');
    const skillsSection = document.getElementById('Skills');
  
    const sectionOffsets = {
      home: homeSection.offsetTop,
      about: aboutSection.offsetTop,
      work: workSection.offsetTop,
      skills: skillsSection.offsetTop,
    };
  
    // Set a threshold value for each section
    const threshold = 100;
  
    if (scrollPosition >= sectionOffsets.home - threshold && scrollPosition < sectionOffsets.about - threshold) {
      setActivePage('home');
    } else if (scrollPosition >= sectionOffsets.about - threshold && scrollPosition < sectionOffsets.work - threshold) {
      setActivePage('about');
    } else if (scrollPosition >= sectionOffsets.work - threshold && scrollPosition < sectionOffsets.skills - threshold) {
      setActivePage('work');
    } else if (scrollPosition >= sectionOffsets.skills - threshold) {
      setActivePage('skills');
    }
  };
  

  return (
    <div className="App">
      <Navbar activePage={activePage} />
      <Home id="Home" />
      <About id="About" />
      <Work id="Work" />
      <Skills id="Skills" />
      <Contact id ="Contact"/>
    </div>
  );
}

export default App;
