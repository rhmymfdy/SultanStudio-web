"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    "/Jumbotron/NDA_0167.jpg",
    "/Jumbotron/NDA_3957.jpg",
    "/Jumbotron/NDA_4070.jpg",
    "/Jumbotron/NDA_0167.jpg",
    "/Jumbotron/NDA_4070.jpg",
    "/Jumbotron/NDA_3957.jpg",
    "/Jumbotron/NDA_0167.jpg",
    "/Jumbotron/NDA_3957.jpg",
    "/Jumbotron/NDA_4070.jpg",
    "/Jumbotron/NDA_0167.jpg",
    "/Jumbotron/NDA_4070.jpg",
    "/Jumbotron/NDA_3957.jpg",
];

export default function CardImageSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full overflow-hidden p-2 lg:p-4">

            {/* Background Wave */}
            <div className="absolute inset-0 -z-10  transform  scale-x-[-1]   ">
                <Image
                    src="/blob.svg"
                    alt="blob-background"
                    fill
                    priority
                    className="object-cover object-bottom "
                />

            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white from-5% to-transparent to-95%"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white from-5% to-transparent to-95%"></div>



            {/* Tampilan Desktop */}
            <div className="w-full hidden lg:max-w-3/4 lg:grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 items-center">
                {/* BAGIAN SLIDER */}
                <div className="w-full ">
                    {/* Main Slider */}
                    <Swiper
                        modules={[Navigation, Thumbs, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mb-4 relative"
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-[300px] lg:h-[350px] overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`image-${i}`}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Tombol Prev */}
                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full  bg-white/30 hover:bg-white/60 transition ml-10 "
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </button>

                        {/* Tombol Next */}
                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 transition mr-10"
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </button>
                    </Swiper>

                    {/* Thumbnail */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={6}
                        spaceBetween={3}
                        watchSlidesProgress
                        className="cursor-pointer"
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-12 lg:h-16  overflow-hidden border-2 border-transparent hover:border-gold transition">
                                    <Image
                                        src={src}
                                        alt={`thumb-${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* BAGIAN TEKS */}
                <section className="text-center  p-5 lg:text-left">

                    <div className="absolute  border-2 bg-gradient-to-t from-white from-5% to-transparent to-95%"></div>
                    <h2 className="font-semibold agatho text-3xl md:text-4xl text-black pb-4">
                        Moment Bahagia Bersama
                        <br /><strong>Sultan Studio</strong>
                    </h2>
                    <p className="text-black text-[14px] lg:text-[16px]   leading-relaxed mb-4" >Setiap momen berharga layak untuk diabadikan dengan sempurna.
                        Di <strong>Sultan Studio</strong>, kami menghadirkan hasil foto dan video yang tak hanya indah dipandang, tetapi juga menyimpan cerita, tawa, dan kebahagiaan di setiap detiknya. Jadikan setiap kenangan Anda abadi bersama sentuhan profesional kami.</p>
                    <hr className="mt-6 w-[55%] h-[3px] bg-gold text-gold rounded-full m-auto lg:m-0" />
                </section>
            </div>

            {/* Tampilan Mobile */}
            <div className="w-full grid lg:max-w-3/4 lg:hidden grid-cols-1 lg:grid-cols-2 mx-auto gap-8 items-center">
                {/* BAGIAN TEKS */}
                <section className="text-center  p-5 lg:text-left">
                    <h2 className="font-semibold agatho text-3xl md:text-4xl text-black pb-4">
                        Moment Bahagia Bersama
                        <strong> Sultan Studio</strong>
                    </h2>
                    <p className="text-black text-[14px] lg:text-[16px]   leading-relaxed mb-4" >Setiap momen berharga layak untuk diabadikan dengan sempurna.
                        Di <strong>Sultan Studio</strong>, kami menghadirkan hasil foto dan video yang tak hanya indah dipandang, tetapi juga menyimpan cerita, tawa, dan kebahagiaan di setiap detiknya. Jadikan setiap kenangan Anda abadi bersama sentuhan profesional kami.</p>
                    <hr className="mt-6 w-[55%] h-[3px] bg-gold text-gold rounded-full m-auto lg:m-0" />
                </section>

                {/* BAGIAN SLIDER */}
                <div className="w-full ">
                    {/* Main Slider */}
                    <Swiper
                        modules={[Navigation, Thumbs, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mb-4 relative"
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-[300px] lg:h-[350px] overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`image-${i}`}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Tombol Prev */}
                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full  bg-white/30 hover:bg-white/60 transition ml-5 "
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </button>

                        {/* Tombol Next */}
                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 transition mr-5"
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </button>
                    </Swiper>

                    {/* Thumbnail */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={6}
                        spaceBetween={3}
                        watchSlidesProgress
                        className="cursor-pointer"
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-12 lg:h-16  overflow-hidden border-2 border-transparent hover:border-gold transition">
                                    <Image
                                        src={src}
                                        alt={`thumb-${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
}
