import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      src: "https://drive.google.com/file/d/1wysOpoiojaS4uo4SdBb0CsIXJ2hTywjF/preview",
    },

    {
      id: 2,
      src: "https://drive.google.com/file/d/1r04zfxxeHARuG2ctBXNVOI-AF104BW4r/preview",
    },
    {
      id: 3,
      src: "https://drive.google.com/file/d/1OH3_pywpIazlWyeTefIHSpq17q1Ytj29/preview",
    },
    {
      id: 4,
      src: "https://drive.google.com/file/d/11FB9XhW_0qz0YL7qk6kT-PHmHCmpm2Ec/preview",
    },

    // Agrega más objetos de video aquí si tienes más URLs
  ];

  return (
    <>
    <div className="testimonials-container">
      <h2>Testimoniales y casos de éxito</h2>
      <hr />
      <div className="testimonials-scroll">
        {videos.map(video => (
          <iframe
            key={video.id}
            src={video.src}
            width="440"
            height="280"
            allow="autoplay"
            title={`video-${video.id}`}
          ></iframe>
        ))}
      </div>
    </div>
    <div className='testimonial-p-box'>
      <p className='testimonial-p'>Ha impartido charlas sobre superación personal, lenguaje corporal y trabajo en equipo, entre otros temas. Autor de varios libros, sus obras incluyen títulos como; “Cómo ser un Orador Eficaz”, “Hable con Seguridad”, “De Joven a Joven te reto a triunfar”, “cómo triunfar como padres”, “Los mejores inicios y finales”, “las vacas no dan leche” y actualmente se encuentra escribiendo su próximo libro “Tácticas”. Su estilo es conocido por su sencillez y dinamismo, logrando inspirar a su audiencia a transformar sus vidas positivamente. </p>
    </div>
    </>
  );
};

export default Testimonials;
