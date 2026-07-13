import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

// Recibimos la prop "bloqueado"
export default function InterruptorModo ({ bloqueado }) {
  // Inicializo el estado revisando localStorage o el sistema
  const [isDark, setIsDark] = useState(() => {
    const guardado = localStorage.getItem("tema");
    if (guardado) return guardado === "dark";
    
    // Si no hay nada guardado, preguntamos al navegador, cual fue la preferencia anterior
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Si se activa la accesibilidad, apagamos el dark mode
  useEffect(() => {
    if (bloqueado) {
      setIsDark(false);
    }
  }, [bloqueado]);

  useEffect(() => {
    // Lógica para aplicar la clase 'dark' al elemento HTML
    const html = document.documentElement;

    // IMPORTANTE: Solo aplico dark si NO está bloqueado por accesibilidad
    if (isDark && !bloqueado) {
      html.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  }, [isDark, bloqueado]);

  // Listener para cambios en el sistema mientras la web está abierta
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Solo cambio automáticamente si el usuario no ha fijado una preferencia manual
      if (!localStorage.getItem("tema")) {
        setIsDark(e.matches);
      }
    };
    
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={() => !bloqueado && setIsDark(!isDark)} // Solo clickea si no está bloqueado
      className={`interruptor-contenedor ${bloqueado ? "deshabilitado" : ""}`}
      style={{ opacity: bloqueado ? 0.3 : 1, cursor: bloqueado ? 'not-allowed' : 'pointer' }}
    >      
      {/* Icono animado */}
      <div className={`interruptor-icono ${isDark ? "rotado" : ""}`}>
        {isDark ? (
          <Moon size={30} className="icono-luna" />
        ) : (
          <Sun size={30} className="icono-sol" />
        )}
      </div>
    </button>
  );
};