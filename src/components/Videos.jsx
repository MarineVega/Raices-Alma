import { useState } from "react";
import { categoriasVideos } from "../data/videos";
import { contacto } from "../data/contacto";
import { Sparkles, Calendar, ChevronDown, Send, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Videos() {
  return (
    <section id="videos" className="videos">
      <div className="videos-contenedor">
        {/* Header */}
        <div className="videos-header">
          <div className="videos-badge">
            <Sparkles className="videos-badge-icon" />
            <span>VIDEOS</span>
          </div>
          <h1 className="videos-titulo">Videos para tu Transformación</h1>
          <h2 className="videos-subtitulo">
            Contenidos para acompañarte en tu camino de sanación
          </h2>
        </div>

        {/* Categorías con carrusel */}
        {categoriasVideos.map((categoria) => {
          const IconoCategoria = categoria.icono;
          return (
            <div key={categoria.id} className="videos-categoria">
              {/* Título de categoría */}
              <div className="videos-categoria-header">
                <div className="videos-categoria-header-izq">
                  <IconoCategoria 
                    className="videos-categoria-icono"
                    style={{ color: categoria.color }}
                  />
                  <div>
                    <h2 className="videos-categoria-titulo">{categoria.titulo}</h2>
                    <p className="videos-categoria-subtitulo">{categoria.subtitulo}</p>
                  </div>
                </div>
                
                {/* Controles de navegación */}
                <div className="videos-categoria-controles">
                  <button className={`videos-prev videos-prev-${categoria.id}`}>                    
                    <ChevronLeft size={24} />
                  </button>
                  <button className={`videos-next videos-next-${categoria.id}`}>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Carrusel */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  prevEl: `.videos-prev-${categoria.id}`,
                  nextEl: `.videos-next-${categoria.id}`,
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true 
                }}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                  1280: { slidesPerView: 3 },
                }}
                className="videos-swiper"
              >
                {categoria.videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <VideoCard video={video} color={categoria.color} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function VideoCard({ video, color }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [consulta, setConsulta] = useState(video.mensajePredefinido);  // Inicilizo con el mensaje
  // const [consulta, setConsulta] = useState("");
  const whatsappNumero =  contacto.whatsapp.numero 

  const handleConsulta = () => {
    const mensaje = encodeURIComponent(consulta || video.mensajePredefinido);
    window.open(`https://wa.me/${whatsappNumero}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="video-card">
      {/* Video embed */}
      <div className="video-wrapper">
        {/* <iframe
          src={video.url}
          title={video.titulo}
          className="video-iframe"
          allow="autoplay"
          allowFullScreen
        /> */}
    
        <video
          src={video.url}
          title={video.titulo}
          className="video-iframe"
          controls
          controlsList="nodownload"
          disablePictureInPicture
        />
      </div>

      {/* Info del video */}
      <div className="video-info">
        <h3 className="video-titulo">{video.titulo}</h3>
        <p className="video-descripcion">{video.descripcion}</p>
        
        <div className="video-fecha">
          <Calendar size={16} />
          <span>{new Date(video.fecha).toLocaleDateString('es-AR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}</span>
        </div>

        {/* Botón consulta */}
        <button 
          className="video-boton-consultar"
          style={{ backgroundColor: color }}
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <MessageCircle size={18} />
          <span>Consultar sobre este tema</span>
          <ChevronDown 
            size={16} 
            className={`video-chevron ${mostrarFormulario ? 'rotado' : ''}`}
          />
        </button>

        {/* Formulario desplegable */}
        {mostrarFormulario && (
          <div className="video-formulario">
            {/* Botón de cierre */}
            <button 
              className="video-formulario-cerrar"
              onClick={() => setMostrarFormulario(false)}
            >
              ✕
            </button>
            
            <p className="video-formulario-texto">
              Escribí tu consulta o usá el mensaje predefinido:
            </p>
            <textarea
              className="video-textarea"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              // placeholder={video.mensajePredefinido}
              placeholder="Escribí tu consulta aquí..."
              defaultValue={video.mensajePredefinido} 
              rows={4}
            />
            <button 
              className="video-boton-enviar"
              onClick={handleConsulta}
            >
              <Send size={18} />
              <span>Enviar por WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}