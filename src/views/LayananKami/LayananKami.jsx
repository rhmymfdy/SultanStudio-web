import CardKategori from "@/components/CardKategori/CardKategori";

const images = [
    "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_0167.jpg",
    "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_3957.jpg",
    "https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/NDA_4070.jpg",
];

const images2 = [
    'https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/ABU01792495.jpg',
    'https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/ABU01808507.jpg',
    'https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/ABU02274616.jpg',
    'https://eotmlhfvsaspxchavatc.supabase.co/storage/v1/object/public/FotoTampilan/ABU02393685.jpg'
]

const LayananKamiView = () => {
    return (
        <div className="w-full p-2 lg:max-w-3/4 md:max-w-full m-auto mt-8 md:mt-8 lg:mt-10 ">
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-5 lg:mb-10">

                <h2 className="text-3xl md:text-4xl text-center agatho font-bold text-black  mb-2 " >Layanan Kami</h2>

                <p className="col-span-2 text-black lg:text-left text-center p-2 text-[14px] lg:text-[16px] leading-relaxed">Di <strong>Sultan Studio</strong> , kami menghadirkan layanan Fotografi dan Videografi terbaik untuk setiap momen spesial Anda. Dengan perpaduan kreativitas, teknologi modern, dan sentuhan personal, setiap hasil karya kami adalah cerminan kualitas dan kepercayaan.</p>
            </div>

            <hr className="border-gold m-auto rounded-full  w-[30%] lg:ml-10 " />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full lg:w-max-3/4 p-4  ">

                <CardKategori reservasiFoto={"Reservasi Foto Studio"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Foto Wedding"} linkReservasi={'/'} imgKategori={images2} />

                <CardKategori reservasiFoto={"Reservasi Foto Engagement"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Foto Prewedding"} linkReservasi={'/'} imgKategori={images2} />

                <CardKategori reservasiFoto={"Reservasi Doumentasi Event"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Foto Produk"} linkReservasi={'/'} imgKategori={images2} />

            </div>
        </div>
    );
}

export default LayananKamiView;