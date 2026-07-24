// data/rituales.js
import { Sparkles, Droplet, Shield, Crown, Star, Gem, Moon, CalendarDays, Sprout, Flame, Flower, HeartHandshake, MoonStar, TreeDeciduous } from "lucide-react";

export const rituales = {
    ritual1: {
        id: "luna_nueva",
        titulo: "Luna Nueva",
        subtitulo: "Comienzo de un nuevo ciclo",
        descripcion: "Sembrar intenciones, crear el futuro y abrir nuevos caminos",
        icono: Moon,
        introduccion_titulo: "Introducción",
        introduccion_subtitulo: "",
        introduccion : [
            "Cada Luna Nueva marca el comienzo de un nuevo ciclo. Es el momento en que el cielo parece quedar en silencio para invitarnos a mirar hacia nuestro interior.",
            "Así como la naturaleza se prepara para un nuevo crecimiento, nosotros también tenemos la oportunidad de sembrar nuevas intenciones, dejar atrás aquello que ya no nos representa y abrir espacio para una nueva versión de nosotros mismos.",
            "Este ritual no busca hacer magia. Su verdadero propósito es ayudarnos a detenernos, conectar con nuestra esencia y dar un paso consciente hacia la vida que deseamos construir."
        ],
        importancia_titulo: "¿Por qué realizar este ritual?",
        importancia_subtitulo: "",
        importancia: [
            "Vivimos inmersos en el hacer constante y pocas veces nos regalamos un momento para preguntarnos qué queremos realmente.",
            "La Luna Nueva simboliza el vacío fértil: un espacio donde todo es posible antes de manifestarse.",
            "Cuando realizamos un ritual con una intención clara, nuestra mente se enfoca, nuestro cuerpo participa activamente en el cambio y nuestra alma encuentra un camino para expresar aquello que anhela.",
            "No es la Luna quien cambia nuestra vida.",
            "Somos nosotros quienes, al detenernos conscientemente, elegimos transformarla."
        ],
        beneficios_titulo: "¿Para qué sirve?" ,
        beneficios_subtitulo: "Este ritual puede ayudarte a:" ,
        beneficios: [
            "✨ Iniciar nuevos proyectos.",
            "✨ Abrirte a nuevas oportunidades.",
            "✨ Fortalecer la confianza en vos mismo.",
            "✨ Dejar atrás pensamientos limitantes.",
            "✨ Manifestar objetivos desde la consciencia.",
            "✨ Conectar con tu propósito.",
            "✨ Recuperar esperanza y motivación."
        ],
        items_titulo: "Mente · Cuerpo · Alma",
        items : [
            {
                titulo: "🧠 Mente",
                descripciones: [
                    "Preguntate:",
                    "¿Qué deseo crear en esta nueva etapa de mi vida?",
                    "No escribas lo que otros esperan de vos.",
                    "Escribí aquello que hace vibrar tu corazón."
                ],
            },
            {
                titulo: "🌿 Cuerpo",
                descripciones: [
                   "El cuerpo necesita participar del cambio.",
                   "",
                    "Cuando escribimos, respiramos profundamente, encendemos una vela o sembramos una semilla, nuestro sistema nervioso registra que estamos iniciando un nuevo capítulo.",
                    "",
                    "El ritual convierte una intención en una experiencia vivida."
                ]
            },
            {
                titulo: "✨ Alma",
                descripciones: [
                    "La Luna Nueva nos recuerda que toda creación comienza siendo invisible.",
                    "Confiar en el proceso también forma parte de la manifestación.",
                    "Sembrar no significa controlar cuándo florecerá.",
                    "Significa confiar."
                ]
            }
        ],        
        preparacion_titulo: "Antes de comenzar",
        preparacion_subtitulo: "Prepará un espacio tranquilo.",
        preparacion_items: [
            "Podés colocar:",            
            "• Una vela blanca o violeta.",
            "• Un cuenco con agua.",
            "• Incienso o sahumo.",
            "• Un cuarzo transparente o amatista (opcional).",
            "• Un cuaderno o una hoja.",
            "• Una lapicera.",
            "",
            "Si lo deseás, podés acompañar el momento con música suave.",
            "",
            "Apagá el celular durante unos minutos y regalate este encuentro con vos."
        ],
        paso_paso_titulo: "El Ritual",
        paso_paso: {
            titulo: "1. Respirar",
            descripciones: [
                "Cerrá los ojos.",
                "Realizá siete respiraciones profundas.",
                "Con cada exhalación soltá tensiones."
            ],
            titulo: '2. Encender la vela',
            descripciones: [
                'Mientras la encendés decí:',
                '"Hoy elijo abrirme a un nuevo comienzo.',
                'Que esta luz ilumine mi camino y mi corazón."'
            ],
            titulo: '3. Escribir tus intenciones',
            descripciones: [
                'Escribí entre cinco y diez intenciones.',
                'Siempre en presente.',
                'Ejemplos:',
                '"Abro mi corazón a relaciones sanas."',
                '"Confío plenamente en mis capacidades."',
                '"Recibo abundancia con gratitud."',
                '"Vivo en paz."',
                '"Me permito crecer."',
                'No escribas desde la carencia.',
                'Escribí como si ya estuvieras caminando ese proceso.'
            ],
            titulo: '4. Visualizar',
            descripciones: [
                'Leé lentamente cada intención.',
                'Luego cerrá los ojos.',
                'Imaginá que ya estás viviendo esa realidad.',
                'Sentí la emoción.',                
                'No solo la pienses.',
                'Vivila.'
            ], 
            titulo: '5. Agradecer',
            descripciones: [
                'Colocá ambas manos sobre el corazón.',
                'Decí:',
                '"Gracias por las oportunidades que comienzan a manifestarse.',
                'Confío en los tiempos de la vida.',
                'Estoy preparado para recibir aquello que es para mi mayor bien."'
            ], 
            titulo: '6. Cierre',
            descripciones: [
                'Dejá que la vela se consuma de forma segura o apagala con respeto, sin soplarla si esa práctica tiene un significado para vos.',
                'Guarda tus intenciones en un lugar especial.',
                'Volvé a leerlas durante la próxima Luna Llena para observar cuánto ha florecido en tu camino.'
            ]
        },
        afirmacion_titulo: "Afirmación Final",
        afimacion_items: [
            '"Hoy siembro con amor las semillas de mi futuro.',
            'Confío en la sabiduría de la vida.',
            'Cada paso que doy me acerca a mi propósito.',
            'Mi mente crea, mi cuerpo sostiene y mi alma guía el camino.',
            'Así es. Así será."'
        ],
        reflexion_titulo: "💜 Reflexión",
        reflexion_items: [
            'Cada Luna Nueva nos recuerda que siempre existe la posibilidad de comenzar otra vez.',
            'No importa cuántas veces hayas sentido que te alejaste de tu camino. La transformación empieza en el instante en que elegís mirar hacia adentro y sembrar una nueva intención.',
            'Que este ritual sea un encuentro con tu esencia, un acto de amor hacia vos mismo y una invitación a confiar en que todo cambio profundo comienza con una decisión consciente.'
        ],
        images: [
            "/img/rituales/luna_nueva.jpg"
        ],
        mostrarBoton: false,
        tiempo: "30 minutos",
        materiales: ["Vela blanca o violeta", "Agua", "Incienso o sahumo", "Cuarzo o amatista", "Cuaderno o una hoja", "Lapicera"]
    },

    ritual2: {
        id: "abundancia",
        titulo: "Abundancia",
        subtitulo: "Conectá con la energía de la abundancia",
        descripcion: "Abrirte a recibir, transformar creencias y conectar con la prosperidad",
        icono: Gem ,
        introduccion_titulo: "Introducción",
        introduccion_subtitulo: "",
        introduccion : [
            'La abundancia es mucho más que el dinero que llega a nuestras manos. Es la capacidad de reconocer que la vida nos sostiene constantemente a través del amor, la salud, las oportunidades, las relaciones, el tiempo y los recursos que nos permiten crecer.',
            'Sin embargo, muchas veces aprendimos que recibir era egoísta, que pedir era una molestia o que el sacrificio era el único camino hacia el éxito. Estas creencias, heredadas de nuestra historia personal y familiar, pueden alejarnos de una vida plena.',
            'Este ritual es una invitación a mirar esas creencias con amor, agradecer lo que ya existe y abrir el corazón para recibir todo aquello que la vida desea entregarnos.',
            'La verdadera abundancia comienza cuando dejamos de vivir desde la escasez y elegimos confiar.'
        ],
        importancia_titulo: "¿Por qué realizar este ritual?",
        importancia_subtitulo: "",
        importancia: [
            'Nuestra relación con la abundancia no depende únicamente del esfuerzo o del trabajo. También está profundamente influenciada por nuestras emociones, nuestras experiencias de vida y los mensajes que recibimos de nuestro sistema familiar acerca del dinero, el merecimiento y el éxito.',
            'Realizar un ritual nos permite hacer una pausa consciente, identificar aquello que queremos transformar y generar un nuevo compromiso con nosotros mismos.',
            'No es el ritual quien crea la abundancia.',
            'Es la transformación interior la que nos permite reconocer y recibir aquello que antes no podíamos ver.'
        ],
        beneficios_titulo: "¿Para qué sirve?" ,
        beneficios_subtitulo: "Este ritual puede ayudarte a:" ,
        beneficios: [
            '✨ Liberar creencias de escasez.',
            '✨ Trabajar el merecimiento.',
            '✨ Abrirte a nuevas oportunidades laborales.',
            '✨ Mejorar tu relación con el dinero.',
            '✨ Agradecer lo que ya existe en tu vida.',
            '✨ Manifestar prosperidad desde la consciencia.',
            '✨ Conectar con la confianza y la gratitud.'
        ],
        items_titulo: "Mente · Cuerpo · Alma",
        items : [
            {
                titulo: "🧠 Mente",
                descripciones: [
                    "Preguntate:",
                    "¿Qué pienso realmente sobre el dinero y la abundancia?",
                    "¿Creo que debo sufrir para lograr mis objetivos?",
                    "¿Siento culpa cuando recibo?",
                    "¿Me permito disfrutar de lo que tengo?",
                    "Tomar conciencia de estas creencias es el primer paso para transformarlas."
                ],
            },
            {
                titulo: "🌿 Cuerpo",
                descripciones: [
                   "El cuerpo necesita experimentar aquello que la mente desea cambiar.",
                   "",
                    "Cuando escribimos nuestras creencias, encendemos una vela, sostenemos una moneda entre nuestras manos o realizamos un acto simbólico de gratitud, enviamos un mensaje claro a nuestro sistema nervioso: estamos disponibles para recibir una nueva realidad.",
                    "",
                    "La abundancia también se practica."
                ]
            },
            {
                titulo: "✨ Alma",
                descripciones: [
                    "La abundancia nace cuando comprendemos que somos parte de una vida que constantemente crea, nutre y sostiene.",
                    "Abrirnos a recibir no significa esperar pasivamente.",
                    "Significa confiar, actuar con coherencia y permitir que aquello que es para nuestro mayor bien encuentre el camino hacia nosotros."
                ]
            }
        ],        
        preparacion_titulo: "Antes de comenzar",
        preparacion_subtitulo: "Buscá un lugar tranquilo donde puedas permanecer sin interrupciones.",
        preparacion_items: [
            "Podés preparar tu espacio con:",            
            "• Una vela dorada, verde o blanca.",
            "• Un cuenco con agua.",
            "• Incienso o sahumo.",
            "• Una moneda o un billete.",
            "• Canela en polvo.",
            "• Laurel.",
            "• Un cuarzo citrino o pirita (opcional).",
            "• Papel y lapicera.",
            "",
            "Antes de comenzar, respirás profundamente varias veces y disponete a vivir este momento con presencia y gratitud."
        ],
        paso_paso_titulo: "El Ritual",
        paso_paso: {
            titulo: "1. Encender la luz",
            descripciones: [
                'Encendé la vela diciendo:',
                '"Hoy elijo abrir mi corazón a la abundancia infinita de la vida.',
                'Me permito recibir con amor todo aquello que está destinado para mí."'                
            ],
            titulo: '2. Reconocer la abundancia presente',
            descripciones: [
                'Tomá la moneda entre tus manos.',
                'Observala durante unos instantes.',
                'Pensá en todo aquello que ya existe en tu vida.',
                'Personas.',
                'Experiencias.',
                'Aprendizajes.',
                'Salud.',
                'Trabajo.',
                'Tiempo.',
                'Respirá profundamente mientras agradecés cada uno de esos regalos.'
            ],
            titulo: '3. Liberar la escasez',
            descripciones: [
                'Escribí en una hoja todas aquellas creencias que sentís que hoy limitan tu prosperidad.',
                'Por ejemplo:',
                '"No soy suficiente."',
                '"El dinero cuesta demasiado."',
                '"No merezco ganar más."',
                '"Siempre falta algo."',
                'Cuando termines, doblá el papel y quemalo cuidadosamente en un recipiente resistente al fuego, permitiendo que esas creencias se transformen.',
                'Mientras observás cómo se consume, repetí:',
                '"Hoy libero todo pensamiento que me impide vivir en abundancia.',
                'Elijo una nueva manera de relacionarme con la prosperidad."'
            ],
            titulo: '4. Sembrar nuevas creencias',
            descripciones: [
                'En una nueva hoja escribí entre cinco y diez afirmaciones en presente.',
                'Ejemplos:',
                '"Merezco recibir abundancia en todas las áreas de mi vida."',
                '"El dinero llega a mí de formas conscientes y amorosas."',
                '"Confío plenamente en la vida."',
                '"Mi trabajo genera bienestar para mí y para los demás."',
                '"Cada día recibo nuevas oportunidades."',
                'Leelas lentamente y permitite sentir que ya forman parte de tu realidad.'
            ], 
            titulo: '5. Activar la energía',
            descripciones: [
                'Colocá un poco de canela sobre la moneda o el billete.',
                'Tomalo entre tus manos.',
                'Visualizá una luz dorada rodeando todo tu cuerpo.',
                'Imaginá cómo esa energía expande oportunidades, confianza y prosperidad en cada aspecto de tu vida.'
            ], 
            titulo: '6. Agradecer',
            descripciones: [
                'Llevá ambas manos al corazón y decí:',
                '"Gracias, vida, por todo lo que ya recibo.',
                'Gracias por lo que está llegando.',
                'Confío plenamente en que el universo siempre sostiene mi camino.',
                'Recibo con amor.',
                'Comparto con gratitud.',
                'Vivo en abundancia."'
            ]
        },
        cierre_titulo: "Cierre del ritual",
        cierre_items: [
            'Guardá la moneda o el billete en tu billetera durante los próximos treinta días como símbolo de la nueva relación que comenzás a construir con la abundancia.',
            'Conservá tus afirmaciones y leelas cada mañana durante una semana.',
            'Recordá que la prosperidad no se manifiesta solamente en lo material, sino también en la paz, la salud, los vínculos, las oportunidades y el crecimiento personal.'
        ],
        afirmacion_titulo: "Afirmación Final",
        afimacion_items: [
            '"La abundancia vive dentro de mí.',
            'Merezco recibir con amor todo aquello que la vida tiene preparado para mí.',
            'Mi mente elige pensamientos de prosperidad.',
            'Mi cuerpo sostiene acciones conscientes.',
            'Mi alma confía en el flujo perfecto de la vida.',
            'Hoy abro mis manos, mi corazón y mi camino para recibir con gratitud.',
            'Así es. Así será."'
        ],
        reflexion_titulo: "💜 Reflexión",
        reflexion_items: [
            'La abundancia no comienza cuando obtenemos más.',
            'Comienza cuando dejamos de sentir que somos menos.',
            'Cada vez que elegís agradecer en lugar de quejarte, confiar en lugar de controlar y compartir en lugar de temer, estás cultivando un estado interior desde el cual la prosperidad puede florecer.Que este ritual te recuerde que la mayor riqueza nace cuando aprendemos a reconocer el valor que ya habita en nosotros.'
        ],
        images: [
            "/img/rituales/abundancia.jpg"
        ],
        mostrarBoton: false,
        tiempo: "30 minutos",
        materiales: ["Vela dorada, verde o blanca", "Agua", "Incienso o sahumo", "Moneda o billete", "Canela en polvo", "Laurel", "Cuarzo citrino o pirita", "Papel y lapicera"]
    },
    
    ritual3: {
        id: "apertura_mes",
        titulo: "Apertura de Mes",
        subtitulo: "Comenzar de nuevo",
        descripcion: "Recibir un nuevo ciclo con intención, claridad y propósito.",
        icono: CalendarDays,
        introduccion_titulo: "Introducción",
        introduccion_subtitulo: "",
        introduccion : [
            'Cada mes nos ofrece una nueva oportunidad para comenzar de nuevo.',
            'No importa cómo haya sido el mes anterior. Siempre existe un nuevo amanecer que nos invita a mirar nuestra vida con otros ojos, a aprender de lo vivido y a dar un nuevo paso hacia aquello que deseamos construir.',
            'Comenzar un mes de forma consciente es elegir dejar de vivir en piloto automático para convertir el tiempo en un aliado de nuestro crecimiento.',
            'Este ritual es una invitación a detenerte, agradecer el camino recorrido y abrirte a las infinitas posibilidades que trae este nuevo ciclo.',
            'Porque cada comienzo guarda una semilla de transformación.'
        ],
        importancia_titulo: "¿Por qué realizar este ritual?",
        importancia_subtitulo: "",
        importancia: [
            'Con frecuencia iniciamos los meses repitiendo las mismas rutinas, preocupaciones y pensamientos. Sin detenernos a elegir cómo queremos vivir los días que tenemos por delante.',
            'Los rituales nos ayudan a marcar un antes y un después. Son un puente entre lo que dejamos atrás y aquello que elegimos crear.',
            'Cuando comenzamos el mes con una intención clara, alineamos nuestra mente, nuestras emociones y nuestras acciones con aquello que realmente queremos manifestar.',
            'No es el calendario quien transforma nuestra vida.',
            'Somos nosotros quienes decidimos darle un nuevo significado a cada comienzo.'
        ],
        beneficios_titulo: "¿Para qué sirve?" ,
        beneficios_subtitulo: "Este ritual puede ayudarte a:" ,
        beneficios: [
            '✨ Comenzar el mes con claridad.',
            '✨ Organizar tus prioridades desde la consciencia.',
            '✨ Atraer nuevas oportunidades.',
            '✨ Fortalecer la confianza en vos mismo.',
            '✨ Liberar la energía del mes anterior.',
            '✨ Conectar con tu propósito.',
            '✨ Vivir cada día con mayor presencia.'
        ],
        items_titulo: "Mente · Cuerpo · Alma",
        items : [
            {
                titulo: "🧠 Mente",
                descripciones: [
                    'Antes de comenzar preguntate:',
                    '¿Cómo quiero sentirme este mes?',
                    'No pienses solamente en objetivos.',
                    'Pensá en emociones.',
                    'Tal vez este mes quieras sentir paz.',
                    'Confianza.',
                    'Alegría.',
                    'Calma.',
                    'Abundancia.',
                    'Cuando elegimos primero cómo queremos sentirnos, nuestras decisiones comienzan a alinearse naturalmente.'
                ],
            },
            {
                titulo: "🌿 Cuerpo",
                descripciones: [
                   "El cuerpo también necesita reconocer que un nuevo ciclo comienza.",
                   "",
                    "Encender una vela, escribir nuestras intenciones, respirar profundamente o preparar un espacio sagrado nos ayuda a salir del ritmo automático y entrar en un estado de presencia.",
                    "",
                    "l cuerpo recuerda aquello que vivimos con intención."
                ]
            },
            {
                titulo: "✨ Alma",
                descripciones: [
                    "Cada comienzo trae consigo una energía de renovación.",
                    "El alma comprende que cada experiencia es una oportunidad para crecer.",
                    "Cuando abrimos nuestro corazón al nuevo mes con gratitud y confianza, nos permitimos caminar con mayor liviandad, sabiendo que todo aquello que llega tiene un propósito para nuestra evolución."
                ]
            }
        ],        
        preparacion_titulo: "Antes de comenzar",
        preparacion_subtitulo: "Prepará un espacio tranquilo.",
        preparacion_items: [
            "Podés colocar:",            
            "• Una vela blanca o dorada.",
            "• Un vaso con agua.",
            "• Incienso o sahumo.",
            "• Una flor fresca.",
            "• Un cuaderno.",
            "• Una lapicera.",
            "• Un cuarzo transparente o amatista (opcional).",
            "",
            "Respirá profundamente varias veces y disponete a vivir este momento con calma."
        ],
        paso_paso_titulo: "El Ritual",
        paso_paso: {
            titulo: "1. Encender la luz",
            descripciones: [
                'Encendé la vela diciendo:',
                '"Hoy abro las puertas a un nuevo mes lleno de oportunidades, aprendizajes y bendiciones.',
                'Que esta luz ilumine cada uno de mis pasos."'
            ],
            titulo: '2. Agradecer el ciclo que termina',
            descripciones: [
                'Antes de mirar hacia adelante, agradecé.',
                'Escribí tres cosas que el mes anterior te enseñó.',
                'Tres personas por las que sentís gratitud.',
                'Tres momentos que querés conservar en tu corazón.',
                'El agradecimiento abre espacio para recibir.'
            ],
            titulo: '3. Liberar',
            descripciones: [
                'Escribí aquello que decidís dejar atrás.',
                'Miedos.',
                'Preocupaciones.',
                'Culpas.',
                'Enojos.',
                'Creencias limitantes.',
                'Cuando termines, rompé el papel o quemalo de manera segura mientras repetís:',
                '"Honro lo vivido.',
                'Libero lo que ya cumplió su propósito.',
                'Elijo avanzar con el corazón liviano."'
            ],
            titulo: '4. Crear la intención del mes',
            descripciones: [
                'En una nueva hoja escribí:',
                'Mi palabra para este mes.',
                'Elegí una sola.',
                'Ejemplos:',
                'Confianza.',
                'Abundancia.',
                'Amor.',
                'Calma.',
                'Expansión.',
                'Disciplina.',
                'Alegría.',
                'Luego escribí cinco intenciones que acompañen esa palabra.'
            ], 
            titulo: '5. Visualizar',
            descripciones: [
                'Cerrá los ojos.',
                'Imaginá que ya estás viviendo el mes que deseás.',
                'Observá cómo caminás.',
                'Cómo hablás.',
                'Cómo resolvés los desafíos.',
                'Cómo disfrutás los pequeños momentos.',
                'Permitite sentir esa realidad.'
            ], 
            titulo: '6. Sellar el compromiso',
            descripciones: [
                'Colocá ambas manos sobre el corazón.',
                'Respirá profundamente.',
                'Decí:',
                '"Hoy comienzo este nuevo ciclo con confianza.',
                'Elijo pensamientos que construyen.',
                'Acciones que transforman.',
                'Y una actitud abierta para recibir todo aquello que contribuya a mi mayor bien.',
                'Confío en la vida.',
                'Confío en mi camino.',
                'Confío en mí."'
            ]
        },
        cierre_titulo: "Cierre del ritual",
        cierre_items: [
            'Guardá la hoja con tus intenciones en un lugar especial.',
            'Volvé a leerla al finalizar el mes.',
            'Observá cuánto creciste, cuánto aprendiste y todo aquello que floreció, incluso si no fue exactamente como lo habías imaginado.',
            'Cada mes deja una enseñanza.',
            'Cada nuevo comienzo trae una oportunidad.'
        ],
        afirmacion_titulo: "Afirmación Final",
        afimacion_items: [
            '"Recibo este nuevo mes con el corazón abierto.',
            'Mi mente elige pensamientos de paz y confianza.',
            'Mi cuerpo acompaña con acciones conscientes.',
            'Mi alma guía cada uno de mis pasos.',
            'Todo lo que necesito llegará en el momento perfecto.',
            'Hoy comienzo un nuevo ciclo lleno de posibilidades.',
            'Así es. Así será."'
        ],
        reflexion_titulo: "💜 Reflexión",
        reflexion_items: [
            'Los meses no cambian nuestra vida por sí solos.',
            'Lo que transforma nuestro camino es la decisión de vivir cada nuevo comienzo con presencia, gratitud y propósito.',
            'Que este ritual te recuerde que siempre existe una nueva oportunidad para elegir distinto, confiar más profundamente y construir la vida que anhela tu alma.',
            '',
            '"Cada nuevo mes es una página en blanco. No escribas desde el miedo ni desde la costumbre. Escribí desde la persona en la que te estás convirtiendo. Cuando la mente elige con claridad, el cuerpo actúa con coherencia y el alma guía el camino, cada comienzo se transforma en una oportunidad para florecer."'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: false,
        tiempo: "30 minutos",
        materiales: ["Vela blanca o dorada", "Agua", "Incienso o sahumo", "Flor fresca", "Cuaderno", "Lapicera", "Cuarzo transparente o amatista"]
    },
    
    ritual4: {
        id: "coleccion_1",
        titulo: "Colección 1",
        subtitulo: "Rituales del Alma",
        descripcion: "Reconectar con tu esencia y escuchar la voz de tu interior.",
        icono: Sprout,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Esta colección está pensada para quienes sienten la necesidad de detenerse, volver a sí mismos y recuperar la conexión con su mundo interior.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '🌑 Ritual de Luna Nueva',
            '🌕 Ritual de Luna Llena',
            '🌿 Ritual de Conexión con el Ser Interior',
            '✨ Ritual de Gratitud Profunda',
            '🙏 Ritual de Silencio y Escucha del Alma'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual5: {
        id: "coleccion_2",
        titulo: "Colección 2",
        subtitulo: "Rituales de Transformación",
        descripcion: "Para cerrar ciclos y abrir nuevos comienzos.",
        icono: Flame,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Ideal para momentos de cambio, decisiones importantes o procesos personales.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '🍂 Ritual para Soltar el Pasado',
            '🔥 Ritual para Transmutar el Dolor',
            '🕊 Ritual del Perdón',
            '🌈 Ritual para Abrir Nuevos Caminos',
            '🌱 Ritual de Renacimiento Personal'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual6: {
        id: "coleccion_3",
        titulo: "Colección 3",
        subtitulo: "Rituales para Sanar y Manifestar",
        descripcion: "Liberar lo viejo para crear una nueva realidad.",
        icono: Flower,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Pensada para quienes desean trabajar tanto la sanación emocional como la manifestación consciente.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '💰 Ritual de la Abundancia',
            '❤️ Ritual del Amor Propio',
            '🌟 Ritual para Manifestar Sueños',
            '🌺 Ritual para Elevar la Autoestima',
            '🌻 Ritual para Conectar con el Merecimiento'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual7: {
        id: "coleccion_4",
        titulo: "Colección 4",
        subtitulo: "Rituales Conscientes",
        descripcion: "Transformar lo cotidiano en una práctica de presencia.",
        icono: HeartHandshake,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Rituales simples para incorporar en la vida diaria.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '☀ Ritual para Comenzar el Día',
            '🌙 Ritual para Cerrar el Día',
            '🌬 Ritual de Respiración y Presencia',
            '📖 Ritual de Escritura Consciente',
            '🕯 Ritual Semanal de Limpieza Energética'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual8: {
        id: "coleccion_5",
        titulo: "Colección 5",
        subtitulo: "El Arte de Ritualizar la Vida",
        descripcion: "Convertir cada etapa en una ceremonia de crecimiento.",
        icono: MoonStar,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Esta colección invita a dar significado a los momentos importantes de la vida.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '🎂 Ritual de Cumpleaños',
            '🏡 Ritual para un Nuevo Hogar',
            '💍 Ritual para Bendecir una Relación',
            '👶 Ritual para Nuevos Comienzos',
            '🎓 Ritual para Iniciar un Proyecto'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual9: {
        id: "coleccion_6",
        titulo: "Colección 6",
        subtitulo: "Caminos del Alma",
        descripcion: "Sanar el origen para caminar livianos.",
        icono: TreeDeciduous,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Muy alineada con la filosofía de Raíces del Alma.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '🌹 Ritual para Sanar el Linaje Femenino',
            '🔥 Ritual para Sanar el Linaje Masculino',
            '👶 Ritual para Abrazar al Niño Interior',
            '🤲 Ritual para Honrar a los Ancestros',
            '💜 Ritual para Cortar Lazos Energéticos'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    },
    ritual10: {
        id: "coleccion_7",
        titulo: "Colección 7",
        subtitulo: "Rituales Sagrados para la Transformación Interior",
        descripcion: "Una experiencia completa de evolución personal.",
        icono: Star,
        introduccion_titulo: "",
        introduccion_subtitulo: "",
        introduccion : [
            'Sería tu colección más completa, integrando mente, cuerpo y alma.'
        ],
        importancia_titulo: "Incluye",
        importancia_subtitulo: "",
        importancia: [
            '🌑 Ritual de Luna Nueva',
            '🌕 Ritual de Luna Llena',
            '💰 Ritual de la Abundancia',
            '🌹 Ritual para Sanar el Linaje Femenino',
            '🔥 Ritual para Sanar el Linaje Masculino'
        ],
        images: [
            "/img/rituales/apertura_mes.jpg"
        ],
        mostrarBoton: true        
    }
};


// ✔
// ○
// •
// ❤
