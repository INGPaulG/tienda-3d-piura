function ProductCard({ producto }) {
  const numeroWhatsApp = '51945244304';

  const mensaje = encodeURIComponent(
    `Hola, estoy interesado en el producto "${producto.nombre}" que ${
      producto.oferta ? `está en oferta a S/ ${producto.precio.toFixed(2)} 🔥` : `cuesta S/ ${producto.precio.toFixed(2)}`
    }. ¿Está disponible?`
  );
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  const precioAnterior = (producto.precio * 1.2).toFixed(2); // 20% más

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:scale-105 transition">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-purple-700">{producto.nombre}</h3>
          <p className="text-sm text-gray-600 mt-1">{producto.categoria}</p>

          {producto.oferta ? (
            <>
              <p className="text-sm text-gray-500 line-through">Antes: S/ {precioAnterior}</p>
              <p className="text-lg font-bold text-green-600">Ahora: S/ {producto.precio.toFixed(2)}</p>
              <span className="inline-block text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-1">
                ¡En oferta!
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
}

export default ProductCard;
