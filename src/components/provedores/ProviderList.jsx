"use client"
import React, { useState, useEffect } from 'react';
import ProviderCard from './ProviderCard';
import CategoryGrid from './CategoryGrid';
import SearchInput from './SearchInput'; // Importa el componente de búsqueda

export default function ProviderList({ providers }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [filteredProviders, setFilteredProviders] = useState(providers);

  // Generar la lista de categorías a partir de los proveedores
  const categories = ['Todos', ...new Set(providers.map(provider => provider.rubro))];

  // Filtrar los proveedores según la categoría seleccionada y el término de búsqueda
  useEffect(() => {
    let filtered = providers;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(provider => provider.rubro === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(provider => {
        const descripcion = provider.info.descripcion || ''; // Verificar que exista descripción
        return descripcion.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    setFilteredProviders(filtered);
  }, [selectedCategory, searchTerm, providers]);

  // Manejar la selección de una categoría desde el grid
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Manejar cambios en el término de búsqueda
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Componente de búsqueda */}
      <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Cuadrícula de categorías */}
      <CategoryGrid categories={categories} onSelectCategory={handleSelectCategory} />

      {/* Lista de proveedores filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map((provider, index) => (
          <ProviderCard
            key={index}
            empresa={provider.empresa}
            info={provider.info}
          />
        ))}
      </div>
    </div>
  );
}
