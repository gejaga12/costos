"use client"
import React from 'react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="text-center mb-8">
      <input
        type="text"
        placeholder="Buscar por descripción..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg w-1/2"
      />
    </div>
  );
};

export default SearchInput;
