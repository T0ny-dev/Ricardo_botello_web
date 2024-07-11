import React from 'react';
import './VideoBackgroundComponent.css';

const VideoBackgroundComponent = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src="/bg3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="content-container">
        <div className="logos">
          {/* Logos go here */}
          <img src="logobt.png" alt="Logo 1" />
          <img src="conf.png" alt="Logo 2" />
          {/* Add more logos as needed */}
        </div>
        <div className="title">
          <h1 id='title_description'>Ricardo Botello es un reconocido orador y escritor tamaulipeco con más de tres décadas de experiencia en conferencias motivacionales. Originario de Tamaulipas. “Lleva tu equipo a un nivel más alto.</h1>
        </div>
        <div className="buttons">
          <a href="https://wa.link/mbn8sx">
            <button className="button_primary_video">Asesoría personal</button>
          </a>
          <a href="https://wa.link/mbn8sx">
            <button className="button_secondary">Conferencia en tu empresa</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundComponent;
