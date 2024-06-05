// src/components/Gallery.jsx
"use client"
import React, { useState } from 'react';
import Thumbnail from './Thumbnail';
import Lightbox from './Lightbox';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Thumbnail key={index} image={image} onClick={() => openLightbox(image)} />
      ))}
      {currentImage && <Lightbox image={currentImage} onClose={closeLightbox} />}
    </div>
  );
};

export default Gallery;
