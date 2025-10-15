import Navbar from "@/views/Navbar/Navbar";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import LayananKamiView from "@/views/LayananKami/LayananKami";
import AboutCard from "@/components/AboutUs/AboutUs";
import CardImageSwiper from "@/components/CardImageSwiper/CardImageSwiper";
import FiturUnggulan from "@/components/FiturUnggulan/FiturUnggulan";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutCard />
      <CardImageSwiper />
      <FiturUnggulan />
      <LayananKamiView />
      <Footer />

    </>
  );
}
