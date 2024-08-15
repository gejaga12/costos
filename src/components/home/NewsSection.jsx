export default function NewsSection() {
    const news = [
      { id: 1, title: 'Noticia 1', excerpt: 'Extracto de la noticia 1', date: '12/08/2024' },
      { id: 2, title: 'Noticia 2', excerpt: 'Extracto de la noticia 2', date: '11/08/2024' },
      { id: 3, title: 'Noticia 3', excerpt: 'Extracto de la noticia 3', date: '10/08/2024' },
    ];
  
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  