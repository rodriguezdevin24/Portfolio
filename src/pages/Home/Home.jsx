import React from 'react'
import LandingHome from './LandingHome';
import JourneyHome from './JourneyHome';
import ProjectHome from './ProjectHome';
import SkillsHome from './SkillsHome';
import styled from 'styled-components';
import FooterAnimation from './FooterHome';
import ScrollToTopButton from '../../components/ScrollToTop/ScrollToTopButton';
import ScrollButton from './ScrollButton';


const Container = styled.div`

`;

const Home = () => {
  return (
    <Container>
      <LandingHome />
      <ScrollButton target="journeyHome" />
      <JourneyHome id="journeyHome" />
      <ScrollButton target="skillsHome" />
      <SkillsHome id="skillsHome" />
      <ScrollButton target="projectHome" />
      <ProjectHome id="projectHome" />
      <FooterAnimation />
      <ScrollToTopButton/>
    </Container>
  )
}

export default Home;




































// import React from "react";
// import "./home.css";
// import "../../App.css";
// import { motion, } from "framer-motion";

// const pageVariants = {
//   initial: {
//     opacity: 1,
 
//     y: "100vh",
//   },
//   in: {
//     opacity: 1,
//     y: 0,
//   },
//   out: {
//     opacity: 0,
//     y: "-100vh",
//   },
// };


// const pageTransition = {
//   type: "tween",
//   ease: "easeInOut",
//   duration: 1,
//   transition: { delay: 1.5, duration: 2 }
// };
// const h1Variants = {
//   initial: {
//     x: 0,
//     opacity: 1,
//   },
//   animate: {
//     x: "100vw", // or any value you want
//     opacity: 0,
//     transition: { delay: 4.1, duration: 2 }
//   }
// };

// const h2Variants = {
//   initial: {
//     opacity: 1,
//     y: "100vh",
//   },
//   in: {
//     opacity: 1,
//     y: 0,
//   },
//   out: {
//     opacity: 0,
//     y: "-100vh",
//   },
// };


// const Home = () => {
//   return (
//     <motion.div
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//     >
//       <div className="page-container">
//       <motion.h1
//           className="page-title"
//           variants={h1Variants}
//           initial="initial"
//           animate="animate"
//         >Hello and Welcome!
//         </motion.h1>
//         <motion.h2
//       className= "home-about"
//       style={{color: 'white'}}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1, stagger: 0.9 }}
//         variants= {{h2Variants }}
//         transition={{
//           type: "spring",
//           stiffness: 260,
//           damping: 20,
//           delay: 5.3
//         }}
//       >
//           A former military medic turned full-stack developer with a passion for learning and a creative, neurodivergent perspective
        
//       </motion.h2>
//     </div>
        

//     </motion.div>
//   );
// };

// export default Home;





