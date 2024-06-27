import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      src: "https://drive.google.com/file/d/1KUhtBrZPpXVYsQ1RxtZHPbixPgt6Z1uR/preview",
    },

    {
      id: 2,
      src: "https://drive.google.com/file/d/1ZKcZ_aVxgJXAF95nQ2NTfz1VQ16iDu_i/preview",
    },

    // Agrega más objetos de video aquí si tienes más URLs
  ];

  return (
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
  );
};

export default Testimonials;
