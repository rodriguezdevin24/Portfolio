// //MainNavbar.jsx

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { motion } from 'framer-motion';
// import './navbar.css';
// import "normalize.css";

// const navbarVariants = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
//     opacity: 1,
//   },
// };

// const navbarTransition = {
//   type: 'tween',
//   ease: 'easeInOut',
//   duration: 1.1,
// };

// function MainNavbar() {

//   return (
//     <motion.div
//     initial="initial"
//     animate="in"
//     variants={navbarVariants}
//     transition={navbarTransition}
//   >
//     <Navbar expand="lg" className="testing">
//     <Container>
//       <Navbar.Brand href="/">DR</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//         <Nav className="nav-links">
//           <Nav.Link href="/home">Home</Nav.Link>
//           <Nav.Link href="/projects">Projects</Nav.Link>
//           <Nav.Link href="/about">About</Nav.Link>
//           <Nav.Link href="mailto:rodriguezdevin24@gmail.com">Contact</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   </motion.div>
// );
// }    
  
  
  
  

// export default MainNavbar;

import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="navbar">
      <a href="/" className="navbar-brand">DR</a>
      <button onClick={() => setIsNavOpen(!isNavOpen)} className="navbar-toggler">
        ☰
      </button>
      <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <a href="/home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="mailto:rodriguezdevin24@gmail.com">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;