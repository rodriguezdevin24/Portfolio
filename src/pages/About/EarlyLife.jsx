//EarlyLife.jsx
import React from "react";
import "./about.css";
// import skyline from "./skyline.png"; // Placeholder for the skyline image
// import babyPhoto from "./babyPhoto.png"; // Placeholder for the baby photo

const EarlyLife = () => {
  return (
    <section id="earlyLife" className="early-life-section">
      <div className="container">
        
        {/* Placeholder for the skyline */}
        {/* <img src={skyline} alt="New York Skyline" className="skyline-image" /> */}
        
        <div className="content-wrapper">
          <h1 className="early-life-h1">Early Life</h1>
          <h2 className="early-life-subtitle">The Roots of a Developer</h2>
          
          {/* Placeholder for baby photo */}
          {/* <img src={babyPhoto} alt="Baby Me" className="baby-photo" /> */}
          
          <div className="text-section">
            <p className="early-life-text">
              I was born in New York City to two hardworking immigrants. From a young age, it was always apparent that I was a very curious person by nature.
            </p>
            <p className="early-life-text">
              [Your second section of text goes here.]
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default EarlyLife;
