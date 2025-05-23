import { useState } from 'react';

// Lista de productos con categoría
const productos = [
  {
    id: 1,
    nombre: 'Dinosaurio Flex',
    categoria: 'Dinosaurios',
    precio: 'S/ 12.90',
    imagen: 'https://makerworld.bblmw.com/makerworld/model/DSM00000000910910/design/2024-12-25_b30ceacea8ca5.jpg?x-oss-process=image/resize,w_1000/format,webp',
  },
  {
    id: 2,
    nombre: 'Llavero exceso',
    categoria: 'Llaveros',
    precio: 'S/ 9.90',
    imagen: 'https://makerworld.bblmw.com/makerworld/model/DSM00000001136045/design/2025-02-22_c8cfc59f8ddb.jpeg?x-oss-process=image/resize,w_1000/format,webp',
  },
  {
    id: 3,
    nombre: 'Funko personalizado',
    categoria: 'Funkos',
    precio: 'S/ 100',
    imagen: 'https://cdn.pixabay.com/photo/2022/02/03/11/23/harry-potter-6990246_1280.jpg',
  },
  {
    id: 4,
    nombre: 'Litografía Lilo y Stitch',
    categoria: 'Litografías',
    precio: 'S/ 54.90',
    imagen: 'https://makerworld.bblmw.com/makerworld/model/US86dd8dbdaf9409/design/2025-04-02_8c4380172dedb.png?x-oss-process=image/resize,w_1000/format,webp',
  },
  {
    id: 5,
    nombre: 'Lámpara de escritorio Harry Potter 9 3/4',
    categoria: 'Lámparas',
    precio: 'S/ 85',
    imagen: 'https://makerworld.bblmw.com/makerworld/model/USe6c161b2e4daa8/design/2024-07-28_8480931da207a.jpg?x-oss-process=image/resize,w_1000/format,webp',
  },
  {
    id: 6,
    nombre: 'Dinosaurio Flexible edición Halloween',
    categoria: 'Dinosaurios',
    precio: 'S/ 12.90',
    imagen: 'https://makerworld.bblmw.com/makerworld/model/USf713268f7c876a/design/2024-09-11_e5ae0c6af9f17.png?x-oss-process=image/resize,w_1000/format,webp',
  },
];

const numeroWhatsApp = '51945244304';

function Products() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');

  // Categorias
  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  // Filtramos productos
  const productosFiltrados = productos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = filtroCategoria === 'Todos' || p.categoria === filtroCategoria;
    return coincideNombre && coincideCategoria;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Catálogo de Productos</h2>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded shadow-sm"
      />

      {/* Filtros por categoría */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltroCategoria(cat)}
            className={`px-4 py-1 rounded-full text-sm border ${
              filtroCategoria === cat
                ? 'bg-purple-700 text-white'
                : 'bg-white text-purple-700 border-purple-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {productosFiltrados.map(producto => {
          const mensaje = encodeURIComponent(
            `Hola, estoy interesado en el producto "${producto.nombre}" que cuesta ${producto.precio}. ¿Está disponible?`
          );
          const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

          return (
            <div key={producto.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{producto.categoria}</p>
                  <p className="text-lg mt-2">{producto.precio}</p>
                </div>

                <a
                  href={urlWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                >
                  Comprar por WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
