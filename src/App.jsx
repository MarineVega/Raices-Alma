import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation 
} from "react-router-dom";

import NavBar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Terapias from './components/Terapias';
import Videos from './components/Videos';


import Paquetes from './components/Paquetes';
import Promocion from './components/Promocion';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import BotonSubir from './components/BotonSubir';


// import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <Router>
      {/* <ScrollTop /> */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  // Guardo el modo daltonismo en localStorage, para que cuando vuelva de la demo, siga en el mismo modo
  const [isAccessible, setIsAccessible] = useState(() => {
    return localStorage.getItem("isAccessible") === "true";
  });

  
  useEffect(() => {
    localStorage.setItem("isAccessible", isAccessible);
  }, [isAccessible]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const section = localStorage.getItem("scrollto");

      if (section) {
        const element = document.getElementById(section);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }

        localStorage.removeItem("scrollto");
      }
    }
  }, [location]);

  // Estado para el paquete seleccionado
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);
  
  // Función para seleccionar paquete
  const handleSeleccionarPaquete = (titulo) => {
    console.log("Paquete seleccionado:", titulo); // Para debug
    setPaqueteSeleccionado(titulo);
  };

  return (
    <div className="app-container">
      {/* 2. Aplico la clase dinámicamente     */}
      <div className={`app-layout ${isAccessible ? "modo-accesibilidad" : ""}`}>
        {/* 3. Paso el estado al NavBar */}
        <NavBar
          isAccessible={isAccessible}
          onToggleAccesibilidad={() => setIsAccessible(!isAccessible)}
        />

        <Routes>
          {/* Ruta Principal */}
          <Route
            path="/"
            element={
              <main className="main-content" style={{ marginTop: "80px" }}>
                <Hero />
                <SobreMi />
                <Terapias />
                <Videos />


                <Promocion />
                {/* <Paquetes /> */}
                {/* console.log("handleSeleccionarPaquete existe:", typeof handleSeleccionarPaquete); */}                
                <Paquetes onSeleccionarPaquete={handleSeleccionarPaquete} />
                
                {/* <Contacto paqueteSeleccionado={paqueteSeleccionado} />                   */}
                <Contacto />
              </main>
            }
          />

          {/* Ruta Dinámica para los servicios */}
          {/* El :id permite que la misma página sirva para varios servicios. */}
          {/* <Route path="/servicio/:id" element={<DetalleServicio />} />           */}
        </Routes>

        <Footer />
        <BotonSubir />
      </div>
    </div>
  );
}
