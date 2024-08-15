"use client";
import Typewriter from 'typewriter-effect';
import { FaChevronDown } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/fondo2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay para oscurecer el video */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Texto con efecto de escritura */}
      <div className="relative z-10 text-center flex flex-col items-center mt-auto mb-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['REVISTA COSTOS', 'REVISTA DE LA CONSTRUCCION'],
              autoStart: true,
              loop: false,  // Eliminar el loop para escribir una sola vez
              delay: 75,
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('REVISTA COSTOS')
                .pauseFor(2000)
                .typeString('<br/>REVISTA DE LA CONSTRUCCION')
                .start();
            }}
          />
        </h1>
      </div>

      {/* Flecha hacia abajo */}
      <div className="relative z-10 mb-12 mt-auto">
        <a href="#beneficios" className="text-white hover:text-gray-300">
          <FaChevronDown className="animate-bounce text-4xl" />
        </a>
      </div>
    </section>
  );
}
