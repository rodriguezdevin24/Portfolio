//HireMe.jsx
import React from "react";

import "./about.css";

const HireMe = () => {
  return (
    <div className="aboutPageRight">
      <div className="hireMe">
        <h2 className="aboutTitle">Why Hire Me</h2>
        <p className="hiremeText">
          I believe my unique background, combined with my technical skills and
          leadership qualities, make me a valuable addition to any team. I'm a
          big believer in fate and determinism, which has helped me develop a
          high level of empathy. I'm also very laid back and easy to get along
          with. I love to help out when I can and would never shun anyone away
          from asking for help.{" "}
        </p>
        <a href="https://docs.google.com/document/d/1_vgrFu1bYAECRvjAJGWRy0B_ouUyL0NKoDGcnitL-v8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default HireMe;

