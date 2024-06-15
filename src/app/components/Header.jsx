"use client"
import React, { useState } from 'react';
import './Header.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </a>
      </div>
      <ul>
        <a href="/">Inicio</a>
        <a href="/galeria">Galería</a>
        <a href="/conferencias-talleres">Conferencias y Talleres</a>
        <a href="/libros-gratis">Libros Gratis</a>
      </ul>
      <div className="profile-container">
        <span onClick={toggleDropdown} className="profile-name">Ricardo Botello</span>
        {isDropdownOpen && (
          <div className="dropdown">
            <a href="#whoami">Quién Soy</a>
            <hr />
            <a href="https://conferencistas.eu/botello/" target="_blank" rel="noopener noreferrer">Verme en Conferencistas.eu</a>
            <hr />
            <a href="/tarjeta-digital">Tarjeta Digital</a>
          </div>
        )}
      </div>
      <button className="button_primary_header">Contacto</button>
    </nav>
  );
};

export default Navbar;
