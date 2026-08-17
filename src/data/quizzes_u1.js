// quizzes_u1.js — 50 Reactivos de la Unidad 1: Espacios de Probabilidad y Combinatoria
// Norma NTE-UAN-APK-001 v1.4

export const QUIZZES_U1 = [
  {
    id: 1,
    pregunta: "¿Cuántas ordenaciones distintas de las letras de la palabra 'PROBABILIDAD' existen?",
    opciones: [
      "\\(11! = 39,916,800\\)",
      "\\(\\frac{11!}{2! \\cdot 2! \\cdot 2!} = 4,989,600\\)",
      "\\(\\frac{11!}{2! \\cdot 2!} = 9,979,200\\)",
      "\\(\\binom{11}{4} = 330\\)"
    ],
    correcta: 1,
    explicacion: "La palabra 'PROBABILIDAD' consta de 11 letras con repeticiones: 'B' se repite 2 veces, 'A' 2 veces y 'I' 2 veces. Aplicando la fórmula de permutaciones con repetición: \\(PR_{11}^{2,2,2} = \\frac{11!}{2! \\cdot 2! \\cdot 2!} = \\frac{39,916,800}{8} = 4,989,600\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 2,
    pregunta: "Si \\(P(A) = 0.6\\), \\(P(B) = 0.5\\) y \\(P(A \\cap B) = 0.3\\), ¿cuál es la probabilidad de que ocurra al menos uno de los dos eventos (\\(P(A \\cup B)\\))?",
    opciones: [
      "\\(1.1\\)",
      "\\(0.8\\)",
      "\\(0.3\\)",
      "\\(0.6\\)"
    ],
    correcta: 1,
    explicacion: "Por el Principio de Inclusión-Exclusión para dos eventos: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 3,
    pregunta: "¿Cuál de las siguientes afirmaciones define formalmente a una \\(\\sigma\\)-álgebra \\(\\mathcal{F}\\) sobre \\(\\Omega\\)?",
    opciones: [
      "Es una familia de conjuntos cerrada solo bajo uniones finitas e intersecciones finitas.",
      "Es una familia que contiene a \\(\\Omega\\), es cerrada bajo complementos y bajo uniones numerables.",
      "Es el conjunto potencia completo \\(\\mathcal{P}(\\Omega)\\) sin restricciones.",
      "Es cualquier colección de eventos independientes disjuntos."
    ],
    correcta: 1,
    explicacion: "Una \\(\\sigma\\)-álgebra sobre \\(\\Omega\\) satisface obligatoriamente tres axiomas: (1) \\(\\Omega \\in \\mathcal{F}\\), (2) Si \\(A \\in \\mathcal{F} \\implies A^c \\in \\mathcal{F}\\), y (3) Si \\(A_1, A_2, \\dots \\in \\mathcal{F}\\), entonces \\(\\bigcup_{i=1}^\\infty A_i \\in \\mathcal{F}\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 4,
    pregunta: "Si \\(A \\subseteq B\\), ¿cuál de las siguientes desigualdades y propiedades se deduce directamente de los axiomas de Kolmogórov?",
    opciones: [
      "\\(P(A) > P(B)\\)",
      "\\(P(B \\setminus A) = P(B) - P(A)\\) y \\(P(A) \\le P(B)\\)",
      "\\(P(A \\cap B) = 0\\)",
      "\\(P(A \\cup B) = P(A) + P(B)\\)"
    ],
    correcta: 1,
    explicacion: "Dado que \\(B = A \\cup (B \\setminus A)\\) con \\(A \\cap (B \\setminus A) = \\emptyset\\), por el axioma de aditividad \\(P(B) = P(A) + P(B \\setminus A)\\). Dado que \\(P(B \\setminus A) \\ge 0\\), se deduce que \\(P(A) \\le P(B)\\) y \\(P(B \\setminus A) = P(B) - P(A)\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 5,
    pregunta: "En el experimento de la aguja de Buffon con longitud \\(L = 3\\text{ cm}\\) y líneas separadas por \\(D = 6\\text{ cm}\\), ¿cuál es la probabilidad exacta de que la aguja cruce una línea?",
    opciones: [
      "\\(1/\\pi \\approx 0.3183\\)",
      "\\(2/\\pi \\approx 0.6366\\)",
      "\\(\\pi / 4 \\approx 0.7854\\)",
      "\\(1/2 = 0.5\\)"
    ],
    correcta: 0,
    explicacion: "La fórmula de Buffon para \\(L \\le D\\) es \\(P = \\frac{2L}{\\pi D}\\). Sustituyendo \\(L=3\\) y \\(D=6\\): \\(P = \\frac{2(3)}{\\pi(6)} = \\frac{6}{6\\pi} = \\frac{1}{\\pi} \\approx 0.3183\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 6,
    pregunta: "Se seleccionan al azar 3 cartas de una baraja estándar de 52 cartas sin reemplazo. ¿Cuál es la probabilidad de que las 3 cartas sean ases (hay 4 ases en total)?",
    opciones: [
      "\\(\\frac{\\binom{4}{3}}{\\binom{52}{3}} = \\frac{4}{22,100} = \\frac{1}{5,525}\\)",
      "\\(\\left(\\frac{4}{52}\\right)^3 = \\frac{1}{2,197}\\)",
      "\\(\\frac{3}{52}\\)",
      "\\(\\frac{4}{52} \\times \\frac{3}{52} \\times \\frac{2}{52}\\)"
    ],
    correcta: 0,
    explicacion: "El número de formas de elegir 3 ases de 4 es \\(\\binom{4}{3} = 4\\), y el total de combinaciones de 3 cartas es \\(\\binom{52}{3} = \\frac{52 \\times 51 \\times 50}{6} = 22,100\\). Por Laplace: \\(P = \\frac{4}{22,100} = \\frac{1}{5,525}\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 7,
    pregunta: "Por la Ley de De Morgan en teoría de conjuntos probabilística, el evento \\((A \\cup B)^c\\) es equivalente a:",
    opciones: [
      "\\(A^c \\cup B^c\\)",
      "\\(A^c \\cap B^c\\)",
      "\\(A \\cap B\\)",
      "\\(A^c \\setminus B^c\\)"
    ],
    correcta: 1,
    explicacion: "La ley de De Morgan establece formalmente que el complemento de la unión es la intersección de los complementos: \\((A \\cup B)^c = A^c \\cap B^c\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 8,
    pregunta: "¿Cuántos comités de 4 personas se pueden formar a partir de un grupo de 10 profesores donde el orden de elección no importa?",
    opciones: [
      "\\(V_4^{10} = 5,040\\)",
      "\\(\\binom{10}{4} = 210\\)",
      "\\(10^4 = 10,000\\)",
      "\\(4! = 24\\)"
    ],
    correcta: 1,
    explicacion: "Al no importar el orden ni haber reemplazo, se utilizan combinaciones simples: \\(\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 9,
    pregunta: "Dos personas acuerdan encontrarse en una cafetería entre las 12:00 y las 13:00 h. Cada una esperará 15 minutos (1/4 de hora) y luego se irá. ¿Cuál es la probabilidad geométrica de que se encuentren?",
    opciones: [
      "\\(1/4 = 0.25\\)",
      "\\(1 - (3/4)^2 = 7/16 = 0.4375\\)",
      "\\(1/2 = 0.50\\)",
      "\\(9/16 = 0.5625\\)"
    ],
    correcta: 1,
    explicacion: "Sea \\(\\Omega = [0, 1] \\times [0, 1]\\) con área 1. El evento de encuentro es \\(|x - y| \\le 1/4\\). El complemento (no encontrarse) consiste en dos triángulos de lados \\(3/4\\) cuya área sumada es \\(2 \\times \\frac{1}{2}(3/4)^2 = 9/16\\). Por ende, \\(P(\\text{encuentro}) = 1 - 9/16 = 7/16 = 0.4375\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "dificil",
  },
  {
    id: 10,
    pregunta: "Si se lanzan 2 dados equilibrados de 6 caras, ¿cuál es la probabilidad de que la suma sea un número primo?",
    opciones: [
      "\\(15/36 = 5/12\\)",
      "\\(18/36 = 1/2\\)",
      "\\(12/36 = 1/3\\)",
      "\\(14/36 = 7/18\\)"
    ],
    correcta: 0,
    explicacion: "Las sumas primas posibles entre 2 y 12 son {2, 3, 5, 7, 11}. Casos favorables: suma 2 (1), suma 3 (2), suma 5 (4), suma 7 (6), suma 11 (2). Total casos favorables = 1 + 2 + 4 + 6 + 2 = 15. Espacio muestral = 36. Por tanto, \\(P = 15/36 = 5/12 \\approx 0.4167\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 11,
    pregunta: "La desigualdad de Boole (subaditividad finita) establece que para cualquier colección finita de eventos \\(A_1, \\dots, A_n\\):",
    opciones: [
      "\\(P(\\bigcup_{i=1}^n A_i) = \\sum_{i=1}^n P(A_i)\\)",
      "\\(P(\\bigcup_{i=1}^n A_i) \\le \\sum_{i=1}^n P(A_i)\\)",
      "\\(P(\\bigcap_{i=1}^n A_i) \\ge \\prod_{i=1}^n P(A_i)\\)",
      "\\(P(\\bigcup_{i=1}^n A_i) \\ge 1 - \\sum_{i=1}^n P(A_i)\\)"
    ],
    correcta: 1,
    explicacion: "La subaditividad de la medida de probabilidad (desigualdad de Boole) garantiza que la probabilidad de la unión no puede superar la suma de las probabilidades individuales: \\(P(\\bigcup_{i=1}^n A_i) \\le \\sum_{i=1}^n P(A_i)\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 12,
    pregunta: "¿De cuántas formas pueden sentarse 6 personas en una mesa redonda considerando únicamente sus posiciones relativas?",
    opciones: [
      "\\(6! = 720\\)",
      "\\((6-1)! = 120\\)",
      "\\(6^2 = 36\\)",
      "\\(\\frac{6!}{2} = 360\\)"
    ],
    correcta: 1,
    explicacion: "Para permutaciones circulares donde la rotación no genera una nueva configuración, se fija un elemento de referencia: \\(PC_n = (n-1)! = (6-1)! = 5! = 120\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 13,
    pregunta: "¿Cuál es el principio fundamental que distingue la axiomática de Kolmogórov (1933) de las definiciones clásica y frecuentista previas?",
    opciones: [
      "Que solo es aplicable a espacios muestrales finitos y simétricos.",
      "Que define la probabilidad como una medida sobre una sigma-álgebra de subconjuntos, independizándola de interpretaciones físicas empíricas.",
      "Que rechaza el uso de límites en sucesiones infinitas de eventos.",
      "Que exige que todos los eventos elementales tengan la misma probabilidad."
    ],
    correcta: 1,
    explicacion: "Kolmogórov fundamentó la probabilidad rigurosamente dentro de la teoría de la medida de Lebesgue y la teoría de conjuntos, tratando la probabilidad \\(P\\) como una función de medida normalizada sobre una \\(\\sigma\\)-álgebra \\(\\mathcal{F}\\), unificando casos discretos y continuos.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 14,
    pregunta: "¿Cuántos subconjuntos contiene el conjunto potencia \\(\\mathcal{P}(\\Omega)\\) si \\(\\Omega\\) tiene cardinalidad \\(n = 5\\)?",
    opciones: [
      "\\(5! = 120\\)",
      "\\(2^5 = 32\\)",
      "\\(5^2 = 25\\)",
      "\\(\\binom{5}{2} = 10\\)"
    ],
    correcta: 1,
    explicacion: "Para un conjunto finito de \\(n\\) elementos, el número total de subconjuntos posibles (álgebra de eventos máxima) es \\(|\\mathcal{P}(\\Omega)| = 2^n = 2^5 = 32\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 15,
    pregunta: "Si se lanzan 3 monedas justas, ¿cuál es la probabilidad de obtener exactamente 2 caras?",
    opciones: [
      "\\(1/8\\)",
      "\\(3/8 = 0.375\\)",
      "\\(1/2 = 0.5\\)",
      "\\(2/3\\)"
    ],
    correcta: 1,
    explicacion: "El espacio muestral consta de \\(2^3 = 8\\) resultados equiprobables. Las combinaciones con exactamente 2 caras son {CCS, CSC, SCC}, en total \\(\\binom{3}{2} = 3\\). Por Laplace: \\(P = 3/8 = 0.375\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 16,
    pregunta: "¿Cuál es el valor del coeficiente binomial \\(\\binom{8}{3}\\)?",
    opciones: [
      "\\(24\\)",
      "\\(56\\)",
      "\\(336\\)",
      "\\(120\\)"
    ],
    correcta: 1,
    explicacion: "\\(\\binom{8}{3} = \\frac{8!}{3!(8-3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 17,
    pregunta: "Por el principio de aditividad finita, si \\(A\\) y \\(B\\) son eventos mutuamente excluyentes (\\(A \\cap B = \\emptyset\\)), entonces \\(P(A \\cup B)\\) es:",
    opciones: [
      "\\(P(A) \\cdot P(B)\\)",
      "\\(P(A) + P(B)\\)",
      "\\(P(A) + P(B) - P(A \\cap B)\\)",
      "\\(1 - P(A)P(B)\\)"
    ],
    correcta: 1,
    explicacion: "El tercer axioma de Kolmogórov establece directamente que para eventos disjuntos, la probabilidad de la unión es la suma simple de sus probabilidades: \\(P(A \\cup B) = P(A) + P(B)\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 18,
    pregunta: "Se extraen 2 canicas simultáneamente de una urna con 5 canicas rojas y 3 azules. ¿Cuál es la probabilidad de que ambas sean rojas?",
    opciones: [
      "\\(\\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28} = \\frac{5}{14}\\)",
      "\\(\\frac{5}{8} \\times \\frac{5}{8} = \\frac{25}{64}\\)",
      "\\(\\frac{5}{8}\\)",
      "\\(\\frac{10}{64}\\)"
    ],
    correcta: 0,
    explicacion: "Casos favorables para 2 rojas: \\(\\binom{5}{2} = 10\\). Total de combinaciones posibles: \\(\\binom{8}{2} = 28\\). Por Laplace: \\(P = 10/28 = 5/14 \\approx 0.3571\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 19,
    pregunta: "¿Cuál es la probabilidad de que al elegir aleatoriamente un número del 1 al 100, éste sea divisible entre 3 o entre 5?",
    opciones: [
      "\\(0.53\\)",
      "\\(0.47\\)",
      "\\(0.33\\)",
      "\\(0.20\\)"
    ],
    correcta: 1,
    explicacion: "Divisibles entre 3: \\(\\lfloor 100/3 \\rfloor = 33\\). Divisibles entre 5: \\(\\lfloor 100/5 \\rfloor = 20\\). Divisibles entre ambos (15): \\(\\lfloor 100/15 \\rfloor = 6\\). Por Inclusión-Exclusión: \\(|A \\cup B| = 33 + 20 - 6 = 47\\). Probabilidad = \\(47/100 = 0.47\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 20,
    pregunta: "La Desigualdad de Bonferroni para dos eventos establece que \\(P(A \\cap B) \\ge\\):",
    opciones: [
      "\\(P(A)P(B)\\)",
      "\\(P(A) + P(B) - 1\\)",
      "\\(1 - P(A) - P(B)\\)",
      "\\(P(A \\cup B) - P(A)\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\le 1\\), despejando se obtiene la cota inferior de Bonferroni: \\(P(A \\cap B) \\ge P(A) + P(B) - 1\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 21,
    pregunta: "Si una moneda cargada tiene probabilidad \\(P(\\text{Cara}) = 2/3\\), ¿cuál es la probabilidad de obtener exactamente 3 sellos en 3 lanzamientos independientes?",
    opciones: [
      "\\((1/3)^3 = 1/27\\)",
      "\\((2/3)^3 = 8/27\\)",
      "\\(3/27\\)",
      "\\(1/3\\)"
    ],
    correcta: 0,
    explicacion: "La probabilidad de sello en cada tiro es \\(P(S) = 1 - 2/3 = 1/3\\). En 3 tiros independientes: \\(P(SSS) = (1/3)^3 = 1/27 \\approx 0.0370\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 22,
    pregunta: "¿Cuántas placas de automóvil se pueden formar con 3 letras seguidas de 3 dígitos, si se usan 26 letras y 10 dígitos con repetición permitida?",
    opciones: [
      "\\(26 \\times 25 \\times 24 \\times 10 \\times 9 \\times 8 = 11,232,000\\)",
      "\\(26^3 \\times 10^3 = 17,576,000\\)",
      "\\(\\binom{26}{3} \\times \\binom{10}{3} = 312,000\\)",
      "\\(26! \\times 10!\\)"
    ],
    correcta: 1,
    explicacion: "Por el Principio Multiplicativo con reemplazo: \\(26 \\times 26 \\times 26 \\times 10 \\times 10 \\times 10 = 26^3 \\times 10^3 = 17,576,000\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 23,
    pregunta: "¿Cuál es la propiedad de continuidad inferior de una medida de probabilidad si \\(A_1 \\subseteq A_2 \\subseteq A_3 \\subseteq \\dots\\) con \\(A = \\bigcup_{n=1}^\\infty A_n\\)?",
    opciones: [
      "\\(\\lim_{n \\to \\infty} P(A_n) = 1\\)",
      "\\(\\lim_{n \\to \\infty} P(A_n) = P(A)\\)",
      "\\(\\sum_{n=1}^\\infty P(A_n) = P(A)\\)",
      "\\(P(A_n) = P(A) / n\\)"
    ],
    correcta: 1,
    explicacion: "La continuidad por la izquierda (o continuidad desde abajo) de una medida de probabilidad establece que para cualquier sucesión monótona creciente de eventos \\(A_n \\uparrow A\\), se cumple \\(\\lim_{n \\to \\infty} P(A_n) = P(A)\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 24,
    pregunta: "En una circunferencia de radio \\(R\\), se elige un punto al azar en su interior. ¿Cuál es la probabilidad de que su distancia al centro sea menor o igual a \\(R/2\\)?",
    opciones: [
      "\\(1/2 = 0.5\\)",
      "\\(1/4 = 0.25\\)",
      "\\(1/8 = 0.125\\)",
      "\\(\\pi / 4\\)"
    ],
    correcta: 1,
    explicacion: "Por probabilidad geométrica: \\(P = \\frac{\\text{Área}(r \\le R/2)}{\\text{Área Total}} = \\frac{\\pi (R/2)^2}{\\pi R^2} = \\frac{\\pi R^2 / 4}{\\pi R^2} = \\frac{1}{4} = 0.25\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 25,
    pregunta: "La paradoja de Bertrand en probabilidad geométrica demuestra que:",
    opciones: [
      "La probabilidad de eventos continuos siempre es cero.",
      "El cálculo de probabilidades en espacios continuos infinitos depende fundamentalmente de la definición del método de selección aleatoria (medida de probabilidad subyacente).",
      "Los axiomas de Kolmogórov fallan en geometría euclidiana.",
      "La regla de Laplace no es válida para más de 10 elementos."
    ],
    correcta: 1,
    explicacion: "La paradoja de Bertrand (1889) ilustra que la frase 'elegir una cuerda al azar' es ambigua y arroja respuestas distintas (1/4, 1/3, 1/2) según el mecanismo de generación probabilística utilizado.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 26,
    pregunta: "¿Cuántas formas hay de ordenar 5 libros de matemáticas y 3 de física en un estante si los de la misma materia deben estar juntos?",
    opciones: [
      "\\(8! = 40,320\\)",
      "\\(2! \\times 5! \\times 3! = 1,440\\)",
      "\\(5! \\times 3! = 720\\)",
      "\\(\\binom{8}{3} = 56\\)"
    ],
    correcta: 1,
    explicacion: "Hay 2 formas de ordenar los bloques de materias (Mat-Fis o Fis-Mat), \\(5!\\) formas de ordenar los de matemáticas y \\(3!\\) formas para los de física: \\(2! \\times 5! \\times 3! = 2 \\times 120 \\times 6 = 1,440\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 27,
    pregunta: "Si \\(P(A) = 0.7\\), ¿cuál es la probabilidad de su complemento \\(P(A^c)\\)?",
    opciones: [
      "\\(0.7\\)",
      "\\(0.3\\)",
      "\\(-0.7\\)",
      "\\(1.3\\)"
    ],
    correcta: 1,
    explicacion: "Por el axioma de normalización y aditividad: \\(P(A^c) = 1 - P(A) = 1 - 0.7 = 0.3\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 28,
    pregunta: "¿Cuál es el valor de \\(0!\\) por definición matemática en combinatoria?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\infty\\)",
      "Indefinido"
    ],
    correcta: 1,
    explicacion: "Por definición para preservar la recurrencia \\(n! = n \\times (n-1)!\\) y la fórmula de combinaciones, \\(0! = 1\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 29,
    pregunta: "Un candado de combinación tiene 4 discos con dígitos del 0 al 9. ¿Cuántas combinaciones posibles existen?",
    opciones: [
      "\\(40\\)",
      "\\(10,000\\)",
      "\\(5,040\\)",
      "\\(6,561\\)"
    ],
    correcta: 1,
    explicacion: "Con reemplazo para 4 posiciones y 10 dígitos: \\(10^4 = 10,000\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 30,
    pregunta: "Si \\(A\\) y \\(B\\) son eventos tales que \\(P(A) = 0.4\\), \\(P(B) = 0.3\\) y \\(P(A \\cup B) = 0.7\\), se puede concluir que:",
    opciones: [
      "\\(A\\) y \\(B\\) son mutuamente excluyentes (disjuntos).",
      "\\(A\\) y \\(B\\) son independientes.",
      "\\(A \\subseteq B\\).",
      "\\(P(A \\cap B) = 0.1\\)."
    ],
    correcta: 0,
    explicacion: "Como \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\implies 0.7 = 0.4 + 0.3 - P(A \\cap B) \\implies P(A \\cap B) = 0\\), los eventos son disjuntos (mutuamente excluyentes).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 31,
    pregunta: "En una carrera de 8 atletas, ¿de cuántas formas se pueden otorgar las medallas de oro, plata y bronce (primeros 3 lugares)?",
    opciones: [
      "\\(\\binom{8}{3} = 56\\)",
      "\\(V_3^8 = 8 \\times 7 \\times 6 = 336\\)",
      "\\(8^3 = 512\\)",
      "\\(3! = 6\\)"
    ],
    correcta: 1,
    explicacion: "Al importar el orden de las medallas sin repetición, se calculan variaciones: \\(P(8, 3) = \\frac{8!}{(8-3)!} = 8 \\times 7 \\times 6 = 336\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 32,
    pregunta: "Si \\(\\Omega = \\mathbb{R}\\), la \\(\\sigma\\)-álgebra de Borel \\(\\mathcal{B}(\\mathbb{R})\\) se genera a partir de:",
    opciones: [
      "Todos los conjuntos finitos de números enteros.",
      "Todos los intervalos abiertos \\((a, b)\\) de la recta real.",
      "Únicamente los números racionales \\(\\mathbb{Q}\\).",
      "El conjunto de Cantor exclusivamente."
    ],
    correcta: 1,
    explicacion: "La \\(\\sigma\\)-álgebra de Borel sobre \\(\\mathbb{R}\\) es la menor \\(\\sigma\\)-álgebra que contiene a todos los intervalos abiertos \\((a, b)\\) con \\(a, b \\in \\mathbb{R}\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 33,
    pregunta: "Se arroja un dardo a un blanco circular de radio 10 cm con un centro concéntrico (diana) de radio 2 cm. Si el dardo impacta en el blanco con certeza, ¿cuál es la probabilidad de acertar en la diana?",
    opciones: [
      "\\(2/10 = 0.20\\)",
      "\\(4/100 = 0.04\\)",
      "\\(1/25 = 0.04\\)",
      "\\(2/25 = 0.08\\)"
    ],
    correcta: 1,
    explicacion: "Por probabilidad geométrica: \\(P = \\frac{\\pi (2)^2}{\\pi (10)^2} = \\frac{4\\pi}{100\\pi} = \\frac{4}{100} = 0.04\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 34,
    pregunta: "¿Cuántos términos distintos contiene el desarrollo del binomio \\((x + y + z)^{10}\\)?",
    opciones: [
      "\\(11\\)",
      "\\(\\binom{10+3-1}{10} = \\binom{12}{2} = 66\\)",
      "\\(3^{10} = 59,049\\)",
      "\\(10! = 3,628,800\\)"
    ],
    correcta: 1,
    explicacion: "El número de términos en un polinomio multinomial de \\(k\\) variables elevado a la \\(n\\) viene dado por combinaciones con repetición: \\(\\binom{n+k-1}{n} = \\binom{10+3-1}{10} = \\binom{12}{2} = 66\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 35,
    pregunta: "Si \\(P(A \\setminus B) = 0.25\\) y \\(P(A \\cap B) = 0.15\\), ¿cuál es la probabilidad total \\(P(A)\\)?",
    opciones: [
      "\\(0.10\\)",
      "\\(0.40\\)",
      "\\(0.25\\)",
      "\\(0.35\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(A = (A \\setminus B) \\cup (A \\cap B)\\) de manera disjunta, \\(P(A) = P(A \\setminus B) + P(A \\cap B) = 0.25 + 0.15 = 0.40\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 36,
    pregunta: "¿Cuántas cadenas de bits de longitud 8 contienen exactamente 3 unos?",
    opciones: [
      "\\(24\\)",
      "\\(\\binom{8}{3} = 56\\)",
      "\\(2^8 = 256\\)",
      "\\(8^3 = 512\\)"
    ],
    correcta: 1,
    explicacion: "Elegir las 3 posiciones de los unos entre las 8 disponibles es \\(\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 37,
    pregunta: "La probabilidad del evento imposible \\(\\emptyset\\) según los axiomas de Kolmogórov es exactamente:",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "Infinitamente pequeña pero positiva",
      "No está definida"
    ],
    correcta: 0,
    explicacion: "Como \\(\\Omega = \\Omega \\cup \\emptyset\\) con \\(\\Omega \\cap \\emptyset = \\emptyset\\), \\(P(\\Omega) = P(\\Omega) + P(\\emptyset) \\implies 1 = 1 + P(\\emptyset) \\implies P(\\emptyset) = 0\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 38,
    pregunta: "¿Cuántos números de 3 cifras distintas se pueden formar con los dígitos {1, 2, 3, 4, 5}?",
    opciones: [
      "\\(5^3 = 125\\)",
      "\\(5 \\times 4 \\times 3 = 60\\)",
      "\\(\\binom{5}{3} = 10\\)",
      "\\(3! = 6\\)"
    ],
    correcta: 1,
    explicacion: "Al ser dígitos distintos importa el orden sin repetición: \\(5 \\times 4 \\times 3 = 60\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 39,
    pregunta: "Si se lanzan 2 dados justos, ¿cuál es la probabilidad de que la suma sea mayor o igual a 10?",
    opciones: [
      "\\(6/36 = 1/6\\)",
      "\\(1/12\\)",
      "\\(1/4\\)",
      "\\(5/36\\)"
    ],
    correcta: 0,
    explicacion: "Casos favorables: suma 10 {(4,6), (5,5), (6,4)}, suma 11 {(5,6), (6,5)}, suma 12 {(6,6)}. Total = 3 + 2 + 1 = 6. \\(P = 6/36 = 1/6 \\approx 0.1667\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 40,
    pregunta: "En una reunión de 6 personas, todas se saludan de mano exactamente una vez entre sí. ¿Cuántos apretones de mano se intercambian en total?",
    opciones: [
      "\\(36\\)",
      "\\(\\binom{6}{2} = 15\\)",
      "\\(30\\)",
      "\\(12\\)"
    ],
    correcta: 1,
    explicacion: "Cada apretón involucra a 2 personas sin importar el orden: \\(\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 41,
    pregunta: "¿Cuál es la fórmula general del Principio de Inclusión-Exclusión para 3 eventos \\(A, B, C\\)?",
    opciones: [
      "\\(P(A) + P(B) + P(C)\\)",
      "\\(P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)\\)",
      "\\(P(A) + P(B) + P(C) - P(ABC)\\)",
      "\\(P(A)P(B)P(C)\\)"
    ],
    correcta: 1,
    explicacion: "La fórmula de Poincaré (Inclusión-Exclusión) para 3 eventos suma las probabilidades individuales, resta las intersecciones dobles para evitar doble conteo y suma la intersección triple que fue restada de más.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 42,
    pregunta: "¿De cuántas formas se pueden repartir 10 dulces idénticos entre 3 niños si cada niño puede recibir cualquier cantidad (incluso cero)?",
    opciones: [
      "\\(10^3 = 1,000\\)",
      "\\(\\binom{10+3-1}{10} = \\binom{12}{2} = 66\\)",
      "\\(\\binom{10}{3} = 120\\)",
      "\\(30\\)"
    ],
    correcta: 1,
    explicacion: "Por el método de estrellas y barras (combinaciones con repetición): \\(\\binom{n+k-1}{n} = \\binom{10+3-1}{10} = \\binom{12}{2} = 66\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 43,
    pregunta: "Si \\(P(A) = 0.5\\), \\(P(B) = 0.4\\) y \\(A \\cap B = \\emptyset\\), ¿cuánto vale \\(P(A^c \\cap B^c)\\)?",
    opciones: [
      "\\(0.20\\)",
      "\\(0.10\\)",
      "\\(0.90\\)",
      "\\(0.50\\)"
    ],
    correcta: 1,
    explicacion: "Por De Morgan: \\(A^c \\cap B^c = (A \\cup B)^c\\). Como son disjuntos, \\(P(A \\cup B) = 0.5 + 0.4 = 0.9\\). Por ende, \\(P((A \\cup B)^c) = 1 - 0.9 = 0.10\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 44,
    pregunta: "Se elige un punto al azar en el intervalo real \\([0, 10]\\). ¿Cuál es la probabilidad de que pertenezca al subintervalo \\([2, 7]\\)?",
    opciones: [
      "\\(5/10 = 0.5\\)",
      "\\(7/10 = 0.7\\)",
      "\\(2/10 = 0.2\\)",
      "\\(1/10 = 0.1\\)"
    ],
    correcta: 0,
    explicacion: "Por medida de Lebesgue unidimensional (longitud): \\(P = \\frac{\\text{Longitud}([2, 7])}{\\text{Longitud}([0, 10])} = \\frac{7-2}{10-0} = \\frac{5}{10} = 0.5\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 45,
    pregunta: "¿Cuántas diagonales tiene un polígono regular convexo de 8 lados (octágono)?",
    opciones: [
      "\\(\\binom{8}{2} - 8 = 28 - 8 = 20\\)",
      "\\(28\\)",
      "\\(8! = 40,320\\)",
      "\\(16\\)"
    ],
    correcta: 0,
    explicacion: "El número total de segmentos que unen 8 vértices es \\(\\binom{8}{2} = 28\\). Restando los 8 lados perimetrales del polígono: \\(28 - 8 = 20\\) diagonales.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 46,
    pregunta: "Si \\(P(A \\Delta B) = 0.6\\) y \\(P(A \\cap B) = 0.2\\), ¿cuál es la probabilidad de la unión \\(P(A \\cup B)\\)?",
    opciones: [
      "\\(0.4\\)",
      "\\(0.8\\)",
      "\\(0.6\\)",
      "\\(1.0\\)"
    ],
    correcta: 1,
    explicacion: "Dado que \\(A \\cup B = (A \\Delta B) \\cup (A \\cap B)\\) de manera disjunta, \\(P(A \\cup B) = P(A \\Delta B) + P(A \\cap B) = 0.6 + 0.2 = 0.8\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 47,
    pregunta: "¿Cuántas palabras distintas (con o sin sentido) se pueden formar permutando las letras de la palabra 'MAMA'?",
    opciones: [
      "\\(4! = 24\\)",
      "\\(\\frac{4!}{2! 2!} = 6\\)",
      "\\(12\\)",
      "\\(4\\)"
    ],
    correcta: 1,
    explicacion: "\\(PR_4^{2,2} = \\frac{4!}{2! 2!} = \\frac{24}{4} = 6\\). Las 6 palabras son: AAMM, AMAM, AMMA, MAAM, MAMA, MMAA.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 48,
    pregunta: "Si \\(P(A) = 0.8\\) y \\(P(B) = 0.7\\), ¿cuál es el valor mínimo posible para la probabilidad conjunta \\(P(A \\cap B)\\)?",
    opciones: [
      "\\(0.5\\)",
      "\\(0.56\\)",
      "\\(0\\)",
      "\\(0.7\\)"
    ],
    correcta: 0,
    explicacion: "Por la desigualdad de Bonferroni: \\(P(A \\cap B) \\ge P(A) + P(B) - 1 = 0.8 + 0.7 - 1 = 0.5\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "medio",
  },
  {
    id: 49,
    pregunta: "¿Cuál es la probabilidad de que al extraer una bola al azar de una urna con 10 bolas numeradas del 1 al 10, salga un número primo o par?",
    opciones: [
      "\\(8/10 = 0.8\\)",
      "\\(9/10 = 0.9\\)",
      "\\(7/10 = 0.7\\)",
      "\\(1.0\\)"
    ],
    correcta: 0,
    explicacion: "Primos = {2, 3, 5, 7} (4). Pares = {2, 4, 6, 8, 10} (5). Primos y pares = {2} (1). Por Inclusión-Exclusión: \\(4 + 5 - 1 = 8\\) casos favorables. \\(P = 8/10 = 0.8\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 50,
    pregunta: "¿Cuál es el valor de la suma de todos los coeficientes binomiales \\(\\sum_{k=0}^n \\binom{n}{k}\\)?",
    opciones: [
      "\\(n!\\)",
      "\\(2^n\\)",
      "\\(n^2\\)",
      "\\(2n\\)"
    ],
    correcta: 1,
    explicacion: "Por el Teorema del Binomio de Newton con \\(x=1\\) e \\(y=1\\): \\((1 + 1)^n = 2^n = \\sum_{k=0}^n \\binom{n}{k}\\). Representa el número total de subconjuntos de un conjunto de tamaño \\(n\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
];
