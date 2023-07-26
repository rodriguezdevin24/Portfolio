//HireMe.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import "./about.css";

const HireMe = () => {
  return (
    <div className="aboutPage">
      <Canvas style={{ position: "absolute" }}>
        <Stars />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <div className="hireMe">
        <h2 className="aboutTitle">Why Hire Me</h2>
        <p>
          I believe my unique background, combined with my technical skills and
          leadership qualities, make me a valuable addition to any team. I'm a
          big believer in fate and determinism, which has helped me develop a
          high level of empathy. I'm also very laid back and easy to get along
          with. I love to help out when I can and would never shun anyone away
          from asking for help.{" "}
        </p>
      </div>
    </div>
  );
};

export default HireMe;