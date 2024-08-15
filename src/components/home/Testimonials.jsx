export default function Testimonials() {
    const testimonials = [
      { id: 1, name: 'Cliente 1', feedback: 'Durlock es increíble. Sus productos son de alta calidad.' },
      { id: 2, name: 'Cliente 2', feedback: 'Excelente servicio y productos innovadores.' },
      { id: 3, name: 'Cliente 3', feedback: 'Recomiendo Durlock a todos los profesionales de la construcción.' },
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Testimonios de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <span className="text-gray-500 text-sm">{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  