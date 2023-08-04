import React from 'react';
import './linkButtons.css';

const GithubLink = () => {
  return (
    <a href="https://docs.google.com/document/d/1_vgrFu1bYAECRvjAJGWRy0B_ouUyL0NKoDGcnitL-v8/edit?usp=sharing" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="fixed-button2">
       <img src="/github-icon.svg" alt="Github" style={{width: '30px', height: '30px'}} />
    
    </a>
  );
};

export default GithubLink;
