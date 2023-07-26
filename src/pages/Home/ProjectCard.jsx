import React, { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import "./home.css";


const ProjectCard = () => {
  const tiltRef = useRef();

  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 30,
      speed: 200,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="projectCard rgb">
      {/* Content of the card goes here */}
    </div>
  );
};

export default ProjectCard;
