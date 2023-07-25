import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: white;
font-size: 1.5em;
margin-top: 150px;
`;
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const ScrollIndicator = styled.div`
  margin-top: auto;
  margin-bottom: 350px;
  font-size: 2em;
`;

const LandingHome = () => {
    return (
        <Section>
          <Title>Hi. I'm Devin Rodriguez.</Title>
          <Subtitle>A Software Engineer.</Subtitle>
          <p>From military medic to full-stack developer, I bring a unique, neurodivergent perspective and a passion for learning to my work.</p>
          <ScrollIndicator>⬇️</ScrollIndicator>
        </Section>
      );
    };

    export default LandingHome;


//Something like what is was before hi im devin rodriguez a software engineer, and the brand
//and then continue scrolling to find out more! arrow pointing down. then more about is next

// together we can reach the stars 
