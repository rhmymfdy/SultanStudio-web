import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import CardKategori from "@/components/CardKategori/CardKategori";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardKategori />
    </>
  );
}
