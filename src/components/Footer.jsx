import React from 'react';
import { FaHeart, FaInstagram, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { generarLinkWhatsApp } from "../utils/whatsapp";

export default function Footer({paqueteSeleccionado = null }) {
  const urlWhatsapp = generarLinkWhatsApp(paqueteSeleccionado);

  return (
    <footer className="footer-principal">
      <div className="footer-contenedor">
        
        {/* Columna 1: Logo y descripción */}
        <div className="footer-col-marca">
          <div className="footer-logo-box">
            <img src="/Exclusive_Logo.png" alt="Exclusive Detail" className="footer-logo-img" />
          </div>
          <p className="footer-descripcion">
            Estética vehicular. <br/> La perfección que buscás, en cada detalle.
          </p>
          <div className="footer-sociales">
            <a href="https://www.instagram.com/exclusiveolav/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          
            <a href="https://www.facebook.com/profile.php?id=100063953653175" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>

             <a href="https://www.tiktok.com/@exclusivedetail0" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>

          </div>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-col-links">
          <h4 className="footer-h4">Enlaces</h4>
          <ul className="footer-lista">
            <li>
              <Link to="/" onClick={() => localStorage.setItem("scrollto", "paquetes")}>
                Paquetes
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.setItem("scrollto", "servicios")}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.setItem("scrollto", "premium")}>
                Preventa Premium
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.setItem("scrollto", "contacto")}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-col-contacto">
            <h4 className="footer-h4">Contacto</h4>
            <div className="footer-datos">
                <div className="footer-contacto-item">
                  {/* WhatsApp */}
                  <FaWhatsapp size={20} className="footer-contacto-icono" />
                  <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp 2284-234077
                  </a>                    
                </div>
                <div className="footer-contacto-item">
                  <FaClock size={18} className="footer-contacto-icono" />
                  <div>
                    Lun a Vie: 9:00 - 17:00<br />
                    Sábados: 9:00 - 13:00
                  </div>
                </div>

                <div className="footer-contacto-item">
                  <FaMapMarkerAlt size={18} className="footer-contacto-icono" />
                  <span>Olavarría, Buenos Aires, Argentina</span>
                </div>
            </div>
        </div>

      </div>

      {/* Barra Inferior */}
        <div className="footer-copyright">
            <div className="footer-copyright-contenido">
            <p>© {new Date().getFullYear()} MV Soluciones Web. Todos los derechos reservados.</p>
            <p className="footer-autor">
                Hecho con <FaHeart size={14} className="footer-corazon" fill="currentColor" /> por 
                <a 
                    href="https://mvsolucionesweb.com.ar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link-autor"
                >
                    Mariné Vega

                </a>
            </p>
            </div>
        </div>
    </footer>
  );
}
