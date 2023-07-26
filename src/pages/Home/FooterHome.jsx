import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./home.css";

const FooterAnimation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  console.log('Is in view:', inView); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
        </div>
      </motion.div>
    </div>
  );
};

export default FooterAnimation;
