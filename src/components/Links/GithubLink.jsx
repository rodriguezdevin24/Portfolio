import React from 'react';
import './linkButtons.css';

const GithubLink = () => {
  return (
    <a href="https://github.com/rodriguezdevin24" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="fixed-button2">
       <img src="/github-icon.svg" alt="Github" style={{width: '30px', height: '30px'}} />
    
    </a>
  );
};

export default GithubLink;
