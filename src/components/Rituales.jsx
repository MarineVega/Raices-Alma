import { rituales } from "../data/rituales";
import { Sparkle, Clock, Package, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";  // Autoplay -> el carrusel se mueve automáticamente
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";


export default function Rituales({ onSeleccionarRitual }) {
  const navigate = useNavigate();

  const handleSolicitar = (titulo) => {
    onSeleccionarRitual(titulo);
  };

  const handleVerDetalle = (ritualId, titulo) => {
    handleSolicitar(titulo);
    
    navigate(`/ritual/${ritualId}`);
  };


  return (
    <section id="rituales" className="rituales">
      <div className="rituales-contenedor">
        {/* Header con badge */}
        <div className="rituales-header">
          <div className="rituales-badge">
            <Sparkle className="rituales-badge-icon" />
            <span>RITUALES</span>
          </div>
          <h2 className="rituales-titulo">Rituales Sagrados</h2>
          <p className="rituales-subtitulo">
            {/* Ceremonias para conectar con tu esencia y elevar tu energía */}
            Los rituales no cambian tu destino; transforman tu manera de caminar hacia él. Cuando la mente comprende, el cuerpo acompaña y el alma guía, la verdadera transformación comienza.
          </p>
        </div>

        {/* Carrusel */}
        <div className="rituales-carrusel-wrapper">
          {/* Controles de navegación */}
          <div className="rituales-controles">
            <button className="rituales-prev">
              <ChevronLeft size={24} />
            </button>
            <button className="rituales-next">
              <ChevronRight size={24} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}      // Autoplay
            spaceBetween={24}
            slidesPerView={1}
            // 👇 PROPERTY PARA QUE SEA INFINITO
            loop={true}
            navigation={{
              prevEl: ".rituales-prev",
              nextEl: ".rituales-next",
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
           /* autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true, // 👈 Pausa al pasar el mouse
            }}*/
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="rituales-swiper"
          >
            {Object.values(rituales).map((ritual) => {
              const Icono = ritual.icono;
              return (
                <SwiperSlide key={ritual.id}>
                  <div className="rituales-card">                    
                    <div className="rituales-card-header">
                      <div className="rituales-icono-wrapper">
                        <Icono className="rituales-icono" />
                      </div>
                      <div>
                        <h3 className="rituales-card-titulo">{ritual.titulo}</h3>
                        <span className="rituales-card-tagline">{ritual.subtitulo}</span>
                      </div>
                    </div>

                    <p className="rituales-card-descripcion">{ritual.descripcion}</p>

                    <div className="rituales-card-info">
                      {ritual.tiempo && (
                        <div className="rituales-card-info-item">
                          <Clock className="w-4 h-4" />
                          <span>{ritual.tiempo}</span>
                        </div>
                      )}
                      {ritual.materiales && (
                        <div className="rituales-card-info-item">
                          <Package className="w-4 h-4" />
                          <span>{ritual.materiales.length} materiales</span>
                        </div>
                      )}
                    </div>

                    <button                       
                      onClick={() => handleVerDetalle(ritual.id, ritual.titulo)}
                      className="rituales-boton-ver-mas"
                    >
                      <span>Ver ritual completo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}