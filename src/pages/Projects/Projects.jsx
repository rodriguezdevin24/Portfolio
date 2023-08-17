import React, { useState } from "react";
import projectsData from "./projectData";
import ProjectDisplay from "./ProjectDisplay";
import "./projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index, e) => {
    e.stopPropagation();
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectDisplay
            project={project}
            onImageClick={(e) => openModal(index, e)}
          />
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal1" onClick={handleCarouselClick}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={15000}
              className="carousel-container"
            >
              {projectsData[selectedProjectIndex].images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={`Project screenshot ${idx + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
