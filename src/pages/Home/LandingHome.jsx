// LandingHome.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "./Portrait.png";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Logo from "./Logo3D.glb";

import "./home.css";

const Section = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  text-align: left;
  color: white;
  position: relative;
  scroll-snap-align: center;
  background-image: url
    "https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  background-size: cover;
  position: relative;
`;

// const CanvasContainer = styled.div`
//   width: 50%;
//   height: 80%;
//   margin-right: 3rem;
// `;

const h1EnterFromBottomVariants = {
  initial: {
    y: "80vh",
    x: "50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};
const subtitleVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  in: {
    opacity: 0,
    y: 0,
  },
  out: {
    opacity: 1,
    y: "-100vh",
  },
};

const h1SlideFromRightVariants = {
  initial: {
    x: "-30vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 2.3, duration: 0.5 },
  },
};

const LandingHome = () => {
  const Model = () => {
    const gltf = useGLTF(Logo, true);
    return <primitive object={gltf.scene} dispose={null} scale />;
  };

  return (
    <Section>
      <TextContainer>
        <TextWrapper>
          <div
            style={{ display: "flex", justifyContent: "left", padding: "40px" }}
          >
            <motion.h1
              className="landing-hi"
              variants={h1EnterFromBottomVariants}
              initial="initial"
              animate="animate"
            >
              Hi.
            </motion.h1>
            <motion.h1
              className="landing-im"
              variants={h1SlideFromRightVariants}
              initial="initial"
              animate="animate"
            >
              I'm
            </motion.h1>
          </div>
          <motion.h2
            className="landing-title"
            variants={subtitleVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 3,
            }}
          >
            Devin Rodriguez.
          </motion.h2>
          <motion.h2
            className="landing-subtitle"
            variants={subtitleVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 4.2,
            }}
          >
            A Software Engineer.
          </motion.h2>
          <motion.p
            className="landing-text"
            initial={{ x: "-170%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 5.5 }}
          >
            From military medic to full-stack developer, I bring a unique
            perspective and a passion for learning to my work.
          </motion.p>
        </TextWrapper>
        <PortraitContainer>
          <PortraitImage src={Portrait} alt="Your Name" />
        </PortraitContainer>
      </TextContainer>
      <CanvasContainer>
        <Canvas camera={{ position: [-10, 20, -25]  }}>
          <ambientLight intensity={0.5} />
          <Model  />
          <OrbitControls enablePan={true} panSpeed={0.5} />
        </Canvas>
      </CanvasContainer>
    </Section>
  );
};

export default LandingHome;

const TextContainer = styled.div`
  width: 800%; // Take the full width of the parent
  display: flex;
  flex-direction: row; // Lay out children horizontally
  align-items: center; // Vertically center the items
  justify-content: space-between; // space items apart
`;

const TextWrapper = styled.div`
  width: 50%; // Take up half the width
`;

const PortraitContainer = styled.div`
  width: 12rem; // Adjust the size as needed
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px 0; // Add some margin for spacing
  background-color: #dcd8af;
  margin-right: 9rem;
  margin-top: 5rem;
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 20px;
`;
const CanvasContainer = styled.div`
width: 40%; // Set width to 20% as per requirement
height: 50vh; // Take full height
position: absolute; // Position it absolutely
top: 0; // Stick it to the bottom
right: 0; // Stick it to the right
`;
