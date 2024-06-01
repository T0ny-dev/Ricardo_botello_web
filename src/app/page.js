import Header from "./components/Header";
import VideoBackgroundComponent from "./components/VideoBackgroundComponent";
import RibbonComponent from "./components/RibbonComponent";
import DescriptionComponent from "./components/DescriptionComponent";
import RibbonWhatsAppComponent from "./components/RibbonWhatsAppComponent";
import Title from "./components/ui/title";
import ConferenceComponent from "./components/ConferenceComponent";
import ImageTextComponent from "./components/ImageTextComponent";
import BookPromotionComponent from "./components/BookPromotionComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <VideoBackgroundComponent/>
      <RibbonComponent/>
      <Title title="CONFERENCIAS Y TALLERES"/>
      <DescriptionComponent/>
      <RibbonWhatsAppComponent/>
      <ConferenceComponent/>
      <Title title="GALERIA"/>
      <ImageTextComponent/>
      <BookPromotionComponent/>
      <Footer/>
    </main>
  );
}
