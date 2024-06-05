import React from 'react';
import './ImageTextComponent.css';

const ImageTextComponent = () => {
  return (
    <div className="image-text-container">
      <div className="image-container_i">
        <img src="img.png" alt="Descriptive Alt Text" />
      </div>
      <div className="text-container">
        <h1>Lleva tu equipo a un nivel mas alto</h1>
        <p>Ricardo Botello es un reconocido orador y escritor mexicano con más de tres décadas de experiencia en conferencias motivacionales. Originario de Río Bravo. “Llleva tu equipo a un nivel mas alto.</p>
        <a href="/galeria">
          <button className="button_primary_video">Revive los momento en la galeria</button>
        </a>
      </div>
    </div>
  );
};

export default ImageTextComponent;
