"use client";

import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setShowTopBar(false); // Oculta la barra al desplazarse hacia abajo
      } else {
        setShowTopBar(true); // Muestra la barra al desplazarse hacia arriba
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`bg-red-600 w-full h-8 flex items-center justify-between px-5 transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-8'}`}>
        <div className="flex justify-center">
          <Link href="https://www.instagram.com" className="text-white text-sm  hover:text-yellow-400 mx-2">Profesionales</Link>
          <Link href="https://www.instagram.com" className="text-white text-sm hover:text-yellow-400 mx-2">Distribuidores</Link>
          <Link href="https://www.instagram.com" className="text-white text-sm hover:text-yellow-400 mx-2">Contacto</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.instagram.com" className="text-white hover:text-yellow-400"><FaInstagram /></Link>
          <Link href="https://www.facebook.com" className="text-white hover:text-yellow-400"><FaFacebookF /></Link>
          <Link href="https://www.youtube.com" className="text-white hover:text-yellow-400"><FaYoutube /></Link>
          <Link href="https://www.linkedin.com" className="text-white hover:text-yellow-400"><FaLinkedinIn /></Link>
          <button className="text-white hover:text-yellow-400">
            <FaSearch />
          </button>
        </div>
      </div>
      <Disclosure as="nav" className="bg-black text-white sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex items-center justify-center  flex-1">
                <a href='/'>
                  <Image src="/logo.webp" alt="Durlock Logo" width={180} height={100} />
                </a>
              </div>

              {/* Main Menu */}
              <div className="hidden md:flex justify-center flex-1 space-x-4">
                <Link href="/productos" className="text-white hover:text-yellow-400">Productos</Link>
                <Link href="/cotiza" className="text-white hover:text-yellow-400">Cotizá</Link>
                <Link href="/donde-comprar" className="text-white hover:text-yellow-400">Dónde comprar</Link>
                <Link href="/nosotros" className="text-white hover:text-yellow-400">Nosotros</Link>
              </div>

              {/* Icons and Secondary Links */}
              <div className="hidden md:flex justify-end flex-1 items-center space-x-4">
                <Link href="/login" className="text-xs bg-red-600 hover:bg-red-700 font-semibold text-white px-4 py-2 rounded-md">
                  Iniciar Sesión
                </Link>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="/productos" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Productos</Link>
                <Link href="/cotiza" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Cotizá</Link>
                <Link href="/donde-comprar" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Dónde comprar</Link>
                <Link href="/nosotros" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Nosotros</Link>
                <Link href="/profesionales" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Profesionales</Link>
                <Link href="/contacto" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700">Contacto</Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
