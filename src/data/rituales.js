// data/rituales.js
import { Sparkles, Droplet, Shield, Crown, Star, Gem } from "lucide-react";

export const rituales = {
    ritual1: {
        id: "abundancia",
        titulo: "Ritual de la Abundancia",
        subtitulo: "Ritual de la sal",
        descripcion: "Atrae dinero y prosperidad. Se realiza el primer domingo de cada mes",
        icono: Gem,
        items: [
            "Mezcla un puñado de sal gruesa en un vaso de agua y déjalo reposar una hora.",
            "Enjuágate las manos con esta agua mientras repites: 'La sal es protectora y ella me ayudará a que el dinero se multiplique y nunca falte en mi hogar'.",
            "No te seques las manos; deja que se sequen al aire libre mientras aplaudes o chasqueas los dedos."
        ],
        importancia: "Este ritual ancestral ha sido utilizado por generaciones para abrir caminos de prosperidad y abundancia. La sal, elemento purificador por excelencia, actúa como imán de energías positivas cuando se combina con la intención correcta.",
        beneficios: [
            "Atrae la prosperidad al hogar",
            "Limpia energías negativas acumuladas",
            "Activa la abundancia en todos los aspectos",
            "Fortalece la conexión con la tierra"
        ],
        images: [
            "/img/rituales/proteccion_energetica_1.jpg",
            "/img/rituales/proteccion_energetica_2.jpg"
        ],
        mostrarBoton: true,
        tiempo: "30 minutos",
        materiales: ["Sal gruesa", "Agua", "Vaso de vidrio", "Intención clara"]
    },
    ritual2: {
        id: "amor-propio",
        titulo: "Amor Propio",
        subtitulo: "Ritual del espejo",
        descripcion: "Cultiva la autoestima y el amor incondicional hacia ti mismo",
        icono: Crown,
        items: [
            "Colócate frente a un espejo a la luz de una vela.",
            "Mírate a los ojos y repite afirmaciones de amor propio.",
            "Agradece a tu reflejo por todo lo que eres."
        ],
        importancia: "El amor propio es la base de todas las relaciones saludables. Este ritual te ayuda a sanar la relación más importante de tu vida: la que tienes contigo mismo.",
        beneficios: [
            "Aumenta la autoestima",
            "Fomenta la aceptación personal",
            "Atrae relaciones saludables",
            "Promueve el autocuidado"
        ],
        images: [
            "/img/rituales/proteccion_energetica_1.jpg",
            "/img/rituales/proteccion_energetica_2.jpg"
        ],
        mostrarBoton: true,
        tiempo: "20 minutos",
        materiales: ["Espejo", "Vela", "Afirmaciones", "Incienso"]
    },
    ritual3: {
        id: "proteccion",
        titulo: "Protección Energética",
        subtitulo: "Ritual de la canela",
        descripcion: "Escudo energético para proteger tu hogar y tu ser",
        icono: Shield,
        items: [
            "Coloca ramas de canela en las esquinas de tu hogar.",
            "Enciende una vela blanca y visualiza un escudo de luz protegiendo tu espacio.",
            "Repite tres veces: 'Este hogar está protegido por la luz'."
        ],
        importancia: "La protección energética es fundamental para mantener un espacio sagrado y seguro. Este ritual crea una barrera de luz que filtra energías densas y atrae vibraciones elevadas.",
        beneficios: [
            "Protege tu hogar de energías negativas",
            "Crea un espacio seguro para tu desarrollo espiritual",
            "Fortalece tu campo energético personal",
            "Atrae vibraciones positivas"
        ],
        images: [
            "/img/rituales/proteccion_energetica_1.jpg",
            "/img/rituales/proteccion_energetica_2.jpg"
        ],
        mostrarBoton: false,
        tiempo: "25 minutos",
        materiales: ["Canela", "Vela blanca", "Incienso", "Visualización"]
    },
    ritual4: {
        id: "limpieza",
        titulo: "Limpieza Energética",
        subtitulo: "Ritual del sahumerio",
        descripcion: "Purifica tu espacio y tu ser con el poder del humo sagrado",
        icono: Droplet,
        items: [
            "Enciende un sahumerio de salvia o palo santo.",
            "Recorre cada rincón de tu hogar con el humo.",
            "Visualiza cómo el humo disipa todas las energías estancadas."
        ],
        importancia: "La limpieza energética regular es esencial para mantener un flujo de energía saludable. Este ritual ancestral purifica el ambiente y restaura la armonía en tu espacio vital.",
        beneficios: [
            "Purifica el ambiente",
            "Elimina energías estancadas",
            "Renueva la energía del espacio",
            "Promueve la claridad mental"
        ],
        images: [
            "/img/rituales/proteccion_energetica_1.jpg",
            "/img/rituales/proteccion_energetica_2.jpg"
        ],
        mostrarBoton: false,
        tiempo: "15 minutos",
        materiales: ["Sahumerio", "Fósforos", "Intención de limpieza"]
    }
};