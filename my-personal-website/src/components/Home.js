import React from 'react';
// import group1img from '../Group 1.png';
import './Home.css';
// import shirleySit from '../images/Shirley Transparent Sitting.png';
// import shirleySit from '../images/Untitled design.png';
import shirleySit from '../images/test2.svg';




window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const parallaxText = document.querySelector('.homeText');

  // Move the text at a slower rate than the scroll position
  parallaxText.style.transform = `translate(0%, ${scrollPosition / 3}px)`;
});


export default function Home() {
  return (
    <div className="Home Container" id="Home">
      <div className="home-Main">
        <h1 className='homeText'>
          <span className="hello animate__animated animate__fadeIn">Hello! </span>
          <span className="im animate__animated animate__fadeIn">I'm<br></br></span>
          <span className="shirley shirleyfade animate__animated animate__fadeIn">Shirley</span>
          {/* <span className="sparkle animate__animated animate__fadeIn">✨</span> */}
        </h1>
        <h1 className='sparkles purple'>✦</h1>
        <h1 className='sparkles yellow'>✦</h1>

    

    
        <img src={shirleySit} alt="Logo" className="ShirleySit" />
      </div>
    </div>
  );
}
