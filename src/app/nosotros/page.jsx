"use client";
import { FaRegNewspaper } from 'react-icons/fa';

export default function Nosotros() {
  return (
    <div className="container mx-auto py-10 px-4 flex flex-col h-full justify-center items-center">
      {/* Título */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Nosotros</h1>
      </div>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row items-start w-full lg:space-x-8">
        {/* Sección de Descripción */}
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed mb-6">
            Somos una revista especializada en el análisis de los costos de construcción en Paraguay. Ofrecemos un análisis en profundidad sobre costos de materiales de construcción y mano de obra, siendo una herramienta imprescindible para todos los profesionales del rubro.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed mb-6">
            No solo empresas y constructoras confían mes a mes en nuestro trabajo, sino que, también, varios entes gubernamentales, binacionales y multinacionales dependen de nuestra labor para la proyección y fiscalización de sus proyectos.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Con más de 37 años de experiencia, al momento de construir, somos el mayor referente nacional para todos los profesionales de la construcción de la región; con lectores en Argentina, Brasil, Uruguay, Chile, y varios otros países del mundo.
          </p>
        </div>

        {/* Sección de Destacado */}
        <div className="lg:w-1/3 lg:pl-8">
          <div className="p-6 bg-red-200 border-2 border-red-500 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 flex items-center">
              <FaRegNewspaper className="text-red-500 mr-2 sm:mr-4" size={40} />
              Una revista líder en el Paraguay
            </h3>
            <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
              Con 37 años en el mercado, somos el referente indispensable en análisis de costos de materiales y mano de obra de la construcción en Paraguay. Ofrecemos información especializada en todas las áreas de la construcción.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
