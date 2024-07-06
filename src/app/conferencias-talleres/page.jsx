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
    title: "Dialogando con valores",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/40.jpg",
  },
  {
    title: "Desiciones que cambian vidas",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/41.jpg",
  },
  {
    title: "Transformando tu cada en la época del Facebook",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/42.jpg",
  },

  {
    title: "Emprender para crecer",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/44.jpg",
  },
  {
    title: "Cuando los elefantes pelean",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/45.jpg",
  },
  {
    title: "El otro lado de la moneda",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/46.jpg",
  },
  {
    title: "Hay líderes que dejan Huella",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/47.jpg",
  },
  {
    title: "Generando más ventas",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/48.jpg",
  },
  {
    title: "5 consejos para ganar certamenes",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/49.jpg",
  },
  {
    title: "Estudiate con actitud",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/50.jpg",
  },
  {
    title: "Estrés laboral",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/51.jpg",
  },
  {
    title: "Mujeres que tocan",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/52.jpg",
  },
  {
    title: "Mujeres con carácter",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/53.jpg",
  },
  {
    title: "Es enserio, los hombres tambien lloran",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/54.jpg",
  },
  {
    title: "La disciplina siempre será tu fuerte",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/55.jpg",
  },
  {
    title: "No son ellos, somos nosotros",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/56.jpg",
  },
  {
    title: "¿Nervios al hablar en público?",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/57.jpg",
  },
  {
    title: "cómo camviar tu vida en 58 segundos",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/58.jpg",
  },
  {
    title: "Nada es más caro que lo gratis",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/59.jpg",
  },
  {
    title: "La disciplina nos hace campeones",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/60.jpg",
  },
  {
    title: "Para poder seguir",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/61.jpg",
  },
  {
    title: "Papá-Mamá ¡Estamos a tíempo!",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/62.jpg",
  },
  {
    title: "Papá, Mamá; Escuchame por favor",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/63.jpg",
  },
  {
    title: "No todo lo puedes dar",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/64.jpg",
  },
  {
    title: "¡Qué padre ser padres!",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/65.jpg",
  },
  {
    title: "ke onda kon tu vida",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/66.jpg",
  },
  {
    title: "Sonrie otra vez",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/67.jpg",
  },
  {
    title: "preparate para la uni",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/68.jpg",
  },
  {
    title: "sus primeros pasos",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/69.jpg",
  },
  {
    title: "Pensando en ser lider",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/70.jpg",
  },
  {
    title: "¿sin batería?",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/71.jpg",
  },
  {
    title: "Shh! ¡tengo que decirte!",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/72.jpg",
  },
  {
    title: "Se el piloto de tu vuelo",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/73.jpg",
  },
  {
    title: "sácale actitud positiva al mal tiempo",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/74.jpg",
  },
  {
    title: "Trabja con pasión para servir por convicción",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/75.jpg",
  },
  {
    title: "Top líderer; Lo que nadie se atereve a decirte",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/76.jpg",
  },
  {
    title: "Tiende tú cama; Cambia el mundo",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/77.jpg",
  },
  {
    title: "solución de conflictos",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/78.jpg",
  },
  {
    title: "Dale like a la sinergia",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/79.jpg",
  },
  {
    title: "Y como por que las mujeres",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/80.jpg",
  },
  {
    title: "¿Y despues de la secu qué?",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/81.jpg",
  },
  {
    title: "Yo puedo, se que puedo",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/82.jpg",
  },
  {
    title: "Tú sí puedes; Hazlo bien",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/83.jpg",
  },
  {
    title: "Tú naciste para ser un lider",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/84.jpg",
  },
  {
    title: "Motivación, liderazgo y trabajo en equipo",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/85.jpg",
  },
  {
    title: "Yo tengo una misión servir a los demás",
    description: "Taller",
    link: "https://example.com/libro2",
    image: "/86.jpg",
  },
  {
    title: "¿y su nos ponemos de acuerdo?",
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