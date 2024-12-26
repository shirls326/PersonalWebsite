import React from 'react';
import "./card.css";

export default function card({projectName, des, imgSrc}) {
  return (
    <div className="projectCard">
        <div className="projectImg">
        {/* <img src='../images/LehighMelismaticsMockUp.png' alt="projectImgLarge" /> */}
            <img src={imgSrc} alt="projectImgLarge"/>
        </div>
        <div className="projectText">
            <h2>{projectName}<span className="twinkle"> ✦</span></h2>
            <p>
                {des}
            </p>
        </div>
  </div>
  )
}
