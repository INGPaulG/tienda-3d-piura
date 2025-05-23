import { FaWhatsapp } from 'react-icons/fa'
import Lottie from "lottie-react"
import impresora3DAnim from "../assets/3dprinter.json" // tu animación

const Pedidos = () => {
  const mensaje = encodeURIComponent("Hola, quiero hacer un pedido personalizado 🧩✨");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Pedidos Personalizados</h1>

      <p className="text-gray-700 mb-4 text-center max-w-xl mx-auto">
        ¿Tienes una idea única? ¿Quieres un diseño especial que no está en el catálogo?
        ¡Escríbenos y cuéntanos lo que necesitas! Podemos imprimir desde figuras únicas hasta regalos personalizados.
      </p>

      <div className="flex justify-center my-6">
        <a
          href={`https://wa.me/51945244304?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          Hacer pedido por WhatsApp
        </a>
      </div>

      {/* Animación Lottie aquí */}
      <div className="flex justify-center mb-10">
        <div className="w-64 md:w-80">
          <Lottie animationData={impresora3DAnim} loop={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <h3 className="font-semibold mb-2">Nombre en 3D</h3>
          <p className="text-sm text-gray-600">Nombres impresos en distintos colores y tamaños.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <h3 className="font-semibold mb-2">Regalos únicos</h3>
          <p className="text-sm text-gray-600">Cajas con forma de corazón, frases personalizadas, etc.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <h3 className="font-semibold mb-2">Tú lo imaginas</h3>
          <p className="text-sm text-gray-600">Solo mándanos tu idea o imagen y nosotros lo imprimimos.</p>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
