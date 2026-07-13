import { Sparkles } from "lucide-react"; // O Star, Heart, Feather
import { sobreMi } from "../data/sobreMi";

export default function SobreMi() {
  return (
    <section id="sobreMi" className="sobreMi">
        <div className="sobreMi-contenedor">
            <div className="sobreMi-imagen">
                <img src="/img/foto_terapeuta.png" alt="Terapeuta Raíces del Alma"/>
            </div>

            <div className="sobreMi-texto">
                <h2 className="sobreMi-titulo">{sobreMi.titulo}</h2>

                {/* Descripción con viñetas */}
                <div className="sobreMi-descripcion">
                    {sobreMi.descripcion.map((linea, index) => (
                        <div key={index} className="sobreMi-linea">
                            <span className="sobreMi-vinieta">
                                <Sparkles size={20} />
                            </span>
                            <span>{linea}</span>
                        </div>
                    ))}

                </div>
                
            </div>
        </div>
        
        <h3 className="sobreMi-pie">{sobreMi.pie}</h3>
    </section>
  );
}
