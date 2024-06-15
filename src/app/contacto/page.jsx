"use client"

import React, { useState } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import "./page.css"
import emailjs from 'emailjs-com';
import './page.css'; // Importamos los estilos

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error, inténtelo de nuevo');
      });
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      message: ''
    });
  };

  return (
    <>
    <Header/>
    <div className="contact-form-container">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Empresa:
          <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Ciudad:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          País:
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </label>
        <label>
          ¿En qué puedo ayudarte?:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
