// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ResumeLink from "./components/Links/ResumeLink";
import GithubLink from "./components/Links/GithubLink";
import LinkedInLink from "./components/Links/LinkedInLink";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import 'normalize.css';


// import { Scroll } from "@react-three/drei";


//TO ADD A REVIEW SECTION WHERE PEOPLE CAN LEAVE REVIEWS

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <GithubLink />
        <LinkedInLink />
        <ResumeLink />
        <ScrollToTopButton />

      </>
    </Router>
  );
};

export default App;
