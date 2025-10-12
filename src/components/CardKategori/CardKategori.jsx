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
    <div className="   hover:scale-[102%] duration-300 hover:shadow-lg  " >
      <Link href={linkReservasi}>
        <div className="m-auto  rounded-md  w-[100%] h-[450px]  lg:h-[600px] md:h-[450px] relative">
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
          <div className="mt-2 absolute bottom-0 z-40 m-auto bg-gold hover:gold/80 w-[70%]  text-white ">
            <p className="agatho text-[16px] px-2 py-1 lg:text-[24px] md:text-[20px]">{reservasiFoto}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardKategori;
