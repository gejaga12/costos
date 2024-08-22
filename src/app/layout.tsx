import { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';

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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}