import { contacto } from "../data/contacto";

export const generarLinkWhatsApp = (tipo = null, terapia = null) => {
    const numero = contacto.whatsapp.numero;
    let mensaje = "Hola! Me interesa reservar un turno";
    
    if (tipo === "terapia" && terapia) {
        mensaje = `Hola! Me interesa saber más sobre la terapia ${terapia}`;
    }

    if (tipo === "consulta") {
        mensaje = `Hola! Me interesa saber más sobre tus terapias`;
    }

    if (tipo === "ritual" && terapia) {
        mensaje = `Hola! Me interesa saber más sobre el ritual ${terapia}`;
    }
    /*
    if (tipo === "xxx") {
        mensaje = "Hola! Me interesa saber más sobre xxx";
    }
    */
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};