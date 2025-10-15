import Navbar from "@/views/Navbar/Navbar";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import LayananKamiView from "@/views/LayananKami/LayananKami";
import AboutCard from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutCard />
      <LayananKamiView />
      <AboutCard />
      <LayananKamiView />

    </>
  );
}
