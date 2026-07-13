import { rituales } from "../data/rituales";
import { CheckCircle2, Gem, Sparkle } from "lucide-react";
import { useState } from "react";
import { generarLinkWhatsApp } from "../utils/whatsapp";

export default function Rituales({ onSeleccionarRitual }) {
  
  // Cuando se clickea "Solicitar", guardo el ritual
  const handleSolicitar = (titulo) => {
    onSeleccionarRitual(titulo);   // Llamo a la función que viene de App.jsx

    // Abre WhatsApp directamente
    const url = generarLinkWhatsApp("ritual", titulo);
    window.open(url, "_blank");

    // Scroll a contacto
    //document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rituales" className="rituales">
      <div className="rituales-contenedor">
        <div className="rituales-header">
          <div className="rituales-badge">
            <Sparkle className="rituales-badge-icon" />
            <span>RITUALES</span>
          </div>
          <h2 className="rituales-titulo">Rituales Sagrados</h2>
          <p className="rituales-subtitulo">
            Ceremonias para conectar con tu esencia y elevar tu energía
          </p>
        </div>

        <div className="rituales-grid">
          {Object.values(rituales).map((pkg, index) => {
            const Icono = pkg.icono;
            return (
              <div
                key={index}
                // className={`ritual-card ${pkg.destacado ? "destacado" : ""}`}
                className= "rituales-card"
              >
{/*                 
                {pkg.destacado && (
                  <div className="rituales-badge-popular">
                    <div className="rituales-badge-popular-inner">MÁS UTILIZADO</div>
                  </div>
                )} */}

                <div className="rituales-card-header">
                  {/* <div className={`rituales-icono-wrapper ${pkg.destacado ? "destacado" : ""}`}> */}
                  <div className= "rituales-icono-wrapper">
                    <Icono className="rituales-icono" />
                  </div>
                  <div>
                    <h3 className="rituales-card-titulo">{pkg.titulo}</h3>
                    <span className="rituales-card-tagline">{pkg.subtitulo}</span>
                  </div>
                </div>

                <p className="rituales-card-descripcion">{pkg.descripcion}</p>

                <div className="rituales-pasos">
                  <h4 className="rituales-pasos-titulo">
                    <CheckCircle2 className="rituales-pasos-icono" />
                    Paso a paso:
                  </h4>
                  <ul className="rituales-pasos-lista">
                    {pkg.items.map((item, idx) => (
                      <li key={idx}>
                        <div className="rituales-pasos-bullet"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

               
              </div>
            );
          })}
        </div>

     

      </div>
     
    </section>
  );
}