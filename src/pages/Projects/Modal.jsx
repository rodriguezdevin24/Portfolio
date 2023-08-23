import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content">
        <img src={project.imgSrc} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
