import React from 'react';
import "./projects.css";

const ProjectDisplay = ({ project, onImageClick }) => {
  return (
    <div className="card1">
      <div className="card-imgs">
        <div className="image-container" onClick={onImageClick}>
          <img 
            src={project.staticImage} 
            alt={`Static image1 for ${project.title}`} 
            className="carousel-image"
          />
          <div className="overlay">
            <div className="text">View More Images</div>
          </div>
        </div>
      </div>
      <div className="card-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="button-container">
          <button className="project-button">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </button>
          <button className="project-button">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
