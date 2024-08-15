import React from 'react';
import ProviderList from '../../components/proveedores/ProviderList';
import data from '../../../data/data-completa.json'; // Asegúrate de tener el JSON que creaste importado aquí

export default function GuiaDeProveedores() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Guía de Proveedores</h1>
      <ProviderList providers={data} />
    </div>
  );
}
