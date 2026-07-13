export const generarLinkWhatsApp = (tipo = null, paquete = null) => {
    const numero = "5492284234077";
    let mensaje = "Hola! Me interesa saber más sobre sus servicios";
    
    if (tipo === "paquete" && paquete) {
        mensaje = `Hola! Me interesa saber más sobre el paquete ${paquete}`;
    }
    
    if (tipo === "premium") {
        mensaje = "Hola! Me interesa saber más sobre el servicio Preventa Premium";
    }
    
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};