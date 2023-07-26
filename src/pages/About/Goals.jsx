//Goals.jsx
import React from 'react';
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";

import './about.css'

const Goals = () => {
    return (
        <div className="aboutPage">
            <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <div className="goals">
            <h2 className = "aboutTitle">Work Style and Future Goals</h2>
            <p>I thrive when working independently but also enjoy collaborating with a team. I'm a quick learner, and when I'm passionate about something, I strive to excel in it. Looking ahead, I aim to be a full-stack developer with an emphasis on front-end development. I have a vision for creating apps that promote health, fitness, and positive mindset. I'm excited about the endless possibilities in this field and look forward to the journey ahead. </p>
        </div>
        </div>
    );
}

export default Goals;
