import { useState, useEffect, useLayoutEffect } from 'react';
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
import Rituales from './components/Rituales';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import BotonSubir from './components/BotonSubir';
import RitualDetalle from './components/RitualDetalle';


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

  useLayoutEffect (() => {
    if (location.pathname === "/") {
      const section = localStorage.getItem("scrollto");

      if (section) {
        const element = document.getElementById(section);
/*
        if (element) {
          //setTimeout(() => {
            element.scrollIntoView({ 
              // behavior: "smooth" 
              behavior: "auto",
              block: "start",
            });
          //}, 100);
        }
*/
      if (element) {
        document.documentElement.style.visibility = "hidden";

        requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: "auto",
            block: "start",
          });

          document.documentElement.style.visibility = "visible";
        });
      }

        localStorage.removeItem("scrollto");
      }
    }
  }, [location]);

  // Estado para el ritual seleccionado
  const [ritualSeleccionado, setRitualSeleccionado] = useState(null);
  
  // Función para seleccionar paquete
  const handleSeleccionarRitual = (titulo) => {
    console.log("Ritual seleccionado:", titulo); // Para debug
    setRitualSeleccionado(titulo);
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


                {/* <Promocion /> */}
                {/* <Paquetes /> */}
                {/* console.log("handleSeleccionarPaquete existe:", typeof handleSeleccionarPaquete); */}                
                <Rituales onSeleccionarRitual={handleSeleccionarRitual} />
                
                {/* <Contacto paqueteSeleccionado={paqueteSeleccionado} />                   */}
                <Contacto />
              </main>
            }
          />

          {/* Ruta Dinámica para los rituales */}
          {/* El :id permite que la misma página sirva para varios rituales. */}
          <Route path="/ritual/:id" element={<RitualDetalle />} />           

        </Routes>

        <Footer />
        <BotonSubir />
      </div>
    </div>
  );
}
