"use client"

import React, { useState } from 'react';
import './NavbarMobile.css';

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-mobile">
      <div className="navbar-header">
        <div className="logo"><img src="logo.png" alt="Logo" className="logo" /></div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Icono de 3 líneas */}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/conferencias-talleres">Conferencias y Talleres</a></li>
            <li><a href="/libros-gratis">Libros gratis</a></li>
            <li><a href="/contacto">Quien soy</a></li>
            <li><a href="https://conferencistas.eu/botello/" target='_blank' >Verme en Conferencistas.eu</a></li>
            <li><a href="/tarjeta-digital">Tarjeta Digital</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
