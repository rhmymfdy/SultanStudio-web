import Navbar from "@/views/Navbar/Navbar";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import CardKategori from "@/components/CardKategori/CardKategori";
import LayananKamiView from "@/views/LayananKami/LayananKami";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <LayananKamiView />
    </>
  );
}
