import React from 'react';
import './linkButtons.css';

const ResumeLink = () => {
  return (
    <a href="https://docs.google.com/document/d/1_vgrFu1bYAECRvjAJGWRy0B_ouUyL0NKoDGcnitL-v8/edit?usp=sharing" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="fixed-button">
       <img src="/resume-icon.png" alt="Resume" style={{width: '30px', height: '30px'}} />
    
    </a>
  );
};

export default ResumeLink;
