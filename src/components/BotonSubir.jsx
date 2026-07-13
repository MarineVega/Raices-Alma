import React, { useState, useEffect } from 'react';
import { ArrowUp } from "lucide-react";

export default function BotonSubir() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  return (
    <button 
      className={`boton-subir ${visible ? 'show' : ''}`} 
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
}