

import { Link } from 'react-router-dom'; // <-- Importar Link para navegación entre páginas

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nombre o logo */}
        <Link to="/" className="text-xl font-bold">
          Tienda 3D
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">Inicio</Link>
          <Link to="/productos" className="hover:text-yellow-400">Productos</Link>
          <Link to="/pedidos" className="hover:text-yellow-400">Pedidos Personalizados</Link>
          <Link to="/contacto" className="hover:text-yellow-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
