// import React from 'react';
// import { motion } from 'framer-motion';

// const ImageModal = ({ image, onClose }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="modal-background"
//       onClick={onClose}
//     >
//       <motion.img 
//         src={image} 
//         alt="Enlarged pic" 
//         initial={{ y: "-100vh" }}
//         animate={{ y: "0" }}
//       />
//     </motion.div>
//   );
// };

// export default ImageModal;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

const ImageModal = ({ images, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-background"
      onClick={onClose}
    >
      <Carousel showThumbs={true} infiniteLoop={true} autoPlay={false}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Project screenshot ${idx + 1}`} />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ImageModal;
