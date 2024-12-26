import React, { useEffect, useState } from "react";
import "./App.css";
import "animate.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

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
    const skillsSection = document.getElementById('Projects');
    const contactSection = document.getElementById('Contact');
  
    const sectionOffsets = {
      home: homeSection.offsetTop,
      about: aboutSection.offsetTop,
      work: workSection.offsetTop,
      skills: skillsSection.offsetTop,
      contact: contactSection.offsetTop,
    };
  
    // Set a dynamic threshold based on the container height
    const threshold = Math.min(window.innerHeight * 0.4, 100);
  
    // setting the pages that are active 
    if (scrollPosition >= sectionOffsets.home - threshold && scrollPosition < sectionOffsets.about - threshold) {
      setActivePage('home');
    } else if (scrollPosition >= sectionOffsets.about - threshold && scrollPosition < sectionOffsets.work - threshold) {
      setActivePage('about');
    } else if (scrollPosition >= sectionOffsets.work - threshold && scrollPosition < sectionOffsets.skills - threshold) {
      setActivePage('work');
    } else if (scrollPosition >= sectionOffsets.skills - threshold && scrollPosition < sectionOffsets.contact - threshold) {
      setActivePage('projects');
    } else if (scrollPosition >= sectionOffsets.contact - threshold) {
      setActivePage('contact');
    }
  };
  

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Home id="Home" />
      <About id="About" />
      <Work id="Work" />
      <Projects id="Projects" />
      <Contact id ="Contact"/>
    </div>
  );
}

export default App;
