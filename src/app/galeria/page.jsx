"use client"

import Gallery from "../components/Gallery";
import Header from "../components/Header"
import BackgroundContainer from "../components/BackgroundContainer";
import Title from "../components/ui/title";
import BookPromotionComponent from "../components/BookPromotionComponent";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";


function Galeria() {

  const images = [
    { src: '/evento.jpg', },
    { src: '/evento2.jpg', },
    { src: '/evento3.jpg', },
    { src: '/evento5.jpg', },
    { src: '/evento6.jpg', },
    { src: '/evento7.jpg',  },
    { src: '/evento8.jpg',  },
    { src: '/evento9.jpg',  },
    { src: '/evento11.jpg', },
    { src: '/evento13.jpg', },
    { src: '/evento14.jpg', },
    { src: '/evento15.jpg', },
    { src: '/evento16.jpg', },
    { src: '/evento17.jpg', },
    { src: '/b1.jpg', },
    { src: '/b2.jpg', },
    { src: '/b3.jpg', },
    { src: '/b4.jpg', },
    { src: '/b5.jpg', },
    { src: '/b6.jpg', },
    
    // Add more images here
  ];

  return (
    <div>
      <Header/>
      <NavbarMobile/>
      <BackgroundContainer title="Galeria"/>
      <Title title={"Fotos"}/>
      <Gallery images={images} />
      <BookPromotionComponent/>
      <Footer/>
    </div>
  )
}

export default Galeria;