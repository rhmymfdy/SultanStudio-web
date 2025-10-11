import Image from "next/image";
import Link from "next/link";
const CardKategori = () => {
  return (
    <div className="w-[90%] p-2 lg:max-w-3/4 border-2 md:max-w-[90%] m-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 ">
        <div className="bg-gradient-to-t from-white to bg-transparent ">
          <Image
            src="/KategoriFoto/Untitled-1.jpg"
            alt="Picture of the author"
            width={700}
            height={500}
            className="object-cover "
          />
          <div className="border-2">
            <Link href={"/"}>
              <div className="p-2 text-center ">
                <p className="text-lg font-bold">Kategori</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-2 border-amber-600 ">
          <Link href={"/"}>
            <Image
              src="/KategoriFoto/Untitled-1.jpg"
              alt="Picture of the author"
              width={700}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="border-2 border-amber-600 ">
          <Link href={"/"}>
            <Image
              src="/KategoriFoto/Untitled-1.jpg"
              alt="Picture of the author"
              width={700}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="border-2 border-amber-600 ">
          <Link href={"/"}>
            <Image
              src="/KategoriFoto/Untitled-1.jpg"
              alt="Picture of the author"
              width={700}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardKategori;
