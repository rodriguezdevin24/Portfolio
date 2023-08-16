import React, { useState } from 'react';
import projectsData from './projectData';
import ProjectDisplay from './ProjectDisplay';
import './projects.css';

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    console.log("Opening modal...");
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectDisplay project={project} onImageClick={() => openModal(index)} />
        </div>
      ))}

{isModalOpen && (
  <div className="modal-background" onClick={closeModal}>
    <div className="modal1">
      <button className="close-button" onClick={closeModal}>
        Close
      </button>
      <div className="image-grid">
        <div className="carousel-item1">
          {projectsData[selectedProjectIndex].images.map((image, idx) => (
            <img src={image} alt={`Project screenshot ${idx + 1}`} key={idx} />
          ))}
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};


export default Projects;
