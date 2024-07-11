import React from 'react';
import './page.css';
import Header from "../components/Header";
import Footer from '../components/Footer';

function TarjetaDigital() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="top-container">
          <div className="logo_v"><img src="logobt.png" alt="" /></div>
          <img src="/perfil.png" alt="Placeholder" className="image" />
          <video autoPlay muted loop className="background-video">
            <source src="/bg3.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="bottom-container">
          <h1>Tarjeta Digital</h1>
          <ul className="links-list">
            <li><a href="https://wa.link/mbn8sx"><img src="/what.svg" alt="" />WhatsApp</a></li>
            <li><a href="#link2">ricardobotellocisneros@hotmail.com</a></li>
            <li><a href="https://www.facebook.com/share/X7yCVtoNQuJF6Atu/?mibextid=qi2Omg">Facebook</a></li>
            <li><a href="https://www.instagram.com/ricardoconferencista?igsh=eHhnb2V4Y21kaTQ3">Instagram</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TarjetaDigital;
