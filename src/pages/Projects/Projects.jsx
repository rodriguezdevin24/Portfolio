import React from "react";
import "./projects.css";
import "../../App.css";
import { motion } from "framer-motion";
import projectsData from "./projectData";
import ProjectDisplay from "./ProjectDisplay";
import { Link, Element } from "react-scroll";

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
  return (
    <div className="page-container">
      <motion.h1
        className="page-title"
        style={{ color: "white" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        variants={{ pageVariants }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2,
        }}
      >
        Current Projects
      </motion.h1>
      {projectsData.map((project, index) => (
        <Element name={`project${index}`} key={index}>
          <ProjectDisplay project={project} />
          {index < projectsData.length - 1 && (
            <Link to={`project${index + 1}`} smooth={true} duration={500}>
              <div style={{ position: "relative", height: "100%" }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <button style={{ backgroundColor: "red" }}>
                    Scroll to next project
                  </button>{" "}
                </div>
              </div>
            </Link>
          )}
        </Element>
      ))}
    </div>
  );
};

export default Projects;
