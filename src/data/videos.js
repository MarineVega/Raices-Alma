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
        url: "https://alcume.com.ar/videos/Estancamiento.mp4",
        mensajePredefinido: "Hola! Me gustaría hacer una consulta sobre el video de Estancamiento. Mi situación es..."
      },
      {
        id: "apego",
        titulo: "Apego",
        descripcion: [
          "Muchas veces creemos que el apego solo existe hacia aquello que nos hizo daño."
        ],
        fecha: "2026-06-25",
        url: "https://alcume.com.ar/videos/Apego.mp4",
        mensajePredefinido: "Hola! Vi el video de Apego y quisiera profundizar sobre mi caso particular..."
      },
      {
        id: "dinero",
        titulo: "El dinero no define tu valor",
        descripcion: "Pero la manera en que te relacionás con él puede mostrarte mucho sobre tu historia. ¿Con qué creencia sobre el dinero creciste?",
        fecha: "2026-05-03",
        url: "https://alcume.com.ar/videos/Dinero.mp4",
        mensajePredefinido: "Hola! Me gustaría hacer una consulta sobre el video de El dinero no define tu valor. Mi situación es..."
      },
      {
        id: "autoexigencia",
        titulo: "Autoexigencia",
        descripcion: "Hoy quiero invitarte a hacer una pausa. Preguntate: ¿Me estoy impulsando a crecer... o me estoy exigiendo para sentir que soy suficiente?. Recordá que no necesitás ser perfecto para ser valioso.",
        fecha: "2026-03-20",
        url: "https://alcume.com.ar/videos/Autoexigencia.mp4",
        mensajePredefinido: "Hola! Vi el video de Autoexigencia y quisiera profundizar sobre mi caso particular..."
      }
      ,
      {
        id: "soltar-control",
        titulo: "Soltar el Control",
        descripcion: "Soltar el control no significa dejar de ser responsable. Significa aceptar que no todo depende de nosotros y que, aun en la incertidumbre, podemos encontrar calma.",
        fecha: "2026-04-23",
        url: "https://alcume.com.ar/videos/Soltar_Control.mp4",
        mensajePredefinido: "Hola! Vi el video de Soltar el control y quisiera profundizar sobre mi caso particular..."
      }
      ,
      {
        id: "dinero-2",
        titulo: "¿Qué aprendiste sobre el dinero?",
        descripcion: "Nuestra relación con el dinero no comienza cuando empezamos a trabajar. Mucho antes ya escuchábamos frases, observábamos comportamientos y recibíamos mensajes acerca de lo que significaba.",
        fecha: "2026-08-21",
        url: "https://alcume.com.ar/videos/Dinero2.mp4",
        mensajePredefinido: 'Hola! Vi el video de "¿Qué aprendiste sobre el dinero en tu familia?" y quisiera profundizar sobre mi caso particular...'
      },
      {
        id: "dinero-3",
        titulo: "El dinero no es solamente dinero.",
        descripcion: "A veces creemos que nuestra relación con él depende únicamente de cuánto tenemos.",
        fecha: "2026-08-21",
        url: "https://alcume.com.ar/videos/Dinero3.mp4",
        mensajePredefinido: 'Hola! Vi el video de "El dinero no es solamente dinero" y quisiera profundizar sobre mi caso particular...'
      },
      {
        id: "dar-recibir",
        titulo: "Dar te resulta más fácil que recibir?",
        descripcion: "A veces somos excelentes para acompañar, ayudar, escuchar y dar. Pero cuando alguien nos ofrece algo a nosotros… nos cuesta. Nos justificamos. Queremos devolverlo enseguida. Sentimos culpa.",
        fecha: "2026-08-21",
        url: "https://alcume.com.ar/videos/Dar_Recibir.mp4",
        mensajePredefinido: 'Hola! Vi el video de "Dar te resulta más fácil que recibir?" y quisiera profundizar sobre mi caso particular...'
      },
      {
        id: "decir-no",
        titulo: 'Cuántas veces dijiste "sí" para no decepcionar a alguien, cuando en realidad querías decir "no"?',
        descripcion: 'Con el tiempo, acostumbrarnos a complacer a los demás puede hacernos olvidar de escucharnos a nosotros. ¿Cuántos "sí" dijiste por miedo?',
        fecha: "2026-08-24",
        url: "https://alcume.com.ar/videos/Decir_No.mp4",
        mensajePredefinido: 'Hola! Vi el video de "Decir, No" y quisiera profundizar sobre mi caso particular...'
      }
    ]
  },
  {
    id: "energia",
    titulo: "Energía del Día",
    subtitulo: "Conexión con la energía disponible para cada jornada",
    icono: Sun,
    color: "var(--color-acento-brillo)",
    videos: [
      {
        id: "oraculo-agosto-2026",
        titulo: "Mensajito del Oráculo.",
        descripcion: "Últimos días del mes de Agosto.",
        fecha: "2026-06-24",
        url: "https://alcume.com.ar/videos/Oráculo_Agosto_2026.mp4",
        mensajePredefinido: "Hola! Quisiera consultar sobre el mensaje del Oráculo de fin de Agosto..."
      },
      {
        id: "oraculo-agosto-2026",
        titulo: "Mensaje signo a signo.",
        descripcion: "Últimos días del mes de Agosto.",
        fecha: "2026-06-24",
        url: "https://alcume.com.ar/videos/SignoASigno_Agosto_2026.mp4",
        mensajePredefinido: "Hola! Quisiera consultar sobre el mensaje signo a signo, de fin de Agosto..."
      },
      {
        id: "san-juan",
        titulo: "Después de la noche de San Juan...",
        descripcion: "Anoche fue tiempo de soltar. De entregar al fuego aquello que ya no acompaña nuestro camino. Miedos, heridas, creencias, situaciones o vínculos que cumplieron su propósito.",
        fecha: "2026-06-24",
        url: "https://alcume.com.ar/videos/Fogata.mp4",
        mensajePredefinido: "Hola! Quisiera consultar sobre el ritual de la noche de San Juan..."
      }
    ]
  }
];