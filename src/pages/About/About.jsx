import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import IntroJourney from './IntroJourney';
import Education from './Education';
import Goals from './Goals';
import HireMe from './HireMe';
import { Element } from "react-scroll";
import SkillsHome from './SkillsAbout';

// import './about.css';
import '../../App.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-50) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };
  useEffect (() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  

  return (
    <div className="page-container">
      <Canvas style={{ position: "absolute" }}>
        <Stars />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <h1 className="about-title">A Little Bit About Me </h1>
      <Element name="introJourney">
        <IntroJourney />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="skills">
        <SkillsHome />
      </Element>
      <Element name="goals">
        <Goals />
      </Element>
      <Element name="hireMe">
        <HireMe />
      </Element>
      {!isAtBottom && ( 
      <div
        style={{
          position: "fixed",
          bottom: "1%",
          left: "50%",
          transform: "translateX(-40%)",
        }}
      >
      </div>
      )}
    </div>
  );
};


export default About;

// i love fitness and show video of you winning iron soldier and other related 
// i love dogs and show other pictures related to dogs 
//add 4 rows that stagnate down and then alternate