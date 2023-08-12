import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectsData from './projectData';
import ProjectDisplay from './ProjectDisplay';
import ImageModal from './ImageModal'; // Assuming you've separated the ImageModal into its own file

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (e, img) => {
    console.log("Opening modal...");
    e.stopPropagation(); 
    setSelectedImage(img);
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

      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default Projects;
