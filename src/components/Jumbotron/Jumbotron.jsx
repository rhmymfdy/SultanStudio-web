"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

const images = [
  "/Jumbotron/NDA_0167.jpg",
  "/Jumbotron/NDA_3957.jpg",
  "/Jumbotron/NDA_4070.jpg",
  // bisa tambah gambar lain di sini
];

const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2000ms = 2 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop (tampil hanya saat layar ≥ lg) */}
      <section
        className="hidden lg:block items-center bg-center bg-no-repeat bg-cover bg-blend-multiply border-4 h-screen transition-all duration-700 mb-5"
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
        }}
      >
        <div className="w-full h-full flex items-center bg-gradient-to-r from-white to-transparent p-5">
          <div className="border border-red-500 max-w-[50%] p-7 mt-15">
            <div className="border border-red-500 p-7">
              <h1 className="text-black text-6xl font-bold mb-4">
                Welcome to our website
              </h1>
              <h2 className="text-3xl font-normal text-black mb-6">
                Abadikan Moment Indahmu Bersama Kami !
              </h2>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <a
                  href="#"
                  className="inline-flex items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  See Price List
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile (tampil hanya saat layar < lg) */}
      <section className="block lg:hidden   items-center transition-all duration-700 border-2 border-amber-600">
        <div className="mt-25 text-center ">
          <h1 className="text-black sm:text-4xl font-bold mb-4 text-2xl">
            Welcome to our website
          </h1>
          <h2 className="sm:text-xl text-lg font-normal text-black mb-6">
            Abadikan Moment Indahmu Bersama Kami !
          </h2>
        </div>
        <div className="p-2 flex items-center w-full h-auto justify-center border-2">
          <Image
            src={images[currentIndex]}
            alt="Picture of the author"
            width={900}
            height={400}
            className="object-cover"
          />
        </div>
        <div className=" p-2">
          <div className="w-full flex flex-col space-y-4   text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              See Price List
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
