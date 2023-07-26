import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import htmlIcon from "../../data/Icons/html-icon.svg";
import cssIcon from "../../data/Icons/css-icon.svg";
import jsIcon from "../../data/Icons/js-icon.svg";
import reactIcon from "../../data/Icons/react-icon.svg";
import nodeIcon from "../../data/Icons/node-icon.svg";
import expressIcon from "../../data/Icons/express-icon.svg";
import mongodbIcon from "../../data/Icons/mongodb-icon.svg";
import postgresqlIcon from "../../data/Icons/postgresql-icon.svg";
import sqlIcon from "../../data/Icons/sql-icon.svg";
import openaiIcon from "../../data/Icons/openai-icon.svg";
import githubIcon from "../../data/Icons/github-icon.svg";
import pythonIcon from "../../data/Icons/python-icon.svg";
import djangoIcon from "../../data/Icons/django-icon.svg";
import animationsIcon from "../../data/Icons/animations-icon.svg";
import threejsIcon from "../../data/Icons/three-js-icon.svg";
import figmaIcon from "../../data/Icons/figma-icon.svg";
import designIcon from "../../data/Icons/design-icon.svg";
import uiIcon from "../../data/Icons/ui-icon.svg";
import bootstrapIcon from "../../data/Icons/bootstrap-icon.svg";
import web3Icon from "../../data/Icons/web3-icon.svg";
import dockerIcon from "../../data/Icons/docker-icon.svg";
import postmanIcon from "../../data/Icons/postman-icon.svg";
//import herokuIcon from "../../assets/heroku-icon.svg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: #022741;
  color: white;
  font-size: 1.5em;
  padding: 2em;
  padding-bottom: 100px;
  @media (min-width: 769px) {
    height: 100vh; // Set the height to 100vh on larger screens
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5em;
  margin-top: 50px;
`;

const SkillsGrid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); // Display a maximum of 2 skills per row on small screens
  }
`;
const Skill = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  margin-bottom: 1.1em;
  
`;

const Icon = styled(motion.img)`
  width: 24px;
  height: 24px;
`;



const SkillsHome = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: [0.1, 0.1,]
  });

  
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Node", icon: nodeIcon },
    { name: "Express", icon: expressIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "OpenAI API", icon: openaiIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Django REST", icon: djangoIcon },
    { name: "Animations", icon: animationsIcon },
    { name: "Three.js", icon: threejsIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Design", icon: designIcon },
    { name: "UI/UX", icon: uiIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Web3", icon: web3Icon },
    { name: "Docker", icon: dockerIcon },
    { name: "Postman", icon: postmanIcon },
    //{ name: "Heroku",icon: },
  ];

  return (
    <Section>
      <Title
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        Technical Proficiencies
      </Title>
      <SkillsGrid>
        <AnimatePresence>
          {inView && skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Icon src={skill.icon} alt={skill.name} />
              {skill.name}
            </Skill>
          ))}
        </AnimatePresence>
      </SkillsGrid>
    </Section>
  );
};
export default SkillsHome;


//attributions 
//<a href="https://iconscout.com/icons/postgresql" target="_blank">Free Postgresql Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a>
//<a href="https://iconscout.com/icons/figma" target="_blank">Free Figma Icon</a> by <a href="https://iconscout.com/contributors/icon-54">Icon 54</a> on <a href="https://iconscout.com">IconScout</a>