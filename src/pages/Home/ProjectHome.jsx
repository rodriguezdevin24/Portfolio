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
  background-color: #182459;
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
        A tease of my current projects. Click below to find out more.
      </Subtitle>
      <CardContainer>
        <ProjectCard className="project1" />
        <ProjectCard className="project2" />
      </CardContainer>
      <ProjectsButton onClick={handleProjectClick}>View More Projects</ProjectsButton>
      {/* <ShapeDivider>
      <div class="custom-shape-divider-bottom-1692310483">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
    </svg>
</div>
      </ShapeDivider> */}
    </Section>
  );
};

export default ProjectHome;

// const ShapeDivider = styled.div `
// .custom-shape-divider-bottom-1692310483 {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   overflow: hidden;
//   line-height: 0;
//   transform: rotate(180deg);
// }

// .custom-shape-divider-bottom-1692310483 svg {
//   position: relative;
//   display: block;
//   width: calc(100% + 1.3px);
//   height: 85px;
// }

// .custom-shape-divider-bottom-1692310483 .shape-fill {
//   fill: #182459;
// }

// `