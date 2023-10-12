// //EarlyLife.jsx
// import React from "react";
// import "./about.css";
// import devin from "./devin.jpeg"; 

// const EarlyLife = () => {
//   return (
//     <section 
//     id="earlyLife"
//     className="early-life-section d-flex align-items-center panel orange">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <img src={devin} alt="Early Life" className="early-life-image" />
//           </div>
//           <div className="col-md-6">
//             {/* <div className="early-life-container"> */}
//               <h1 className="early-life-h1">Early Life</h1>
//               <h2 className="early-life-subtitle">The Roots of a Developer</h2>
//               <p className="early-life-text">
//                 I was born in New York City to two hardworking immigrants. From a young age, it was always apparent that I was a very curious person by nature.
//                 []
//               </p>
//             </div>
//           </div>
//         {/* </div>  */}
//         {/* Add stickers of your baby self or maybe a cool way of showing a video of baby you. use parallaxg */}
//       </div>
//     </section>
//   );
// };

// export default EarlyLife;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

const EarlyLife = () => {
  const panelContainerRef = useRef(null);

  useEffect(() => {
    if (!panelContainerRef.current) return;

    const panels = gsap.utils.toArray(".panel");
    const tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map(st => st.start),
              snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5
      }
    });

  }, []);

  return (
    <div ref={panelContainerRef}>
      <div className="description panel blue">
        <div>
          <h1>Variable height stacked pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">Scroll down<div className="arrow"></div></div>
        </div>
      </div>

      <section className="panel red">
        ONE
      </section>
      <section className="panel orange" style={{ height: '220vh' }}>
        TWO
      </section>
      <section className="panel purple" style={{ height: '50vh' }}>
        THREE
      </section>
      <section className="panel green">
        FOUR
      </section>
    </div>
  );
};

export default EarlyLife;
