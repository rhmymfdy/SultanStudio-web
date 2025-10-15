
import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/Navbar/Navlink";

const Navbar = () => {


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo-sultan-studio.png"
            alt="Sultan Studio Logo"
            width={32}  // Karena class h-8 itu sekitar 32px (8 * 4px)
            height={32} // Sesuaikan tinggi biar proporsional, bisa disesuaikan sesuai gambar asli
            className="h-8"
            priority
          />
          <span className="self-center monteria  text-2xl font-semibold whitespace-nowrap text-gold_tua">
            Sultan Studio
          </span>
        </Link>
        <Navlink />

      </div>
    </nav>
  );
};

export default Navbar;
