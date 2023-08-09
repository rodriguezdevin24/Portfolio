import React, { useState, useEffect } from 'react';
import LandingHome from './LandingHome';
import JourneyHome from './JourneyHome';
import ProjectHome from './ProjectHome';
import styled from 'styled-components';
import FooterAnimation from './FooterHome';
import { Element, scroller } from "react-scroll";
import Footer from '../../components/Footer/Footer';

const Container = styled.div``;

const Home = () => {
  const sections = ["landingHome", "journeyHome", "projectHome", "footerAnimation"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    if (currentSectionIndex < sections.length - 1) {
      const nextSectionIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextSectionIndex);
      scroller.scrollTo(sections[nextSectionIndex], {
        duration: 500,
        smooth: true,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const footerAnimationElement = document.querySelector("[name='footerAnimation']");
      if (footerAnimationElement) {
        const rect = footerAnimationElement.getBoundingClientRect();
        if (rect.top <= 30) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Element name="landingHome">
        <LandingHome />
      </Element>
      <Element name="journeyHome">
        <JourneyHome />
      </Element>
      <Element name="projectHome">
        <ProjectHome />
      </Element>
      <Element name="footerAnimation">
        <FooterAnimation />
        <Footer />
      </Element>
      {showButton && (
        <div
          style={{
            position: "fixed",
            bottom: "1%",
            left: "50%",
            transform: "translateX(-40%)",
          }}
        >
          <button className="nextProjectBtn" onClick={handleButtonClick}>
            <img
              src="/down-icon.png"
              alt="Down"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>
      )}
    </Container>
  )
}

export default Home;
