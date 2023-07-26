import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background-color: #022945 ;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: white;
  font-size: 1.5em;
  padding: 4em;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  text-align: center;
  max-width: 800px;
  margin-top: 1em;
`;

const ProjectHome = () => {
  return (
    <Section>
      <Title>Current Projects</Title>
      <Subtitle>A preview of my current projects. Click below to find out more.</Subtitle>
    </Section>
  )
}

export default ProjectHome;
