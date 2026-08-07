import { useState, useRef } from "react";
import { Quote, Star, X, Sparkles } from "lucide-react";
import { testimonios } from "../data/testimonios";

export default function Testimonios() {

    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const testimoniosVisibles = mostrarTodos
    ? testimonios
    : testimonios.slice(0, 3);

    const testimoniosRef = useRef(null);

    return (
        <>
        <section id="testimonios" className="testimonios">
            <div className="testimonios-contenedor">
                
                {/* Header */}
                <div className="testimonios-header">
                    <div className="testimonios-badge">
                        <Sparkles className="testimonios-badge-icon" />
                        <span>TESTIMONIOS</span>
                    </div>

                        <h1 className="testimonios-titulo">
                            Experiencias que hablan desde el corazón
                        </h1>

                        <h2 className="testimonios-subtitulo">
                            Cada proceso es único.
                            <br />
                            Estas son algunas palabras compartidas por personas que eligieron comenzar su camino de transformación.
                        </h2>
                </div>

                <div ref={testimoniosRef} className="testimonios-grid">

                    {testimoniosVisibles.map((item) => (

                    <article
                        key={item.id}
                        className="testimonio-card"
                    >

                        <Quote className="testimonio-comillas" />

                        <p className="testimonio-texto">
                        "{item.texto}"
                        </p>

                        <div className="testimonio-footer">

                        <div>

                            <h3 className="testimonio-nombre">
                            {item.nombre}
                            </h3>

                            <div className="testimonio-estrellas">

                            {Array.from({
                                length: item.estrellas
                            }).map((_, index) => (

                                <Star
                                key={index}
                                className="testimonio-estrella"
                                fill="currentColor"
                                />

                            ))}

                            </div>

                        </div>

                        {item.imagen && (

                            <button
                            className="testimonio-boton"
                            onClick={() =>
                                setImagenSeleccionada(item.imagen)
                            }
                            >
                            Ver mensaje
                            </button>
                        )}

                        </div>

                    </article>

                    ))}

                </div>
                {testimonios.length > 3 && (
                    <div className="testimonios-ver-mas">

                        <button
                        className="testimonios-boton-ver-mas"                       
                        onClick={() => {
                            if (mostrarTodos) {
                                setMostrarTodos(false);
                                setTimeout(() => {
                                    const y =
                                        testimoniosRef.current.getBoundingClientRect().top +
                                        window.scrollY -
                                        120;

                                    window.scrollTo({
                                        top: y,
                                        behavior: "smooth"
                                    });

                                }, 100);

                            } else {
                                setMostrarTodos(true);
                            }
                        }}
                        >
                        {mostrarTodos
                            ? "Ver menos testimonios"
                            : "Ver más testimonios"}
                        </button>
                    </div>
                )}
            </div>
        </section>

        {imagenSeleccionada && (

            <div
            className="testimonio-modal"
            onClick={() => setImagenSeleccionada(null)}
            >

            <div
                className="testimonio-modal-contenido"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                className="testimonio-modal-cerrar"
                onClick={() => setImagenSeleccionada(null)}
                >
                <X />
                </button>

                <img
                src={imagenSeleccionada}
                alt="Mensaje"
                className="testimonio-modal-imagen"
                />

            </div>

            </div>

        )}

        </>
    );

}