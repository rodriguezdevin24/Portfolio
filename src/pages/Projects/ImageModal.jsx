import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ image, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-background"
      onClick={onClose}
    >
      <motion.img 
        src={image} 
        alt="Enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default ImageModal;
