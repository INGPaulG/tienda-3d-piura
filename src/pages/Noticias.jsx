import Header from "../components/Header";
import noticias from "../Data/noticias";

function Noticias() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Header />
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">📰 Noticias y Novedades</h2>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {noticias.map(noticia => (
          <div key={noticia.id} className="bg-white shadow rounded-lg p-4 hover:scale-105 transition">
            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover rounded mb-3" />
            <p className="text-xs text-gray-500 mb-1">{noticia.fecha}</p>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{noticia.titulo}</h3>
            <p className="text-gray-700">{noticia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
