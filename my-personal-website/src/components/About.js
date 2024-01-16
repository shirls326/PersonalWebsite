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
        I'm currently cruising through my third year as a Computer Science
        maestro at Lehigh University. Coding is my jam, and I thrive on
        unraveling puzzles both for myself and fellow problem-solving
        enthusiasts. As a TA for Lehigh's CSE007 and CSE017, I'm on a mission to
        guide aspiring programmers on their educational journey. Outside of the
        digital realm, you'll catch me singing, coding, conquering rock walls,
        gliding on ice, and embarking on adventures around the world. ☻
      </h2>
      <img src={shirleyimg2} alt="shirleyimg2" className="shirleyimg2" />
    </div>
  );
}
