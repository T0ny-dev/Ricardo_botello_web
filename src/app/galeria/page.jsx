"use client"

import Gallery from "../components/Gallery";
import Header from "../components/Header"
import BackgroundContainer from "../components/BackgroundContainer";
import Title from "../components/ui/title";
import BookPromotionComponent from "../components/BookPromotionComponent";
import Footer from "../components/Footer";


function Galeria() {

  const images = [
    { src: '/1.png', alt: 'Description 1' },
    { src: '/2.png', alt: 'Description 2' },
    { src: '/1.png', alt: 'Description 1' },
    { src: '/2.png', alt: 'Description 2' },
    { src: '/1.png', alt: 'Description 1' },
    { src: '/2.png', alt: 'Description 2' },
    { src: '/1.png', alt: 'Description 1' },
    { src: '/2.png', alt: 'Description 2' },
    { src: '/1.png', alt: 'Description 1' },
    { src: '/2.png', alt: 'Description 2' },
    // Add more images here
  ];

  return (
    <div>
      <Header/>
      <BackgroundContainer title="Galeria"/>
      <Title title={"Fotos"}/>
      <Gallery images={images} />
      <BookPromotionComponent/>
      <Footer/>
    </div>
  )
}

export default Galeria;