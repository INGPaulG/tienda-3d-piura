import { Link } from "react-router-dom"
import Header from "../components/Header"
import productos from "../Data/productos"
import noticias from "../Data/noticias"

const numeroWhatsApp = '51945244304'
const mensaje = encodeURIComponent(`Hola, Deseo consultar por un trabajo personalizado.`)
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`

function Home() {
  const productosEnOferta = productos.filter(p => p.descuento > 0);
  const ultimaNoticia = noticias[0];

  return (
    <div className="text-center px-4 py-10 max-w-6xl mx-auto">
      <Header />
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center text-red-600">🔥 Productos en Oferta 🔥</h2>

      {/* Sección de productos en oferta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {productosEnOferta.map(producto => {
          const tieneDescuento = producto.descuento > 0;
          const precioConDescuento = (producto.precio * (1 - producto.descuento / 100)).toFixed(2);
          const mensaje = encodeURIComponent(`Hola, quiero comprar el producto "${producto.nombre}" en oferta 🔥`);
          const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

          return (
            <div key={producto.id} className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-semibold text-lg mb-2">{producto.nombre}</h3>
              <p className="text-sm text-gray-500 line-through">S/ {producto.precio.toFixed(2)}</p>
              <p className="text-xl text-green-600 font-bold mb-2">S/ {precioConDescuento}</p>
              <span className="inline-block text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-1">
                -{producto.descuento}% de descuento
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mt-4"
              >
                Comprar
              </a>
            </div>
          );
        })}
      </div>

      {/* Última Noticia Destacada */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow mb-10">
        <h3 className="text-xl font-bold text-yellow-700 mb-2">📰 Última Noticia</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={ultimaNoticia.imagen}
            alt={ultimaNoticia.titulo}
            className="w-full sm:w-48 h-32 object-cover rounded"
          />
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800">{ultimaNoticia.titulo}</h4>
            <p className="text-sm text-gray-600">{ultimaNoticia.descripcion}</p>
            <Link
              to="/noticias"
              className="inline-block mt-2 text-purple-700 font-medium hover:underline"
            >
              Ver todas las noticias →
            </Link>
          </div>
        </div>
      </div>

      {/* banner / imagen principal */}
      <img
        src="https://images.pexels.com/photos/19124461/pexels-photo-19124461/free-photo-of-herramientas-de-impresion-3d.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Impresión 3D Factory Piura"
        className="mx-auto mb-6 w-full max-h-96 object-cover rounded-lg shadow-lg"
      />

      {/* Título y descripción */}
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        ¡3D Factory Piura!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Somos una tienda especializada en impresión 3D. Ofrecemos modelos únicos
        como dinosaurios articulados, llaveros, funkos personalizados, litografías
        y lámparas. Puedes explorar nuestro catálogo o pedir algo hecho solo para ti.
      </p>

      {/* botones de acción */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/productos"
          className="bg-purple-700 text-white px-6 py-3 rounded shadow hover:bg-purple-800 transition"
        >
          Ver Catálogo
        </Link>

        <Link
          to="/pedidos"
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
        >
          Hacer Pedido Personalizado
        </Link>

        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-6 py-3 rounded shadow hover:bg-gray-800 transition"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Home;
