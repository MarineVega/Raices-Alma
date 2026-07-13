import { Sparkles, Droplet, Shield, Crown, Star, Gem } from "lucide-react";
//Droplet -> gota
//Shield -> escudo

export const paquetes = {
    exclusive1: {
        titulo: "Exclusive 1",
        subtitulo: "Esencial",
        descripcion: "El paquete perfecto para mantener tu vehículo en excelentes condiciones con servicios básicos profesionales.",        
        icono: Sparkles,
        items: [
            "Lavado exterior premium a mano",
            "Aspirado completo de interior",
            "Limpieza de tablero y consola",
            "Limpieza de cristales interior y exterior",
            "Tratamiento básico de neumáticos",
            "Aromatización del habitáculo"
        ],
        destacado: false
    },
    exclusive2: {
        titulo: "Exclusive 2",
        subtitulo: "Completo",
        descripcion: "Servicio integral que incluye detallado profundo y protección para un acabado superior.",
        icono: Star,
        items: [
            "Todo lo incluido en Exclusive 1",
            "Limpieza profunda de tapizados",
            "Detallado de paneles de puerta",
            "Limpieza de guías y rieles",
            "Acondicionado de plásticos interiores",
            "Limpieza de llantas y arcos",
            "Encerado básico de carrocería"
        ],
        destacado: true
    },
    exclusive3: {
        titulo: "Exclusive 3",
        subtitulo: "Premium",
        descripcion: "Tratamiento completo para devolverle la vida a tu vehículo con productos de alta gama.",
        icono: Crown,
        items: [
            "Todo lo incluido en Exclusive 2",
            "Retiro de asientos para limpieza total",
            "Limpieza de techo y alfombras",
            "Abrillantado en una paso",
            "Pulido de ópticas",
            "Protección cerámica básica",
            "Limpieza de motor"
        ],
        destacado: false
    },
    exclusive4: {
        titulo: "Exclusive 4",
        subtitulo: "Elite",
        descripcion: "La experiencia definitiva. Dejá tu vehículo como recién salido de fábrica.",
        icono: Gem,
        items: [
            "Todo lo incluido en Exclusive 3",
            "Abrillantado Sonax en dos pasos",
            "Pulido de pintura profesional",
            "Eliminación de swirls y marcas",
            "Protección cerámica premium",
            "Acondicionado completo de cuero",
            "Tratamiento de vidrios repelente"
        ],
        destacado: false
    }
};