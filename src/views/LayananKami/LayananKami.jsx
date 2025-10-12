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

                <h2 className="agatho text-center font-semibold text-2xl lg:text-5xl md:text-3xl" >Layanan Kami</h2>

                <p className="col-span-2 text-center px-4 lg:px-0 lg:text-left  catarman  font-normal text-[12px] lg:text-[20px] md:text-[16px]">Di <strong>Sultan Studio</strong> , kami menghadirkan layanan Fotografi dan Videografi terbaik untuk setiap momen spesial Anda. Dengan perpaduan kreativitas, teknologi modern, dan sentuhan personal, setiap hasil karya kami adalah cerminan kualitas dan kepercayaan.</p>
            </div>

            <hr className="border-gold w-[30%] m-auto lg:m-0 border lg:border-2 rounded-[100px] mb-5 lg:mb-5 " />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2  px-9 lg:px-4  ">

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images2} />

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images2} />

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images} />

                <CardKategori reservasiFoto={"Reservasi Wedding Photo"} linkReservasi={'/'} imgKategori={images2} />

            </div>
        </div>
    );
}

export default LayananKamiView;