import { useParams, Link, useNavigate } from "react-router-dom";
import { rituales } from "../data/rituales";
import { ArrowLeft, Clock, Package, CheckCircle2, Calendar, Sparkle } from "lucide-react";
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

  const Icono = ritual.icono;

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
        {/* <Link to="/#rituales" className="ritual-detalle-volver">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a rituales</span>
        </Link> */}

        <button
          onClick={handleVolver}
          className="ritual-detalle-volver"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        {/* Header */}
        <div className="ritual-detalle-header">
          <div className="ritual-detalle-icono-container">
            <Icono className="ritual-detalle-icono-grande" />
          </div>
          <h1 className="ritual-detalle-titulo">{ritual.titulo}</h1>
          <p className="ritual-detalle-subtitulo">{ritual.subtitulo}</p>
        </div>

        {/* Imágenes - Galería */}
        {ritual.images && ritual.images.length > 0 && (
          <div className="ritual-detalle-galería">
            {ritual.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${ritual.titulo} - paso ${idx + 1}`}
                className="ritual-detalle-imagen"
              />
            ))}
          </div>
        )}

        {/* Grid de información */}
        <div className="ritual-detalle-grid">
          {/* Importancia */}
          <div className="ritual-detalle-card">
            <h3 className="ritual-detalle-card-titulo">
              <Sparkle className="w-5 h-5" />
              Importancia del Ritual
            </h3>
            <p>{ritual.importancia}</p>
          </div>

          {/* Beneficios */}
          <div className="ritual-detalle-card">
            <h3 className="ritual-detalle-card-titulo">
              <CheckCircle2 className="w-5 h-5" />
              Beneficios
            </h3>
            <ul className="ritual-detalle-beneficios-lista">
              {ritual.beneficios?.map((beneficio, idx) => (
                <li key={idx}>
                  <span className="ritual-detalle-beneficio-bullet">✦</span>
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Materiales */}
        <div className="ritual-detalle-card">
          <h3 className="ritual-detalle-card-titulo">
            <Package className="w-5 h-5" />
            Materiales Necesarios
          </h3>
          <div className="ritual-detalle-materiales">
            {ritual.materiales?.map((material, idx) => (
              <span key={idx} className="ritual-detalle-material-tag">
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Paso a paso */}
        <div className="ritual-detalle-card">
          <h3 className="ritual-detalle-card-titulo">
            <Clock className="w-5 h-5" />
            Paso a Paso
          </h3>

          <div className="ritual-detalle-pasos">
            {ritual.items.map((item, idx) => (
              <div key={idx} className="ritual-detalle-paso">
                <span className="ritual-detalle-paso-numero">{idx + 1}</span>
                 <div>
                    <h4 className="ritual-detalle-paso-titulo">
                      {item.titulo}
                    </h4>

                    <ul className="ritual-detalle-paso-lista">
                      {item.descripciones.map((descripcion, i) => (
                        <li key={i}>
                          {descripcion}
                        </li>
                      ))}
                    </ul>
                  </div>                  
              </div>
            ))}
          </div>
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