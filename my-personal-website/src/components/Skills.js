import React from 'react'
import './Skills.css'
import line from'../Line 1.png';

export default function Skills() {
  return (
    <div className="Skills" id='Container'>
        <h1 className='Skills-h1'>Skills</h1>
        <div className='Skills-Containers'>
            <div className='skills-container'>
                <div className='listedSkills'>
                    <h1 className='skillsHeader'>Developer 👩🏽‍💻</h1>
                    <p>djdjksksak</p>
                    <p>djdjksksak</p>
                    <p>djdjksksak</p>
                    <p>djdjksksak</p>
                </div>
                <img src={line} className='line'/>
                <div className='listedSkills'>
                    <h1 className='skillsHeader'>Designer 🎨</h1>
                </div>


            </div>


        </div>



    </div>
  )
}
