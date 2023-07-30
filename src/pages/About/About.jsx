import React from 'react'
import '../../App.css'
// import { Canvas } from "@react-three/fiber";
// import {  Stars } from "@react-three/drei";
import IntroJourney from './IntroJourney';
import Education from './Education';
import Goals from './Goals';
import HireMe from './HireMe';

import './about.css'


const About= () => {
  return (
    
    <div className = "page-container">
       {/* <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas> */}
        <h1 className = "about-title">A Little Bit About Me </h1>
        <IntroJourney />
        <Education />
        <Goals />
        <HireMe />
    </div>
  )
}

export default About;

