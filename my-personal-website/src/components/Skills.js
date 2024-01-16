import React from "react";
import "./Skills.css";
import line from "../Line 1.png";
import skillsimg from "./Skills mixed.svg";

export default function Skills() {
  return (
    <div className="Skills Container" id="Skills">
      <div className="skills-container">
        <div className="listedSkills">
          <h1 className="skillsHeader">My Dev Skills 👩🏽‍💻</h1>
          <div className="skillslistedtext">
            <img src={skillsimg} alt="skillsimg" className="skillsimg" />
          </div>
        </div>
        

      </div>
    </div>
  );
}
