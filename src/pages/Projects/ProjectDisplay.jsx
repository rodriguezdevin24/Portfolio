import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProjectDisplay = ({ project, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger just once
  });

  return (
    <motion.div
      ref={ref}
      className="project-display full height"
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly down
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Fade in and move up when in view
      transition={{ duration: 1, delay: inView? delay: 1.1 }} // Adjust the duration as needed
    >
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
              Deployed
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDisplay;
