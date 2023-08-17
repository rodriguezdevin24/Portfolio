import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";


const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  padding: 4rem;
  position: relative;
  @media (min-width: 769px) {
    height: 100vh; // Set the height to 100vh on larger screens
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 50rem;
  margin-top: 1rem;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  @media (max-width: 768px) { 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

const ProjectsButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: blue;
 
  margin-top: 2rem;
  margin-bottom: 6.25rem;
`;

const ProjectHome = ({ id }) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate('/projects');
  };
  
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
      <ProjectsButton onClick={handleProjectClick}>View More Projects</ProjectsButton>
    </Section>
  );
};

export default ProjectHome;
