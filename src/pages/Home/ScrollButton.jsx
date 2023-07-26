// ScrollButton.jsx
import React from 'react';
import './home.css';

const ScrollButton = ({ target }) => {
  const handleClick = () => {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="scroll-button" onClick={handleClick}>
      <i className="arrow down"></i>
    </button>
  );
};

export default ScrollButton;
