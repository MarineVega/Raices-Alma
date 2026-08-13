// import { ArrowRight, Sparkles } from "lucide-react";

import { generarLinkWhatsApp } from "../utils/whatsapp";

export default function Hero() {
    const urlWhatsapp = generarLinkWhatsApp();

    return (
        <section className="hero">
            <div className="hero-overlay" />
        
            <div className="hero-contenedor">
        
                <div className="hero-imagen">
                    <img src="/img/logo.png" alt="Alcume" />
                </div>

                <div className="hero-texto">            
                    {/* <h1> 
                        <span className="hero-destacar">Al</span>cume
                    </h1> 
                     */}

                    <div className="hero-accion">
                     
                        {/* WhatsApp */}
                        <a href={urlWhatsapp} className="boton-primario" target="_blank" rel="noopener noreferrer">
                            Reservá tu turno
                        </a>        
    
                        <a href="#terapias" className="boton-fantasma">
                            Ver terapias
                        </a> 
                    </div>

                </div>        
            </div>

        </section>
    );
}

/*
Nota sobre SEO: Si esos botones son parte de la navegación principal, a veces es mejor usar etiquetas <a> con estilos de botón para que los rastreadores de Google entiendan mejor la jerarquía de la página.
*/
