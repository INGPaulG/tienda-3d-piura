// src/pages/Contact.jsx
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Lottie from "lottie-react";
import impresora3DAnim from "../assets/Castor2d.json"; // Asegúrate de tener un archivo Lottie

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">¡Conéctate con nosotros!</h1>
      <p className="text-gray-700 text-lg mb-6">
        ¿Tienes preguntas? ¿Quieres cotizar algo único?  
        Escríbenos, estamos listos para imprimir tus ideas en 3D 💡🎨
      </p>

      <div className="flex justify-center mb-8">
        <div className="w-60 md:w-72">
          <Lottie animationData={impresora3DAnim} loop={true} />
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://wa.me/51945244304"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl" />
          Escríbenos por WhatsApp
        </a>
      </div>

      <div className="flex justify-center gap-6 text-2xl text-blue-600">
        <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/tu_pagina" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Contact;
