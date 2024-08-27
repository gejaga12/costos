import React from 'react';
import ProviderList from '../../components/provedores/ProviderList';
import data from '../../../data/data-completa-actualizada.json'; // Asegúrate de tener el JSON que creaste importado aquí

export default function GuiaDeProveedores() {
  return (
    <div>
      <p  className="text-xs font-base text-center mt-8 mb-2">NUESTROS PRODUCTOS Y SERVICIOS</p>
      <h1 className="text-3xl font-bold text-center mb-4">¿Qué estás buscando?</h1>
      <ProviderList providers={data} />
    </div>
  );
}
