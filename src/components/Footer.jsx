
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Nombre de la tienda o texto legal */}
        <p className="text-sm mb-4 md:mb-0">&copy; 2025 Tienda 3D Piura </p>
        
        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/1FKxx5jxCK/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/3dfactory.piu?igsh=ZjJrMXc2bHBqYTJ1" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://www.tiktok.com/@3dfacotry.impresi?_t=ZM-8wb9E0oFrIk&_r=1" target="_blank" rel="noopener noreferrer" title="TikTok">
            <FaTiktok className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://wa.me/51945244304" target="_blank" rel="noopener noreferrer" title="WhatsApp Principal">
            <FaWhatsapp className="text-xl hover:text-green-500" />
          </a>
          <a href="https://wa.me/51970298477" target="_blank" rel="noopener noreferrer" title="WhatsApp Secundario">
            <FaWhatsapp className="text-xl hover:text-green-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
