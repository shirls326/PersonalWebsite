import "./About.css";
import shirleyimg2 from "../assets/Combined Elements.svg";
import "animate.css"
import { useEffect, useRef, useState } from "react";

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
          Hello! I'm a <span className="yellowHighlight">Software Engineer</span> who enjoys building software that is technically thoughtful, intuitive to use, and accessible to the people it serves.
          <br />
          <br />
          I have experience building and shipping web applications with <span className="yellowHighlight">React</span>, <span className="yellowHighlight">TypeScript</span>, <span className="yellowHighlight">JavaScript</span>, <span className="yellowHighlight">Node.js</span>, <span className="yellowHighlight">C#/.NET</span>, and <span className="yellowHighlight">SQL</span>, as well as working
          with <span className="yellowHighlight">APIs</span>, <span className="yellowHighlight">databases</span>, and <span className="yellowHighlight">AWS</span>. In my current role, Ive worked across the development lifecycle from implementation and testing
          to deployment and production support.
          <br />
          <br />
          I'm particularly interested in <span className="yellowHighlight">frontend engineering</span>, <span className="yellowHighlight">developer tools</span>, and <span className="yellowHighlight">AI-powered applications</span>, while continuing to deepen my skills across the full stack.
          <br />
          <br />
          I've worked in <span className="yellowHighlight">UI/UX</span> and <span className="yellowHighlight">accessibility</span>, taught web design at Lehigh University, and collaborated with students, designers,
          and technical teams to turn ideas into usable products.
          <br />
          <br />
          When I'm not coding, I like to sing, ice skate, eat good food, and explore the world
          around me.
          <br />
          <br />
          Feel free to reach out and hi <span className="yellowHighlight">☻ </span> 
        </h2>
        <img src={shirleyimg2} alt="shirleyimg2" className="shirleyimg2" />
      </div>
    </div>
  );
}
