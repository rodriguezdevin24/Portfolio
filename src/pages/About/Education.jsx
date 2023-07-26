//Education.jsx
import React from 'react';
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";

import './about.css'


const Education = () => {
    return (
        <div className="aboutPage">
            <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <div className="education">
            <h2 className = "aboutTitle">Education, Skills, and Experience </h2>
            <p>I graduated from General Assembly's Full Stack Software Engineering Immersive course, where I honed my skills in MERN stack and Python/Django REST. The course was challenging, but it ignited a passion in me for coding and problem-solving. I particularly enjoy working with React and Node, and I have a keen interest in design and animations. During my time at the bootcamp, I collaborated with a UI/UX team to build a full app using Django REST framework, Web3 technologies, and chatbox technologies. I continue to work on projects with this team, and I'm always eager to learn more and grow in this field. In my previous role as a senior medic at Walter Reed Hospital in Washington DC, I was responsible for implementing a falls protocol that significantly improved patient safety. This experience taught me the importance of leadership, teamwork, and problem-solving, skills that I bring to my work as a developer. </p>
        </div>
        </div>
    );
}

export default Education ;
