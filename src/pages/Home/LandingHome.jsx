// LandingHome.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "./Portrait.png";

import "./home.css";

const Section = styled.div`
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
  padding-left: 5rem;
  @media (min-width: 769px) {
    height: 90vh; // Set the height to 100vh on larger screens
  }
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
    transition: { delay: 2.3, duration: 0.5 },
  },
};

const LandingHome = () => {
  return (
    <Section>
      <TextContainer>
        <TextWrapper>
          <div style={{ display: "flex", justifyContent: "left", alignItems: "left", paddingTop: "40px", paddingBottom: "1rem"}}
          >
            <motion.h1
              className="landing-hi"
              variants={h1EnterFromBottomVariants}
              initial="initial"
              animate="animate"
              style={{ margin: 0 }} 
            >
              Hi.
            </motion.h1>
            <motion.h1
              className="landing-im"
              variants={h1SlideFromRightVariants}
              initial="initial"
              animate="animate"
              style={{ margin: 0 }} 
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
            Devin Rodriguez
          </motion.h2>
          <h2
            className="landing-subtitle typing-effect"
            variants={subtitleVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 5.8,
            }}
          >
            A Software Engineer
          </h2>
          <motion.p
            className="landing-text"
            initial={{ x: "-170%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 7.2 }}
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
        <div class="custom-shape-divider-bottom-1692326285">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </ShapeDivider>
    </Section>
  );
};

export default LandingHome;

const TextContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row; // Lay out children horizontally
  align-items: right; // Vertically center the items
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
  margin-right: 11rem;
  margin-top: 5rem;
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 20px;
`;

const ShapeDivider = styled.div`
  .custom-shape-divider-bottom-1692326285 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1692326285 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 52px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1692326285 .shape-fill {
    fill: #607D8F;
  }
`;
