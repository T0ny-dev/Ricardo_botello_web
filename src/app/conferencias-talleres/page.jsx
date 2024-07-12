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
    title: "Habla Menos Persuade Más, Deja de Perder el Tiempo y Vende Más",
    description: "Taller",
    image: "/taller15.jpg",
  },
  {
    title: "Comunicación Verbal Avanzada",
    description: "Taller",
    image: "/taller1.jpg",
  },
  {
    title: "Eficacia Directiva y Manejo Profesional del Trabajo en Equipo",
    description: "Taller",
    image: "/taller2.jpg",
  },
  {
    title: "Hable con Seguridad",
    description: "Taller",
    image: "/taller3.jpg",
  },
  {
    title: "The Kids: Los Nuevos Líderes",
    description: "Taller",
    image: "/taller4.jpg",
  },
  {
    title: "Tácticas para Hablar en Público",
    description: "Taller",
    image: "/taller5.jpg",
  },
  {
    title: "A Donde Quieras Ir",
    description: "Taller",
    image: "/taller6.jpg",
  },
  {
    title: "El Nuevo Liderazgo en el Trabajo en Equipo",
    description: "Taller",
    image: "/taller7.jpg",
  },
  {
    title: "Calidad en el Servicio al Cliente",
    description: "Taller",
    image: "/taller8.jpg",
  },
  {
    title: "Esta Experiencia Vale la Pena Vivirla",
    description: "Taller",
    image: "/taller9.jpg",
  },
  {
    title: "Viviremos Nuestro Reencuentro",
    description: "Taller",
    image: "/taller10.jpg",
  },
  {
    title: "Lenguaje Corporal",
    description: "Taller",
    image: "/taller11.jpg",
  },
  {
    title: "El Arte de Servir a los Demás",
    description: "Taller",
    image: "/taller12.jpg",
  },
  {
    title: "Equipos que Dan Resultados",
    description: "Taller",
    image: "/taller13.jpg",
  },
  {
    title: "Otra Forma Diferente de Afrontar la Crisis en tu Empresa",
    description: "Taller",
    image: "/taller14.jpg",
  },
  {
    title: "Ánimo: Con un Giro a tu Vida",
    description: "Conferencia",
    image: "/animo.jpeg",
  },
  {
    title: "Amor Forever",
    description: "Conferencia",
    image: "/amor.jpg",
  },
  {
    title: "Actitudes Positivas: Para Construir el Nuevo Liderazgo Político",
    description: "Conferencia",
    image: "/actitud.jpg",
  },
  {
    title: "Desde Ahora: Seré el Mejor",
    description: "Conferencia",
    image: "/ahora.jpg",
  },
  {
    title: "Con Los Judas no Discutas, Ellos se Ahorcan Solos...",
    description: "Conferencia",
    image: "/judas.jpg",
  },
  {
    title: "Cómo Triunfar como Padre: Lo que tus Hijos Piden a Gritos",
    description: "Conferencia",
    image: "/padres.jpg",
  },
  {
    title: "Cambia tu Vida en 58 Segundos, Ahora Sí Voy a Ser Feliz",
    description: "Conferencia",
    image: "/58.jpg",
  },
  {
    title: "5 Minutitos Más, Para Hacerlo Solo hay que Querer",
    description: "Conferencia",
    image: "/5m.jpg",
  },
  {
    title: "Con Buen Servicio, Ganemos Más Clientes",
    description: "Conferencia",
    image: "/buen.jpg",
  },
  {
    title: "De Joven a Joven, Te Reto a Triunfar",
    description: "Conferencia",
    image: "/triunfa.jpg",
  },
  {
    title: "Cuando lo Importante no es el Qué Dirán",
    description: "Conferencia",
    image: "/import.jpg",
  },
  {
    title: "Construye con Actitud, Estrategias para Cambiar tu Vida",
    description: "Conferencia",
    image: "/cont.jpg",
  },
  {
    title: "O nos Adaptamos o Morimos en el Intento",
    description: "Conferencia",
    image: "/nos.jpg",
  },
  {
    title: "El Bullying en los Tiempos del Facebook",
    description: "Conferencia",
    image: "/bull.jpg",
  },
  {
    title: "2 son Más que 1",
    description: "Conferencia",
    image: "/son2.jpg",
  },
  {
    title: "Donde Pongo mi Atención no hay Quien me Gane",
    description: "Conferencia",
    image: "/pongo.jpg",
  },
  {
    title: "Dialogando con Valores",
    description: "Conferencia",
    image: "/40.jpg",
  },
  {
    title: "Decisiones que Cambian Vidas",
    description: "Conferencia",
    image: "/41.jpg",
  },
  {
    title: "Transformando tu Casa en la Época del Facebook",
    description: "Conferencia",
    image: "/42.jpg",
  },
  {
    title: "Emprender para Crecer",
    description: "Conferencia",
    image: "/44.jpg",
  },
  {
    title: "Cuando los Elefantes Pelean",
    description: "Conferencia",
    image: "/45.jpg",
  },
  {
    title: "El Otro Lado de la Moneda",
    description: "Conferencia",
    image: "/46.jpg",
  },
  {
    title: "Hay Líderes que Dejan Huella",
    description: "Conferencia",
    image: "/47.jpg",
  },
  {
    title: "Generando Más Ventas",
    description: "Conferencia",
    image: "/48.jpg",
  },
  {
    title: "5 Consejos para Ganar Certámenes",
    description: "Conferencia",
    image: "/49.jpg",
  },
  {
    title: "Estúdiate con Actitud",
    description: "Conferencia",
    image: "/50.jpg",
  },
  {
    title: "Estrés Laboral",
    description: "Conferencia",
    image: "/51.jpg",
  },
  {
    title: "Mujeres que Tocan",
    description: "Conferencia",
    image: "/52.jpg",
  },
  {
    title: "Mujeres con Carácter",
    description: "Conferencia",
    image: "/53.jpg",
  },
  {
    title: "Es En Serio, los Hombres También Lloran",
    description: "Conferencia",
    image: "/54.jpg",
  },
  {
    title: "La Disciplina Siempre Será tu Fuerte",
    description: "Conferencia",
    image: "/55.jpg",
  },
  {
    title: "No son Ellos, Somos Nosotros",
    description: "Conferencia",
    image: "/56.jpg",
  },
  {
    title: "¿Nervios al Hablar en Público?",
    description: "Conferencia",
    image: "/57.jpg",
  },
  {
    title: "Cómo Cambiar tu Vida en 58 Segundos",
    description: "Conferencia",
    image: "/58.jpg",
  },
  {
    title: "Nada es Más Caro que lo Gratis",
    description: "Conferencia",
    image: "/59.jpg",
  },
  {
    title: "La Disciplina nos Hace Campeones",
    description: "Conferencia",
    image: "/60.jpg",
  },
  {
    title: "Para Poder Seguir",
    description: "Conferencia",
    image: "/61.jpg",
  },
  {
    title: "Papá-Mamá: ¡Estamos a Tiempo!",
    description: "Conferencia",
    image: "/62.jpg",
  },
  {
    title: "Papá, Mamá; Escúchame por Favor",
    description: "Conferencia",
    image: "/63.jpg",
  },
  {
    title: "No Todo lo Puedes Dar",
    description: "Conferencia",
    image: "/64.jpg",
  },
  {
    title: "¡Qué Padre Ser Padres!",
    description: "Conferencia",
    image: "/65.jpg",
  },
  {
    title: "¿Qué Onda con tu Vida?",
    description: "Conferencia",
    image: "/66.jpg",
  },
  {
    title: "Sonríe Otra Vez",
    description: "Conferencia",
    image: "/67.jpg",
  },
  {
    title: "Prepárate para la Uni",
    description: "Conferencia",
    image: "/68.jpg",
  },
  {
    title: "Sus Primeros Pasos",
    description: "Conferencia",
    image: "/69.jpg",
  },
  {
    title: "Pensando en Ser Líder",
    description: "Conferencia",
    image: "/70.jpg",
  },
  {
    title: "¿Sin Batería?",
    description: "Conferencia",
    image: "/71.jpg",
  },
  {
    title: "Shh! ¡Tengo que Decirte!",
    description: "Conferencia",
    image: "/72.jpg",
  },
  {
    title: "De Éxito a Éxito",
    description: "Conferencia",
    image: "/73.jpg",
  },
  {
    title: "Tácticas de Estudio, ¡Apúntate!",
    description: "Conferencia",
    image: "/74.jpg",
  },
  {
    title: "Ánimo: para Seguir",
    description: "Conferencia",
    image: "/75.jpg",
  },
  {
    title: "Esto va en Serio, las Mujeres También Lloran",
    description: "Conferencia",
    image: "/76.jpg",
  },
  {
    title: "La Comunicación: ¡La Gran Oportunidad!",
    description: "Conferencia",
    image: "/77.jpg",
  },
  {
    title: "Vivimos lo que Pensamos",
    description: "Conferencia",
    image: "/78.jpg",
  },
  {
    title: "Vibrando con la Juventud",
    description: "Conferencia",
    image: "/79.jpg",
  },
  {
    title: "Trabajo en Equipo",
    description: "Conferencia",
    image: "/80.jpg",
  },
  {
    title: "¡Qué Padre ser Adolescentes!",
    description: "Conferencia",
    image: "/81.jpg",
  },
  {
    title: "Quédate en la Escuela",
    description: "Conferencia",
    image: "/82.jpg",
  },
  {
    title: "Liderazgo con Corazón",
    description: "Conferencia",
    image: "/83.jpg",
  },
  {
    title: "Yo Puedo",
    description: "Conferencia",
    image: "/84.jpg",
  },
  {
    title: "A Donde Quieras Ir",
    description: "Conferencia",
    image: "/86.jpg",
  },
  {
    title: "Tácticas para Hablar en Público",
    description: "Conferencia",
    image: "/87.jpg",
  },
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