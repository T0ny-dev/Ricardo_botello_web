import React from 'react';
import './BookPromotionComponent.css';

const BookPromotionComponent = () => {
  return (
    <div className="book-promotion-container">
      <div className="text-container">
        <h1 className="title-gradient">Disponible ahora</h1>
        <p className="description">Ricardo Botello siempre había soñado con explorar los rincones más recónditos del mundo. Desde niño, los mapas antiguos y las historias de navegantes intrépidos despertaban en él un deseo incontenible de descubrir lo desconocido. Así, con la brújula de su abuelo en mano y una mochila llena de sueños, decidió emprender un viaje que cambiaría su vida para siempre.</p>
        <div className="button-container">
          <button className="button_primary_video">tener libro fisico</button>
          <button className="button_secondary">Libros Gratis</button>
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
