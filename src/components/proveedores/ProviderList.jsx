"use client"
import React, { useState } from 'react';
import ProviderCard from './ProviderCard';

export default function ProviderList({ providers }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(providers.map(provider => provider.rubro))];

  const filteredProviders = selectedCategory === 'Todos'
    ? providers
    : providers.filter(provider => provider.rubro === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="category" className="mr-2 font-bold">Filtrar por rubro:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
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
