import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/Footer/Footer";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import space from "./space.glb";

import "./home.css";

const FooterAnimation = () => {
  const controls = useAnimation();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.8,
  });


  const { nodes, animations } = useGLTF(space);
  
  const { ref } = useAnimation(animations, nodes.Sketchfab_model);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={inViewRef} className="body">
      <motion.div
        className="dot"
        animate={controls}
        initial="hidden"
        variants={{
          visible: { clipPath: `circle(100%)`, transition: { duration: 3 } },
          hidden: { clipPath: `circle(0%)`, transition: { duration: 1 } },
        }}
      >
        <div className="space-container">
        <div className="interactive-indicator">
  Click and drag up here to interact
</div>
        <Canvas style={{ position: "absolute" }}>
          <primitive
            ref={ref}
            object={nodes.Sketchfab_model}
            position={[-90, -90, 89]}
            scale={[0.7, 0.7, 0.8]}
          />
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
          <OrbitControls enablePan={true} panSpeed={0.5} />
        </Canvas>
        </div>
        <div className="content">
          <h1 className="title">
            <motion.div
              animate={controls}
              className="starsUpText"
              initial="hidden"
              variants={{
                visible: { y: "0%", opacity: 1, transition: { delay: 1 } },
                hidden: { y: "100%", opacity: 0 },
              }}
            >
              Come explore my universe and embark with me on my journey!
            </motion.div>
          </h1>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: "0%", opacity: 1, transition: { delay: 1.5 }, paddingTop: "10rem" },
              hidden: { y: "100%", opacity: 0 },
            }}
          >
            <a
              href="mailto:rodriguezdevin24@gmail.com"
              className="contact-button"
            >
              Get in contact
            </a>
          </motion.div>

          <motion.div
            animate={controls}
            className="starsText"
            initial="hidden"
            variants={{
              visible: { y: "0%", opacity: 1, transition: { delay: 2 } },
              hidden: { y: "100%", opacity: 0 },
            }}
          >
            Together we can reach the stars..
          </motion.div>
          <motion.div
            className="footer-wrapper"
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: "0%", opacity: 1, transition: { delay: 2.3 } },
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
