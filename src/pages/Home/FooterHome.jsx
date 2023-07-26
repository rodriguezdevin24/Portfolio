import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./home.css";

const FooterAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();

  const { y } = useSpring({
    y: isVisible ? "0%" : "100%",
    config: { duration: 1000 },
  });

  const { r } = useSpring({
    r: isVisible ? Math.min(100, scrollY) : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.bottom < window.innerHeight) {
          setIsVisible(true);
          // Calculate scroll position relative to the footer section
          const relativeScrollY = ((window.innerHeight - rect.top) / window.innerHeight) * 100;
          setScrollY(relativeScrollY);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="body">
      <animated.div
        className="dot"
        style={{
          clipPath: r.to((val) => `circle(${val}%)`),
        }}
      >
        <div className="content">
          <h1 className="title">
            <animated.div style={{ y }}>
              {r.to((val) => (val === 100 ? "If you like what you see, come embark with me on my journey!" : ""))}
            </animated.div>
          </h1>
          <animated.div style={{ opacity: r.to((val) => (val === 100 ? 1 : 0)) }}>
            <button className="contact-button">Get in contact</button>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};

export default FooterAnimation;
