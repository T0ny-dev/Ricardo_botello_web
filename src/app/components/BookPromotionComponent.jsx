import React from 'react';
import './BookPromotionComponent.css';

const BookPromotionComponent = () => {
  return (
    <div className="book-promotion-container">
      <div className="text-container">
        <h1 className="title-gradient">Próximamente</h1>
        <p className="description">¡Es la hora de convertirte en un líder que tenga influencia positiva! 
        Este libro aprenderás a dominar las tácticas para hablar con poder e influir en las personas...</p>
        <div className="button-container">
          <button className="button_primary_video">tener libro fisico</button>
          <a href="/libros-gratis" style={{textDecoration:"none"}}>
            <button className="button_secondary">Libros Gratis</button>
          </a>
        </div>
      </div>
      <div className="image-container">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="libro.png" alt="Libro" />
        {/* eslint-enable @next/next/no-img-element */}
      </div>
    </div>
  );
};

export default BookPromotionComponent;
