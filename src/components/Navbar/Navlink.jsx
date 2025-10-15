'use client';

import { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import { FaChevronDown } from 'react-icons/fa6';
import clsx from "clsx";

const Navlink = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPortofolioOpen, setPortofolioOpen] = useState(false);
    const [isFotoStudioOpen, setFotoStudioOpen] = useState(false);
    const [isLayananOpen, setLayananOpen] = useState(false);

    return (
        <nav className="relative bg-white ">
            {/* Top Navbar (visible on large screens) */}
            <div className="hidden lg:flex justify-between items-center px-6 py-3">
                <ul className="flex items-center space-x-6 font-medium">
                    <li>
                        <a href="#" className="catarman text-blue-700 hover:text-blue-800">
                            Beranda
                        </a>
                    </li>

                    {/* PORTOFOLIO DROPDOWN Desktop */}
                    <li
                        className="relative group"
                        onMouseEnter={() => setPortofolioOpen(true)}
                        onMouseLeave={() => setPortofolioOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setPortofolioOpen(!isPortofolioOpen)} // tetap bisa di klik
                            className="flex items-center text-gray-700 hover:text-blue-700 focus:outline-none"
                        >
                            Portofolio
                            <FaChevronDown
                                className={clsx("ml-2 transition-transform duration-300", {
                                    "rotate-180": isPortofolioOpen,
                                })}
                            />
                        </button>

                        {/* Dropdown (Desktop only) */}
                        <div
                            className={clsx(
                                "absolute right-0 mt-2 w-55 bg-white  shadow-lg transition-all duration-300 ease-in-out transform",
                                isPortofolioOpen
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                            )}
                        >
                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto Wedding
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto Wisudah
                                    </a>
                                </li>
                                <li className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setFotoStudioOpen(!isFotoStudioOpen)}
                                        className="flex cursor-pointer items-center justify-between w-full px-4 py-2 text-gray-900 rounded hover:bg-gray-100"
                                    >
                                        Foto Studio
                                        {!isFotoStudioOpen ? (
                                            <FaChevronDown className="ml-2" />
                                        ) : (
                                            <IoClose className="ml-2" />
                                        )}
                                    </button>

                                    <div
                                        className={clsx(
                                            "overflow-hidden transition-all duration-300 ease-in-out",
                                            isFotoStudioOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div className="mt-2 bg-gray-50 rounded-lg border px-6 border-gray-200 shadow-sm">
                                            <ul className="py-2 text-sm text-gray-700">
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pas Foto</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Foto Personal</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Foto Keluarga</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Prewedding Studio</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Foto Couple</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Foto Maternity</a></li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto Engagement
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Prewedding Outdoor
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto & Video Event
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Video Cinematic
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Layanan Dropdown Desktop */}
                    <li
                        className="relative group"
                        onMouseEnter={() => setLayananOpen(true)}
                        onMouseLeave={() => setLayananOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setLayananOpen(!isLayananOpen)} // tetap bisa di klik
                            className="flex items-center text-gray-700 hover:text-blue-700 focus:outline-none"
                        >
                            Layanan
                            <FaChevronDown
                                className={clsx("ml-2 transition-transform duration-300", {
                                    "rotate-180": isLayananOpen,
                                })}
                            />
                        </button>

                        {/* Dropdown (Desktop only) Layanan */}
                        <div
                            className={clsx(
                                "absolute right-0 mt-2 w-55 bg-white  shadow-lg transition-all duration-300 ease-in-out transform",
                                isLayananOpen
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                            )}
                        >
                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto Studio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Wedding
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Engagement
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Prewedding
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto & Video Event
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Foto Produk
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-700">
                            Artikel
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-700">
                            Tentang
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-700">
                            Testimoni
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-700">
                            Kontak
                        </a>
                    </li>
                </ul>
            </div>





            {/* Mobile Header (hamburger) */}
            <div className="flex justify-between items-center px-4 py-3 lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    {!isMobileMenuOpen ? (
                        <IoMenu className="size-8" />
                    ) : (
                        <IoClose className="size-8" />
                    )}
                </button>
            </div>




            {/* Overlay Blur (Mobile only) */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0  bg-black/30 duration-500 ease-in-out  backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar (Mobile only) */}
            <div
                className={clsx(
                    "fixed top-0 right-0 z-50 h-full w-64 bg-white border-l border-gray-200 shadow-xl transform transition-transform duration-500 ease-in-out lg:hidden",
                    {
                        "translate-x-0": isMobileMenuOpen,
                        "translate-x-full": !isMobileMenuOpen,
                    }
                )}
            >
                {/* Header Sidebar Mobile */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
                    <button onClick={() => setMobileMenuOpen(false)}>
                        <IoClose className="size-6 text-gray-600" />
                    </button>
                </div>

                {/* Kontainer Scrollable Mobile */}
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-64px)]">
                    <ul className="flex flex-col font-medium p-4 space-y-2">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-600"
                            >
                                Beranda
                            </a>
                        </li>

                        {/* Dropdown Portofolio  Mobile*/}
                        <li className="relative">
                            <button
                                type="button"
                                onClick={() => setPortofolioOpen(!isPortofolioOpen)}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                Portofolio
                                {!isPortofolioOpen ? (
                                    <FaChevronDown className="ml-2" />
                                ) : (
                                    <IoClose className="ml-2" />
                                )}
                            </button>

                            <div
                                className={clsx(
                                    "transition-all duration-300 ease-in-out overflow-hidden",
                                    isPortofolioOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700 border-l border-gray-200">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                            Foto Wedding
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                            Foto Wisudah
                                        </a>
                                    </li>

                                    {/* Sub-dropdown Foto Studio Mobile */}
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => setFotoStudioOpen(!isFotoStudioOpen)}
                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-900 rounded hover:bg-gray-100"
                                        >
                                            Foto Studio
                                            {!isFotoStudioOpen ? (
                                                <FaChevronDown className="ml-2" />
                                            ) : (
                                                <IoClose className="ml-2" />
                                            )}
                                        </button>

                                        <div
                                            className={clsx(
                                                "transition-all duration-300 ease-in-out overflow-hidden",
                                                isFotoStudioOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                            )}
                                        >
                                            <ul className="pl-4 mt-1 space-y-1 text-sm border-l border-gray-200">
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Pas Foto</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Personal</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Keluarga</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Prewedding Studio</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Couple</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Maternity</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Engagement</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Prewedding Outdoor</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto & Video Event</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Video Cinematic</a></li>
                                </ul>
                            </div>
                        </li>

                        {/* Dropdown Layanan Mobile */}
                        <li className="relative">
                            <button
                                type="button"
                                onClick={() => setLayananOpen(!isLayananOpen)}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                Layanan
                                {!isLayananOpen ? (
                                    <FaChevronDown className="ml-2" />
                                ) : (
                                    <IoClose className="ml-2" />
                                )}
                            </button>

                            <div
                                className={clsx(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    isLayananOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700 border-l border-gray-200">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Studio</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Wedding</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Engagement</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Prewedding</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Event</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Foto Produk</a></li>
                                </ul>
                            </div>
                        </li>

                        {/* Item lain Mobile */}
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Artikel</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Tentang</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Testimoni</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Kontak</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    );
};

export default Navlink;
