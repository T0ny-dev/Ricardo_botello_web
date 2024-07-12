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
    title: "Habla menos persuade más, deja de perder el tiempo y vende más ",
    description: "Taller",
    image: "/taller15.jpg",
  },
  {
    title: "Comunicación verbal avanzada, estrategias de alto impacto",
    description: "Taller",
    image: "/taller1.jpg",
  },
  {
    title: "Eficacia directiva y manejo profecional del trabajo en equipo",
    description: "Taller",
    image: "/taller2.jpg",
  },
  {
    title: "Hable con seguridad",
    description: "Taller",
    image: "/taller3.jpg",
  },
  {
    title: "The kids: Los nuevos líderes",
    description: "Taller",
    image: "/taller4.jpg",
  },
  {
    title: "Tácticas para hablar en público",
    description: "Taller",
    image: "/taller5.jpg",
  },
  {
    title: "A donde quieras ir yo te llevo sígueme",
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
    title: "Viviremos nuestro reencuentro, Más humanos que nunca",
    description: "Taller",
    image: "/taller10.jpg",
  },
  {
    title: "Cómo utilizar el lenguaje corporal en el servicio público",
    description: "Taller",
    image: "/taller11.jpg",
  },
  {
    title: "El arte de  no servir a los demás, liderazgo basado en el servicio",
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
    title: "Ánimo dale un giro a tu vida",
    description: "Conferencia",
    image: "/animo.jpeg",
  },
  {
    title: "Amor forever",
    description: "Conferencia",
    image: "/amor.jpg",
  },
  {
    title: "Actitudes positivas: Para construir el nuevo liderazgo político  ",
    description: "Conferencia",
    image: "/actitud.jpg",
  },
  {
    title: "Apartir de hoy ¡Seré el mejor!",
    description: "Conferencia",
    image: "/ahora.jpg",
  },
  {
    title: "Con los Judas ¡No discutas! Ellos se ahorcan solos…",
    description: "Conferencia",
    image: "/judas.jpg",
  },
  {
    title: "Cómo triunfar como padres lo que tus hijos piden a gritos",
    description: "Conferencia",
    image: "/padres.jpg",
  },
  {
    title: "Cómo cambiar tu vida en 58 segundos, ahora sí voy a ser feliz",
    description: "Conferencia",
    image: "/58.jpg",
  },
  {
    title: "5 minutos más: Para hacerlo solo hay que querer",
    description: "Conferencia",
    image: "/5m.jpg",
  },
  {
    title: "Con buen servicio, generamos más clientes",
    description: "Conferencia",
    image: "/buen.jpg",
  },
  {
    title: "De joven a joven, te reto a ¡Triunfar!",
    description: "Conferencia",
    image: "/triunfa.jpg",
  },
  {
    title: "Cuando lo importante no es el qué dirán",
    description: "Conferencia",
    image: "/import.jpg",
  },
  {
    title: "Construye con actitud… Estrategias para cambiar tu vida",
    description: "Conferencia",
    image: "/cont.jpg",
  },
  {
    title: "O nos adaptamos o morimos en el proceso",
    description: "Conferencia",
    image: "/nos.jpg",
  },
  {
    title: "El bullyng en los tiempos del facebook",
    description: "Conferencia",
    image: "/bull.jpg",
  },
  {
    title: "2 son más que 1",
    description: "Conferencia",
    image: "/son2.jpg",
  },
  {
    title: "Donde pongo mi atención nadie me gana ",
    description: "Conferencia",
    image: "/pongo.jpg",
  },
  {
    title: "Dialogando con valores: Por una convivencia sana y pacífica",
    description: "Conferencia",
    image: "/40.jpg",
  },
  {
    title: "Decisiones que cambian vidas",
    description: "Conferencia",
    image: "/41.jpg",
  },

  {
    title: "Emprender para crecer",
    description: "Conferencia",
    image: "/44.jpg",
  },
  {
    title: "Cuando los elfantes pelean, la hierba es la que sufre",
    description: "Conferencia",
    image: "/45.jpg",
  },
  {
    title: "El otro lado de la moneda ¿Y tú  qué camino decides seguir?",
    description: "Conferencia",
    image: "/46.jpg",
  },
  {
    title: "Hay líderes que dejan huella, otros cicatrices ",
    description: "Conferencia",
    image: "/47.jpg",
  },
  {
    title: "Generando más ventas",
    description: "Conferencia",
    image: "/48.jpg",
  },
  {
    title: "5 consejos para ganar certámenes",
    description: "Conferencia",
    image: "/49.jpg",
  },
  {
    title: "Estúdiate con actitud",
    description: "Conferencia",
    image: "/50.jpg",
  },
  {
    title: "Estrés laboral ¡Quítate un peso de encima!",
    description: "Conferencia",
    image: "/51.jpg",
  },
  {
    title: "Mujeres que tocan el corazón de la gente",
    description: "Conferencia",
    image: "/52.jpg",
  },
  {
    title: "Mujeres con carácter y actitud positiva",
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
    title: "No son ellos somos nosotros",
    description: "Conferencia",
    image: "/56.jpg",
  },
  {
    title: "¿Nervios al hablar en público?",
    description: "Conferencia",
    image: "/57.jpg",
  },

  {
    title: "Nada es más caro que los gratis",
    description: "Conferencia",
    image: "/59.jpg",
  },
  {
    title: "La disciplina nos hace campeones",
    description: "Conferencia",
    image: "/60.jpg",
  },
  {
    title: "Para poder seguir a veces hay  que empezar de nuevo",
    description: "Conferencia",
    image: "/61.jpg",
  },
  {
    title: "Papá-Mamá ¡Estamos a Tíempo!",
    description: "Conferencia",
    image: "/62.jpg",
  },
  {
    title: "Papá, mamá: Escúchame porfavor",
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
    title: "¿qué onda con con tu vida?",
    description: "Conferencia",
    image: "/66.jpg",
  },
  {
    title: "Sonríe otra vez",
    description: "Conferencia",
    image: "/67.jpg",
  },
  {
    title: "Prepárate para la uni",
    description: "Conferencia",
    image: "/68.jpg",
  },
  {
    title: "Sus primeros pasos: La responsabilidad de ser padres",
    description: "Conferencia",
    image: "/69.jpg",
  },
  {
    title: "Pensando en ser líder",
    description: "Conferencia",
    image: "/70.jpg",
  },
  {
    title: "¿sin batería? Para continuar viviendo, por favor coencte el cargador",
    description: "Conferencia",
    image: "/71.jpg",
  },
  {
    title: "Shh! ¡Tengo que decirte!",
    description: "Conferencia",
    image: "/72.jpg",
  },
  {
    title: "Sé el piloto de tu vuelo",
    description: "Conferencia",
    image: "/73.jpg",
  },
  {
    title: "Sácale actitud positiva al mal tiempo",
    description: "Conferencia",
    image: "/74.jpg",
  },
  {
    title: "Trabajar con pasión para servir por convicción",
    description: "Conferencia",
    image: "/75.jpg",
  },
  {
    title: "Top líder lo que nadie se atrave a decirte",
    description: "Conferencia",
    image: "/76.jpg",
  },
  {
    title: "Tiende tú cama, cambia el mundo",
    description: "Conferencia",
    image: "/77.jpg",
  },
  {
    title: "Solución de conflictos",
    description: "Conferencia",
    image: "/78.jpg",
  },
  {
    title: "Dale like a la sinergia, ejerce el liderazgo trabajando en equipo",
    description: "Conferencia",
    image: "/79.jpg",
  },
  {
    title: "Y cómo por qué las mujeres",
    description: "Conferencia",
    image: "/80.jpg",
  },
  {
    title: "¿y después de la secu qué?",
    description: "Conferencia",
    image: "/81.jpg",
  },
  {
    title: "Yo puedo… Se que puedo ¡Ganar más!",
    description: "Conferencia",
    image: "/82.jpg",
  },
  {
    title: "Tú sí puedes, hazlo bien",
    description: "Conferencia",
    image: "/83.jpg",
  },
  {
    title: "Tú naciste para ser un líder",
    description: "Conferencia",
    image: "/84.jpg",
  },
  {
    title: "Motivación, liderazgo y trabajo en equipo",
    description: "Conferencia",
    image: "/85.jpg",
  },
  {
    title: "Yo tengo una misión:  servir a los demás",
    description: "Conferencia",
    image: "/86.jpg",
  },
  {
    title: "¿y si nos ponemos de acuerdo?",
    description: "Conferencia",
    image: "/87.jpg",
  },
  {
    title: "En sus marcas listos… ¡Fuera!",
    description: "Conferencia",
    image: "/88.jpeg",
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