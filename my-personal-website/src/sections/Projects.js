import Card from "../components/Card";
import Melismatics from "../assets/LehighMelismaticsMockUp.png";
import UniMart from "../assets/UniMart Mockup 2.png";
import TheBuzz from "../assets/buzz-buzz.png";

import "./Projects.css";
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
          projectName='The Buzz' 
          des="Led the development of a social media platform using React, Flutter, Java, Spark, Spring Boot, and PostgreSQL. Worked through the software development lifecycle, coordinating implementation, debugging, integration, and deployment."
          imgSrc={TheBuzz}
        />
      </div>

    </div>
  );
}
