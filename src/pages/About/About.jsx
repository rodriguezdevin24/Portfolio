import React from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';
import Introduction from './Introduction';
import EarlyLife from './EarlyLife';

// gsap.registerPlugin(ScrollTrigger);

 const About = () => {
//   useEffect(() => {
//     let panels = gsap.utils.toArray(".panel");

//     panels.forEach((panel) => {
//       ScrollTrigger.create({
//         trigger: panel,
//         start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
//         pin: true, 
//         pinSpacing: false 
//       });
//     });

//     ScrollTrigger.create({
//       snap: {
//         snapTo: 1 / (panels.length - 1),
//         duration: 0.5
//       }
//     });
//   }, []);

  return (
    <main>
      <Introduction />
      {/* <div className="panel black"></div> */}
      <EarlyLife />
      {/* Add more sections as needed */}
    </main>
  );
};

export default About;
