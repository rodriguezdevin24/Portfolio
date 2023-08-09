import React from 'react';
import './linkButtons.css';

const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/devin-rodriguez-1ba979276" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="fixed-button3">
       <img src="/linkedin-icon.png" alt="LinkedIn" style={{width: '30px', height: '30px'}} />
    
    </a>
  );
};

export default LinkedInLink;
