"use client"
import React, { useState, useEffect } from 'react';
import './RibbonComponent.css';

const phrases = [
  "Inspire with passion - Ricardo Botello",
  "Create with purpose - Ricardo Botello",
  "Achieve with determination - Ricardo Botello",
  "Lead with integrity - Ricardo Botello",
  "Dream with ambition - Ricardo Botello"
];

const RibbonComponent = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ribbon">
      <div className="ribbon-content">
        <div className="static-phrase">
          Motivacion con frases en vivo
        </div>
        <div className="dynamic-phrase">
          {phrases[currentPhraseIndex]}
        </div>
      </div>
    </div>
  );
};

export default RibbonComponent;
