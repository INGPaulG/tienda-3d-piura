import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-16 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Bienvenido a la Tienda 3D Factory</h1>
      <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
        Diseños únicos, regalos personalizados y modelos increíbles impresos en 3D. 🎁🦖✨
      </p>
      <a
        href="/productos"
        className="bg-white text-orange-500 font-bold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition"
      >
        Ver Productos
      </a>
    </header>
  );
};

export default Header;
