import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                {/* Logo y Suscripción al Newsletter */}
                <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <Image src="/logo.webp" alt="Revista Costos Logo" width={150} height={150} />
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Suscribite al Newsletter</h3>
                        <form className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 py-2 rounded-l-md bg-white text-black focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-black px-4 py-2 rounded-r-md hover:bg-red-700 transition-all duration-300"
                            >
                                <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Navegación */}
                <div className="md:w-1/3 flex justify-around w-full text-sm">
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-2">Productos</h4>
                        <Link href="#" className="hover:underline">Cotizá</Link>
                        <Link href="#" className="hover:underline">Calculador Costos</Link>
                        <Link href="#" className="hover:underline">Dónde comprar</Link>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-2">Asistencia técnica</h4>
                        <Link href="#" className="hover:underline">Nosotros</Link>
                        <Link href="#" className="hover:underline">Blog</Link>
                        <Link href="#" className="hover:underline">FAQ</Link>
                    </div>
                </div>


            </div>
        </footer>
    );
}
