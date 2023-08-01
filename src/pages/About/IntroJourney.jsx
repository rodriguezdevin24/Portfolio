import React from "react";
import { Link } from "react-scroll";

import "./about.css";

const IntroJourney = () => {
  return (
    <div className="aboutPage">
      <div className="intro-journey">
        <h2 className="aboutTitle">Introduction and Journey into Tech</h2>
        <p>
          Hello! I'm a full-stack developer based in New York City with a
          background in healthcare as a medic in the Army. I'm bilingual,
          speaking both English and Spanish, and I'm currently serving in the
          reserves. I've always had a passion for creativity and technology.
          From a young age, I loved building things and exploring the
          capabilities of computers. However, it wasn't until my time in the
          military, where I discovered my love for learning, that I decided to
          pursue a career in tech.
        </p>
      </div>
      <Link to="education" smooth={true} duration={500}>
        <button className ="scrollDownTop">
          Scroll to next section
        </button>
      </Link>
    </div>
  );
};

export default IntroJourney;
