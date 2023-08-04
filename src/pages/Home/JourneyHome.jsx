import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

//import { motion } from "framer-motion";

import './home.css'


const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-left: 20%;
  background-image: url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  position: relative;
  color: white;
  font-size: 1.5rem;
  padding: 4rem;
  @media (min-width: 769px) {
    height: 100vh; // Set the height to 100vh on larger screens
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 3rem;
`;

const JourneyText = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const MoreButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 21.88rem;
`;


const JourneyHome = ({ id }) => {
  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate('/about');
  };


  return (
    <Section id={id}> 
      <Title>My Journey</Title>
      <JourneyText>
        Born and raised in New York, I discovered my passion for technology at a young age. After high school, I joined the military and became a medic. On a whim, I decided to try out software development and instantly fell in love. It's a passion I plan to pursue, whether professionally or as a hobby.
      </JourneyText>
      <MoreButton onClick={handleMoreButtonClick} >Learn More About Me</MoreButton>
      <Link to="projectHome" smooth={true} duration={500}>
      <button className = "scrollDown">V</button>
      </Link>
    </Section>
  );
};

export default JourneyHome;
//TO ADD. 3D ANIMATION FOR HI IM DEVIN THAT HIGHLIGHTS EACH LETTER IN AN ANIMATION