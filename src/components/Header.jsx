import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()
  const linkClass = (path) =>
    `px-4 py-2 rounded transition ${
      location.pathname === path
        ? 'bg-purple-600 text-white'     
        : 'text-purple-700 hover:bg-purple-100'
    }`
  
  return (
    // Encabezado con fondo blanco y sombra (Tailwind: bg-white shadow-md)
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Título de la página */}
        <h1 className="text-2xl font-bold text-purple-700">3D Factory</h1>

        {/* Navegación con 3 enlaces */}
        <nav className="space-x-4">
          {/* Cada Link te lleva a una ruta */}
          <Link to="/" className={linkClass('/')}>Inicio</Link>
          <Link to="/productos" className={linkClass('/productos')}>Productos</Link>
          <Link to="/contacto" className={linkClass('/contacto')}>Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header