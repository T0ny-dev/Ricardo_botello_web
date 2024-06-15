import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src="logo.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Ricardo Botello siempre había soñado con explorar los rincones más recónditos del mundo.</p>
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
                <p className="footer-contact">Rio Bravo, Tamaulipas, MX <br></br>
+52 899 445 45578 <br></br>
botello@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
