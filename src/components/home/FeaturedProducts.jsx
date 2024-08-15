export default function FeaturedProducts() {
    const products = [
      { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', imageUrl: '/img/product1.jpg' },
      { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', imageUrl: '/img/product2.jpg' },
      { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', imageUrl: '/img/product3.jpg' },
    ];
  
    return (
      <section id="productos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  