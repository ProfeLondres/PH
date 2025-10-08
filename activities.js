// Actividades Verbales
const verbalActivities = [
    {
        title: "Cadena de Palabras",
        objetivo: "Desarrollar vocabulario y agilidad mental",
        materiales: "Ninguno",
        desarrollo: "Los estudiantes se sientan en círculo. El docente inicia con una palabra (ej: 'casa'). El siguiente estudiante debe decir una palabra que comience con la última letra ('a' → 'árbol'). Continúa la cadena. Si un estudiante no puede continuar en 10 segundos, sale del juego.",
        ejemplos: [
            "Casa → Árbol → León → Nube → Estrella → Agua",
            "Perro → Oso → Oveja → Abeja → Araña → Águila",
            "Mesa → Avión → Nieve → Elefante → Estrella → Agua",
            "Libro → Oso → Oveja → Abeja → Araña → Águila",
            "Gato → Oso → Oveja → Abeja → Araña → Águila",
            "Variante: Usar solo palabras de una categoría específica (animales, objetos, etc.)"
        ]
    },
    {
        title: "Sinónimos Rápidos",
        objetivo: "Ampliar vocabulario y comprensión semántica",
        materiales: "Lista de palabras, cronómetro",
        desarrollo: "El docente dice una palabra y los estudiantes levantan la mano para dar sinónimos. Cada sinónimo correcto vale 1 punto. Tiempo límite: 2 minutos por palabra.",
        ejemplos: [
            "Grande: enorme, gigante, inmenso, colosal, vasto",
            "Bonito: hermoso, bello, lindo, precioso, atractivo",
            "Rápido: veloz, ligero, acelerado, presto, ágil",
            "Triste: melancólico, deprimido, afligido, doliente, pesaroso",
            "Inteligente: listo, astuto, sagaz, brillante, perspicaz"
        ]
    },
    {
        title: "Historia Colaborativa",
        objetivo: "Desarrollar creatividad narrativa y coherencia textual",
        materiales: "Papel y lápiz (opcional)",
        desarrollo: "El primer estudiante dice una oración inicial. Cada estudiante siguiente añade una oración que continúe la historia lógicamente. La historia debe tener sentido y ser coherente.",
        ejemplos: [
            "En un bosque mágico vivía un dragón muy pequeño...",
            "María encontró una llave misteriosa en el jardín...",
            "El día que llegaron los extraterrestres a la escuela...",
            "En el fondo del océano había una ciudad perdida...",
            "El gato de la vecina tenía un secreto increíble..."
        ]
    },
    {
        title: "Rimas Express",
        objetivo: "Desarrollar conciencia fonológica y creatividad",
        materiales: "Lista de palabras base",
        desarrollo: "El docente dice una palabra y los estudiantes tienen 30 segundos para encontrar todas las palabras que rimen. Se pueden usar palabras reales o inventadas que suenen bien.",
        ejemplos: [
            "Amor: dolor, calor, temor, honor, rumor",
            "Casa: masa, pasa, tasa, grasa, escasa",
            "Corazón: canción, razón, pasión, ilusión, emoción",
            "Estrella: bella, huella, centella, querella, doncella",
            "Camino: destino, vecino, bambino, pepino, casino"
        ]
    },
    {
        title: "Categorías Verbales",
        objetivo: "Ampliar vocabulario temático y clasificación",
        materiales: "Lista de categorías",
        desarrollo: "Se anuncia una categoría y los estudiantes por turnos dicen palabras que pertenezcan a ella. No se puede repetir. Quien no pueda continuar en 10 segundos, pierde.",
        ejemplos: [
            "Animales: perro, gato, león, elefante, mariposa, águila",
            "Profesiones: médico, maestro, bombero, chef, piloto, artista",
            "Colores: rojo, azul, verde, amarillo, morado, naranja",
            "Deportes: fútbol, básquet, natación, tenis, atletismo, boxeo",
            "Frutas: manzana, banana, naranja, uva, fresa, piña"
        ]
    },
    {
        title: "Trabalenguas en Cadena",
        objetivo: "Mejorar pronunciación y fluidez verbal",
        materiales: "Lista de trabalenguas",
        desarrollo: "Cada estudiante dice un trabalenguas diferente. Los demás intentan repetirlo correctamente tres veces seguidas lo más rápido posible.",
        ejemplos: [
            "Tres tristes tigres tragaban trigo en un trigal",
            "Pablito clavó un clavito, ¿qué clavito clavó Pablito?",
            "El cielo está enladrillado, ¿quién lo desenladrillará?",
            "Compadre, cómpreme un coco. Compadre, no compro coco",
            "Pepe Pecas pica papas con un pico"
        ]
    },
    {
        title: "Antónimos Veloces",
        objetivo: "Desarrollar comprensión de conceptos opuestos",
        materiales: "Lista de palabras",
        desarrollo: "Similar a sinónimos, pero con palabras opuestas. El docente dice una palabra y los estudiantes dan antónimos rápidamente. Cada antónimo correcto vale 1 punto.",
        ejemplos: [
            "Alto: bajo, pequeño, corto, diminuto, enano",
            "Caliente: frío, helado, gélido, congelado, fresco",
            "Rápido: lento, pausado, despacio, tardío, calmado",
            "Feliz: triste, melancólico, deprimido, afligido, doliente",
            "Claro: oscuro, turbio, confuso, opaco, sombrío"
        ]
    },
    {
        title: "Descripción Misteriosa",
        objetivo: "Fortalecer habilidades descriptivas y comprensión auditiva",
        materiales: "Lista de objetos/conceptos",
        desarrollo: "Un estudiante describe un objeto sin nombrarlo, usando solo características físicas, función o contexto. Los demás adivinan qué es. Máximo 5 pistas.",
        ejemplos: [
            "Lápiz: Es alargado, de madera, tiene grafito, se usa para escribir, se puede borrar",
            "Refrigerador: Es grande, frío por dentro, guarda comida, tiene puerta, funciona con electricidad",
            "Libro: Tiene páginas, contiene palabras, se puede leer, tiene portada, se abre y cierra",
            "Bicicleta: Tiene dos ruedas, se pedalea, sirve para transportarse, tiene manubrio, no usa gasolina",
            "Teléfono: Sirve para comunicarse, tiene números, puede sonar, es portátil, tiene pantalla"
        ]
    },
    {
        title: "Palabras Encadenadas por Tema",
        objetivo: "Combinar vocabulario y categorización",
        materiales: "Lista de temas",
        desarrollo: "Como cadena de palabras normal, pero todas las palabras deben pertenecer al tema dado. La última letra de una palabra inicia la siguiente, manteniendo el tema.",
        ejemplos: [
            "Escuela: Aula → Alumno → Oso (mascota) → Oficina → Agenda",
            "Naturaleza: Árbol → Lago → Oso → Oruga → Abeja",
            "Cocina: Cuchara → Azúcar → Receta → Aceite → Estufa",
            "Deportes: Fútbol → Lanzamiento → Olimpiadas → Salto → Tenis",
            "Música: Guitarra → Armonía → Acordes → Sonido → Orquesta"
        ]
    },
    {
        title: "Completar Refranes",
        objetivo: "Fortalecer memoria cultural y sabiduría popular",
        materiales: "Lista de refranes populares",
        desarrollo: "El docente dice la primera parte de un refrán, los estudiantes completan la segunda parte. Se puede hacer individual o por equipos.",
        ejemplos: [
            "Más vale pájaro en mano... → que ciento volando",
            "No por mucho madrugar... → amanece más temprano",
            "A caballo regalado... → no se le mira el diente",
            "El que mucho abarca... → poco aprieta",
            "Agua que no has de beber... → déjala correr"
        ]
    },
    {
        title: "Palabras con Restricción",
        objetivo: "Desarrollar conciencia ortográfica y fonológica",
        materiales: "Lista de restricciones",
        desarrollo: "Los estudiantes deben decir palabras que cumplan una condición específica. Cada palabra correcta vale 1 punto. Tiempo límite: 3 minutos.",
        ejemplos: [
            "5 letras: casa, perro, libro, mesa, silla",
            "Empiecen con 'pr': problema, primo, prisa, precio, pregunta",
            "Terminen en 'ción': canción, emoción, atención, educación, información",
            "Tengan doble letra: carro, perro, lluvia, galleta, mamá",
            "Sin vocales 'a' ni 'o': este, tigre, verde,iente, uble"
        ]
    },
    {
        title: "Diálogos Improvisados",
        objetivo: "Mejorar expresión oral y espontaneidad",
        materiales: "Tarjetas con situaciones",
        desarrollo: "Dos estudiantes improvisan un diálogo de 2 minutos sobre la situación dada. Deben mantener el rol y la situación coherente.",
        ejemplos: [
            "En una tienda: vendedor y cliente comprando ropa",
            "En el médico: doctor y paciente con dolor de estómago",
            "En un restaurante: mesero y cliente pidiendo comida",
            "En la escuela: maestro y estudiante explicando tarea",
            "En casa: hermanos decidiendo qué ver en TV"
        ]
    },
    {
        title: "Acrósticos Rápidos",
        objetivo: "Estimular creatividad y vocabulario temático",
        materiales: "Palabras base y temas",
        desarrollo: "Con una palabra dada, crear un acróstico donde cada letra inicie una palabra relacionada al tema. Tiempo límite: 3 minutos.",
        ejemplos: [
            "AMOR (sentimientos): Alegría, Ternura, Cariño, Respeto",
            "CASA (hogar): Cocina, Sala, Dormitorio, Jardín",
            "ESCUELA (educación): Estudiantes, Salón, Cuadernos, Útiles, Exámenes, Libros, Aprendizaje",
            "NATURA (medio ambiente): Naturaleza, Árboles, Tierra, Universo, Ríos, Animales"
        ]
    },
    {
        title: "Cambio de Vocal",
        objetivo: "Desarrollar conciencia fonológica de manera lúdica",
        materiales: "Lista de palabras y vocales",
        desarrollo: "Cambiar todas las vocales de una palabra por una sola vocal específica. Los estudiantes deben pronunciar el resultado y adivinar la palabra original.",
        ejemplos: [
            "Casa → Cese (con 'e'), Casi (con 'i'), Coso (con 'o'), Cusu (con 'u')",
            "Perro → Parra (con 'a'), Pirri (con 'i'), Porro (con 'o'), Purru (con 'u')",
            "Libro → Labra (con 'a'), Lebra (con 'e'), Lobro (con 'o'), Lubru (con 'u')",
            "Mesa → Misa (con 'i'), Mosa (con 'o'), Musa (con 'u'), Masa (con 'a')"
        ]
    },
    {
        title: "Preguntas Encadenadas",
        objetivo: "Mejorar formulación de preguntas y coherencia",
        materiales: "Tema inicial",
        desarrollo: "Un estudiante hace una pregunta sobre el tema. Otro la responde y hace una nueva pregunta relacionada con la respuesta. Continúa la cadena manteniendo coherencia.",
        ejemplos: [
            "A: ¿Cuál es tu animal favorito?",
            "B: El león. ¿Por qué crees que es el rey de la selva?",
            "C: Por su fuerza. ¿Qué otros animales son muy fuertes?",
            "D: El elefante. ¿Dónde viven los elefantes?"
        ]
    },
    {
        title: "Palabras Compuestas",
        objetivo: "Desarrollar morfología y creatividad léxica",
        materiales: "Lista de palabras simples",
        desarrollo: "Crear palabras compuestas combinando dos palabras simples. Pueden ser reales o inventadas, pero deben tener sentido lógico.",
        ejemplos: [
            "Para + sol = Parasol",
            "Saca + puntas = Sacapuntas",
            "Rompe + cabezas = Rompecabezas",
            "Quita + manchas = Quitamanchas",
            "Come + libros = Comelibros (persona que lee mucho)",
            "Guarda + sueños = Guardasueños (almohada especial)"
        ]
    },
    {
        title: "Definiciones Creativas",
        objetivo: "Estimular creatividad y comprensión de significados",
        materiales: "Lista de palabras comunes",
        desarrollo: "Los estudiantes crean definiciones divertidas, poéticas o alternativas para palabras comunes, manteniendo cierta lógica.",
        ejemplos: [
            "Lápiz: Varita mágica que convierte pensamientos en líneas",
            "Lluvia: Lágrimas de alegría que llora el cielo",
            "Sonrisa: Arcoíris que se dibuja en el rostro",
            "Libro: Ventana portátil a mundos infinitos",
            "Abrazo: Medicina del alma que se da sin receta"
        ]
    },
    {
        title: "Onomatopeyas en Acción",
        objetivo: "Desarrollar expresividad y vocabulario sonoro",
        materiales: "Lista de sonidos/situaciones",
        desarrollo: "Un estudiante representa un sonido con onomatopeyas y gestos. Los demás adivinan qué lo produce. Se vale usar múltiples onomatopeyas.",
        ejemplos: [
            "Tormenta: ¡CRASH! ¡BOOM! ¡Pitter-patter! ¡WHOOSH!",
            "Cocina: ¡Sizzle! ¡Chop-chop! ¡Ding! ¡Bubble-bubble!",
            "Granja: ¡Moo! ¡Cluck-cluck! ¡Oink! ¡Neigh!",
            "Tráfico: ¡Beep-beep! ¡Vroom! ¡Screech! ¡Honk!",
            "Construcción: ¡Bang! ¡Drill-drill! ¡Clang! ¡Thud!"
        ]
    },
    {
        title: "Palabras Prohibidas",
        objetivo: "Ampliar vocabulario y habilidades explicativas",
        materiales: "Tarjetas con conceptos y palabras prohibidas",
        desarrollo: "Explicar un concepto sin usar las palabras 'prohibidas' relacionadas. Los demás adivinan el concepto.",
        ejemplos: [
            "Concepto: ESCUELA / Prohibidas: estudiar, maestro, alumno, clase",
            "Concepto: COCINA / Prohibidas: cocinar, comida, estufa, chef",
            "Concepto: HOSPITAL / Prohibidas: médico, enfermo, curar, medicina",
            "Concepto: BIBLIOTECA / Prohibidas: libro, leer, silencio, préstamo",
            "Concepto: PLAYA / Prohibidas: arena, mar, sol, vacaciones"
        ]
    },
    {
        title: "Rima y Razón",
        objetivo: "Combinar creatividad poética con coherencia semántica",
        materiales: "Temas o situaciones",
        desarrollo: "Crear oraciones que rimen y tengan sentido lógico sobre el tema dado. Pueden ser dos o más oraciones relacionadas.",
        ejemplos: [
            "Tema Amistad: Un amigo de verdad, siempre te dará su amistad",
            "Tema Naturaleza: El río canta su canción, llegando hasta el corazón",
            "Tema Escuela: En la clase de español, brilla como un gran farol",
            "Tema Familia: Mi mamá con gran amor, llena el hogar de calor",
            "Tema Deportes: El futbolista con destreza, muestra toda su agileza"
        ]
    },
    {
        title: "Telegrama Urgente",
        objetivo: "Desarrollar síntesis y precisión verbal",
        materiales: "Situaciones urgentes",
        desarrollo: "Escribir un mensaje muy corto (máximo 10 palabras) que comunique una idea completa y urgente sobre la situación dada.",
        ejemplos: [
            "Invitar a cumpleaños: Cumpleaños sábado 3pm casa. Ven celebrar conmigo. Confirma asistencia",
            "Avisar llegada tarde: Tráfico terrible. Llego 30 minutos tarde. Empiecen sin mí",
            "Pedir ayuda tarea: No entiendo matemáticas. ¿Puedes explicarme después clases? Urgente",
            "Cancelar cita: Enfermo hoy. Cancelamos cita médico. Reagendamos mañana temprano",
            "Felicitar logro: ¡Felicidades por ganar concurso! Muy orgulloso de ti"
        ]
    },
    {
        title: "Palabras Cruzadas Orales",
        objetivo: "Mejorar definición y deducción",
        materiales: "Lista de palabras con definiciones",
        desarrollo: "Un estudiante da pistas como en crucigrama para que otros adivinen palabras. Puede dar el número de letras y la primera letra.",
        ejemplos: [
            "Animal doméstico, 4 letras, empieza con G, dice miau (GATO)",
            "Fruta amarilla, 6 letras, empieza con P, los monos la comen (PLÁTANO)",
            "Vehículo, 5 letras, empieza con C, tiene 4 ruedas (CARRO)",
            "Deporte, 6 letras, empieza con F, se juega con los pies (FÚTBOL)",
            "Color, 4 letras, empieza con A, como el cielo (AZUL)"
        ]
    },
    {
        title: "Cambio de Registro",
        objetivo: "Desarrollar adaptación comunicativa",
        materiales: "Situaciones y registros",
        desarrollo: "Decir la misma idea en diferentes registros lingüísticos según la situación y el interlocutor.",
        ejemplos: [
            "Tengo hambre - Formal: Disculpe, me gustaría almorzar algo, por favor",
            "Tengo hambre - Informal: Oye, ¿hay algo de comer por ahí?",
            "Tengo hambre - Infantil: ¡Mami, tengo mucha hambre en la pancita!",
            "Tengo hambre - Técnico: Experimento una sensación de apetito considerable",
            "Tengo hambre - Poético: Mi estómago clama por alimento divino"
        ]
    },
    {
        title: "Palabras Inventadas",
        objetivo: "Estimular creatividad morfológica",
        materiales: "Prefijos, sufijos, raíces",
        desarrollo: "Crear palabras nuevas que suenen reales y explicar qué significarían. Deben seguir patrones del español.",
        ejemplos: [
            "Dormilango: persona que duerme mucho y lentamente",
            "Risómetro: aparato para medir la intensidad de la risa",
            "Abrazología: ciencia que estudia los diferentes tipos de abrazos",
            "Canturrear: cantar suavemente mientras se hace otra actividad",
            "Pensativo: adjetivo para algo que hace pensar mucho"
        ]
    },
    {
        title: "Secuencias Lógicas",
        objetivo: "Desarrollar sintaxis y coherencia",
        materiales: "Palabras desordenadas",
        desarrollo: "Ordenar palabras para formar oraciones con sentido lo más rápido posible. Se pueden formar varias oraciones diferentes.",
        ejemplos: [
            "Palabras: gato, el, jardín, duerme, en → El gato duerme en el jardín",
            "Palabras: niños, parque, juegan, los, felices → Los niños felices juegan en el parque",
            "Palabras: libro, interesante, María, lee, un → María lee un libro interesante",
            "Palabras: flores, hermosas, crecen, las, jardín → Las hermosas flores crecen en el jardín"
        ]
    },
    {
        title: "Familias de Palabras",
        objetivo: "Fortalecer morfología y derivación",
        materiales: "Palabras raíz",
        desarrollo: "Dada una palabra raíz, generar todas las palabras de su familia morfológica en 2 minutos.",
        ejemplos: [
            "PAN: panadero, panadería, empanada, panecillo, panificadora",
            "FLOR: florero, florería, florecer, florista, florecita",
            "AGUA: aguacero, aguado, desaguar, paraguas, aguacate",
            "LIBRO: librero, librería, libreta, libresco, librito",
            "CASA: casita, casero, caserón, casilla, casucha"
        ]
    },
    {
        title: "Debate Express",
        objetivo: "Desarrollar argumentación y expresión oral",
        materiales: "Temas polémicos simples",
        desarrollo: "Debate de 3 minutos sobre un tema. Cada estudiante tiene 30 segundos para dar un argumento. Se alternan posiciones a favor y en contra.",
        ejemplos: [
            "¿Es mejor leer libros físicos o digitales?",
            "¿Deberían los estudiantes usar uniforme escolar?",
            "¿Es mejor vivir en la ciudad o en el campo?",
            "¿Son mejores las mascotas grandes o pequeñas?",
            "¿Deberían prohibirse los videojuegos en días escolares?"
        ]
    },
    {
        title: "Palabras Escondidas",
        objetivo: "Mejorar análisis léxico y segmentación",
        materiales: "Palabras largas",
        desarrollo: "Encontrar palabras más pequeñas dentro de palabras grandes. Cada palabra encontrada vale 1 punto.",
        ejemplos: [
            "MARIPOSA: mar, rip, pos, osa, mari, posa, ripo",
            "ELEFANTE: ele, fan, ante, fante, lefa, el, te",
            "COMPUTADORA: com, put, adora, dora, tado, compu, ora",
            "REFRIGERADOR: re, fri, era, dor, ador, friger, rige",
            "BICICLETA: bi, cicle, eta, leta, ciclo, bici, cleta"
        ]
    },
    {
        title: "Contar sin Números",
        objetivo: "Desarrollar vocabulario numérico verbal",
        materiales: "Objetos para contar",
        desarrollo: "Contar objetos usando solo palabras ordinales, cardinales escritos, o expresiones equivalentes.",
        ejemplos: [
            "Cardinales: uno, dos, tres, cuatro, cinco, seis",
            "Ordinales: primero, segundo, tercero, cuarto, quinto, sexto",
            "Expresiones: un par, media docena, una decena, un puñado",
            "Fracciones: la mitad, un tercio, un cuarto, tres cuartos",
            "Colectivos: una pareja, un trío, un cuarteto, una docena"
        ]
    },
    {
        title: "Transformación de Oraciones",
        objetivo: "Fortalecer comprensión sintáctica",
        materiales: "Oraciones base y tipos de transformación",
        desarrollo: "Transformar oraciones según la instrucción dada manteniendo el sentido básico.",
        ejemplos: [
            "Afirmativa → Negativa: Juan come manzanas → Juan no come manzanas",
            "Pregunta → Afirmación: ¿Vienes mañana? → Vienes mañana",
            "Presente → Pasado: Estudio matemáticas → Estudié matemáticas",
            "Activa → Pasiva: El gato cazó el ratón → El ratón fue cazado por el gato",
            "Simple → Compuesta: Llueve → Llueve y hace frío"
        ]
    }
];

// Actividades Matemáticas
const mathActivities = [
    {
        title: "Cálculo Mental Rápido",
        objetivo: "Fortalecer agilidad en cálculo básico",
        materiales: "Lista de operaciones, cronómetro",
        desarrollo: "Series de 10 operaciones que los estudiantes resuelven mentalmente. Escriben solo la respuesta. Tiempo límite: 3 minutos.",
        ejemplos: [
            "Suma: 25+17, 34+28, 56+19, 43+37, 29+35",
            "Resta: 82-25, 67-29, 91-34, 75-28, 88-39",
            "Multiplicación: 7×8, 9×6, 8×7, 6×9, 7×9",
            "División: 56÷8, 72÷9, 64÷8, 81÷9, 49÷7",
            "Mixtas: 15+8, 23-7, 6×4, 35÷5, 19+6"
        ]
    },
    {
        title: "Secuencias Numéricas",
        objetivo: "Desarrollar reconocimiento de patrones",
        materiales: "Secuencias incompletas",
        desarrollo: "Completar secuencias numéricas identificando el patrón. Cada secuencia tiene 3 números faltantes.",
        ejemplos: [
            "Aritmética: 2, 4, 6, 8, __, __, __ (10, 12, 14)",
            "Geométrica: 3, 6, 12, 24, __, __, __ (48, 96, 192)",
            "Cuadrados: 1, 4, 9, 16, __, __, __ (25, 36, 49)",
            "Fibonacci: 1, 1, 2, 3, 5, __, __, __ (8, 13, 21)",
            "Alternada: 1, 4, 2, 5, 3, __, __, __ (6, 4, 7)"
        ]
    },
    {
        title: "Estimación Express",
        objetivo: "Desarrollar sentido numérico",
        materiales: "Objetos diversos, imágenes, problemas",
        desarrollo: "Estimar cantidades sin contar exactamente. Después verificar qué tan cerca estuvieron.",
        ejemplos: [
            "Objetos en un frasco: frijoles, canicas, clips",
            "Medidas: altura del salón, peso de la mochila, tiempo de actividad",
            "Resultados: 23×19≈, 847÷4≈, √64≈",
            "Cantidades: estudiantes en el patio, páginas del libro, días hasta vacaciones",
            "Distancias: metros hasta la puerta, kilómetros a casa"
        ]
    },
    {
        title: "Números Perdidos",
        objetivo: "Fortalecer pensamiento algebraico básico",
        materiales: "Ecuaciones con incógnitas",
        desarrollo: "Encontrar los números que faltan en las ecuaciones. Usar diferentes símbolos para las incógnitas.",
        ejemplos: [
            "5 + __ = 12 (respuesta: 7)",
            "__ - 8 = 15 (respuesta: 23)",
            "6 × __ = 42 (respuesta: 7)",
            "56 ÷ __ = 8 (respuesta: 7)",
            "__ + 9 = 3 × 7 (respuesta: 12)",
            "2 × __ - 5 = 11 (respuesta: 8)"
        ]
    },
    {
        title: "Geometría Rápida",
        objetivo: "Desarrollar percepción espacial",
        materiales: "Imágenes con figuras geométricas",
        desarrollo: "Identificar y contar figuras geométricas en imágenes complejas o composiciones.",
        ejemplos: [
            "Triángulos: en estrella de David, en casas dibujadas, en patrones",
            "Cuadrados: en cuadrículas, en edificios, en mosaicos",
            "Círculos: en flores, en ruedas, en patrones decorativos",
            "Rectángulos: en ventanas, en libros, en pantallas",
            "Hexágonos: en panales, en baldosas, en cristales",
            "Rombos: en cometas, en joyas, en patrones"
        ]
    },
    {
        title: "Múltiplos y Divisores",
        objetivo: "Fortalecer comprensión de divisibilidad",
        materiales: "Números base, tablas de multiplicar",
        desarrollo: "Identificar múltiplos o divisores de números dados en tiempo limitado.",
        ejemplos: [
            "Múltiplos de 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30",
            "Múltiplos de 7: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70",
            "Divisores de 24: 1, 2, 3, 4, 6, 8, 12, 24",
            "Divisores de 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
            "Múltiplos comunes de 4 y 6: 12, 24, 36, 48, 60",
            "Números divisibles por 5: 10, 15, 20, 25, 30, 35"
        ]
    },
    {
        title: "Fracciones Visuales",
        objetivo: "Desarrollar comprensión conceptual de fracciones",
        materiales: "Círculos, rectángulos, barras divididas",
        desarrollo: "Representar fracciones con dibujos o identificar fracciones en representaciones gráficas.",
        ejemplos: [
            "Círculos divididos: 1/2, 1/3, 1/4, 2/3, 3/4, 5/8",
            "Barras rectangulares: 2/5, 3/7, 4/9, 7/10, 5/6",
            "Conjuntos de objetos: 3/5 de 10 pelotas, 2/3 de 12 flores",
            "Fracciones equivalentes: 1/2 = 2/4 = 3/6 = 4/8",
            "Comparación: ¿Qué es mayor 2/3 o 3/4?",
            "Suma visual: 1/4 + 1/4 = 2/4 = 1/2"
        ]
    },
    {
        title: "Problemas de Lógica",
        objetivo: "Estimular pensamiento crítico",
        materiales: "Acertijos matemáticos",
        desarrollo: "Resolver acertijos que requieren razonamiento lógico más que cálculo directo.",
        ejemplos: [
            "Si 2 gatos cazan 2 ratones en 2 minutos, ¿cuántos gatos necesito para cazar 6 ratones en 6 minutos? (2 gatos)",
            "Tengo monedas de \$1 y \$2. Con 7 monedas hago \$10. ¿Cuántas de cada tipo tengo? (3 de \$1 y 4 de \$2)",
            "Un caracol sube 3m de día y baja 2m de noche. ¿En cuántos días sube un pozo de 10m? (8 días)",
            "¿Cuál es el siguiente número: 1, 4, 9, 16, 25, __? (36)",
            "Si hoy es martes, ¿qué día será en 100 días? (jueves)"
        ]
    },
    {
        title: "Medidas y Comparaciones",
        objetivo: "Desarrollar sentido de medición",
        materiales: "Objetos para medir, reglas, balanzas",
        desarrollo: "Comparar medidas usando estimación y equivalencias básicas.",
        ejemplos: [
            "Longitud: lápiz vs cuaderno, mesa vs pizarra, salón vs patio",
            "Peso: mochila vs libro, manzana vs naranja, moneda vs clip",
            "Capacidad: vaso vs botella, taza vs jarra, cuchara vs cucharón",
            "Tiempo: recreo vs clase, semana vs mes, año vs década",
            "Temperatura: agua fría vs tibia, verano vs invierno",
            "Equivalencias: 1m = 100cm, 1kg = 1000g, 1L = 1000ml"
        ]
    },
    {
        title: "Números en Palabras",
        objetivo: "Fortalecer comprensión del sistema decimal",
        materiales: "Números en cifras y palabras",
        desarrollo: "Convertir números entre cifras y palabras rápidamente.",
        ejemplos: [
            "Cifras a palabras: 47 → cuarenta y siete, 156 → ciento cincuenta y seis",
            "Palabras a cifras: doscientos tres → 203, mil quinientos → 1500",
            "Números grandes: 2,345 → dos mil trescientos cuarenta y cinco",
            "Decimales: 3.5 → tres punto cinco, 0.25 → cero punto veinticinco",
            "Ordinales: 5° → quinto, 12° → duodécimo",
            "Fracciones: 1/2 → un medio, 3/4 → tres cuartos"
        ]
    },
    {
        title: "Operaciones Inversas",
        objetivo: "Desarrollar comprensión de relaciones numéricas",
        materiales: "Operaciones básicas",
        desarrollo: "Dada una operación, encontrar la operación inversa correspondiente.",
        ejemplos: [
            "Si 8 + 5 = 13, entonces 13 - 5 = 8 y 13 - 8 = 5",
            "Si 7 × 6 = 42, entonces 42 ÷ 6 = 7 y 42 ÷ 7 = 6",
            "Si 25 - 9 = 16, entonces 16 + 9 = 25",
            "Si 48 ÷ 8 = 6, entonces 6 × 8 = 48",
            "Si 15 + x = 23, entonces 23 - 15 = x",
            "Si 4 × y = 28, entonces 28 ÷ 4 = y"
        ]
    },
    {
        title: "Patrones Geométricos",
        objetivo: "Combinar geometría con reconocimiento de patrones",
        materiales: "Secuencias de figuras",
        desarrollo: "Continuar secuencias de figuras geométricas identificando el patrón de cambio.",
        ejemplos: [
            "Rotación: triángulo apuntando arriba, derecha, abajo, izquierda...",
            "Tamaño: círculo pequeño, mediano, grande, pequeño...",
            "Color: cuadrado rojo, azul, verde, rojo, azul...",
            "Forma: círculo, triángulo, cuadrado, círculo, triángulo...",
            "Posición: estrella arriba-izquierda, arriba-derecha, abajo-derecha...",
            "Combinado: triángulo rojo grande, círculo azul pequeño, cuadrado verde mediano..."
        ]
    },
    {
        title: "Descomposición Numérica",
        objetivo: "Fortalecer comprensión del valor posicional",
        materiales: "Números de 2-4 cifras",
        desarrollo: "Descomponer números en diferentes formas según el valor posicional.",
        ejemplos: [
            "347 = 300 + 40 + 7 = 3×100 + 4×10 + 7×1",
            "1,256 = 1000 + 200 + 50 + 6 = 1×1000 + 2×100 + 5×10 + 6×1",
            "89 = 80 + 9 = 8×10 + 9×1 = 70 + 19 = 60 + 29",
            "205 = 200 + 5 = 2×100 + 0×10 + 5×1",
            "1,034 = 1000 + 30 + 4 = 1×1000 + 0×100 + 3×10 + 4×1",
            "Formas alternativas: 25 = 20+5 = 10+15 = 30-5"
        ]
    },
    {
        title: "Probabilidad Básica",
        objetivo: "Introducir conceptos probabilísticos",
        materiales: "Monedas, dados, cartas, bolsas con objetos",
        desarrollo: "Analizar situaciones simples de probabilidad y hacer predicciones.",
        ejemplos: [
            "Moneda: ¿Probabilidad de cara? (1/2 o 50%)",
            "Dado: ¿Probabilidad de sacar 6? (1/6), ¿número par? (3/6 = 1/2)",
            "Cartas: ¿Probabilidad de as? (4/52 = 1/13), ¿carta roja? (26/52 = 1/2)",
            "Bolsa: 3 rojas, 2 azules, ¿probabilidad de roja? (3/5)",
            "Ruleta: 8 secciones iguales, ¿probabilidad de cada una? (1/8)",
            "Eventos: ¿Más probable lluvia o sol mañana?"
        ]
    },
    {
        title: "Gráficos Express",
        objetivo: "Desarrollar habilidades de representación de datos",
        materiales: "Datos simples, papel cuadriculado",
        desarrollo: "Interpretar o crear gráficos simples con datos dados.",
        ejemplos: [
            "Mascotas favoritas: perros-8, gatos-5, peces-3, pájaros-2",
            "Colores preferidos: azul-7, rojo-6, verde-4, amarillo-3",
            "Deportes: fútbol-10, básquet-6, natación-4, tenis-2",
            "Estaciones: primavera-5, verano-8, otoño-3, invierno-4",
            "Materias: matemáticas-9, español-7, ciencias-5, arte-6",
            "Tipos de gráficos: barras, circular, líneas, pictogramas"
        ]
    },
    {
        title: "Tiempo y Calendario",
        objetivo: "Fortalecer comprensión temporal",
        materiales: "Relojes, calendarios",
        desarrollo: "Resolver problemas sobre horas, días, meses, duraciones.",
        ejemplos: [
            "Son las 2:30 PM, ¿qué hora será en 45 minutos? (3:15 PM)",
            "Si hoy es 15 de marzo, ¿qué fecha será en 12 días? (27 de marzo)",
            "Una película dura 1h 45min, empieza a las 7:20 PM, ¿cuándo termina? (9:05 PM)",
            "¿Cuántos días hay entre el 5 y el 18 del mismo mes? (13 días)",
            "Si mi cumpleaños es en 3 semanas y 2 días, ¿en cuántos días es? (23 días)",
            "¿Cuántas horas hay en una semana? (168 horas)"
        ]
    },
    {
        title: "Dinero y Cambio",
        objetivo: "Desarrollar matemática práctica",
        materiales: "Monedas y billetes de juguete, precios",
        desarrollo: "Calcular totales, cambios y equivalencias monetarias.",
        ejemplos: [
            "Compra: \$2.50 + \$1.75 + \$0.85 = \$5.10",
            "Cambio: pago \$10 por compra de \$7.25, cambio = \$2.75",
            "Equivalencias: 1 peso = 4 monedas de 25¢, 2 monedas de 50¢",
            "Descuentos: precio \$8, descuento 25%, precio final = \$6",
            "Propinas: cuenta \$15, propina 10% = \$1.50, total = \$16.50",
            "Ahorros: ahorro \$2 diarios, ¿cuánto en una semana? (\$14)"
        ]
    },
    {
        title: "Área y Perímetro",
        objetivo: "Fortalecer geometría aplicada",
        materiales: "Figuras geométricas con medidas",
        desarrollo: "Calcular área y perímetro de figuras simples.",
        ejemplos: [
            "Cuadrado 4×4: perímetro = 16, área = 16",
            "Rectángulo 6×3: perímetro = 18, área = 18",
            "Triángulo base=6, altura=4: área = 12",
            "Círculo radio=3: perímetro ≈ 18.84, área ≈ 28.26",
            "Figuras compuestas: L, T, escalón",
            "Problemas: ¿Cuánta cerca necesito para rodear un jardín de 8×5 metros?"
        ]
    },
    {
        title: "Números Primos",
        objetivo: "Desarrollar comprensión de factorización",
        materiales: "Lista de números, tabla de factores",
        desarrollo: "Identificar números primos y factorizar números compuestos.",
        ejemplos: [
            "Primos menores que 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
            "Factorización: 12 = 2×2×3, 18 = 2×3×3, 20 = 2×2×5",
            "¿Es primo?: 17 (sí), 21 (no, 3×7), 31 (sí), 35 (no, 5×7)",
            "Gemelos primos: (3,5), (5,7), (11,13), (17,19), (29,31)",
            "Criba de Eratóstenes: marcar múltiplos para encontrar primos",
            "Factores comunes: 12 y 18 tienen factores comunes 2 y 3"
        ]
    },
    {
        title: "Proporciones Simples",
        objetivo: "Introducir pensamiento proporcional",
        materiales: "Problemas de proporcionalidad",
        desarrollo: "Resolver problemas básicos de regla de tres simple.",
        ejemplos: [
            "Si 3 manzanas cuestan \$6, ¿cuánto cuestan 5 manzanas? (\$10)",
            "Un auto recorre 120 km en 2 horas, ¿cuánto en 3 horas? (180 km)",
            "Para 4 personas necesito 2 tazas de arroz, ¿para 6 personas? (3 tazas)",
            "Si 5 obreros terminan en 8 días, ¿cuánto tardan 10 obreros? (4 días)",
            "Una receta para 6 personas usa 3 huevos, ¿para 9 personas? (4.5 huevos)",
            "Escalas: En el mapa 2cm = 50km reales, ¿6cm = ? km (150km)"
        ]
    },
    {
        title: "Coordenadas Básicas",
        objetivo: "Desarrollar pensamiento espacial",
        materiales: "Plano cartesiano, cuadrícula",
        desarrollo: "Ubicar puntos y seguir instrucciones de movimiento en el plano.",
        ejemplos: [
            "Ubicar puntos: A(2,3), B(5,1), C(0,4), D(3,0)",
            "Movimientos: desde (2,1) ir 3 derecha, 2 arriba → (5,3)",
            "Distancias: de (1,1) a (4,5) = 5 unidades",
            "Figuras: triángulo con vértices (0,0), (3,0), (1,2)",
            "Simetría: reflejar (2,3) sobre eje x → (2,-3)",
            "Cuadrantes: identificar en qué cuadrante está cada punto"
        ]
    },
    {
        title: "Números Decimales",
        objetivo: "Fortalecer comprensión del sistema decimal extendido",
        materiales: "Números decimales, problemas",
        desarrollo: "Operaciones básicas y comparaciones con decimales.",
        ejemplos: [
            "Suma: 3.25 + 1.7 = 4.95, 0.8 + 2.45 = 3.25",
            "Resta: 5.6 - 2.3 = 3.3, 4.0 - 1.75 = 2.25",
            "Multiplicación: 2.5 × 3 = 7.5, 1.2 × 0.5 = 0.6",
            "División: 6.4 ÷ 2 = 3.2, 1.5 ÷ 0.3 = 5",
            "Comparación: 2.7 > 2.07, 0.5 = 0.50, 3.14 < 3.2",
            "Redondeo: 3.67 ≈ 3.7, 5.23 ≈ 5, 0.89 ≈ 0.9"
        ]
    },
    {
        title: "Estadística Básica",
        objetivo: "Introducir conceptos estadísticos",
        materiales: "Conjuntos de datos pequeños",
        desarrollo: "Calcular medidas de tendencia central con datos simples.",
        ejemplos: [
            "Edades: 8, 9, 8, 10, 9, 8, 11 → Media=9, Mediana=9, Moda=8",
            "Calificaciones: 7, 8, 9, 7, 10, 8, 9 → Media=8.3, Mediana=8, Moda=7,8,9",
            "Alturas (cm): 120, 125, 118, 130, 122 → Media=123, Mediana=122",
            "Mascotas por familia: 0, 1, 2, 1, 3, 1, 0 → Media=1.1, Mediana=1, Moda=1",
            "Temperatura diaria: 22°, 25°, 23°, 26°, 24° → Media=24°, Mediana=24°",
            "Rango: diferencia entre mayor y menor valor"
        ]
    },
    {
        title: "Ecuaciones Simples",
        objetivo: "Desarrollar pensamiento algebraico",
        materiales: "Ecuaciones de primer grado",
        desarrollo: "Resolver ecuaciones simples con una incógnita.",
        ejemplos: [
            "x + 5 = 12 → x = 7",
            "3x = 21 → x = 7",
            "x - 8 = 15 → x = 23",
            "2x + 3 = 11 → x = 4",
            "5x - 7 = 18 → x = 5",
            "x/4 = 6 → x = 24",
            "10 - x = 3 → x = 7",
            "3(x + 2) = 15 → x = 3"
        ]
    },
    {
        title: "Transformaciones Geométricas",
        objetivo: "Fortalecer comprensión espacial",
        materiales: "Figuras geométricas, papel cuadriculado",
        desarrollo: "Identificar y realizar transformaciones básicas.",
        ejemplos: [
            "Traslación: mover triángulo 3 unidades derecha, 2 arriba",
            "Rotación: girar cuadrado 90° en sentido horario",
            "Reflexión: reflejar figura sobre eje vertical u horizontal",
            "Ampliación: duplicar el tamaño de una figura",
            "Reducción: hacer figura mitad del tamaño original",
            "Combinadas: trasladar y luego rotar una figura"
        ]
    },
    {
        title: "Números Negativos",
        objetivo: "Ampliar comprensión numérica",
        materiales: "Recta numérica, termómetros",
        desarrollo: "Operaciones básicas con enteros positivos y negativos.",
        ejemplos: [
            "Suma: 5 + (-3) = 2, (-4) + 7 = 3, (-2) + (-5) = -7",
            "Resta: 8 - (-3) = 11, (-5) - 2 = -7, (-1) - (-4) = 3",
            "Multiplicación: 3 × (-4) = -12, (-2) × (-6) = 12",
            "División: (-15) ÷ 3 = -5, (-20) ÷ (-4) = 5",
            "Comparación: -3 < 2, -5 < -1, 0 > -4",
            "Aplicaciones: temperatura, elevación, deudas/ganancias"
        ]
    },
    {
        title: "Razones y Tasas",
        objetivo: "Desarrollar pensamiento proporcional aplicado",
        materiales: "Problemas de razones y tasas",
        desarrollo: "Resolver problemas con razones, tasas y velocidades.",
        ejemplos: [
            "Razón: En el salón hay 12 niños y 8 niñas, razón = 12:8 = 3:2",
            "Tasa: Leo 2 páginas en 5 minutos, tasa = 2/5 páginas por minuto",
            "Velocidad: Recorro 60 km en 1 hora, velocidad = 60 km/h",
            "Densidad: 20 estudiantes en 4 mesas, densidad = 5 estudiantes/mesa",
            "Precio unitario: \$12 por 3 kg, precio = \$4/kg",
            "Comparar tasas: ¿Qué es mejor: 3 por \$5 o 5 por \$8?"
        ]
    },
    {
        title: "Volumen y Capacidad",
        objetivo: "Fortalecer geometría tridimensional",
        materiales: "Figuras 3D, recipientes, fórmulas",
        desarrollo: "Calcular volúmenes y resolver problemas de capacidad.",
        ejemplos: [
            "Cubo 3×3×3: volumen = 27 unidades cúbicas",
            "Prisma rectangular 4×2×3: volumen = 24",
            "Cilindro radio=2, altura=5: volumen ≈ 62.8",
            "Capacidades: 1 litro = 1000 ml = 1000 cm³",
            "Problemas: ¿Cuántos vasos de 250ml lleno con 2 litros? (8 vasos)",
            "Comparación: ¿Qué contiene más: caja 5×4×3 o cilindro r=3, h=4?"
        ]
    },
    {
        title: "Números Romanos",
        objetivo: "Ampliar sistemas de numeración",
        materiales: "Tabla de equivalencias romanas",
        desarrollo: "Convertir entre números arábigos y romanos.",
        ejemplos: [
            "Básicos: I=1, V=5, X=10, L=50, C=100, D=500, M=1000",
            "Conversiones: 7=VII, 14=XIV, 23=XXIII, 49=XLIX, 94=XCIV",
            "Reglas: IV=4 (no IIII), IX=9, XL=40, XC=90, CD=400, CM=900",
            "Años: 2024=MMXXIV, 1999=MCMXCIX, 1776=MDCCLXXVI",
            "Operaciones simples: V + III = VIII, X - IV = VI",
            "Aplicaciones: relojes, capítulos de libros, siglos"
        ]
    },
    {
        title: "Pensamiento Crítico Matemático",
        objetivo: "Desarrollar razonamiento matemático crítico",
        materiales: "Afirmaciones matemáticas para analizar",
        desarrollo: "Analizar afirmaciones y determinar si son verdaderas o falsas con justificación.",
        ejemplos: [
            "Todos los números pares son divisibles por 4 (Falso: 6, 10, 14...)",
            "La suma de dos números impares es siempre par (Verdadero: impar+impar=par)",
            "Un triángulo puede tener dos ángulos rectos (Falso: suma sería >180°)",
            "0.5 es mayor que 0.05 (Verdadero: 0.5 > 0.05)",
            "El área de un cuadrado siempre es mayor que su perímetro (Falso: cuadrado 1×1)",
            "Si a > b, entonces a² > b² (Falso: si a=-1, b=-2, entonces a²<b²)"
        ]
    }
];