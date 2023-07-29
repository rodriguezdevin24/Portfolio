import React from 'react'
import LandingHome from './LandingHome';
import JourneyHome from './JourneyHome';
import ProjectHome from './ProjectHome';
import SkillsHome from './SkillsHome';
import styled from 'styled-components';
import FooterAnimation from './FooterHome';
import { Element } from "react-scroll";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Element name="landingHome">
        <LandingHome />
      </Element>
      <Element name="journeyHome">
        <JourneyHome />
      </Element>
      <Element name="skillsHome">
        <SkillsHome />
      </Element>
      <Element name="projectHome">
        <ProjectHome />
      </Element>
      <Element name="footerAnimation">
        <FooterAnimation />
      </Element>
    </Container>
  )
}

export default Home;
