import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
