import React from 'react';
import './home.css';

const Star = ({ size, top, left }) => (
  <div
    className="star"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}vh`,
      left: `${left}vw`,
    }}
  />
);

export default Star;
