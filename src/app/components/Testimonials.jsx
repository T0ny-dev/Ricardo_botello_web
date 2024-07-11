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
    </>
  );
};

export default Testimonials;
