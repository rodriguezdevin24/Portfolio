import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { Link } from "react-scroll";

const Section = styled.section`
  background-color: #022945;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: white;
  font-size: 1.5em;
  padding: 4em;
  @media (min-width: 769px) {
    height: 100vh; // Set the height to 100vh on larger screens
  }
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
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2em;
  @media (max-width: 768px) { 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

const ProjectsButton = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin-top: 2em;
  margin-bottom: 100px;
`;

const ProjectHome = ({ id }) => {
  return (
    <Section id={id}>
      <Title>Current Projects</Title>
      <Subtitle>
        A preview of my current projects. Click below to find out more.
      </Subtitle>
      <CardContainer>
        <ProjectCard className="project1" />
        <ProjectCard className="project2" />
      </CardContainer>
      <ProjectsButton>View More Projects</ProjectsButton>
      <Link to="footerAnimation" smooth={true} duration={500}>
        <button className="scrollDown">V</button>
      </Link>
    </Section>
  );
};

export default ProjectHome;
