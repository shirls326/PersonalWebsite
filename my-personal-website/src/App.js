import React, { useEffect, useState } from "react";
import "./App.css";
import "animate.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
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
    const homeSection = document.getElementById("Home");
    const aboutSection = document.getElementById("About");
    const workSection = document.getElementById("Work");
    const skillsSection = document.getElementById("Skills");

    if (scrollPosition >= 0 && scrollPosition < homeSection.offsetHeight) {
      setActivePage("home");
    } else if (
      scrollPosition >= homeSection.offsetHeight &&
      scrollPosition < homeSection.offsetHeight + aboutSection.offsetHeight
    ) {
      setActivePage("about");
    } else if (
      scrollPosition >= homeSection.offsetHeight + aboutSection.offsetHeight &&
      scrollPosition <
        homeSection.offsetHeight +
          aboutSection.offsetHeight +
          workSection.offsetHeight
    ) {
      setActivePage("work");
    } else if (
      scrollPosition >=
      homeSection.offsetHeight +
        aboutSection.offsetHeight +
        workSection.offsetHeight
    ) {
      setActivePage("skills");
    }
  };

  return (
    <div className="App">
      <Navbar visible={navbarVisible} activePage={activePage} />
      <Home id="Home" />
      <About id="About" />
      <Work id="Work" />
      <Skills id="Skills" />
    </div>
  );
}

export default App;
