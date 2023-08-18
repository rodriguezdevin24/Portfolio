// LandingHome.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "./Portrait.png";
// import { useGLTF } from "@react-three/drei";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import Logo from "./Logo3D.glb";

import "./home.css";


const Section = styled.div`
  height: 90vh;
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
  background-color: #182459;
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
  // const Model = () => {
  //   const gltf = useGLTF(Logo, true);
  //   return <primitive object={gltf.scene} dispose={null} scale />;
  // };

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
      <ShapeDivider>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </ShapeDivider>
    </Section>
  );
};

export default LandingHome;

const TextContainer = styled.div`
  width: 100%; 
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
  
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 20px;
`;


const ShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 69px;
  }

  .shape-fill {
    fill: #607D8F;
  }
`;