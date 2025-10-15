import Image from "next/image";
export default function GoogleMaps() {
    return (
        <div className="w-full relative  overflow-hidden">

            {/* Background Wave */}
            <div className="absolute inset-0 -z-10     ">
                <Image
                    src="/wave.svg"
                    alt="Wave Background"
                    fill
                    priority
                    className="object-cover object-bottom "
                />
            </div>
            <div className="absolute inset-0 -z-10  bg-gradient-to-t from-white from-5% to-transparent to-95%"></div>


            <div className=" grid grid-cols-1 w-full text-center lg:text-left items-center lg:max-w-3/4 m-auto lg:grid-cols-2 px-4  lg:gap-8 ">
                {/* Teks di atas map */}
                <div className=" mb-6 px-4">
                    <h2 className="text-3xl md:text-4xl agatho font-bold text-black mb-2">
                        Lokasi Sultan Studio
                    </h2>
                    <p className="text-black text-[14px] lg:text-[16px]   leading-relaxed ">
                        <strong>Sultan Studio</strong> berlokasi di Kebalenan, Kecamatan Banyuwangi, Kabupaten Banyuwangi, Jawa Timur (68472). Terletak di area yang mudah dijangkau dan dekat dengan pusat kota, memudahkan Anda untuk datang langsung ke studio kami untuk sesi foto, video, maupun konsultasi proyek kreatif Anda.
                    </p>
                </div>

                {/* Map */}
                <div className="w-full border border-gray-200 h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-md shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155477.1082175603!2d114.19258589726562!3d-8.240413299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15b007ef305a1%3A0xd15c800747185c2d!2sHomestay%20Pondok%20Jepun!5e1!3m2!1sid!2sid!4v1757595726206!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Map Pondok Jepun"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
