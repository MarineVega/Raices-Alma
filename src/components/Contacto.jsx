import { contacto } from "../data/contacto";
import { MessageCircle, MapPin, Clock, Sparkles} from "lucide-react";
import { generarLinkWhatsApp } from "../utils/whatsapp";
 
export default function Contacto(tipo = "consulta", paqueteSeleccionado = null) {  
  const urlWhatsapp = generarLinkWhatsApp();

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-contenedor">
        <div className="contacto-header">
            <div className="contacto-badge">
              <Sparkles className="contacto-badge-icon" />
              <span>CONTACTO</span>
            </div>
          <h2 className="contacto-titulo">Contactame</h2>
          <p className="contacto-subtitulo">El primer paso hacia tu sanación empieza hoy</p>
        </div>

        <div className="contacto-grid">
          {/* WhatsApp */}
          <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className="contacto-card">
            <div className="contacto-icono-wrapper">
              <MessageCircle className="contacto-icono" />
            </div>
            <h3>WhatsApp</h3>
            <p>{contacto.whatsapp.texto}</p>
            <span className="contacto-subtexto">{contacto.whatsapp.subTexto}</span>
          </a>

          {/* Ubicación */}
          <div className="contacto-card">
            <div className="contacto-icono-wrapper">
              <MapPin className="contacto-icono" />
            </div>
            <h3>Ubicación</h3>
            <p>{contacto.ubicacion.direccion}</p>
            <span className="contacto-subtexto">{contacto.ubicacion.subTexto}</span>
          </div>

          {/* Horario */}
          <div className="contacto-card">
            <div className="contacto-icono-wrapper">
              <Clock className="contacto-icono" />
            </div>
            <h3>Horario</h3>
            <p>{contacto.horario.dias1}</p>
            <p>{contacto.horario.dias2}</p>
            <span className="contacto-subtexto">{contacto.horario.subTexto}</span>
          </div>
        </div>
      </div>
    </section>
  );
}