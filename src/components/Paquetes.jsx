import { paquetes } from "../data/paquetes";
import { CheckCircle2, Gem } from "lucide-react";
import { useState } from "react";
import { generarLinkWhatsApp } from "../utils/whatsapp";

// import Contacto from "./Contacto";

export default function Paquetes({ onSeleccionarPaquete }) {
  //console.log("onSeleccionarPaquete en Paquetes:", typeof onSeleccionarPaquete);
  //const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);    

  // Cuando se clickea "Solicitar", guardo el paquete
  const handleSolicitar = (titulo) => {
    onSeleccionarPaquete(titulo);   // Llamo a la función que viene de App.jsx

    // Abre WhatsApp directamente
    const url = generarLinkWhatsApp("paquete", titulo);
    window.open(url, "_blank");

    // Scroll a contacto
    //document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paquetes" className="paquetes">
      <div className="paquetes-contenedor">
        <div className="paquetes-header">
          <div className="paquetes-badge">
            <Gem className="paquetes-badge-icon" />
            <span>PAQUETES EXCLUSIVE</span>
          </div>
          <h2 className="paquetes-titulo">Nuestros Paquetes</h2>
          <p className="paquetes-subtitulo">
            Elegí el paquete Exclusive que mejor se adapte a las necesidades de tu vehículo
          </p>
        </div>

        <div className="paquetes-grid">
          {Object.values(paquetes).map((pkg, index) => {
            const Icono = pkg.icono;
            return (
              <div
                key={index}
                className={`paquete-card ${pkg.destacado ? "destacado" : ""}`}
              >
                {pkg.destacado && (
                  <div className="paquete-badge-popular">
                    <div className="paquete-badge-popular-inner">MÁS POPULAR</div>
                  </div>
                )}

                <div className="paquete-card-header">
                  <div className={`paquete-icono-wrapper ${pkg.destacado ? "destacado" : ""}`}>
                    <Icono className="paquete-icono" />
                  </div>
                  <div>
                    <h3 className="paquete-card-titulo">{pkg.titulo}</h3>
                    <span className="paquete-card-tagline">{pkg.subtitulo}</span>
                  </div>
                </div>

                <p className="paquete-card-descripcion">{pkg.descripcion}</p>

                <div className="paquete-servicios">
                  <h4 className="paquete-servicios-titulo">
                    <CheckCircle2 className="paquete-servicios-icono" />
                    Servicios incluidos:
                  </h4>
                  <ul className="paquete-servicios-lista">
                    {pkg.items.map((item, idx) => (
                      <li key={idx}>
                        <div className="paquete-servicios-bullet"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <a
                  href="#contacto"
                  className={`paquete-boton ${pkg.destacado ? "destacado" : ""}`}
                >
                  Solicitar {pkg.titulo}
                </a> */}
                
                <button
                  onClick={() => handleSolicitar(pkg.titulo)}
                  className={`paquete-boton ${pkg.destacado ? "destacado" : ""}`}
                >
                  Solicitar {pkg.titulo}
                </button>

              </div>
            );
          })}
        </div>

        {/* <div className="paquete-ayuda">
          <h4>¿No estás seguro cuál elegir?</h4>
          <p>Contáctanos y te ayudaremos a elegir el paquete perfecto para tu vehículo</p>
          <a href="#contacto" className="paquete-ayuda-link">
            Hablar con un especialista →
          </a>
        </div> */}

      </div>
      {/* Contacto recibe el paquete seleccionado */}
      {/* <Contacto paqueteSeleccionado={paqueteSeleccionado} /> */}

    </section>
  );
}