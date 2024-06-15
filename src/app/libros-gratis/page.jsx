import BackgroundContainer from "../components/BackgroundContainer";
import Header from "../components/Header";
import RibbonWhatsAppComponent from "../components/RibbonWhatsAppComponent";
import BookPromotionComponent from "../components/BookPromotionComponent";
import Footer from "../components/Footer";
import BookList from "../components/BookList";
import NavbarMobile from "../components/NavbarMobile";


const books = [
  {
    title: "COMO SER UN ORADOR EFICAZ",
    description: "Este libro es ideal para maestros y/o alumnos que desean adentrarse en el maravilloso mundo de la oratoria. El miedo de hablar en público, y el desconocimiento de las artes de elaboración y expresión de un buen discurso, pueden ser superadas incorporando técnicas simples de aprender. ",
    link: "/ORADOR.pdf",
    image: "/orador.jpg",
  },
  {
    title: "DE JOVEN A JOVEN: TE RETO A TRIUNFAR",
    description: "Este es un libro, que pretende vacunar los jóvenes de México, contra el virus más grande de la historia de la humanidad: La Mediocridad. Con la lectura de este libro, nuestro deseo es, que despierte en ti el interés de hacer un alto en tu vida y reflexionar sobre lo más importante en este momento: Tu futuro. ",
    link: "/JOVEN.pdf",
    image: "/joven.jpg",
  },
  {
    title: "CÓMO TRIUNFAR COMO PADRES",
    description: "Este libro nace con la intensión de resolver todas las preguntas que surgen cuando uno se entera que va a ser papá o mamá. ¿Cómo puedo ser el mejor papá o mamá del mundo? Nadie se prepara en una escuela para aprender a ser padre de familia, porque simplemente no hay escuelas para ese fin. Y surgen decenas de preguntas. La lectura de este libro nos da las respuestas a todas las posibles preguntas.",
    link: "/padres.pdf",
    image: "/como_triunfar.jpg",
  },
  {
    title: "HABLE CON SEGURIDAD",
    description: "Este libro es el resultado de tres décadas de estudio y experiencia. En él usted podrá encontrar recursos, técnicas y estrategias para tener una comunicación efectiva en todos los ámbitos y elaborar discursos profesionales con alto impacto. Hable con seguridad está dirigido а abogados, líderes, políticos, locutores, estudiantes, profesores amas de casa, ejecutivos, jóvenes y adultos para ayudarles a superar el pánico escénico y hablar con mayor seguridad.",
    link: "https://example.com/libro2",
    image: "/hable.jpg",
  },
  {
    title: "LOS MEJORES INICIOS Y FINALES",
    description: "Es una recopilación de grandes pensamientos de personas triunfadoras, que han trascendido en el tiempo para ofrecernos filosofías de vida, hoy las hemos tomado para que te sirvan de guía y sean un faro de luz a seguir en tus próximas presentaciones que, al utilizarlas bien y aplicarlas en su tiempo y momento perfecto, harán que tu disertación cada vez sea más elocuente. ",
    link: "https://example.com/libro2",
    image: "/viajes.jpg",
  },
  {
    title: "LAS VACAS NO DAN LECHE",
    description: "Todos, en algún momento, hemos tenido que afrontar dificultades gigantescas, enfermedades, incluso hasta tener que enfrentar la tan lamentable perdida de algunos familiares que se van.¿Cuáles son las vacas que tienes en tu vida? Con la lectura de este libro te darás cuenta cómo Dios te pondrá donde Él quiera. No importa si la gente cree que te mereces esa posición...¿Estás seguro que las Vacas Dan Leche?¡Descubre una nueva forma de lograr tus metas!",
    link: "https://example.com/libro2",
    image: "/vacas.jpg",
  },
  // Agrega más libros según sea necesario
];

function Libros() {
  return (
    <div>
      <Header/>
      <NavbarMobile/>
      <BackgroundContainer title="Libros Gratis" />
      <RibbonWhatsAppComponent/>
      <BookList books={books} />
      <BookPromotionComponent/>
      <Footer/>
    </div>
  )
}

export default Libros;