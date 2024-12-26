import React from "react";
import "./Projects.css";
import Card from "../elements/card.jsx";
import Melismatics from "../images/LehighMelismaticsMockUp.png";
import UniMart from "../images/UniMart Mockup 2.png";
import PerfectInterval from "../images/Mockup Phone.png";
// import React, { lazy, Suspense } from 'react';


export default function Projects() {
  return (
    <div className="Skills Container" id="Projects">
      <h1>Projects</h1>
      <div className="AllProjectsCards">
        <Card 
          projectName='Lehigh Melismatics' 
          des="Developed a comprehensive website for the Lehigh Melismatics acapella group, facilitating external communication and providing updates on concerts, events, fundraisers, merchandise, and more."
          imgSrc={Melismatics}
        />
        <Card 
          projectName='UniMart (AWS Winner)' 
          des="Built an e-commerce platform tailored for university students, offering a seamless shopping experience for textbooks, supplies, and other essentials. Won AWS Lehigh Valley Hackathon 2024"
          imgSrc={UniMart}

        />
        <Card 
          projectName='Perfect Interval' 
          des="Designed a mobile e-commerce website tailored for musicians, featuring a vibrant yet intuitive interface for seamless browsing and purchasing of instruments, repair tools, and accessories."
          imgSrc= {PerfectInterval}
        />
      </div>

    </div>
  );
}
