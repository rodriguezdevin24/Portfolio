import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const ProjectCard = ({ className }) => {
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
    <div ref={tiltRef} className={`projectCard rgb ${className}`}>
    </div>
  );
};

export default ProjectCard;
