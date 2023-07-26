import React from 'react';
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";

import './about.css';

const IntroJourney = () => {
    return (
        <div className="aboutPage">
            <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <div className="intro-journey">
            <h2 className = "aboutTitle">Introduction and Journey into Tech</h2>
            <p>Hello! I'm a full-stack developer based in New York City with a background in healthcare as a medic in the Army. I'm bilingual, speaking both English and Spanish, and I'm currently serving in the reserves. I've always had a passion for creativity and technology. From a young age, I loved building things and exploring the capabilities of computers. However, it wasn't until my time in the military, where I discovered my love for learning, that I decided to pursue a career in tech.</p>
        </div>
        </div>
    );
}

export default IntroJourney;