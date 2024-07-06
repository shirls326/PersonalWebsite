
import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <div className='Container Contact' id="Contact">
      <h1>Get in touch!</h1>
      <div className='socials'>
        <a href="https://github.com/shirls326" target="_blank" rel="noopener noreferrer">
          <svg className='iconsocial' id='github' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="#fffaff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.20 2.39.10 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/shirley-angos/" target="_blank" rel="noopener noreferrer">
          <svg className='iconsocial' id='linkedin' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="#fffaff" d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-52a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 152v24a12 12 0 0 1-24 0v-24a16 16 0 0 0-32 0v24a12 12 0 0 1-24 0m-16-52v52a12 12 0 0 1-24 0v-52a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16" />
          </svg>
        </a>
        <a href="mailto:shirleyangos@gmail.com">
          <svg className='iconsocial' id='gmail' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="#fffaff" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
          </svg>
        </a>
      </div>
      
    </div>
  );
}