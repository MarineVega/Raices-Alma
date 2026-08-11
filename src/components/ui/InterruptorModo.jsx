import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function InterruptorModo({ bloqueado }) {

    const [isDark, setIsDark] = useState(() => {
        const guardado = localStorage.getItem("tema");

        if (guardado) {
            return guardado === "dark";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });


    // Si se activa accesibilidad, apagamos el modo oscuro
    useEffect(() => {
        if (bloqueado) {
            setIsDark(false);
        }
    }, [bloqueado]);


    // Aplicamos / quitamos la clase dark
    useEffect(() => {

        const html = document.documentElement;

        if (isDark && !bloqueado) {

            html.classList.add("dark");
            localStorage.setItem("tema", "dark");

        } else {

            html.classList.remove("dark");
            localStorage.setItem("tema", "light");

        }

    }, [isDark, bloqueado]);


    // Detectar cambios del sistema
    useEffect(() => {

        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e) => {

            if (!localStorage.getItem("tema")) {
                setIsDark(e.matches);
            }

        };

        mq.addEventListener("change", handleChange);

        return () => mq.removeEventListener("change", handleChange);

    }, []);


    return (
        <button
            onClick={() => !bloqueado && setIsDark(!isDark)}
            className={`interruptor-contenedor ${
                bloqueado ? "deshabilitado" : ""
            }`}
            style={{
                opacity: bloqueado ? 0.3 : 1,
                cursor: bloqueado ? "not-allowed" : "pointer"
            }}
        >

            <div className={`interruptor-icono ${isDark ? "rotado" : ""}`}>

                {isDark ? (
                    <Moon size={30} className="icono-luna" />
                ) : (
                    <Sun size={30} className="icono-sol" />
                )}

            </div>

        </button>
    );
}