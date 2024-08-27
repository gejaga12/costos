"use client"
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

// Componente de cuadrícula de categorías
const CategoryGrid = ({ categories, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-32 rounded-lg cursor-pointer shadow hover:opacity-80 overflow-hidden"
          onClick={() => onSelectCategory(category)}
        >
          {/* Imagen de fondo usando el componente Image de Next.js */}
          <Image
            src={`/categorias/${category.toLowerCase()}.jpg`} // Ruta dinámica basada en el nombre de la categoría
            alt={category}
            layout="fill" // Ocupa todo el contenedor
            objectFit="cover" // Asegura que la imagen cubra todo el contenedor
            className="rounded-lg"
          />
          <span className="absolute text-lg font-bold text-center text-white bg-black w-full h-full flex items-center justify-center bg-opacity-60 px-2 py-1 rounded">
            {category}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
