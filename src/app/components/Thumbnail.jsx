// src/components/Thumbnail.jsx
"use client"
import React from 'react';
import './Thumbnail.css';

const Thumbnail = ({ image, onClick }) => {
  return (
    <div className="thumbnail" onClick={onClick}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Thumbnail;
