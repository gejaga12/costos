"use client";
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { FcApproval } from "react-icons/fc";

const benefits = [
  {
    id: 1,
    title: 'Es amigable con el medio ambiente',
    content: 'Detalle sobre cómo Costos es amigable con el medio ambiente.',
    image: '/beneficios/image1.jpg'
  },
  {
    id: 2,
    title: 'Disminuye los plazos de obra',
    content: 'Detalle sobre cómo Costos ayuda a disminuir los plazos de obra.',
    image: '/beneficios/image2.jpg'
  },
  {
    id: 3,
    title: 'Facilita la construcción de grandes proyectos',
    content: 'Detalle sobre cómo Costos facilita la construcción de grandes proyectos.',
    image: '/beneficios/image3.jpg'
  },
  {
    id: 4,
    title: 'Más opciones para diseñar espacios',
    content: 'Detalle sobre las opciones que Costos ofrece para diseñar espacios.',
    image: '/beneficios/image4.jpg'
  },
  {
    id: 5,
    title: 'Ideal para refacciones y simple mantenimiento',
    content: 'Detalle sobre por qué Costos es ideal para refacciones y mantenimiento.',
    image: '/beneficios/image5.webp'
  }
];

export default function BenefitsAccordion() {
  const [selectedImage, setSelectedImage] = useState(benefits[0].image);
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (id, image) => {
    setSelectedImage(image);
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div id='beneficios' className="container bg-white mx-auto flex flex-col md:flex-row items-center py-10 h-screen">
      {/* Imagen que cambia */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image
            src={selectedImage}
            alt="Imagen relacionada con el beneficio"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Acordeón */}
      <div className="md:w-1/2 md:ml-8">
        <h2 className="text-2xl font-bold mb-6">Beneficios de hacerlo con nosotros</h2>
        {benefits.map((benefit) => (
          <Disclosure key={benefit.id} as="div" className="mb-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-900 border-b border-gray-300"
                  onClick={() => toggleAccordion(benefit.id, benefit.image)}
                >
                  <span className='flex items-center justify-center gap-4'>  <FcApproval /> {benefit.title}</span>
                  <FaChevronDown
                    className={`${
                      openItemId === benefit.id ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                {openItemId === benefit.id && (
                  <Disclosure.Panel className="py-2 text-gray-500">
                    {benefit.content}
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
