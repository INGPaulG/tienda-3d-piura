

import { Link } from 'react-router-dom'; // <-- Link para navegacioon entre paginas

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* nombre o logo */}
        <Link to="/" className="text-xl font-bold">
          3D Factory Piura
        </Link>

        {/* enlaces de navegación */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">Inicio</Link>
          <Link to="/productos" className="hover:text-yellow-400">Productos</Link>
          <Link to="/pedidos" className="hover:text-yellow-400">Pedidos Personalizados</Link>
          <Link to="/contacto" className="hover:text-yellow-400">Contacto</Link>
          <Link to="/noticias" className="hover:text-purple-700 transition">Noticias</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
