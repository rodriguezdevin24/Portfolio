// LandingHome.jsx
import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Portrait from "./Portrait.png";
import Athena from "../About/Athena.jpeg";
import Typing from 'react-typing-effect';
// import AnimatedStars from "./AnimatedStars";
import "./home.css";


const LandingHome = () => {
  const [typingStart, setTypingStart] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setTypingStart(true), 2900); // Set timeout for 3.5 seconds
    return () => clearTimeout(timerId); // Clean up the timer to avoid memory leaks
  }, []);

  const [image, setImage] = useState(Portrait);
  //  const images = [Portrait, Athena];

  const handleMouseOver = () => {
      setImage(Athena);
  }
  const handleMouseOut = () => {
      setImage(Portrait);
  }


  return (
    <Section>
      {/* <AnimatedStars />  */}
      <TextContainer>
        <TextWrapper>
          <div style={{ display: "flex", justifyContent: "left", alignItems: "left", paddingTop: "40px", paddingBottom: "1.5rem"}}
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
          <h2 className="landing-subtitle typin-effect">
          {typingStart && (
    <Typing 
        speed={40}
        eraseSpeed={40}
        eraseDelay={70}
        
        text={[
          'A Software Engineer                                      ',
          'A Full Stack Developer                           ',
          "A Dog's Best Friend                            "
        ]}
          
    />
)}
</h2>

          <motion.p
            className="landing-text"
            initial={{ x: "-170%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 6.3 }}
          >
            From Army medic to full-stack developer, I bring a unique
            perspective and a passion for learning to my work.
          </motion.p>
        </TextWrapper>
        <RingContainer>
        <PortraitContainer className="portrait transition-image">
          <PortraitImage 
          src={image} 
          alt="Devin Rodriguez"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}  />
        </PortraitContainer>
        </RingContainer>
      </TextContainer>
      
      <ShapeDivider>
        <div className="custom-shape-divider-bottom-1692326285">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </ShapeDivider>
    </Section>
  );
};

export default LandingHome;

const Section = styled.div`
  overflow: auto;¸
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  text-align: left;
  color: white;
  position: relative;
  scroll-snap-align: center;
  background: linear-gradient(to bottom, #00012c, #1a0921);
  position: relative;
  
  @media (min-width: 769px) {
    height: 90vh; // Set the height to 100vh on larger screens
    padding-left: 5rem;
  }
  @media (max-width: 769px) {
    padding-left: 1.5rem;
    height: 100vh;
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

const TextContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row; // Lay out children horizontally
  align-items: right; // Vertically center the items
  justify-content: space-between; // space items apart
`;

const TextWrapper = styled.div`
  width: 50%; // Take up half the width
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const RingContainer = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px 0; 
  margin-right: 9rem;
  margin-top: 3rem;

  &::before, &::after {
    content: "";
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &::before {
    width: calc(100% - .5rem); // 1rem smaller than the RingContainer
    height: calc(100% - .5rem);
  }

  &::after {
    width: calc(100% - .5); // 2rem smaller than the RingContainer
    height: calc(100% - .5rem);
  }
`;

const PortraitContainer = styled.div`
  width: 13rem; 
  height: 13rem;
  border-radius: 50%;
  overflow: hidden; 
  background-color: #DDD8AB;
  z-index: 2; // This ensures the image and its background is above the rings
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem #1a0921);
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
    height: 59px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1692326285 .shape-fill {
    fill: rgb(96,125,143)
}
  }
`;
