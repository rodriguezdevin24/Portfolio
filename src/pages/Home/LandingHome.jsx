import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./home.css";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 1.5em;
  margin-top: 150px;
  scroll-snap-align: center;
`;

// const Subtitle = styled.h2`
//   font-size: 1.2em;
//   margin-bottom: 2em;
// `;

const h1EnterFromBottomVariants = {
  initial: {
    y: "50vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};
const subtitleVariants = {
  initial: {
    opacity: 1,
    y: "100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

const LandingHome = () => {
  return (
    <Section>
      <motion.h1
        className="landing-title"
        variants={h1EnterFromBottomVariants}
        initial="initial"
        animate="animate"
      >
        Hi. I'm Devin Rodriguez.
      </motion.h1>
      <motion.h2
        className="landing-subtitle"
        variants={subtitleVariants}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.7,
        }}
      >
        A Software Engineer.
      </motion.h2>
      <motion.p
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1.3, ease: "easeInOut", delay: 3.8 }}
      >
        From military medic to full-stack developer, I bring a unique,
        neurodivergent perspective and a passion for learning to my work.
      </motion.p>
    </Section>
  );
};

export default LandingHome;

// come explore my universe

//Something like what is was before hi im devin rodriguez a software engineer, and the brand
//and then continue scrolling to find out more! arrow pointing down. then more about is next

// together we can reach the stars
