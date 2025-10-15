"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_0167.jpg",
  "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_3957.jpg",
  "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_4070.jpg",
];

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* --- DESKTOP (lg ke atas) --- */}
      <section className="hidden lg:block relative h-screen overflow-hidden ">
        {/* Layered images */}
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 p-2 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={src}
              alt={`jumbotron-foto ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority={idx === 0} // Prioritaskan gambar pertama untuk preloading
              loading={idx === 0 ? "eager" : "lazy"} // Eager load hanya gambar pertama
              quality={75} // Kompres kualitas gambar supaya ringan tapi tetap bagus
            />
          </div>
        ))}

        {/* Overlay gradient + text content */}
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-white to-transparent p-5 z-20">
          <div className="max-w-[60%] p-7 ml-10   ">
            <h1 className="text-black text-5xl agatho font-semibold mb-4">
              Welcome to Sultan Studio
            </h1>
            <hr className="border-gold w-[30%] border-2 mb-3 rounded-[100px]" />
            <p className=" leading-relaxed text-[18px] text-black mb-2">
              Studio foto bergaya elegan dengan nuansa mewah. Didukung peralatan modern dan lokasi strategis, kami hadirkan pengalaman premium dengan harga terjangkau. Cocok untuk sesi keluarga, prewedding, personal branding, hingga kebutuhan komersial.
            </p>
            <h2 className="agatho text-2xl font-semibold text-black mb-6">
              Abadikan Moment Indahmu Bersama Kami!
            </h2>
            <div className="flex flex-col items-center  gap-10 space-y-4 sm:flex-row sm:space-y-0 ">
              <Link
                href="#"
                className="inline-flex items-center justify-around py-3 px-5 text-[20px] font-medium text-center text-white rounded-[80px] bg-gold hover:bg-gold_tua"
              >
                Chat Admin Via WhatsApp

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-7 h-7 fill-white ml-5"
                >
                  <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* --- MOBILE (kurang dari lg) --- */}
      <section className="block lg:hidden items-center transition-all duration-700  mb-4 mt-8 ">
        <div className="mt-27 text-center px-4 md:px-10 ">
          <h1 className="text-black text-3xl md:text-4xl p-2 agatho font-bold ">
            Welcome to Sultan Studio
          </h1>
          <hr className="m-auto border-gold w-[40%] md:w-[30%] border lg:border-2 mb-4 rounded-[100px]" />
          <p className="catarman font-normal text-[14px] md:text-[16px] text-black mb-5">
            Studio foto bergaya elegan dengan nuansa mewah. Didukung peralatan modern dan lokasi strategis, kami hadirkan pengalaman premium dengan harga terjangkau. Cocok untuk sesi keluarga, prewedding, personal branding, hingga kebutuhan komersial.
          </p>
          <h2 className="agatho text-[18px] font-bold md:text-[22px] text-black mb-6">
            Abadikan Moment Indahmu Bersama Kami!
          </h2>
        </div>

        <div className="relative p-2 flex items-center justify-center w-full h-64 sm:h-80 md:h-96 overflow-hidden ">
          {images.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 p-2  w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt={`jumbotron-foto ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={idx === 0} // Prioritaskan gambar pertama untuk preloading
                loading={idx === 0 ? "eager" : "lazy"} // Eager load hanya gambar pertama
                quality={75} // Kompres kualitas gambar supaya ringan tapi tetap bagus
                className="px-2"
              />
            </div>
          ))}


        </div>


        <div className="px-4 md:px-10text-center mt-6">
          <Link
            href="#"
            className="inline-flex items-center w-full justify-center py-3 px-5 text-[16px] md:text-[20px] font-medium text-center text-white rounded-[80px] bg-gold hover:bg-gold_tua"
          >
            Chat Admin Via WhatsApp

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5 md:w-6 md:h-6 fill-white ml-2"
            >
              <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
