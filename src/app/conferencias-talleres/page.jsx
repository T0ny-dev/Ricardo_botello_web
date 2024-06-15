import BackgroundContainer from "../components/BackgroundContainer";
import Header from "../components/Header";
import NavbarMobile from "../components/NavbarMobile";
import RibbonWhatsAppComponent from "../components/RibbonWhatsAppComponent";
import BookPromotionComponent from "../components/BookPromotionComponent";
import Footer from "../components/Footer";
import BookList from "../components/BookList";
import "./page.css"


const books = [
  {
    title: "Animo: con un giro a tu vida",
    description: "Conferencia",
    link: "https://example.com/libro1",
    image: "/animo.jpeg",
  },
  {
    title: "Amor forever",
    description: "Conferencia",
    link: "https://example.com/libro2",
    image: "/amor.jpg",
  },
  {
    title: "Actitudes Positivas: Para construir el nuevo liderazgo politico",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/actitud.jpg",
  },
  {
    title: "Desde Ahora: seré el mejor",
    description: "Conferencia",
    link: "https://example.com/libro2",
    image: "/ahora.jpg",
  },
  {
    title: "Con judas no discutas, ellos se ahorcan solos...",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/judas.jpg",
  },
  {
    title: "Como triundar como padre: lo que tus hijos piden a gritos",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/padres.jpg",
  },
  {
    title: "Cambia tu vida en 58 segundos, ahora si voy ser feliz",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/58.jpg",
  },
  {
    title: "5 Minutitos mas, para hacerlo solo hay que querer",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/5m.jpg",
  },
  {
    title: "Con buen servicio, ganemos mas clientres",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/buen.jpg",
  },
  {
    title: "De joven a joven ,te reto a triunfar",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/triunfa.jpg",
  },
  {
    title: "Cuando lo importante no es el que diran",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/import.jpg",
  },
  {
    title: "Construye con actitud, estrategias para cambiar tu vida",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/cont.jpg",
  },
  {
    title: "o Nos adaptamos o morimos en el intento",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/nos.jpg",
  },
  {
    title: "El bullying en los tiempos del facebook",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/bull.jpg",
  },
  {
    title: "2 son mas que 1 ",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/son2.jpg",
  },
  {
    title: "Donde pongo mi atencion no hay quien me gane ",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/pongo.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/40.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/41.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/42.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/43.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/44.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/45.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/46.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/47.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/48.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/49.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/50.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/51.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/52.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/53.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/54.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/55.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/56.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/57.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/58.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/59.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/60.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/61.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/62.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/63.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/64.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/65.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/66.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/67.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/68.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/69.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/70.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/71.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/72.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/73.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/74.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/75.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/76.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/77.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/78.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/79.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/80.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/81.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/82.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/83.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/84.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/85.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/86.jpg",
  },
  {
    title: "Donde pongo mi atención no hay quien me gane",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/87.jpg",
  },
  // Agrega más libros según sea necesario
];

function Libros() {
  return (
    <div>
      <Header/>
      <NavbarMobile/>
      <BackgroundContainer title="Conferencias y talleres" />
      <RibbonWhatsAppComponent/>
      <BookList books={books} />
      <BookPromotionComponent/>
      <Footer/>
    </div>
  )
}

export default Libros;