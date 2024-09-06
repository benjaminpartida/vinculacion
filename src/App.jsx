import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/inicio/Inicio';
import Patentes from './pages/patentes/Patentes';
import Innovacion from './pages/innovacion/Innovacion';
import Contactos from './components/Contactos';
import Investigacion from './pages/investigacion/Investigacion';
import Convenios from './pages/convenios/Convenios';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/patentes" element={<Patentes />} />
          <Route path="/innovacion" element={<Innovacion />} />
          <Route path="/investigacion" element={<Investigacion />} />
          <Route path="/convenios" element={<Convenios />} />
        </Routes>
        <Contactos />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
