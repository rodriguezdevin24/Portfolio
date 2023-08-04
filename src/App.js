// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ResumeLink from "./components/Links/ResumeLink";
import GithubLink from "./components/Links/GithubLink";
import LinkedInLink from "./components/Links/LinkedInLink";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
// import { Scroll } from "@react-three/drei";


//TO ADD A REVIEW SECTION WHERE PEOPLE CAN LEAVE REVIEWS

const App = () => {
  return (
    <Router>
      <>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GithubLink />
        <LinkedInLink />
        <ResumeLink />
        <ScrollToTopButton />

      </>
    </Router>
  );
};

export default App;
