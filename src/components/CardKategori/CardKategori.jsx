"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";




// Import Swiper styles
import 'swiper/css';
const CardKategori = ({ reservasiFoto, linkReservasi, imgKategori }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % imgKategori.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" hover:scale-[102%] duration-300 hover:shadow-lg p-2  " >
      <Link href={linkReservasi}>
        <div className="m-auto  w-[90%] lg:w-[100%] h-[350px]  lg:h-[450px] md:h-[350px] relative ">
          {imgKategori.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`jumbotron-foto ${idx + 1}`}
              width={800}           // turunkan resolusi, jangan 1920 kalau gak perlu
              height={450}          // sesuaikan aspect ratio
              className={`absolute p-2 inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              style={{ transform: "translateZ(0)" }}
              priority={idx === 0}  // eager loading hanya untuk slide pertama
              loading={idx === 0 ? "eager" : "lazy"}  // lazy loading untuk sisanya
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // responsif
              unoptimized
            />
          ))}
          <div className="mt-2 absolute bottom-0 z-40 m-auto bg-gold hover:gold/80 w-full ">
            <p className="font-bold text-white text-xl  lg:text-2xl   leading-relaxed text-center m-auto py-1">{reservasiFoto}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardKategori;
