import React from 'react';
import './linkButtons.css';

const LinkedInLink = () => {
  return (
    <a href="https://docs.google.com/document/d/1_vgrFu1bYAECRvjAJGWRy0B_ouUyL0NKoDGcnitL-v8/edit?usp=sharing" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="fixed-button3">
       <img src="/linkedin-icon.png" alt="LinkedIn" style={{width: '30px', height: '30px'}} />
    
    </a>
  );
};

export default LinkedInLink;
