import { 
  Heart, 
  Sun, 
  Moon, 
  Zap, 
  Compass, 
  Brain,
  Users,
  Home
} from "lucide-react";

// https://drive.google.com/file/d/1HKNmbRu5SfiR4TxNer54wTjYWf0pyooV/view?usp=sharing

export const categoriasVideos = [
  {
    id: "situaciones",
    titulo: "Sanando lo Cotidiano",
    subtitulo: "Herramientas para transformar situaciones diarias en oportunidades de crecimiento",
    icono: Heart,
    color: "var(--color-acento-brillo)",
    videos: [
      {
        id: "estancamiento",
        titulo: "Estancamiento",
        descripcion: [
          "Muchas veces llamamos estancamiento a lo que en realidad es una invitación a mirar hacia adentro.",
          "Muchas veces creemos que el apego solo existe hacia aquello que nos hizo daño."
        ],
        fecha: "2026-06-20",
        // url: "https://drive.google.com/file/d/1HKNmbRu5SfiR4TxNer54wTjYWf0pyooV/preview", // muestra opcion para verlo en el drive
        url: "https://mvsolucionesweb.com.ar/Raices/Estancamiento.mp4",
        mensajePredefinido: "Hola! Me gustaría hacer una consulta sobre el video de Estancamiento. Mi situación es..."
      },
      {
        id: "apego",
        titulo: "Apego",
        descripcion: [
          "Muchas veces creemos que el apego solo existe hacia aquello que nos hizo daño."
        ],
        fecha: "2026-06-25",
        url: "https://mvsolucionesweb.com.ar/Raices/Apego.mp4",
        mensajePredefinido: "Hola! Vi el video de Apego y quisiera profundizar sobre mi caso particular..."
      },
      {
        id: "ansiedad2",
        titulo: "Manejo de la Ansiedad Diaria 2",
        descripcion: "Técnicas prácticas para calmar la mente en momentos de estrés",
        fecha: "2026-06-25",
        url: "https://mvsolucionesweb.com.ar/Raices/Fogata.mp4",
        mensajePredefinido: "Hola! Me gustaría hacer una consulta sobre el video de Manejo de la Ansiedad Diaria. Mi situación es..."
      },
      {
        id: "vinculos2",
        titulo: "Vínculos que Sanan 2",
        descripcion: "Cómo mejorar nuestras relaciones desde la consciencia",
        fecha: "2026-06-25",
        url: "https://mvsolucionesweb.com.ar/Raices/Fogata.mp4",
        mensajePredefinido: "Hola! Vi el video de Vínculos que Sanan y quisiera profundizar sobre mi caso particular..."
      }
    ]
  },
  // {
  //   id: "energia",
  //   titulo: "Energía del Día",
  //   subtitulo: "Conexión con las energías disponibles para cada jornada",
  //   icono: Sun,
  //   color: "var(--color-acento-brillo)",
  //   videos: [
  //     {
  //       id: "energia-semanal",
  //       titulo: "Energía de la Semana",
  //       descripcion: "Lectura energética para navegar estos próximos 7 días",
  //       fecha: "2026-07-01",
  //       url: "https://mvsolucionesweb.com.ar/Raices/Fogata.mp4",
  //       mensajePredefinido: "Hola! Quisiera consultar sobre la energía de esta semana y cómo aplicarla a mi situación..."
  //     }
  //   ]
  // }
];