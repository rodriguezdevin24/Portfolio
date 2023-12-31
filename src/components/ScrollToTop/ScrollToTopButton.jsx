import React, { useState, useEffect } from 'react';
import './scrolltotop.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <p>Scroll to top</p>
        
          <img
            src="/down-icon.png"
            alt="Down"
            style={{ width: "30px", height: "30px", rotate: "180deg" }}
          />
      
        </div>}
    </div>
  );
}

export default ScrollToTopButton;
