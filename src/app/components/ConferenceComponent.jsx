import React from 'react';
import './ConferenceComponent.css';

const ConferenceComponent = () => {
  return (
    <div className="conference-container">
      <div className="content">
        <h1>Conferencia en tu empresa</h1>
        <p>Ricardo Botello es un reconocido orador y escritor mexicano con más de tres décadas de experiencia en conferencias motivacionales. Originario de Río Bravo. “Llleva tu equipo a un nivel mas alto.</p>
        <button className="button_primary_video">¿Quieres conferencia en tu empresa?</button>
      </div>
    </div>
  );
};

export default ConferenceComponent;
