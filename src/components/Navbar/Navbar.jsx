//MainNavbar.jsx

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion";
import "./navbar.css";
import logoImage from "./Logo.png";

const navbarVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
};

const navbarTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1.1,
};

function MainNavbar() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={navbarVariants}
      transition={navbarTransition}
    >
      <Navbar expand="lg" className="testing">
        <Container>
          <Navbar.Brand className="nav-logo" href="/">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects ">Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="mailto:rodriguezdevin24@gmail.com">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default MainNavbar;
