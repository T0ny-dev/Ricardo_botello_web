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
    title: "Comunicación Verbal Avanzada",
    description: "Taller",
    image: "/taller1.jpg",
  },
  {
    title: "Eficacia directiva y manejo profesional del trabajo en equipo",
    description: "Taller",
    image: "/taller2.jpg",
  },
  {
    title: "Hable con seguridad",
    description: "Taller",
    image: "/taller3.jpg",
  },
  {
    title: "The kids los nuevos líderes",
    description: "Taller",
    image: "/taller4.jpg",
  },
  {
    title: "Tácticas para hablar en público",
    description: "Taller",
    image: "/taller5.jpg",
  },
  {
    title: "A donde quieras ir",
    description: "Taller",
    image: "/taller6.jpg",
  },
  {
    title: "El nuevo liderazgo en el trabajo en equipo",
    description: "Taller",
    image: "/taller7.jpg",
  },
  {
    title: "Calidad en el servicio al cliente",
    description: "Taller",
    image: "/taller8.jpg",
  },
  {
    title: "Esta experiencia vale la pena vivirla",
    description: "Taller",
    image: "/taller9.jpg",
  },
  {
    title: "Viviremos nuestro reencuentro",
    description: "Taller",
    image: "/taller10.jpg",
  },
  {
    title: "Lenguaje corporal",
    description: "Taller",
    image: "/taller11.jpg",
  },
  {
    title: "El arte de servir a los demás",
    description: "Taller",
    image: "/taller12.jpg",
  },
  {
    title: "Equipos que dan resultados",
    description: "Taller",
    image: "/taller13.jpg",
  },
  {
    title: "Otra forma diferente de afrontar la crisis en tu empresa",
    description: "Taller",
    image: "/taller14.jpg",
  },
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
    description: "Conferencia",
    image: "/actitud.jpg",
  },
  {
    title: "Desde Ahora: seré el mejor",
    description: "Conferencia",
    image: "/ahora.jpg",
  },
  {
    title: "Con judas no discutas, ellos se ahorcan solos...",
    description: "Conferencia",
    image: "/judas.jpg",
  },
  {
    title: "Como triundar como padre: lo que tus hijos piden a gritos",
    description: "Conferencia",
    image: "/padres.jpg",
  },
  {
    title: "Cambia tu vida en 58 segundos, ahora si voy ser feliz",
    description: "Conferencia",
    image: "/58.jpg",
  },
  {
    title: "5 Minutitos mas, para hacerlo solo hay que querer",
    description: "Conferencia",
    image: "/5m.jpg",
  },
  {
    title: "Con buen servicio, ganemos mas clientres",
    description: "Conferencia",
    image: "/buen.jpg",
  },
  {
    title: "De joven a joven ,te reto a triunfar",
    description: "Conferencia",
    image: "/triunfa.jpg",
  },
  {
    title: "Cuando lo importante no es el que diran",
    description: "Conferencia",
    image: "/import.jpg",
  },
  {
    title: "Construye con actitud, estrategias para cambiar tu vida",
    description: "Conferencia",
    image: "/cont.jpg",
  },
  {
    title: "o Nos adaptamos o morimos en el intento",
    description: "Conferencia",
    image: "/nos.jpg",
  },
  {
    title: "El bullying en los tiempos del facebook",
    description: "Conferencia",
    image: "/bull.jpg",
  },
  {
    title: "2 son mas que 1 ",
    description: "Conferencia",
    image: "/son2.jpg",
  },
  {
    title: "Donde pongo mi atencion no hay quien me gane ",
    description: "Conferencia",
    image: "/pongo.jpg",
  },
  {
    title: "Dialogando con valores",
    description: "Conferencia",
    image: "/40.jpg",
  },
  {
    title: "Desiciones que cambian vidas",
    description: "Conferencia",
    image: "/41.jpg",
  },
  {
    title: "Transformando tu cada en la época del Facebook",
    description: "Conferencia",
    image: "/42.jpg",
  },

  {
    title: "Emprender para crecer",
    description: "Conferencia",
    image: "/44.jpg",
  },
  {
    title: "Cuando los elefantes pelean",
    description: "Conferencia",
    image: "/45.jpg",
  },
  {
    title: "El otro lado de la moneda",
    description: "Conferencia",
    image: "/46.jpg",
  },
  {
    title: "Hay líderes que dejan Huella",
    description: "Conferencia",
    image: "/47.jpg",
  },
  {
    title: "Generando más ventas",
    description: "Conferencia",
    image: "/48.jpg",
  },
  {
    title: "5 consejos para ganar certamenes",
    description: "Conferencia",
    image: "/49.jpg",
  },
  {
    title: "Estudiate con actitud",
    description: "Conferencia",
    image: "/50.jpg",
  },
  {
    title: "Estrés laboral",
    description: "Conferencia",
    image: "/51.jpg",
  },
  {
    title: "Mujeres que tocan",
    description: "Conferencia",
    image: "/52.jpg",
  },
  {
    title: "Mujeres con carácter",
    description: "Conferencia",
    image: "/53.jpg",
  },
  {
    title: "Es enserio, los hombres tambien lloran",
    description: "Conferencia",
    image: "/54.jpg",
  },
  {
    title: "La disciplina siempre será tu fuerte",
    description: "Conferencia",
    image: "/55.jpg",
  },
  {
    title: "No son ellos, somos nosotros",
    description: "Conferencia",
    image: "/56.jpg",
  },
  {
    title: "¿Nervios al hablar en público?",
    description: "Conferencia",
    image: "/57.jpg",
  },
  {
    title: "cómo camviar tu vida en 58 segundos",
    description: "Conferencia",
    image: "/58.jpg",
  },
  {
    title: "Nada es más caro que lo gratis",
    description: "Conferencia",
    image: "/59.jpg",
  },
  {
    title: "La disciplina nos hace campeones",
    description: "Conferencia",
    image: "/60.jpg",
  },
  {
    title: "Para poder seguir",
    description: "Conferencia",
    image: "/61.jpg",
  },
  {
    title: "Papá-Mamá ¡Estamos a tíempo!",
    description: "Conferencia",
    image: "/62.jpg",
  },
  {
    title: "Papá, Mamá; Escuchame por favor",
    description: "Conferencia",
    image: "/63.jpg",
  },
  {
    title: "No todo lo puedes dar",
    description: "Conferencia",
    image: "/64.jpg",
  },
  {
    title: "¡Qué padre ser padres!",
    description: "Conferencia",
    image: "/65.jpg",
  },
  {
    title: "ke onda kon tu vida",
    description: "Conferencia",
    image: "/66.jpg",
  },
  {
    title: "Sonrie otra vez",
    description: "Conferencia",
    image: "/67.jpg",
  },
  {
    title: "preparate para la uni",
    description: "Conferencia",
    image: "/68.jpg",
  },
  {
    title: "sus primeros pasos",
    description: "Conferencia",
    image: "/69.jpg",
  },
  {
    title: "Pensando en ser lider",
    description: "Conferencia",
    image: "/70.jpg",
  },
  {
    title: "¿sin batería?",
    description: "Conferencia",
    image: "/71.jpg",
  },
  {
    title: "Shh! ¡tengo que decirte!",
    description: "Conferencia",
    image: "/72.jpg",
  },
  {
    title: "Se el piloto de tu vuelo",
    description: "Conferencia",
    image: "/73.jpg",
  },
  {
    title: "sácale actitud positiva al mal tiempo",
    description: "Conferencia",
    image: "/74.jpg",
  },
  {
    title: "Trabja con pasión para servir por convicción",
    description: "Conferencia",
    image: "/75.jpg",
  },
  {
    title: "Top líderer; Lo que nadie se atereve a decirte",
    description: "Conferencia",
    image: "/76.jpg",
  },
  {
    title: "Tiende tú cama; Cambia el mundo",
    description: "Conferencia",
    image: "/77.jpg",
  },
  {
    title: "solución de conflictos",
    description: "Conferencia",
    image: "/78.jpg",
  },
  {
    title: "Dale like a la sinergia",
    description: "Conferencia",
    image: "/79.jpg",
  },
  {
    title: "Y como por que las mujeres",
    description: "Conferencia",
    image: "/80.jpg",
  },
  {
    title: "¿Y despues de la secu qué?",
    description: "Conferencia",
    image: "/81.jpg",
  },
  {
    title: "Yo puedo, se que puedo",
    description: "Conferencia",
    image: "/82.jpg",
  },
  {
    title: "Tú sí puedes; Hazlo bien",
    description: "Conferencia",
    image: "/83.jpg",
  },
  {
    title: "Tú naciste para ser un lider",
    description: "Conferencia",
    image: "/84.jpg",
  },
  {
    title: "Motivación, liderazgo y trabajo en equipo",
    description: "Conferencia",
    image: "/85.jpg",
  },
  {
    title: "Yo tengo una misión servir a los demás",
    description: "Conferencia",
    image: "/86.jpg",
  },
  {
    title: "¿y su nos ponemos de acuerdo?",
    description: "Conferencia",
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