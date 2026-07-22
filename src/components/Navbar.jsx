import InterruptorModo from "./ui/InterruptorModo";
import { Link } from "react-router-dom";
// import InterruptorAccesibilidad from "./ui/InterruptorAccesibilidad";
import { generarLinkWhatsApp } from "../utils/whatsapp";

import Boton from "./ui/Boton";
import { useState, useEffect } from "react";
import { Accessibility, Menu, X } from "lucide-react";         // Para menú móvil
import { Eye, ScanEye, PersonStanding  } from "lucide-react"; // O "Accessibility"

// Recibo la función que mando desde App
export default function NavBar({ isAccessible, onToggleAccesibilidad }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  // Lógica para cerrar el menú automáticamente al hacer scroll
  useEffect(() => {
    const controlarScroll = () => {
      if (menuAbierto) {
        setMenuAbierto(false);
      }
    };

    // Escuchamos el evento de scroll en la ventana
    window.addEventListener("scroll", controlarScroll);

    // Limpiamos el evento al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, [menuAbierto]); // Solo se ejecuta cuando el estado del menú cambia

  const urlWhatsapp = generarLinkWhatsApp("consulta");

  return (
    <nav className={`navbar ${menuAbierto ? "menu-abierto" : ""}`}>
      <div className="navbar-contenedor">
        
        {/* 1. LOGO */}        
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar-logo">
            {/* Asegurate de tener la imagen en la carpeta public */}
            <img 
              src="/raices_sin_fondo.png" 
              alt="Raíces del Alma" 
              className="navbar-logo-img"              
              />
            <span className="navbar-marca-texto">Raíces del Alma</span>
          </div>
        </Link>

        {/* 2. LINKS (Escritorio - Se ocultan en mobile) */}
        <ul className="navbar-links">
          <li>
             <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "sobreMi")}
              className="nav-link"
            >
              Sobre mí
            </Link>
          </li>
          <li>            
            <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "terapias")}
              className="nav-link"
            >
              Terapias
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "videos")}
              className="nav-link"
            >
              Videos
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "rituales")}
              className="nav-link"
            >
              Rituales
            </Link>

            {/* <Link to="/#rituales" className="nav-link">Rituales</Link> */}
          </li>

          <li>
            <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "testimonios")}
              className="nav-link"
            >
              Testimonios
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => localStorage.setItem("scrollto", "contacto")}
              className="nav-link"
            >
              Contacto
            </Link>
          </li>

        </ul>

        {/* 3. ACCIONES (Derecha) */}
        <div className="navbar-acciones">

          <div className="navbar-divisor"></div>         
            <button 
              onClick={onToggleAccesibilidad} 
              className={`btn-accesibilidad ${isAccessible ? 'activo' : ''}`}
              title={isAccessible ? "Desactivar Claridad Visual" : "Activar Claridad Visual"}
            >              
              <PersonStanding 
                size={30} 
                strokeWidth={isAccessible ? 3 : 2}
                color="currentColor"      /* <--- Esto hace que use el color definido en el CSS */ 
                cursor={"pointer"}
              />
            </button>
            
            {/* El interruptor de sol/luna ahora recibe si está bloqueado */}
            <InterruptorModo bloqueado={isAccessible} />
        
            <div className="navbar-btn-contenedor">
              {/* Usamos una variante pequeña de tu Boton */}
              {/* <Boton variant="primario" className="navbar-boton" href="#contacto">
                Contacto
              </Boton> */}
              
              {/* <Boton 
                variant="primario"
                className="navbar-boton"
                onClick={() =>{
                  localStorage.setItem("scrollto", "contacto");
                  window.location.href = "/";
                }}
              >
                Consultar
              </Boton> */}
              
              <Boton 
                variant="primario"
                className="navbar-boton"
                href={urlWhatsapp}
                target="_blank"                
              >
                Consultar
              </Boton>

            </div>
          </div>

          <button className="menu-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* --- Aviso de accesibilidad interno --- */}
        {isAccessible && (
          // <div className="navbar-aviso-interno">
          <div className="navbar-banner-accesibilidad">
            <p>
              <strong>Modo de Claridad Visual:</strong> Así es como diseño para personas con <strong>daltonismo</strong>. 
              Este modo optimiza el contraste y la legibilidad para que nadie quede fuera de tu mensaje.
              <button 
                onClick={() => onToggleAccesibilidad(false)} 
                className="btn-volver-diseno-link"                
              >
                [ Volver al diseño original ]
              </button>
            </p>

          </div>
        )}


      <div className={`navbar-menu-mobile ${menuAbierto ? "active" : ""}`}>
        <ul className="mobile-links">
          <li>
           <Link 
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "sobreMi");
                cerrarMenu();
              }}
            >
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "terapias");
                cerrarMenu();
              }}
            >
              Terapias
            </Link>
          </li>

          
          <li>
           <Link 
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "videos");
                cerrarMenu();
              }}
            >              
              Videos
            </Link>
          </li>
          
          <li>
           <Link 
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "rituales");
                cerrarMenu();
              }}
            >
              Rituales
            </Link>
            {/* <Link to="/#rituales" className="nav-link">Rituales</Link> */}
          </li>

          <li>
            <Link 
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "testimonios");
                cerrarMenu();
              }}
            >
              Testimonios
            </Link>
          </li>
          
          <li>
            <Link
              to="/" 
              onClick={() => {
                localStorage.setItem("scrollto", "contacto");
                cerrarMenu();
              }}
            >
              Contacto
            </Link>
          </li>

        </ul>
      </div>  

    </nav>
  );
}
