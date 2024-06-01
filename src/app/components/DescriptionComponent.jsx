import React from 'react';
import './DescriptionComponent.css';

const DescriptionComponent = () => {
  return (
    <div className="description-container">
      <div className="photo-container">
        <img src="/perfil_rb.png" alt="Ricardo Botello" />
      </div>
      <div className="content-container_b">
        <h1>Ricardo Botello</h1>
        <p> Ha impartido charlas sobre superación personal, lenguaje corporal y trabajo en equipo, entre otros temas. Autor de varios libros, su obra incluye títulos como "Cómo ser un Orador Eficaz" y "Hable con Seguridad". Su estilo es conocido por su sencillez y dinamismo, logrando inspirar a su audiencia a transformar sus vidas positivamente​</p>
        <div className="impact-container">
          <div className="impact-images">
            <img src="/conf.png" alt="Impact 1" />
            <img src="/conf2.png" alt="Impact 2" />
          </div>
          <div className="impact-text">
            <h2>Hemos impactado positivamente:</h2>
          </div>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <img src="/covatec.png" alt="Logo 1" />
            <img src="/tamaulipas.png" alt="Logo 2" />
            <img src="1.png" alt="Logo 3" />
            <img src="2.png" alt="Logo 3" />
            <img src="3.png" alt="Logo 3" />
            <img src="4.png" alt="Logo 3" />
            <img src="5.png" alt="Logo 3" />
            <img src="6.png" alt="Logo 3" />
            <img src="7.png" alt="Logo 3" />
            <img src="8.png" alt="Logo 3" />
            <img src="9.png" alt="Logo 3" />
            <img src="10.png" alt="Logo 3" />
            <img src="11.png" alt="Logo 3" />
            <img src="12.png" alt="Logo 3" />
            <img src="13.png" alt="Logo 3" />
            <img src="14.png" alt="Logo 3" />
            <img src="15.png" alt="Logo 3" />
            <img src="16.png" alt="Logo 3" />
            <img src="17.png" alt="Logo 3" />
            <img src="18.png" alt="Logo 3" />
            <img src="19.png" alt="Logo 3" />
            <img src="20.png" alt="Logo 3" />
            <img src="21.png" alt="Logo 3" />
            <img src="22.png" alt="Logo 3" />
            <img src="23.png" alt="Logo 3" />
            <img src="24.png" alt="Logo 3" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
