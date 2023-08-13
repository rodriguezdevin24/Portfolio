import React from 'react';
import "./projects.css";

const ProjectDisplay = ({ project, onImageClick }) => {
  return (
    <div className="card1">
      <div className="card-imgs">
        {project.images.slice(0, 4).map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Project screenshot ${idx + 1}`} 
            className="carousel-image" 
            onClick={(e) => {
              console.log("Image clicked!");
              onImageClick(e, img);
          }}
      
          />
        ))}
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
