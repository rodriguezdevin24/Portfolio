import React from 'react';
import './projects.css';
import '../../App.css';
import { motion } from "framer-motion";

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
      className= "page-title"
      style={{color: 'white'}}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        variants= {{pageVariants }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2
        }}
      >
        Current Projects
      </motion.h1>
    </div>
  );
};

export default Projects;

