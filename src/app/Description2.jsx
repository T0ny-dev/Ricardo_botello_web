import React from 'react';
import Image from 'next/image';
import './Description2.css';

const DescriptionComponent2 = () => {
  return (
    <div className="description-container">
      <div className="photo-container">
        <Image src="https://i.postimg.cc/KjNH0gLT/Component-4.png" alt="Ricardo Botello" width={500} height={500} />
      </div>
      <div className="content-container_b">
        <h1>Ricardo Botello</h1>
        <p>
        Ha impartido charlas sobre superación personal, lenguaje corporal y trabajo en equipo, entre otros temas. Autor de varios libros, sus obras incluyen títulos como; Cómo ser un Orador Eficaz, Hable con Seguridad, De Joven a Joven te reto a triunfar, cómo triunfar como padres, Los mejores inicios y finales, las vacas no dan leche y actualmente se encuentra escribiendo su próximo libro Tácticas. Su estilo es conocido por su sencillez y dinamismo, logrando inspirar a su audiencia a transformar sus vidas positivamente.
        </p>
        <div className="impact-container">
          <div className="impact-images">
            <Image src="/conf.png" alt="Impact 1" width={100} height={100} />
            <Image src="/conf2.png" alt="Impact 2" width={100} height={100} />
          </div>
          <div className="impact-text">
            <h2>Hemos impactado positivamente:</h2>
          </div>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <Image src="/covatec.png" alt="Logo 1" width={100} height={50} />
            <Image src="/tamaulipas.png" alt="Logo 2" width={100} height={50} />
            <Image src="/1.png" alt="Logo 3" width={100} height={50} />
            <Image src="/2.png" alt="Logo 4" width={100} height={50} />
            <Image src="/3.png" alt="Logo 5" width={100} height={50} />
            <Image src="/4.png" alt="Logo 6" width={100} height={50} />
            <Image src="/5.png" alt="Logo 7" width={100} height={50} />
            <Image src="/6.png" alt="Logo 8" width={100} height={50} />
            <Image src="/7.png" alt="Logo 9" width={100} height={50} />
            <Image src="/8.png" alt="Logo 10" width={100} height={50} />
            <Image src="/9.png" alt="Logo 11" width={100} height={50} />
            <Image src="/10.png" alt="Logo 12" width={100} height={50} />
            <Image src="/11.png" alt="Logo 13" width={100} height={50} />
            <Image src="/12.png" alt="Logo 14" width={100} height={50} />
            <Image src="/13.png" alt="Logo 15" width={100} height={50} />
            <Image src="/14.png" alt="Logo 16" width={100} height={50} />
            <Image src="/15.png" alt="Logo 17" width={100} height={50} />
            <Image src="/16.png" alt="Logo 18" width={100} height={50} />
            <Image src="/17.png" alt="Logo 19" width={100} height={50} />
            <Image src="/18.png" alt="Logo 20" width={100} height={50} />
            <Image src="/19.png" alt="Logo 21" width={100} height={50} />
            <Image src="/20.png" alt="Logo 22" width={100} height={50} />
            <Image src="/21.png" alt="Logo 23" width={100} height={50} />
            <Image src="/22.png" alt="Logo 24" width={100} height={50} />
            <Image src="/23.png" alt="Logo 25" width={100} height={50} />
            <Image src="/24.png" alt="Logo 26" width={100} height={50} />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent2;

