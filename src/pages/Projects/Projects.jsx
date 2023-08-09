// Project.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import projectsData from './projectData';
import ProjectDisplay from './ProjectDisplay';

const Projects = () => {
  return (
    <Carousel>
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectDisplay project={project} />
        </div>
      ))}
    </Carousel>
  );
};

export default Projects;
