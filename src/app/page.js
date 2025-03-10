import Header from "./components/Header";
import NavbarMobile from "./components/NavbarMobile";
import VideoBackgroundComponent from "./components/VideoBackgroundComponent";
import DescriptionComponent2 from "./Description2";
import RibbonWhatsAppComponent from "./components/RibbonWhatsAppComponent";
import Title from "./components/ui/title";
import ConferenceComponent from "./components/ConferenceComponent";
import ImageTextComponent from "./components/ImageTextComponent";
import BookPromotionComponent from "./components/BookPromotionComponent";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <NavbarMobile/>
      <VideoBackgroundComponent/>
      <Testimonials/>
      <Title title="CONFERENCIAS Y TALLERES"/>
      <DescriptionComponent2/>
      <RibbonWhatsAppComponent/>
      <ConferenceComponent/>
      <Title title="GALERÍA"/>
      <ImageTextComponent/>
      <BookPromotionComponent/>
      <Footer/>
    </main>
  );
}
