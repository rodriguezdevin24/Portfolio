import React from "react";
import "./home.css";
import "../../App.css";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
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

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="page-container">
        <h1 className="page-title">Hello and Welcome!</h1>
      </div>
    </motion.div>
  );
};

export default Home;
