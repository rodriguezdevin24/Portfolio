import React from "react";
import projectsData from "./projectData";
import ProjectDisplay from "./ProjectDisplay";
import Carousel3D from "./Carousel3D";
import "./projects.css";

const Projects = () => {
  const carouselSlides = projectsData.map((project, index) => ({
    key: index,
    content: <ProjectDisplay key={index} project={project} />
  }));

  return (
    <div className="projects-container">
      <Carousel3D cards={carouselSlides} offset={1} showArrows={true} width="35%" height="600px" margin="0 auto" />
    </div>
  );
};

export default Projects;
