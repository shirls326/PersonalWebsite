import "./About.css";
// import shirleyimg2 from "./whirley.JPG";
import shirleyimg2 from "./Combined Elements.svg";
import "animate.css"
import React, { useEffect, useRef, useState } from "react";

export default function About() {

  const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      };
  
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
      const conrefcurrent = containerRef.current; // changing variable name due to warning 
  
      if (conrefcurrent) {
        observer.observe(conrefcurrent);
      }
  
      return () => {
        if (conrefcurrent) {
          observer.unobserve(conrefcurrent);
        }
      };
    }, []);
  
  return (
    <div className={`About Container`} id="About">
      <h1>About Me</h1>
      <div className="Content">
  
        <h2 ref ={containerRef} className={`AboutDes ${isVisible ? 'visible' : ''}`}>
          Hello! I am a senior at Lehigh University studying <span className="yellowHighlight">Computer Science</span> with a passion for
          frontend web development and education in computer science. I am currently a teaching assistant (TA) for Lehigh's intro-level, computer architecture and web systems computer science classes and
          enjoy teaching and mentoring students beginning their programming journeys. 
          Starting January 2025, I will be the <span className="yellowHighlight">Head TA</span> for Lehigh's Programming and Data Structure's class (CSE017).
          I am currently <span className="yellowHighlight">seeking a full-time role</span> in software engineering or UI/UX for summer 2025.
          When I'm not coding, I like to sing, ice skate, eat good food, and explore the world
          around me. <br /> Feel free to reach out and hi <span className="yellowHighlight">☻ </span> 
        </h2>
        <img src={shirleyimg2} alt="shirleyimg2" className="shirleyimg2" />

      </div>
    </div>
  );
}
