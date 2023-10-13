import React from "react";
import "./about.css";

const EarlyLife = () => {
  return (
    <section id="earlyLife" className="early-life-section">
      <div className="container">
        <div className="content-wrapper">
          <h1 className="early-life-h1">Early Life</h1>
          <h2 className="early-life-subtitle">The Roots of a Developer</h2>

          {/* Block box placeholder for the skyline */}
          <div className="skyline-block"></div>
          
          <div className="separator"></div>

          <div className="text-bubbles">
            <div className="text-bubble">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis
            </div>

            <div className="text-bubble">
              Vivamus in nibh ac augue finibus sollicitudin. Cras vitae tellus vitae velit lacinia luctus. Fusce convallis, justo eget vehicula auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam ac neque sodales, a mattis justo facilisiss
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyLife;
