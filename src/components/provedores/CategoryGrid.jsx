"use client"
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

// Componente de cuadrícula de categorías
const CategoryGrid = ({ categories, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-6 border-red-600 border-t-4 border-b-4 p-4 sm:p-4 md:p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-32 aspect-w-1 aspect-h-1 rounded-lg cursor-pointer hover:opacity-90 overflow-hidden hover:shadow-md hover:shadow-black"
          onClick={() => onSelectCategory(category)}
        >
          {/* Imagen de fondo usando el componente Image de Next.js */}
          <Image
            src={`/categorias/${category.toLowerCase()}.jpg`} // Ruta dinámica basada en el nombre de la categoría
            alt={category}
            fill            
            className="rounded-lg bg-cover"
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
