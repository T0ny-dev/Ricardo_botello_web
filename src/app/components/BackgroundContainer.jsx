import React from 'react';
import './BackgroundContainer.css';

const BackgroundContainer = ({ title }) => {
  return (
    <div className="background-container">
      <div className="overlay"></div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default BackgroundContainer;
