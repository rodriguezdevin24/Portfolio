import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { useSwipeable } from 'react-swipeable';
import "./projects.css";


export default function Carousel3D(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const handleSwipedLeft = () => {
    if (goToSlide === cards.length - 1) {
      setGoToSlide(0); // Reset to the first slide
    } else {
      setGoToSlide(prev => prev + 1);
    }
  };
  
  const handleSwipedRight = () => {
    if (goToSlide === 0) {
      setGoToSlide(cards.length - 1); // Set to the last slide
    } else {
      setGoToSlide(prev => prev - 1);
    }
  };
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight
  });


  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }} {...swipeHandlers}
    >
      {/* <Swipeable onSwipedLeft={handleSwipedLeft} onSwipedRight={handleSwipedRight}> */}
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      {/* </Swipeable> */}
    </div>
  );
}
