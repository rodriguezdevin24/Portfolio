// LandingHome.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import computer from "./old_computer.glb";

import "./home.css";

const Section = styled.div`
  height: 90vh;
  max-height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  text-align: center;
  color: white;
  position: relative;
  scroll-snap-align: center;
  background-image: url"https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  background-size: cover;
  position: relative;
  
`;
const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;
const CanvasContainer = styled.div`
  width: 50%;
  height: 80%;
  margin-right: 3rem;
`;



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
    transition: { delay: 2.3, duration: .5 },
  },
};

const LandingHome = () => {
  const Model = () => {
    const gltf = useGLTF(computer, true);
    return <primitive object={gltf.scene}  dispose={null} />;
  };

  return (
    <Section>
      <TextContainer>
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
        <Link to="journeyHome" smooth={true} duration={500}>
          <button className="scrollDownJourney">V</button>
        </Link>
      </TextContainer>
      <CanvasContainer>
        <Canvas style={{ width: '100%', height: '100%' }}>
          <ambientLight />
          <Model />
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </Section>
  );
};

  export default LandingHome;

// come explore my universe

//Something like what is was before hi im devin rodriguez a software engineer, and the brand
//and then continue scrolling to find out more! arrow pointing down. then more about is next

