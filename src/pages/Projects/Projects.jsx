import React, { useEffect, useState } from "react";
import "./projects.css";
import "../../App.css";
import { motion } from "framer-motion";
import projectsData from "./projectData";
import ProjectDisplay from "./ProjectDisplay";
import {  Element, scroller } from "react-scroll";

const pageVariants = {
  initial: {
    opacity: 1,
    y: "100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleButtonClick = () => {
    const nextProjectIndex = (currentProjectIndex + 1) % projectsData.length;
    setCurrentProjectIndex(nextProjectIndex);

    scroller.scrollTo(`project${nextProjectIndex}`, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="page-container">
      <motion.h1
        className="page-title projectMainTitle"
        style={{ color: "white" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        variants={{ pageVariants }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.1,
        }}
      >
        Current Projects
      </motion.h1>
      {projectsData.map((project, index) => (
        <Element name={`project${index}`} key={index}>
          <ProjectDisplay project={project} delay={index === 0 ? 1.8 : 0} />
        </Element>
      ))}
      <div
        style={{
          position: "fixed",
          bottom: "1%",
          left: "50%",
          transform: "translateX(-50%)",
          
          
        }}
      >
        <button className="nextProjectBtn" onClick={handleButtonClick}>
          Next Project
        </button>
      </div>
    </div>
  );
};

export default Projects;
