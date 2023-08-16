import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectsData from './projectData';
import ProjectDisplay from './ProjectDisplay';
import ImageModal from './ImageModal'; 

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (projectImages) => {
    console.log("Opening modal...");
    setSelectedImage(projectImages);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Carousel showThumbs={false}
      infiniteLoop={true} 
      autoPlay={true} 
      interval={15000
      }>
    {projectsData.map((project, index) => (
        <div key={index}>
            <ProjectDisplay project={project} onImageClick={openModal} />
        </div>
    ))}
</Carousel>

{isModalOpen && <ImageModal images={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default Projects;
