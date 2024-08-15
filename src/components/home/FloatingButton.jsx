"use client";
import { FaClipboardCheck } from 'react-icons/fa';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="/cotiza"
        className="flex items-center bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300"
      >
        <FaClipboardCheck className="mr-2 text-xl" />
        <span className="font-semibold text-xs">COTIZA CON NOSOTROS</span>
      </a>
    </div>
  );
}
