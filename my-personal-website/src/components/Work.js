import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import "animate.css";

export default function Work() {
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
    <div className="Work Container" id="Work">
     <div
        ref={containerRef}
        className={`TA Work-Container ${isVisible ? 'visible' : ''}`}
      >
        <h1 className="TA-title">
          Teaching Assistant<br></br> @Lehigh University
        </h1>
        <h2>Aug 2023 - Present</h2>
        <ul className="info-list">
          <li>
            TA for "Intro to Programming" and "Data Structures and Programming"
          </li>
          <li>Conduct in-class labs for 4 hours weekly</li>
          <li>
            Proficiency in basic Java and advanced data structures/algorithms
          </li>
          <li>Spend 5 hours weekly grading student assignments</li>
        </ul>
      </div>
      <div
        ref={containerRef}
        className={`TA Work-Container ${isVisible ? 'visible' : ''}`}
      >
        <h1 className="TA-title Zaniac-title">
          Remote Developer Intern<br></br> @INDATA (Remote)
        </h1>
        <h2>April 2021 - June 2021</h2>
        <ul className="info-list">
          <li>Implemented ETL (extract, transform, and load) solution for business analytics.</li>
          <li>Worked in a small, agile team using Python.</li>
          <li>Exported results to JSON format</li>
          <li>Integrated with InData time tracking and project management solutions</li>
        </ul>
      </div>
      <div
        ref={containerRef}
        className={`TA Work-Container ${isVisible ? 'visible' : ''}`}
      >
        <h1 className="TA-title Zaniac-title">
          Math Tutor<br></br>@Zaniac (Westport, CT)
        </h1>
        <h2>September 2018 - January 2019</h2>
        <ul className="info-list">
          <li>Instructed students in mathematics for a total of six hours per week</li>
          <li>Provided constructive feedback to students about their strengths and weaknesses</li>
          <li>Communicated with students' parents to assess students' needs</li>
        </ul>
      </div>
    </div>
  );
}
