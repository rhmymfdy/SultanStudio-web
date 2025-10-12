"use client";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaChevronDown } from 'react-icons/fa6';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {!isMobileMenuOpen ? (
            <IoMenu className="size-8" />
          ) : (
            <IoClose className="size-8" />
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0"
              >
                Home
              </a>
            </li>

            <li className="relative group">
              <button
                type="button"
                onClick={() => setDropdownOpen(!isDropdownOpen)} // toggle dropdown
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto"
              >
                Dropdown


                {!isDropdownOpen ? (
                  <FaChevronDown className="ml-2" />
                ) : (
                  <IoClose className="ml-2" />
                )}
              </button>

              <div
                className={`absolute z-10 ${isDropdownOpen ? "block" : "hidden"}
                group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow lg:w-44 w-60`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
