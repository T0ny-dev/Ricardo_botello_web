import React from 'react';
import './RibbonWhatsAppComponent.css';

const RibbonWhatsAppComponent = () => {
  return (
    <div className="ribbon">
      <div className="ribbon-content">
        <span className="help-phrase">¿Necesitas ayuda? Hablemos por WhatsApp</span>
        <a href="https://wa.link/mbn8sx" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        Escribir por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default RibbonWhatsAppComponent;
