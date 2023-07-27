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



const h1EnterFromBottomVariants = {
  initial: {
    y: "50vh",
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

const h1SlideFromRightVariants = {
  initial: {
    x: "-30vw",
     opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 2.5, duration: 1 },
  },
};

const LandingHome = () => {
  return (
    <Section>
      <div style={{ display: 'flex', justifyContent: 'center', padding: "5px" }}>
      <motion.h1
        className="landing-title"
        variants={h1EnterFromBottomVariants}
        initial="initial"
        animate="animate"
      >
        Hi.
      </motion.h1>
      <motion.h1
        className="landing-title"
        variants={h1SlideFromRightVariants}
        initial="initial"
        animate="animate"
      >
        I'm Devin Rodriguez.
      </motion.h1>
      </div>
      <motion.h2
        className="landing-subtitle"
        variants={subtitleVariants}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 4.5,
        }}
      >
        A Software Engineer.
      </motion.h2>
      <motion.p
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1.3, ease: "easeInOut", delay: 5.5 }}
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


