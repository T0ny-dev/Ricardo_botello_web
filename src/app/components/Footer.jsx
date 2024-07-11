import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src="logo.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Ricardo Botello es un reconocido orador y escritor mexicano con más de tres décadas de experiencia en conferencias motivacionales. </p>
            </div>
            <div className="footer-column">
                <h4 className="footer-title">Enlaces</h4>
                <ul className="footer-links">
                    <li><a href="/galeria">Galeria</a></li>
                    <li><a href="/conferencias-talleres">Conferencias y Talleres</a></li>
                    <li><a href="/libros-gratis">Libros Gratis</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4 className="footer-title">Contacto</h4>
                <p className="footer-contact">REYNOSA, TAMAULIPAS MX <br></br>
+52 899 204 5868 <br></br>
ricardobotellocisneros@hotmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
