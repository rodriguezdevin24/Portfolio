import React, { useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './projects.css';

const Carousel = ({ projects }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const [props, api] = useSprings(projects.length, i => ({
    x: (i - current) * window.innerWidth,
    scale: 1,
    display: 'block'
  }));

  const bind = useGesture({
    onDrag: ({ direction: [xDir], down, distance, cancel }) => {
      if (down && distance > window.innerWidth / 2) {
        setCurrent(prev => (prev + (xDir > 0 ? -1 : 1) + projects.length) % projects.length);
        cancel();
      }
      api.start(i => {
        if (i < current - 1 || i > current + 1) return { display: 'none' };
        const x = (i - current) * window.innerWidth + (down ? xDir * distance : 0);
        const scale = down ? 1.1 : 1;
        return { x, scale, display: 'block' };
      });
    }
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel-container">
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          key={i}
          {...bind()}
          style={{
            display,
            transform: x.to(xVal => `perspective(1500px) translateX(${xVal}px) scale(${scale})`),
            width: '100vw',
            height: '80vh',
            overflow: 'hidden',
            willChange: 'transform'
          }}
        >
          <div className="card1">
            <div className="card-imgs">
              {projects[i].images.slice(0, 4).map((img, idx) => (
                <img key={idx} src={img} alt={`Project screenshot ${idx + 1}`} className="carousel-image" />
              ))}
            </div>
            <div className="card-info">
              <h4>{projects[i].title}</h4>
              <p>{projects[i].description}</p>
              <div className="button-container">
                <button className="project-button">
                  <a href={projects[i].githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </button>
                <button className="project-button">
                  <a href={projects[i].deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed
                  </a>
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>Prev</button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
