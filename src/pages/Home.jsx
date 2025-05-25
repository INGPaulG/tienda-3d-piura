import { Link } from "react-router-dom";
import Header from "../components/Header";

const numeroWhatsApp = '51945244304'
const mensaje = encodeURIComponent(`Hola, Deseo consultar por un trabajo personalizado.`)
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

function Home() {
  return (
   
    <div className="text-center px-4 py-10 max-w-6xl mx-auto">
    < Header />
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center text-red-600">🔥 Productos en Oferta 🔥</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* producto 1 */}
            <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
              <img src="https://cdn.pixabay.com/photo/2022/02/03/11/23/harry-potter-6990246_1280.jpg" alt="Dino articulado" className="w-full h-40 object-contain mb-4" />
              <h3 className="font-semibold text-lg mb-2">Funko personalizado</h3>
              <p className="text-sm text-gray-500 line-through">S/ 102.00</p>
              <p className="text-xl text-green-600 font-bold mb-2">S/ 85.00</p>
              <a
                href="https://wa.me/51945244304?text=Hola, quiero comprar el Dino articulado en oferta 🦖🔥"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 13.4L11 18l-5.6-4.6L5 12l6 5 6-5z"></path>
                </svg>
                Comprar
              </a>
            </div>

            {/* producto 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
              <img src="https://makerworld.bblmw.com/makerworld/model/DSM00000000910910/design/2024-12-25_b30ceacea8ca5.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="Dino articulado" className="w-full h-40 object-contain mb-4" />
              <h3 className="font-semibold text-lg mb-2">Dinosaurio Flex</h3>
              <p className="text-sm text-gray-500 line-through">S/ 11.65</p>
              <p className="text-xl text-green-600 font-bold mb-2">S/ 9.90</p>
              <a
                href="https://wa.me/51945244304?text=Hola, quiero comprar el Dino articulado en oferta 🦖🔥"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 13.4L11 18l-5.6-4.6L5 12l6 5 6-5z"></path>
                </svg>
                Comprar
              </a>
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
