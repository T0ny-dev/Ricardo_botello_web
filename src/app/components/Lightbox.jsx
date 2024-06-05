// src/components/Lightbox.jsx
import React from 'react';
import './Lightbox.css';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <span className="lightbox-close">&times;</span>
      <img className="lightbox-content" src={image.src} alt={image.alt} />
      <div className="lightbox-caption">{image.alt}</div>
    </div>
  );
};

export default Lightbox;
