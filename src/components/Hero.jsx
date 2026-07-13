// import { ArrowRight, Sparkles } from "lucide-react";

import { generarLinkWhatsApp } from "../utils/whatsapp";

export default function Hero() {
    const urlWhatsapp = generarLinkWhatsApp();

    return (
        <section className="hero">
            <div className="hero-overlay" />
        
            <div className="hero-contenedor">
        
                <div className="hero-imagen">
                <img src="/img/raices_sin_fondo.png" alt="Raices_Alma" />
                </div>

                <div className="hero-texto">            
                    <h1>
                        {/* Raíces del Alma */}
                        Raíces del <br />
                        <span className="hero-destacar"> Alma </span>
                    </h1> 

                    <h2 className="hero-texto-destacar">
                        {/* Sanar el origen, despertar la conciencia y vivir el propósito. */}
                        <span className="hero-destacar"> Sanar </span> el origen, 
                        <span className="hero-destacar"> despertar </span> la consciencia y 
                        <span className="hero-destacar"> vivir </span> el propósito
                    </h2>

                    
                    <div className="hero-accion">
                        {/* <a href="#contacto" className="boton-primario"> 
                            Reservá tu turno
                        </a> */}

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