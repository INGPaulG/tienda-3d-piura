import { useState } from 'react';
import productos from '../Data/productos';


const numeroWhatsApp = '51945244304';

function Products() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

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

      {/* Filtro por categoría */}
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
          const tieneDescuento = producto.descuento > 0;
          const precioConDescuento = tieneDescuento
            ? (producto.precio * (1 - producto.descuento / 100)).toFixed(2)
            : producto.precio.toFixed(2);

          const mensaje = encodeURIComponent(
            `Hola, estoy interesado en el producto "${producto.nombre}" que ${
              tieneDescuento
                ? `está en oferta a S/ ${precioConDescuento} 🔥 (descuento del ${producto.descuento}%)`
                : `cuesta S/ ${producto.precio.toFixed(2)}`
            }. ¿Está disponible?`
          );

          const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

          return (
            <div key={producto.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:scale-105 transition">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{producto.categoria}</p>

                  {tieneDescuento ? (
                    <>
                      <p className="text-sm text-gray-500 line-through">
                        Antes: S/ {producto.precio.toFixed(2)}
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        Ahora: S/ {precioConDescuento}
                      </p>
                      <span className="inline-block text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-1">
                        -{producto.descuento}% de descuento
                      </span>
                    </>
                  ) : (
                    <p className="text-lg mt-2">S/ {producto.precio.toFixed(2)}</p>
                  )}
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
