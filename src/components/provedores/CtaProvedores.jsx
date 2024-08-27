"use client"
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js
import logo from '../../../public/logo.webp'; // Asegúrate de tener el logo en la carpeta public
import Link from 'next/link';

const CtaProvedores = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-start xl:pl-20">        
      {/* Imagen de fondo con opacidad */}
      <div className="absolute inset-0">
        <Image
          src="/bg-ctaprovedores.jpg" // Ruta de la imagen proporcionada
          alt="Fondo"
          fill
          className="object-cover" // Opacidad añadida al fondo
        />

        {/* Capa de color sobre la imagen para aumentar la opacidad */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Contenedor de contenido alineado a la izquierda */}
      <div className="relative z-10 flex flex-col md:flex-row items-start text-left p-6 md:p-8 space-y-4 md:space-y-0 md:space-x-6 bg-transparent bg-opacity-80">
        {/* Logo y texto */}
        <div className="flex flex-col items-start space-y-7">
          <Image src={logo} alt="Logo Revista Costos" width={100} height={40} className="w-20 md:w-24 lg:w-32" />
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
            CALCULÁ Y COTIZÁ
          </h1>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-normal text-white">
            Los materiales para tu obra con Revista Costos
          </h1>
          <Link href="" className="bg-red-600 hover:bg-red-700 text-white text-md justify-end items-end font-bold py-2 px-4 rounded-lg">
            COTIZAR
          </Link>         
        </div>       
      </div>
    </div>
  );
};

export default CtaProvedores;
