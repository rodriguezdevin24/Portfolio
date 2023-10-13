import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import "./home.css";



const JourneyHome = ({ id }) => {
  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate("/about");
  };

  return (
    <Section id={id}>
      
      <CenteredContainer>
      <Title>My Journey</Title>
      <JourneyText>
        Born and raised in New York, I discovered my passion for technology at a
        young age. After high school, I joined the military and became a medic.
        On a whim, I decided to try out software development and instantly fell
        in love. It's a passion I plan to pursue, whether professionally or as a
        hobby.
      </JourneyText>
      <MoreButton 
      className="more-buton btn btn-primary btn-lg" 
      type="button"  
      onClick={handleMoreButtonClick}
      >
        <span>More About My Story</span>
      </MoreButton>
      </CenteredContainer>
      <div className="credit">
        Designed by{" "}
        <a href="https://www.freepik.com/free-vector/new-york-city-cityscape-scene_29108017.htm#query=new%20york%20cartoon&position=27&from_view=keyword&track=ais">
          Freepik
        </a>
      </div>
      <ShapeDivider>
        <div className="custom-shape-divider-bottom-1692312022">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </ShapeDivider>
    </Section>
  );
};

export default JourneyHome;
//TO ADD. 3D ANIMATION FOR HI IM DEVIN THAT HIGHLIGHTS EACH LETTER IN AN ANIMATION


const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: left;
  padding-left: 20%;
  background-image: url(${require("./NYC.jpg")});
  background-size: cover;
  position: relative;
  padding-top: 3rem;
  color: white;
  font-size: 1.5rem;
  padding: 4rem;
  @media (min-width: 769px) {
    height: 100vh; // Set the height to 100vh on larger screens
    background-size: cover;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding-right: 3rem;
  
`;

const JourneyText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  width: 70%;
  align-items: left;
`;

const MoreButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 21.88rem;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-right: 3rem;
`;
const ShapeDivider = styled.button`
  .custom-shape-divider-bottom-1692312022 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1692312022 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 53px;
  }

  .custom-shape-divider-bottom-1692312022 .shape-fill {
    fill: #182459;
  }
`;
const CenteredContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 85%;
text-align: center;
`;
