import { contacto } from "../data/contacto";
import { servicioPremium } from "../data/servicioPremium";
import { CheckCircle2, Star, Sparkles } from "lucide-react";
import { generarLinkWhatsApp } from "../utils/whatsapp";

export default function ServicioPremium() {    
    const urlWhatsapp = generarLinkWhatsApp("premium");

    return (
        <section id="premium" className="servicio-premium">
        <div className="servicio-premium-bg-glow">
            <div className="servicio-premium-glow-1"></div>
            {/* <div className="servicio-premium-glow-2"></div> */}
        </div>

        <div className="servicio-premium-contenedor">
            <div className="servicio-premium-header">
                <div className="servicio-premium-badge">
                    <Star className="servicio-premium-badge-icon" />
                    <span>{servicioPremium.badge}</span>
                </div>
                <h2 className="servicio-premium-titulo">{servicioPremium.titulo}</h2>
                <p className="servicio-premium-subtitulo">{servicioPremium.subtitulo}</p>
            </div>

            <div className="servicio-premium-grid">
            {/* Columna izquierda - Qué incluye */}
            <div className="servicio-premium-col-izq">
                <div className="servicio-premium-card">
                <div className="servicio-premium-card-header">
                    <Sparkles className="servicio-premium-sparkles" />
                    <h3>¿Qué incluye?</h3>
                </div>

                <ul className="servicio-premium-lista">
                    {servicioPremium.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>
                        <CheckCircle2 className="servicio-premium-check" />
                        <span>{caracteristica}</span>
                    </li>
                    ))}
                </ul>

                <div className="servicio-premium-info">
                    {/* <div className="servicio-premium-info-item">
                    <span className="servicio-premium-info-label">Duración estimada</span>
                    <span className="servicio-premium-info-valor">{servicioPremium.duracion}</span>
                    </div> */}
                    <div className="servicio-premium-info-item">
                    <span className="servicio-premium-info-label">Garantía de satisfacción</span>
                    <span className="servicio-premium-info-valor-destacado">{servicioPremium.garantia}</span>
                    </div>
                </div>
                
                </div>
            </div>

            {/* Columna derecha - Por qué elegir */}
            <div className="servicio-premium-col-der">
                <div className="servicio-premium-porque">
                <h3>¿Por qué elegir Preventa Premium?</h3>
                <div className="servicio-premium-porque-textos">
                    {servicioPremium.porQueElegir.map((texto, index) => (
                    <p key={index}>{texto}</p>
                    ))}
                </div>
                </div>

                <div className="servicio-premium-consulta">
                <h4>Consultá disponibilidad</h4>
                <p>Contáctanos para conocer precios y agendar tu servicio Premium</p>
            
                {/* <a href="#contacto" className="servicio-premium-boton">
                    Solicitar Preventa Premium
                </a> */}
                <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className="servicio-premium-boton">                
                    {/* <p>{contacto.whatsapp.texto}</p>                 */}
                    Solicitar Preventa Premium
                </a>
                
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}