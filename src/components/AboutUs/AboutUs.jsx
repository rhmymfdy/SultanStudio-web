import Image from "next/image";

export default function AboutCard() {
    return (
        <div className="relative w-full overflow-hidden p-2 lg:p-4 ">
            {/* Background Wave Mobile */}
            <div className="absolute inset-0 -z-10  block lg:hidden transform scale-y-[-1] scale-x-[-1] ">
                <Image
                    src="/blob.svg"
                    alt="blob-background"
                    fill
                    priority
                    className="object-cover object-bottom "
                />

            </div>
            {/* Background Wave Mobile */}
            <div className="absolute block lg:hidden inset-0 -z-10 bg-gradient-to-t from-white from-5% to-transparent to-95%"></div>
            {/* Background Wave Mobile */}
            <div className="absolute block lg:hidden inset-0 -z-10 bg-gradient-to-b from-white from-5% to-transparent to-95%"></div>

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

            {/* Konten Utama */}
            <section className="flex flex-col lg:flex-row items-center justify-between overflow-hidden w-full lg:max-w-3/4 mx-auto relative z-10  ">
                {/* BAGIAN KANAN: TEKS */}
                <div className="w-full lg:w-1/2 p-4 lg:p-12 space-y-4 text-center lg:text-left ">
                    <h2 className="text-3xl md:text-4xl agatho font-bold text-black  mb-4">
                        Tentang Kami
                    </h2>
                    <p className="text-black text-[14px] lg:text-[16px]   leading-relaxed mb-4">
                        Selamat datang di <strong>Sultan Studio</strong>, penyedia layanan fotografi dan videografi profesional yang siap mengabadikan setiap momen berharga Anda dengan sentuhan artistik dan penuh makna.
                        <br />
                        Kami menghadirkan berbagai layanan mulai dari prewedding, wedding, wisuda, keluarga, hingga foto produk dan event, dengan kualitas visual tinggi dan hasil yang bercerita.
                        <br />
                        Setiap karya kami dibuat dengan perhatian pada detail, pencahayaan, serta emosi di setiap frame — karena kami percaya bahwa setiap momen memiliki kisah yang pantas diabadikan.
                        <br />
                        Dengan tim berpengalaman dan peralatan modern, <strong>Sultan Studio</strong> berkomitmen menghadirkan hasil terbaik yang menggambarkan kepribadian dan cerita Anda.
                        <br />
                        <strong>Sultan Studio</strong>— Capture Every Story, Frame Every Memory.
                    </p>
                </div>

                {/* BAGIAN KIRI: GAMBAR */}
                <div className="relative w-full lg:w-1/2 p-2 lg:p-8">
                    <div className="relative w-full lg:w-[90%] m-auto h-80 lg:h-96 overflow-hidden shadow-md">
                        <Image
                            src="/Jumbotron/NDA_0167.jpg"
                            alt="About Us"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
