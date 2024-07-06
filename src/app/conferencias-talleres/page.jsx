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
    image: "/animo.jpeg",
  },
  {
    title: "Amor forever",
    description: "Conferencia",
    image: "/amor.jpg",
  },
  {
    title: "Actitudes Positivas: Para construir el nuevo liderazgo politico",
    description: "Taller",
    image: "/actitud.jpg",
  },
  {
    title: "Desde Ahora: seré el mejor",
    description: "Conferencia",
    image: "/ahora.jpg",
  },
  {
    title: "Con judas no discutas, ellos se ahorcan solos...",
    description: "Taller",
    image: "/judas.jpg",
  },
  {
    title: "Como triundar como padre: lo que tus hijos piden a gritos",
    description: "Taller",
    image: "/padres.jpg",
  },
  {
    title: "Cambia tu vida en 58 segundos, ahora si voy ser feliz",
    description: "Taller",
    image: "/58.jpg",
  },
  {
    title: "5 Minutitos mas, para hacerlo solo hay que querer",
    description: "Taller",
    image: "/5m.jpg",
  },
  {
    title: "Con buen servicio, ganemos mas clientres",
    description: "Taller",
    image: "/buen.jpg",
  },
  {
    title: "De joven a joven ,te reto a triunfar",
    description: "Taller",
    image: "/triunfa.jpg",
  },
  {
    title: "Cuando lo importante no es el que diran",
    description: "Taller",
    image: "/import.jpg",
  },
  {
    title: "Construye con actitud, estrategias para cambiar tu vida",
    description: "Taller",
    image: "/cont.jpg",
  },
  {
    title: "o Nos adaptamos o morimos en el intento",
    description: "Taller",
    image: "/nos.jpg",
  },
  {
    title: "El bullying en los tiempos del facebook",
    description: "Taller",
    image: "/bull.jpg",
  },
  {
    title: "2 son mas que 1 ",
    description: "Taller",
    image: "/son2.jpg",
  },
  {
    title: "Donde pongo mi atencion no hay quien me gane ",
    description: "Taller",
    image: "/pongo.jpg",
  },
  {
    title: "Dialogando con valores",
    description: "Taller",
    image: "/40.jpg",
  },
  {
    title: "Desiciones que cambian vidas",
    description: "Taller",
    image: "/41.jpg",
  },
  {
    title: "Transformando tu cada en la época del Facebook",
    description: "Taller",
    image: "/42.jpg",
  },

  {
    title: "Emprender para crecer",
    description: "Taller",
    image: "/44.jpg",
  },
  {
    title: "Cuando los elefantes pelean",
    description: "Taller",
    image: "/45.jpg",
  },
  {
    title: "El otro lado de la moneda",
    description: "Taller",
    image: "/46.jpg",
  },
  {
    title: "Hay líderes que dejan Huella",
    description: "Taller",
    image: "/47.jpg",
  },
  {
    title: "Generando más ventas",
    description: "Taller",
    image: "/48.jpg",
  },
  {
    title: "5 consejos para ganar certamenes",
    description: "Taller",
    image: "/49.jpg",
  },
  {
    title: "Estudiate con actitud",
    description: "Taller",
    image: "/50.jpg",
  },
  {
    title: "Estrés laboral",
    description: "Taller",
    image: "/51.jpg",
  },
  {
    title: "Mujeres que tocan",
    description: "Taller",
    image: "/52.jpg",
  },
  {
    title: "Mujeres con carácter",
    description: "Taller",
    image: "/53.jpg",
  },
  {
    title: "Es enserio, los hombres tambien lloran",
    description: "Taller",
    image: "/54.jpg",
  },
  {
    title: "La disciplina siempre será tu fuerte",
    description: "Taller",
    image: "/55.jpg",
  },
  {
    title: "No son ellos, somos nosotros",
    description: "Taller",
    image: "/56.jpg",
  },
  {
    title: "¿Nervios al hablar en público?",
    description: "Taller",
    image: "/57.jpg",
  },
  {
    title: "cómo camviar tu vida en 58 segundos",
    description: "Taller",
    image: "/58.jpg",
  },
  {
    title: "Nada es más caro que lo gratis",
    description: "Taller",
    image: "/59.jpg",
  },
  {
    title: "La disciplina nos hace campeones",
    description: "Taller",
    image: "/60.jpg",
  },
  {
    title: "Para poder seguir",
    description: "Taller",
    image: "/61.jpg",
  },
  {
    title: "Papá-Mamá ¡Estamos a tíempo!",
    description: "Taller",
    image: "/62.jpg",
  },
  {
    title: "Papá, Mamá; Escuchame por favor",
    description: "Taller",
    image: "/63.jpg",
  },
  {
    title: "No todo lo puedes dar",
    description: "Taller",
    image: "/64.jpg",
  },
  {
    title: "¡Qué padre ser padres!",
    description: "Taller",
    image: "/65.jpg",
  },
  {
    title: "ke onda kon tu vida",
    description: "Taller",
    image: "/66.jpg",
  },
  {
    title: "Sonrie otra vez",
    description: "Taller",
    image: "/67.jpg",
  },
  {
    title: "preparate para la uni",
    description: "Taller",
    image: "/68.jpg",
  },
  {
    title: "sus primeros pasos",
    description: "Taller",
    image: "/69.jpg",
  },
  {
    title: "Pensando en ser lider",
    description: "Taller",
    image: "/70.jpg",
  },
  {
    title: "¿sin batería?",
    description: "Taller",
    image: "/71.jpg",
  },
  {
    title: "Shh! ¡tengo que decirte!",
    description: "Taller",
    image: "/72.jpg",
  },
  {
    title: "Se el piloto de tu vuelo",
    description: "Taller",
    image: "/73.jpg",
  },
  {
    title: "sácale actitud positiva al mal tiempo",
    description: "Taller",
    image: "/74.jpg",
  },
  {
    title: "Trabja con pasión para servir por convicción",
    description: "Taller",
    image: "/75.jpg",
  },
  {
    title: "Top líderer; Lo que nadie se atereve a decirte",
    description: "Taller",
    image: "/76.jpg",
  },
  {
    title: "Tiende tú cama; Cambia el mundo",
    description: "Taller",
    image: "/77.jpg",
  },
  {
    title: "solución de conflictos",
    description: "Taller",
    image: "/78.jpg",
  },
  {
    title: "Dale like a la sinergia",
    description: "Taller",
    image: "/79.jpg",
  },
  {
    title: "Y como por que las mujeres",
    description: "Taller",
    image: "/80.jpg",
  },
  {
    title: "¿Y despues de la secu qué?",
    description: "Taller",
    image: "/81.jpg",
  },
  {
    title: "Yo puedo, se que puedo",
    description: "Taller",
    image: "/82.jpg",
  },
  {
    title: "Tú sí puedes; Hazlo bien",
    description: "Taller",
    image: "/83.jpg",
  },
  {
    title: "Tú naciste para ser un lider",
    description: "Taller",
    image: "/84.jpg",
  },
  {
    title: "Motivación, liderazgo y trabajo en equipo",
    description: "Taller",
    image: "/85.jpg",
  },
  {
    title: "Yo tengo una misión servir a los demás",
    description: "Taller",
    image: "/86.jpg",
  },
  {
    title: "¿y su nos ponemos de acuerdo?",
    description: "Taller",
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