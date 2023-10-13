import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Star from './Star';

const AnimatedStars = () => {
  useEffect(() => {
    // GSAP animation code will go here
    gsap.to(".star", {
      duration: 2, 
      x: index => index % 2 === 0 ? "100vw" : "-100vw",
      y: index => index % 2 === 0 ? "100vh" : "-100vh",
      repeat: -1,
      ease: "linear"
    });
  }, []);

  // Example stars
  const stars = [
    { size: 5, top: 10, left: 15 },
    { size: 3, top: 20, left: 25 },
    { size: 4, top: 30, left: 35 },
    // More stars...
  ];

  return (
    <>
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </>
  );
};

export default AnimatedStars;
