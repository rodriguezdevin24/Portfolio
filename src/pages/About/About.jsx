import React from 'react'
import './about.css'
import '../../App.css'
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";


const About= () => {
  return (
    
    <div className = "page-container">
       <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <h1 className = "about-title">A Little Bit About Me </h1>
    </div>
  )
}

export default About;

