import { Link } from "react-router-dom";

const numeroWhatsApp = '51945244304'
const mensaje = encodeURIComponent(`Hola, Deseo consultar por un trabajo personalizado.`)
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

function Home() {
  return (
    <div className="text-center px-4 py-10 max-w-6xl mx-auto">
      {/* Banner / Imagen principal */}
      <img
        src="https://images.pexels.com/photos/19124461/pexels-photo-19124461/free-photo-of-herramientas-de-impresion-3d.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Impresión 3D Factory Piura"
        className="mx-auto mb-6 w-full max-h-96 object-cover rounded-lg shadow-lg"
      />

      {/* Título y descripción */}
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        ¡Bienvenido a 3D Factory Piura!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Somos una tienda especializada en impresión 3D. Ofrecemos modelos únicos
        como dinosaurios articulados, llaveros, funkos personalizados, litografías
        y lámparas. Puedes explorar nuestro catálogo o pedir algo hecho solo para ti.
      </p>

      {/* Botones de acción */}
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
