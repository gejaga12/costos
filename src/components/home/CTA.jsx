export default function CTA() {
  return (
    <section className="relative bg-cover bg-center text-white py-16 md:py-20 lg:py-24 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('cotiza/cotiza.jpg')" }}>
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="text-lg mb-8">Obtén nuestros productos y presupuestos de alta calidad para tu próximo proyecto.</p>
        <a href="/contacto" className="bg-red-600 font-semibold text-sm text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300">COTIZAR</a>
      </div>
    </section>
  );
}
