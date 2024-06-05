import BackgroundContainer from "../components/BackgroundContainer";
import Header from "../components/Header";
import RibbonWhatsAppComponent from "../components/RibbonWhatsAppComponent";
import BookPromotionComponent from "../components/BookPromotionComponent";
import Footer from "../components/Footer";
import BookList from "../components/BookList";


const books = [
  {
    title: "Libro 1",
    description: "Descripción del libro 1.",
    link: "https://example.com/libro1",
    image: "path_to_image1.jpg",
  },
  {
    title: "Libro 2",
    description: "Descripción del libro 2.",
    link: "https://example.com/libro2",
    image: "path_to_image2.jpg",
  },
  {
    title: "Libro 3",
    description: "Descripción del libro 2.",
    link: "https://example.com/libro2",
    image: "path_to_image2.jpg",
  },
  {
    title: "Libro 4",
    description: "Descripción del libro 2.",
    link: "https://example.com/libro2",
    image: "path_to_image2.jpg",
  },
  {
    title: "Libro 5",
    description: "Descripción del libro 2.",
    link: "https://example.com/libro2",
    image: "path_to_image2.jpg",
  },
  
  // Agrega más libros según sea necesario
];

function Libros() {
  return (
    <div>
      <Header/>
      <BackgroundContainer title="Libros Gratis" />
      <RibbonWhatsAppComponent/>
      <BookList books={books} />
      <BookPromotionComponent/>
      <Footer/>
    </div>
  )
}

export default Libros;