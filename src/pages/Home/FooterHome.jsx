import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/Footer/Footer";
import { Canvas } from "@react-three/fiber";
import {  Stars } from "@react-three/drei";


import "./home.css";
import { styled } from "styled-components";

const FooterAnimation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  console.log("Is in view:", inView);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  const Section = styled.section`
  
  `;
  
  
  return (
   
    <div ref={ref} className="body">
      <motion.div
        className="dot"
        animate={controls}
        initial="hidden"
        variants={{
          visible: { clipPath: `circle(100%)`, transition: { duration: 3 } },
          hidden: { clipPath: `circle(0%)`, transition: { duration: 1 } },
        }}
      >
          <Canvas style={{ position: "absolute" }}>
          <Stars />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        <div className="content">
          <h1 className="title">
            <motion.div
              animate={controls}
              initial="hidden"
              variants={{
                visible: { y: "0%", opacity: 1, transition: { delay: 1 } },
                hidden: { y: "100%", opacity: 0 },
              }}
            >
              If you like what you see, come embark with me on my journey!
            </motion.div>
          </h1>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: "0%", opacity: 1, transition: { delay: 1.5 } },
              hidden: { y: "100%", opacity: 0 },
            }}
          >
            <button className="contact-button">Get in contact</button>
          </motion.div>
          <motion.div
            className="footer-wrapper"
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: "0%", opacity: 1, transition: { delay: 1.8 } },
              hidden: { y: "100%", opacity: 0 },
            }}
          >
            <Footer className="footer-black" />
          </motion.div>
        </div>
      </motion.div>
    </div>
 
 );
};

export default FooterAnimation;
