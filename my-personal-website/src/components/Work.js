import React from 'react'
import './Work.css'
import 'animate.css';

export default function Work() {
  return (

    <div className="Work" id ="Container">
   

        <div className='TA Work-Container animate__animated animate__fadeInDown'>
            <h1 className='TA-title'>Teaching Assistant<br></br> @Lehigh University</h1>
            <h2>Aug 2023 - Present</h2>
            <ul className='info-list'>
                <li>TA for "Intro to Programming" and "Data Structures and Programming"</li>
                <li>Conduct in-class labs for 4 hours weekly</li>
                <li>Proficiency in basic Java and advanced data structures/algorithms</li>
                <li>Spend 5 hours weekly grading student assignments</li>
            </ul>
      
        </div>
        <div className='TA Work-Container animate__animated animate__fadeInDown'>
            <h1 className='TA-title Zaniac-title'>Remote Developer Intern<br></br> @INDATA (Remote)</h1>
            <h2>April 2021 - June 2021</h2>
            <ul className='info-list'>
                <li>Organized timestamp data using Python</li>
                <li>Exported results to JSON format</li>
                <li>Collaborated with supervisor from Google to advance project</li>
            </ul>
        </div>
        <div className='TA Work-Container animate__animated animate__fadeInDown'>
            <h1 className='TA-title Zaniac-title'>Math Tutor<br></br>@Zaniac (Westport, CT)</h1>
            <h2>April 2021 - June 2021</h2>
            <ul className='info-list'>
                <li>Organized timestamp data using Python</li>
                <li>Exported results to JSON format</li>
                <li>Collaborated with supervisor from Google to advance project</li>
            </ul>
        </div>
        
  </div> 
  )
}
