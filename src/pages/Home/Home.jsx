import React from "react";
import LandingHome from "./LandingHome";
import JourneyHome from "./JourneyHome";
import ProjectHome from "./ProjectHome";
import styled from "styled-components";
import FooterAnimation from "./FooterHome";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <LandingHome />
      <JourneyHome />
      <ProjectHome />
      <FooterAnimation />
    </Container>
  );
};

export default Home;
