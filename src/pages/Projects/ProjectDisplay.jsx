import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project-display full height">
      <Carousel
        className="project-carousel"
        showThumbs={false}
        autoPlay
        interval={7000}
        infiniteLoop
        defaultActiveIndex={0}
      >
        {project.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Project screenshot ${index + 1}`}
              className="carousel-image carousel-item"
            />
          </div>
        ))}
      </Carousel>
      <div className="project-info">
  <h4 className="projectTitle">{project.title}</h4>
  <p>{project.description}</p>
  <div className="button-container">
    <button className="project-button">
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </button>
    <button className="project-button">
      <a
        href={project.deployedLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Deployed Version
      </a>
    </button>
  </div>
</div>
    </div>
  );
};
export default ProjectDisplay;
