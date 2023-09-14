import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './about.css';

const About = () => {
  return (
    <Parallax pages={3}>
      {/* Gradient Background */}
      <ParallaxLayer offset={1} speed={0.3}>
        <div className="outerSpaceGradient"></div>
      </ParallaxLayer>

      {/* Stars */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="backgroundStars"></div>
      </ParallaxLayer>

      {/* Introduction Text */}
      <ParallaxLayer offset={0} speed={0}>
        <div className="introText">
        Welcome! I'm Devin, a software engineer with a unique background and a
        passion for creativity and technology. Born to Colombian immigrants in
        New York City, I grew up valuing health, fitness, and mental
        well-being. I'm bilingual, fluent in both Spanish and English, and
        I've always had a drive for learning new skills and helping others
        thrive. My journey into tech has been an exciting one, and I invite
        you to continue scrolling to learn more about me.
        </div>
      </ParallaxLayer>        

      {/* Early Life Text */}
      <ParallaxLayer offset={1} speed={0.8}>
        <div className="earlyLifeText">
        I was born in New York City to two hardworking immigrants from Colombia
        who came to the U.S. seeking a better life for their family. From a
        young age, I valued creativity, health, and fitness. I've always had a
        passion for learning new skills and helping others thrive. My early
        experiences in high school JROTC, where I led a team to 5th place in a
        competition, instilled in me a sense of leadership that would later be
        reinforced during my military service.
        </div>
        <ParallaxLayer offset={0} speed={0.3}>
        <div className="outerSpaceGradient"></div>
      </ParallaxLayer>
      </ParallaxLayer>

      {/* ... other layers ... */}
    </Parallax>
  );
};

export default About;
