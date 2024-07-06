import "./About.css";
import shirleyimg2 from "./whirley.JPG";
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
      <h2 ref ={containerRef} className={`AboutDes ${isVisible ? 'visible' : ''}`}>
      Hello! I am a 4th year Computer Science student at Lehigh University with a passion for
      web development. I am a TA for Lehigh's intro-level computer science classes and
      enjoy teaching and mentoring students beginning their programming journeys. 
      Starting in the fall 2024, I will be an apprientice teacher for Lehigh's Web Design I class.
      When I'm not coding, I like to sing, rock climb, ice skate, cook, and explore the world
      around me. <br /> Feel free to say hi ☻
      </h2>
      <img src={shirleyimg2} alt="shirleyimg2" className="shirleyimg2" />
    </div>
  );
}
