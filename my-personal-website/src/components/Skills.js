import React from "react";
import "./Skills.css";
import skillsimg from "./Skills mixed.svg";

export default function Skills() {
  return (
    <div className="Skills Container" id="Skills">
      <h1 className="skillsHeader">My Dev Skills 👩🏽‍💻</h1>
      <div className="skills-container">
        {/* <div className="listedSkills"> */}

        <div className="skillslistedtext">
          <img src={skillsimg} alt="skillsimg" className="skillsimg" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
