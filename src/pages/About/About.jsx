import React from 'react'
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";
import IntroJourney from './IntroJourney';
import Education from './Education';
import Goals from './Goals';
import HireMe from './HireMe';
 import { Element } from "react-scroll";

import './about.css'
import '../../App.css'


const About= () => {
  return (
    
    <div className = "page-container">
       <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <h1 className = "about-title">A Little Bit About Me </h1>
        <Element name="introJourney">
        <IntroJourney />
        </Element>
        <Element name="education">
        <Education />
        </Element>
        <Element name="goals">
        <Goals />
        </Element>
        <Element name="hireMe">
        <HireMe />
        </Element>
    </div>
  )
}

export default About;

