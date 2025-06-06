
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Pedidos from './pages/Pedidos'
import Navbar from './components/NavBar'
import Noticias from './pages/Noticias'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/noticias" element={<Noticias />} /> 
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App
