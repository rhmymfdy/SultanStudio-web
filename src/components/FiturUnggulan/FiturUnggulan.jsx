import Image from "next/image";
const FiturUnggulan = () => {
    return (

        <div className="relative w-full overflow-hidden p-2 lg:p-4 ">
            {/* Background Wave */}
            <div className="absolute inset-0 -z-10  transform  scale-x-[-1]   ">
                <Image
                    src="/wave.svg"
                    alt="wave-background"
                    fill
                    priority
                    className="object-cover object-bottom "
                />


            </div>
            <div className="absolute lg:hidden block inset-0 -z-10  transform  scale-y-[-1]   ">
                <Image
                    src="/wave.svg"
                    alt="wave-background"
                    fill
                    priority
                    className="object-cover object-bottom "
                />


            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white from-5% to-transparent to-95%"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white from-5% to-transparent to-95%"></div>


            <section className="w-full  m-auto lg:max-w-3/4 p-6">



                <section className=" text-center mb-10">
                    <h2 className=" text-3xl md:text-4xl agatho font-bold text-black  mb-4  ">
                        Mengapa Harus Memilih Sultan Studio?
                    </h2>
                    <h3 className="text-black text-[14px] lg:text-[16px]   leading-relaxed">
                        Temukan Alasan Studio Kami Jadi Pilihan Terbaik
                    </h3>
                </section>
                <section className=" lg:grid-cols-3 grid grid-cols-1 gap-4   ">


                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105 ">
                        <Image
                            src={"/icons/lokasi.png"}
                            alt="icons-lokasi"
                            width={100}
                            height={100}
                            className="m-auto mb-2"
                        />
                        <h4 className=" agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2">
                            Lokasi Strategis
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            Terletak di pusat kota, <strong>Sultan Studio</strong> mudah dijangkau dan dikelilingi fasilitas pendukung, membuat setiap sesi foto dan video berjalan lebih efisien dan nyaman.
                        </p>
                    </section>


                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105">
                        <Image
                            src={"/icons/garansi.png"}
                            alt="icons-garansi"
                            width={100}
                            height={100}
                            className="m-auto mb-3"
                        />
                        <h4 className="agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2 ">
                            Garansi
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            File disimpan aman selama 1 tahun. Jika hilang, Anda bisa memintanya kembali gratis. <strong>Sultan Studio</strong> menjamin keamanan file serta kepuasan atas setiap hasil karya.
                        </p>
                    </section>


                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105">
                        <Image
                            src={"/icons/harga-terjangkau.png"}
                            alt="icons-harga-terjangkau"
                            width={100}
                            height={100}
                            className="m-auto mb-3"
                        />
                        <h4 className=" agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2 ">
                            Harga Terjangkau
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            <strong>Sultan Studio</strong> menghadirkan layanan foto dan video profesional dengan harga bersahabat, memastikan setiap momen berharga tetap berkualitas tanpa harus mahal.
                        </p>
                    </section>

                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105">
                        <Image
                            src={"/icons/pelayanan.png"}
                            alt="icons-pelayanan"
                            width={100}
                            height={100}
                            className="m-auto mb-3"
                        />
                        <h4 className="agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2">
                            Layanan Terlengkap & Teknologi Terkini
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            <strong>Sultan Studio</strong> menghadirkan berbagai layanan foto dan video dengan peralatan modern serta teknologi terbaru, memastikan setiap hasil tampak maksimal, tajam, dan berkelas profesional.
                        </p>
                    </section>

                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105 ">
                        <Image
                            src={"/icons/professional-services.png"}
                            alt="icons-professional-services"
                            width={100}
                            height={100}
                            className="m-auto mb-3"
                        />
                        <h4 className=" agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2">
                            Tim Profesional & Berpengalaman
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            Tim <strong>Sultan Studio</strong> berpengalaman dan berdedikasi, siap menghasilkan karya foto dan video terbaik secara profesional.
                        </p>
                    </section>


                    <section className=" text-center p-2 transform duration-300 ease-in-out hover:scale-105 ">
                        <Image
                            src={"/icons/legal-instansi.png"}
                            alt="icons-legal-instansi"
                            width={100}
                            height={100}
                            className="m-auto mb-3"
                        />
                        <h4 className="agatho font-bold text-black text-xl  lg:text-2xl   leading-relaxed  mb-2">
                            Instansi Legal
                        </h4>
                        <p className="text-black text-[14px] lg:text-[16px] leading-relaxed">
                            <strong>© Sultan Studio</strong> — Usaha resmi terdaftar dan beroperasi sesuai hukum yang berlaku di Indonesia.
                        </p>
                    </section>




                </section>
            </section>


        </div>

    );
};

export default FiturUnggulan;
