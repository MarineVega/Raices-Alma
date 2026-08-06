import { useParams, Link, useNavigate } from "react-router-dom";
import { rituales } from "../data/rituales";
import { ArrowLeft, Clock, Package, CheckCircle2, Calendar, Sparkle, HouseHeart } from "lucide-react";
import { generarLinkWhatsApp } from "../utils/whatsapp";
import { useEffect } from "react";

export default function RitualDetalle() {
  const { id } = useParams();
  const ritual = Object.values(rituales).find(r => r.id === id);

  if (!ritual) {
    return (
      <div className="ritual-detalle-error">
        <h2>Ritual no encontrado</h2>
        <Link to="/#rituales" className="rituales-boton-volver">
          Volver
        </Link>
      </div>
    );
  }

  const Icono = ritual.icono_detalle;

  const handleSolicitar = () => {
    const url = generarLinkWhatsApp("ritual", ritual.titulo);
    window.open(url, "_blank");
  };

  const navigate = useNavigate();

  const handleVolver = () => {
    localStorage.setItem("scrollto", "rituales");
    navigate("/");
    //navigate("/", { replace: true });
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
  }, []);
  
  return (
    <div className="ritual-detalle-container">
      <div className="ritual-detalle-contenido">
        {/* Botón volver */}
        <button
          onClick={handleVolver}
          className="ritual-detalle-volver"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        {/* Header */}
        <div className="ritual-detalle-header">
          <img
            src={ritual.images?.[0]}
            alt={ritual.titulo}
            className="ritual-detalle-header-bg"
          />

          <div className="ritual-detalle-header-contenido">
            {Icono ? (
              <div className="ritual-detalle-icono-container">
                <Icono className="ritual-detalle-icono-grande" />
              </div>
            ) : (
              <div className="ritual-detalle-icono-placeholder" />
            )}

            <h1 className="ritual-detalle-titulo">{ritual.titulo}</h1>
            <p className="ritual-detalle-subtitulo">{ritual.descripcion}</p>

            <ul className="ritual-detalle-descripcion">
              {ritual.introduccion?.map((introduccion, idx) => 
                introduccion === null ? (
                  <li key={idx} className="ritual-detalle-espacio"></li>
                ) : (                  
                <li key={idx}>{introduccion}</li>
                )
              )}
            </ul>

          </div>
        </div>

        {/* Grid de información */}
        <div className="ritual-detalle-grid">

          {/* Importancia */}
          <div className="ritual-detalle-card">
            <h3 className="ritual-detalle-card-titulo">
              <Sparkle className="w-5 h-5" />
              <p>{ritual.importancia_titulo}</p>
            </h3>
            
            <h4 className="ritual-detalle-card-subtitulo">              
              <p>{ritual.importancia_subtitulo}</p>              
            </h4>

            <ul className="ritual-detalle-card-descripcion">
              {ritual.importancia?.map((importancia, idx) => 
                importancia === null ? (
                  <li key={idx} className="ritual-detalle-espacio"></li>
                ) : (                  
                <li key={idx}>{importancia}</li>
                )
              )}
            </ul>
          </div>

          {/* Beneficios */}
          <div className="ritual-detalle-card">
            <h3 className="ritual-detalle-card-titulo">
              <CheckCircle2 className="w-5 h-5" />
              <p>{ritual.beneficios_titulo}</p>
            </h3>
            <h4 className="ritual-detalle-card-subtitulo">              
              <p>{ritual.beneficios_subtitulo}</p>              
            </h4>

            <ul className="ritual-detalle-beneficios-lista">
              {ritual.beneficios?.map((beneficio, idx) => (
                <li key={idx}>
                  <span className="ritual-detalle-bullet">✦</span>
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        </div>
              
        {/* Grid Mente · Cuerpo · Alma */}
        {ritual.items?.length > 0 && (
          <>
            <h2 className="ritual-detalle-seccion-titulo">
              {ritual.items_titulo}
            </h2>
            
            <div className="ritual-detalle-grid-3">
              {ritual.items.map((item, idx) => (
                <div key={idx} className="ritual-detalle-card">

                  <h3 className="ritual-detalle-card-titulo">
                    {item.icono && <item.icono className="ritual-detalle-card-icono" />}
                    <span>{item.titulo}</span>
                  </h3>

                  <ul className="ritual-detalle-card-descripcion">
                    {item.descripciones.map((texto, i) =>
                      texto === null ? (
                        <li
                          key={i}
                          className="ritual-detalle-espacio"
                        />
                      ) : (
                        <li key={i}>{texto}</li>
                      )
                    )}
                  </ul>

                </div>
              ))}
            </div>
          </>
        )}
        

        {/* Materiales (antes de comenzar) */}
        <h2 className="ritual-detalle-seccion-titulo">
          {ritual.preparacion_titulo}
        </h2>
        <div className="ritual-detalle-card ritual-detalle-card-preparacion">

          <h4 className="ritual-detalle-card-subtitulo">              
            {ritual.preparacion_subtitulo}
          </h4>
        
          <ul className="ritual-detalle-card-descripcion">
            {ritual.preparacion_items?.map((item, idx) => 
              item === null ? (
              <li key={idx} className="ritual-detalle-espacio"></li>
              ) : (
                <li key={idx}>
                  {item.mostrarBullet && (
                    <span className="ritual-detalle-bullet">✦ </span>
                  )}
                  {item.texto}
                </li>
              )
            )}
          </ul>        
        </div>

        {/* Paso a paso - El Ritual */}
        <h2 className="ritual-detalle-seccion-titulo">
          {ritual.paso_paso_titulo}
        </h2>

        <div className="ritual-detalle-pasos">
          {ritual.paso_paso.map((item, idx) => (
            
            <div key={idx} className="ritual-detalle-paso">
              <span className="ritual-detalle-paso-numero">{idx + 1}</span>
              
              <div className="ritual-detalle-paso-card">
                  <h4 className="ritual-detalle-paso-titulo">
                    {item.titulo}
                  </h4>

                  <ul className="ritual-detalle-paso-lista">
                    {item.descripciones.map((descripcion, i) => 
                      descripcion === null ? (
                        <li key={i} className="ritual-detalle-espacio"></li>
                      ) : (
                        <li key={i}>
                          {descripcion}
                        </li>
                    ))}
                  </ul>
               </div>                  
            </div>
          ))}
        </div>
      
        {/* Afirmación Final */}
        <h2 className="ritual-detalle-seccion-titulo">
          {ritual.afirmacion_titulo}
        </h2>
        
        <div className="ritual-detalle-card ritual-detalle-card-preparacion ritual-detalle-card-afirmacion-reflexion">        
          <ul className="ritual-detalle-card-afirmacion">
            {ritual.afimacion_items?.map((item, idx) => 
              item === null ? (
              <li key={idx} className="ritual-detalle-espacio"></li>
              ) : (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>

        {/* Reflexión */}
        <h2 className="ritual-detalle-seccion-titulo">
          {ritual.reflexion_titulo}
        </h2>

        <div className="ritual-detalle-card ritual-detalle-card-preparacion ritual-detalle-card-afirmacion-reflexion">        
        
          <ul className="ritual-detalle-card-afirmacion">
            {ritual.reflexion_items?.map((item, idx) => 
              item === null ? (
              <li key={idx} className="ritual-detalle-espacio"></li>
              ) : (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>


        {/* CTA Solicitar */}
        {ritual.mostrarBoton !== false && (
            <div className="ritual-detalle-cta">
            <button 
                onClick={handleSolicitar} 
                className="ritual-detalle-boton-whatsapp"
            >
                <Calendar className="w-5 h-5" />
                <span>Solicitar este ritual</span>
            </button>
            <p className="ritual-detalle-cta-texto">
                Agenda tu sesión y recibe guía personalizada
            </p>
            </div>
        )}
      </div>
    </div>
  );
}