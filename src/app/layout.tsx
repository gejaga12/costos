import { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';
// Importa la fuente Lato desde next/font/google
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'], // Configura los pesos que necesitas
  style: ['normal', 'italic'], // Opcionalmente agrega estilos
  display: 'swap', // Utiliza swap para mejorar el rendimiento de carga
});

export const metadata = {
  title: 'Revista Costos',
  description: 'Soluciones innovadoras para la construcción moderna.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
       <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}