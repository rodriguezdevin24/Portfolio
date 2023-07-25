import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding-left: 20%;
  background-color: #282c34;
  color: white;
  font-size: 1.5em;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const JourneyText = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const MoreButton = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: blue;
  cursor: pointer;
`;

const JourneyHome = () => {
  return (
    <Section>
      <Title>My Journey</Title>
      <JourneyText>
        Born and raised in New York, I discovered my passion for technology at a young age. After high school, I joined the military and became a medic. On a whim, I decided to try out software development and instantly fell in love. It's a passion I plan to pursue, whether professionally or as a hobby.
      </JourneyText>
      <MoreButton>Learn More About Me</MoreButton>
    </Section>
  );
};

export default JourneyHome;
