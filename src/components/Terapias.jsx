import { terapias } from "../data/terapias";
import { generarLinkWhatsApp } from "../utils/whatsapp";
import { Sparkles } from "lucide-react";

export default function Terapias(tipo = "terapia", terapiaSeleccionada = null) {
  const urlWhatsapp = generarLinkWhatsApp("terapia",terapiaSeleccionada);

  return (
    <section id="terapias" className="terapias">
      <div className="terapias-contenedor">
        <div className="terapias-header">
          <div className="terapias-badge">
            <Sparkles className="terapias-badge-icon" />
            <span>TERAPIAS</span>
          </div>
          <h1 className="terapias-titulo">Espacios de Sanación y Consciencia</h1>
          <h2 className="terapias-subtitulo">
            Acompañamiento terapéutico integral para reencontrar tu equilibrio, sanar tus raíces y transformar tu realidad
          </h2>
        </div>

        <div className="terapias-grid">
          {Object.values(terapias).map((terapia, index) => {
            const Icono = terapia.icono;
            return (
              <div key={index} className="terapia-card">
                <div className="terapia-header">

                  <div className="terapia-icono-wrapper">
                    <Icono className="terapia-icono" />
                  </div>
                  <h3 className="terapia-titulo">{terapia.titulo}</h3>
                </div>
                
                <p className="terapia-descripcion">{terapia.descripcion}</p>
                
                <div className="terapia-items">
                  <ul className="terapia-lista">
                    {terapia.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="terapia-bullet"></span>
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