// quizzes_u2.js — 50 Reactivos de la Unidad 2: Probabilidad Condicional e Inferencia Bayesiana
// Norma NTE-UAN-APK-001 v1.4

export const QUIZZES_U2 = [
  {
    id: 51,
    pregunta: "Si \\(P(A) = 0.5\\), \\(P(B) = 0.4\\) y \\(P(A \\cap B) = 0.2\\), ¿cuál es la probabilidad condicional \\(P(A \\mid B)\\)?",
    opciones: [
      "\\(0.2 / 0.5 = 0.4\\)",
      "\\(0.2 / 0.4 = 0.5\\)",
      "\\(0.2 / 0.9 = 0.222\\)",
      "\\(0.5 \\times 0.4 = 0.2\\)"
    ],
    correcta: 1,
    explicacion: "Por la definición de probabilidad condicional: \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.4} = 0.5\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 52,
    pregunta: "¿Cuál de las siguientes condiciones es estrictamente necesaria y suficiente para que dos eventos con probabilidad positiva sean estocásticamente independientes?",
    opciones: [
      "\\(P(A \\cap B) = 0\\)",
      "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)",
      "\\(P(A \\cup B) = 1\\)",
      "\\(P(A \\mid B) = P(B \\mid A)\\)"
    ],
    correcta: 1,
    explicacion: "Por definición formal, dos eventos \\(A\\) y \\(B\\) son independientes si y solo si la ocurrencia de uno no altera la probabilidad del otro, lo cual equivale a la regla del producto: \\(P(A \\cap B) = P(A)P(B)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 53,
    pregunta: "Una prueba diagnóstica para una enfermedad rara (prevalencia \\(P(E) = 0.01\\)) tiene sensibilidad \\(P(+ \\mid E) = 0.95\\) y tasa de falsos positivos \\(P(+ \\mid E^c) = 0.05\\). Si un paciente resulta positivo, ¿cuál es la probabilidad real de que tenga la enfermedad (\\(P(E \\mid +)\\))?",
    opciones: [
      "\\(0.95\\)",
      "\\(\\frac{0.95 \\times 0.01}{0.95 \\times 0.01 + 0.05 \\times 0.99} = \\frac{0.0095}{0.059} \\approx 0.161\\)",
      "\\(0.50\\)",
      "\\(0.01\\)"
    ],
    correcta: 1,
    explicacion: "Por el Teorema de Bayes: \\(P(E \\mid +) = \\frac{P(+ \\mid E)P(E)}{P(+ \\mid E)P(E) + P(+ \\mid E^c)P(E^c)} = \\frac{0.95(0.01)}{0.95(0.01) + 0.05(0.99)} = \\frac{0.0095}{0.059} \\approx 0.161\\) (16.1%). Ilustra la falacia de la tasa base.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 54,
    pregunta: "En el dilema de Monty Hall con 3 puertas (1 coche, 2 cabras), tras elegir una puerta y ver que el presentador abre una con cabra, ¿cuál es la probabilidad de ganar el coche si el concursante cambia de puerta?",
    opciones: [
      "\\(1/2\\)",
      "\\(2/3\\)",
      "\\(1/3\\)",
      "\\(3/4\\)"
    ],
    correcta: 1,
    explicacion: "La elección inicial tiene probabilidad \\(1/3\\) de acertar. El presentador, que conoce dónde está el premio, siempre revelará una cabra entre las dos puertas no elegidas. Por ende, la probabilidad acumulada de las puertas restantes (\\(2/3\\)) se transfiere íntegramente a la puerta no abierta al cambiar.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 55,
    pregunta: "Si \\(A_1, A_2, A_3\\) forman una partición del espacio muestral \\(\\Omega\\), el Teorema de la Probabilidad Total para cualquier evento \\(B\\) se expresa como:",
    opciones: [
      "\\(P(B) = P(A_1) + P(A_2) + P(A_3)\\)",
      "\\(P(B) = \\sum_{i=1}^3 P(B \\mid A_i) P(A_i)\\)",
      "\\(P(B) = \\prod_{i=1}^3 P(B \\mid A_i)\\)",
      "\\(P(B) = \\frac{P(B \\mid A_1)}{P(A_1)}\\)"
    ],
    correcta: 1,
    explicacion: "Dado que \\(\\Omega = \\bigcup A_i\\) con \\(A_i \\cap A_j = \\emptyset\\), \\(B = \\bigcup (B \\cap A_i)\\). Aplicando el axioma de aditividad y la regla de la multiplicación: \\(P(B) = \\sum_{i=1}^3 P(B \\mid A_i)P(A_i)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 56,
    pregunta: "Si dos eventos \\(A\\) y \\(B\\) son independientes con \\(P(A) = 0.3\\) y \\(P(B) = 0.5\\), ¿cuánto vale \\(P(A \\cup B)\\)?",
    opciones: [
      "\\(0.80\\)",
      "\\(0.65\\)",
      "\\(0.15\\)",
      "\\(0.50\\)"
    ],
    correcta: 1,
    explicacion: "Por independencia: \\(P(A \\cap B) = P(A)P(B) = 0.3 \\times 0.5 = 0.15\\). Luego, por inclusión-exclusión: \\(P(A \\cup B) = 0.3 + 0.5 - 0.15 = 0.65\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 57,
    pregunta: "La regla de la cadena generalizada para la intersección de \\(n\\) eventos \\(P(A_1 \\cap A_2 \\cap \\dots \\cap A_n)\\) se expresa como:",
    opciones: [
      "\\(\\prod_{i=1}^n P(A_i)\\)",
      "\\(P(A_1) \\cdot P(A_2 \\mid A_1) \\cdot P(A_3 \\mid A_1 \\cap A_2) \\dots P(A_n \\mid \\bigcap_{j=1}^{n-1} A_j)\\)",
      "\\(\\sum_{i=1}^n P(A_i \\mid A_{i-1})\\)",
      "\\(1 - \\prod_{i=1}^n (1 - P(A_i))\\)"
    ],
    correcta: 1,
    explicacion: "La regla de la cadena descompone la probabilidad conjunta iterando la definición de probabilidad condicional paso a paso para eventos no necesariamente independientes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 58,
    pregunta: "Si \\(P(A) > 0\\) y \\(P(B) > 0\\) con \\(A\\) y \\(B\\) mutuamente excluyentes (\\(A \\cap B = \\emptyset\\)), ¿pueden ser \\(A\\) y \\(B\\) independientes?",
    opciones: [
      "Sí, siempre son independientes.",
      "No, nunca pueden ser independientes porque \\(P(A \\cap B) = 0 \\neq P(A)P(B) > 0\\).",
      "Solo si \\(P(A) + P(B) = 1\\).",
      "Depende del espacio muestral."
    ],
    correcta: 1,
    explicacion: "Si son mutuamente excluyentes, \\(P(A \\cap B) = 0\\). Para ser independientes se requeriría \\(P(A \\cap B) = P(A)P(B)\\). Como \\(P(A) > 0\\) y \\(P(B) > 0\\), el producto es estrictamente positivo, haciendo imposible la independencia.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 59,
    pregunta: "Una fábrica tiene 3 máquinas (\\(M_1, M_2, M_3\\)) que producen el 50%, 30% y 20% de las piezas, con tasas de defecto del 1%, 2% y 3% respectivamente. Si se selecciona una pieza defectuosa al azar, ¿cuál es la probabilidad de que provenga de la máquina \\(M_1\\)?",
    opciones: [
      "\\(0.50\\)",
      "\\(\\frac{0.50(0.01)}{0.50(0.01) + 0.30(0.02) + 0.20(0.03)} = \\frac{0.005}{0.017} \\approx 0.2941\\)",
      "\\(0.01\\)",
      "\\(0.333\\)"
    ],
    correcta: 1,
    explicacion: "Por probabilidad total, \\(P(D) = 0.5(0.01) + 0.3(0.02) + 0.2(0.03) = 0.005 + 0.006 + 0.006 = 0.017\\). Por Bayes: \\(P(M_1 \\mid D) = 0.005 / 0.017 \\approx 0.2941\\) (29.41%).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 60,
    pregunta: "La Paradoja de Simpson en inferencia estadística y probabilidad condicional se refiere a:",
    opciones: [
      "El hecho de que una correlación observada entre dos variables puede invertirse o desaparecer al desagregar los datos en subgrupos o estratos.",
      "Que la suma de probabilidades condicionales siempre es mayor a 1.",
      "Que no es posible calcular probabilidades si las muestras son pequeñas.",
      "Que toda prueba diagnóstica tiene un 50% de error inherente."
    ],
    correcta: 0,
    explicacion: "La paradoja de Simpson describe cómo una tendencia que aparece en varios grupos de datos puede desaparecer o invertirse cuando estos grupos se combinan, debido a una variable de confusión no controlada.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 61,
    pregunta: "Si \\(A\\) y \\(B\\) son independientes, ¿qué puede afirmarse sobre sus complementos \\(A^c\\) y \\(B^c\\)?",
    opciones: [
      "Son dependientes.",
      "También son independientes, es decir, \\(P(A^c \\cap B^c) = P(A^c)P(B^c)\\).",
      "Son mutuamente excluyentes.",
      "No se puede determinar sin conocer el espacio muestral."
    ],
    correcta: 1,
    explicacion: "Si \\(A\\) y \\(B\\) son independientes, se demuestra formalmente que los pares \\((A, B^c)\\), \\((A^c, B)\\) y \\((A^c, B^c)\\) también son mutuamente independientes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 62,
    pregunta: "En una baraja de 52 cartas, si se extrae una carta y se sabe que es roja, ¿cuál es la probabilidad condicional de que sea un Rey?",
    opciones: [
      "\\(4/52 = 1/13\\)",
      "\\(2/26 = 1/13\\)",
      "\\(2/52 = 1/26\\)",
      "\\(1/4\\)"
    ],
    correcta: 1,
    explicacion: "Hay 26 cartas rojas en total (espacio muestral reducido) y entre ellas hay 2 reyes rojos (corazones y diamantes). \\(P(\\text{Rey} \\mid \\text{Roja}) = 2/26 = 1/13 \\approx 0.0769\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 63,
    pregunta: "Si \\(P(B \\mid A) = 1\\), ¿cuál de las siguientes afirmaciones sobre los conjuntos es verdadera?",
    opciones: [
      "\\(B \\subseteq A\\)",
      "\\(A \\subseteq B\\) (salvo conjuntos de medida cero)",
      "\\(A \\cap B = \\emptyset\\)",
      "\\(P(A) = P(B)\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 1 \\implies P(A \\cap B) = P(A)\\), lo cual implica que el evento \\(A\\) está completamente contenido dentro de \\(B\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 64,
    pregunta: "Si se lanzan 2 dados equilibrados y se sabe que la suma es 8, ¿cuál es la probabilidad de que al menos uno de los dados muestre un 3?",
    opciones: [
      "\\(2/5 = 0.40\\)",
      "\\(1/5 = 0.20\\)",
      "\\(2/36 = 1/18\\)",
      "\\(1/6\\)"
    ],
    correcta: 0,
    explicacion: "Los resultados con suma 8 son: {(2,6), (3,5), (4,4), (5,3), (6,2)}, total 5 casos equiprobables. De ellos, tienen al menos un 3: {(3,5), (5,3)}, total 2 casos. \\(P = 2/5 = 0.40\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 65,
    pregunta: "La falacia del fiscal (Prosecutor's Fallacy) en contextos judiciales consiste en:",
    opciones: [
      "Confundir la probabilidad de la evidencia dado que el acusado es inocente \\(P(E \\mid I)\\) con la probabilidad de que el acusado sea inocente dada la evidencia \\(P(I \\mid E)\\).",
      "Ignorar el principio de inclusión-exclusión.",
      "Asumir que las pruebas de ADN tienen un 100% de precisión.",
      "Calcular erróneamente el valor esperado de la pena."
    ],
    correcta: 0,
    explicacion: "Consiste en equiparar erróneamente \\(P(\\text{coincidencia ADN} \\mid \\text{inocente})\\) (que puede ser muy baja, ej. 1 en 1 millón) con \\(P(\\text{inocente} \\mid \\text{coincidencia})\\), ignorando el tamaño de la población y el teorema de Bayes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 66,
    pregunta: "¿Qué significa que tres eventos \\(A, B, C\\) sean independientes dos a dos (de a pares) pero dependientes en su conjunto?",
    opciones: [
      "Que \\(P(AB)=P(A)P(B)\\), \\(P(AC)=P(A)P(C)\\), \\(P(BC)=P(B)P(C)\\), pero \\(P(ABC) \\neq P(A)P(B)P(C)\\).",
      "Que ninguna pareja de eventos es independiente.",
      "Que la unión de los tres tiene probabilidad 1.",
      "Que son mutuamente excluyentes."
    ],
    correcta: 0,
    explicacion: "La independencia por pares no garantiza la independencia conjunta de 3 o más eventos; se requiere además que la probabilidad de la intersección triple coincida con el producto de las 3 probabilidades individuales.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 67,
    pregunta: "Una urna contiene 4 bolas blancas y 6 negras. Se extraen 2 bolas consecutivas sin reemplazo. ¿Cuál es la probabilidad de que la segunda bola sea blanca dado que la primera fue blanca?",
    opciones: [
      "\\(4/10 = 0.40\\)",
      "\\(3/9 = 1/3 \\approx 0.333\\)",
      "\\(4/9 \\approx 0.444\\)",
      "\\(3/10 = 0.30\\)"
    ],
    correcta: 1,
    explicacion: "Al extraer una blanca en el primer intento, quedan en la urna 3 bolas blancas y 6 negras (total 9 bolas). Por ende, \\(P(B_2 \\mid B_1) = 3/9 = 1/3\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 68,
    pregunta: "Si \\(P(A) = 0.8\\) y \\(P(B \\mid A) = 0.5\\), ¿cuánto vale la probabilidad conjunta \\(P(A \\cap B)\\)?",
    opciones: [
      "\\(0.30\\)",
      "\\(0.40\\)",
      "\\(1.30\\)",
      "\\(0.625\\)"
    ],
    correcta: 1,
    explicacion: "Por la regla de la multiplicación: \\(P(A \\cap B) = P(A) \\cdot P(B \\mid A) = 0.8 \\times 0.5 = 0.40\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 69,
    pregunta: "En una ciudad llueve el 20% de los días. El pronóstico meteorológico acierta el 85% de los días que llueve y se equivoca el 10% de los días secos prediciendo lluvia. Si hoy se pronostica lluvia, ¿cuál es la probabilidad real de que llueva?",
    opciones: [
      "\\(0.85\\)",
      "\\(\\frac{0.85(0.20)}{0.85(0.20) + 0.10(0.80)} = \\frac{0.17}{0.17 + 0.08} = \\frac{0.17}{0.25} = 0.68\\)",
      "\\(0.50\\)",
      "\\(0.20\\)"
    ],
    correcta: 1,
    explicacion: "Por Bayes: \\(P(\\text{Ll} \\mid \\text{Pron}) = \\frac{P(\\text{Pron} \\mid \\text{Ll})P(\\text{Ll})}{P(\\text{Pron})} = \\frac{0.85 \\times 0.20}{0.85(0.20) + 0.10(0.80)} = \\frac{0.17}{0.25} = 0.68\\) (68%).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 70,
    pregunta: "Si \\(A\\) es independiente de \\(B\\), entonces \\(P(A \\mid B)\\) es igual a:",
    opciones: [
      "\\(P(B)\\)",
      "\\(P(A)\\)",
      "\\(1\\)",
      "\\(P(A)P(B)\\)"
    ],
    correcta: 1,
    explicacion: "Por definición de independencia, saber que \\(B\\) ocurrió no aporta información sobre \\(A\\), por lo que \\(P(A \\mid B) = P(A)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 71,
    pregunta: "Una familia tiene dos hijos. Si se sabe que al menos uno de ellos es niña, ¿cuál es la probabilidad de que ambos hijos sean niñas (asumiendo nacimientos independientes y equiprobables)?",
    opciones: [
      "\\(1/2 = 0.50\\)",
      "\\(1/3 \\approx 0.333\\)",
      "\\(1/4 = 0.25\\)",
      "\\(3/4 = 0.75\\)"
    ],
    correcta: 1,
    explicacion: "Espacio original: {NN, NM, MN, MM} con 4 resultados. El evento 'al menos una niña' reduce el espacio a {NN, NM, MN} (3 casos). De ellos, solo {NN} tiene dos niñas. \\(P = 1/3\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 72,
    pregunta: "La probabilidad a priori (prior) en el marco de la inferencia bayesiana representa:",
    opciones: [
      "La probabilidad actualizada tras observar nuevos datos o evidencia empírica.",
      "El estado inicial de creencia o conocimiento sobre un parámetro o hipótesis antes de observar la nueva evidencia.",
      "La verosimilitud de los datos observados.",
      "El error estándar de la estimación."
    ],
    correcta: 1,
    explicacion: "La distribución a priori \\(P(\\theta)\\) cuantifica la incertidumbre inicial previa a la recolección de los datos, la cual se actualiza mediante la verosimilitud para obtener la probabilidad a posteriori \\(P(\\theta \\mid D)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 73,
    pregunta: "Si \\(P(A) = 0.6\\), \\(P(B) = 0.7\\) y \\(P(A \\cup B) = 0.9\\), ¿cuánto vale la probabilidad condicional \\(P(B \\mid A)\\)?",
    opciones: [
      "\\(0.4 / 0.6 = 2/3 \\approx 0.667\\)",
      "\\(0.4 / 0.7 \\approx 0.571\\)",
      "\\(0.7\\)",
      "\\(0.5\\)"
    ],
    correcta: 0,
    explicacion: "Primero hallamos \\(P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.6 + 0.7 - 0.9 = 0.4\\). Luego \\(P(B \\mid A) = 0.4 / 0.6 = 2/3 \\approx 0.667\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 74,
    pregunta: "En una prueba médica, el 'Valor Predictivo Positivo' (VPP) se define formalmente como:",
    opciones: [
      "\\(P(\\text{Test } + \\mid \\text{Enfermo})\\)",
      "\\(P(\\text{Enfermo} \\mid \\text{Test } +)\\)",
      "\\(P(\\text{Sano} \\mid \\text{Test } -)\\)",
      "\\(P(\\text{Test } - \\mid \\text{Sano})\\)"
    ],
    correcta: 1,
    explicacion: "El VPP es la probabilidad condicional de que un paciente realmente padezca la patología dado que el resultado de su prueba diagnóstica fue positivo: \\(P(E \\mid +)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 75,
    pregunta: "La 'Especificidad' de una prueba clínica se define formalmente como:",
    opciones: [
      "\\(P(+ \\mid \\text{Enfermo})\\)",
      "\\(P(- \\mid \\text{Sano})\\)",
      "\\(P(\\text{Sano} \\mid -)\\)",
      "\\(P(+ \\mid \\text{Sano})\\)"
    ],
    correcta: 1,
    explicacion: "La especificidad es la capacidad de la prueba para clasificar correctamente a los individuos sanos: la probabilidad de que una persona sana obtenga un resultado negativo \\(P(- \\mid \\text{Sano})\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 76,
    pregunta: "Si se lanzan 3 monedas justas y se sabe que salió al menos una cara, ¿cuál es la probabilidad de que hayan salido exactamente 3 caras?",
    opciones: [
      "\\(1/8\\)",
      "\\(1/7\\)",
      "\\(1/4\\)",
      "\\(1/2\\)"
    ],
    correcta: 1,
    explicacion: "El espacio muestral original tiene 8 resultados. El evento 'al menos una cara' excluye {SSS}, dejando 7 casos equiprobables. Entre ellos, solo 1 caso es {CCC}. \\(P = 1/7 \\approx 0.1429\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 77,
    pregunta: "Si los eventos \\(A_1, A_2, \\dots, A_n\\) son mutuamente independientes, la probabilidad de que ocurra al menos uno de ellos es:",
    opciones: [
      "\\(\\sum_{i=1}^n P(A_i)\\)",
      "\\(1 - \\prod_{i=1}^n (1 - P(A_i))\\)",
      "\\(\\prod_{i=1}^n P(A_i)\\)",
      "\\(1 - \\sum_{i=1}^n P(A_i)\\)"
    ],
    correcta: 1,
    explicacion: "Por la ley del complemento y la independencia de los eventos complementarios: \\(P(\\bigcup A_i) = 1 - P(\\bigcap A_i^c) = 1 - \\prod_{i=1}^n P(A_i^c) = 1 - \\prod_{i=1}^n (1 - P(A_i))\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 78,
    pregunta: "En una caja hay 3 monedas: una normal, una con 2 caras y una cargada con \\(P(\\text{Cara}) = 0.75\\). Se elige una moneda al azar y se lanza, saliendo cara. ¿Cuál es la probabilidad de haber elegido la moneda con dos caras?",
    opciones: [
      "\\(1/3\\)",
      "\\(\\frac{(1/3)(1)}{(1/3)(0.5) + (1/3)(1) + (1/3)(0.75)} = \\frac{1}{0.5 + 1 + 0.75} = \\frac{1}{2.25} = 4/9 \\approx 0.444\\)",
      "\\(1/2\\)",
      "\\(2/3\\)"
    ],
    correcta: 1,
    explicacion: "Por Bayes: \\(P(M_{2C} \\mid C) = \\frac{1 \\times 1/3}{(0.5 + 1 + 0.75)/3} = \\frac{1}{2.25} = \\frac{4}{9} \\approx 0.4444\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 79,
    pregunta: "Si \\(P(A \\mid B) = P(A \\mid B^c)\\), entonces se deduce necesariamente que:",
    opciones: [
      "\\(A\\) y \\(B\\) son independientes.",
      "\\(A = B\\).",
      "\\(P(A) = 0\\).",
      "\\(A\\) y \\(B\\) son mutuamente excluyentes."
    ],
    correcta: 0,
    explicacion: "Si \\(P(A \\mid B) = P(A \\mid B^c) = c\\), por probabilidad total \\(P(A) = cP(B) + cP(B^c) = c(P(B)+P(B^c)) = c\\). Por tanto \\(P(A \\mid B) = P(A)\\), lo cual demuestra la independencia.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 80,
    pregunta: "¿Cuál es la 'Sensibilidad' de una prueba diagnóstica?",
    opciones: [
      "\\(P(+ \\mid \\text{Enfermo})\\)",
      "\\(P(- \\mid \\text{Enfermo})\\)",
      "\\(P(\\text{Enfermo} \\mid +)\\)",
      "\\(P(+ \\mid \\text{Sano})\\)"
    ],
    correcta: 0,
    explicacion: "La sensibilidad (tasa de verdaderos positivos) es la probabilidad de que la prueba detecte correctamente la presencia de la enfermedad en un individuo enfermo: \\(P(+ \\mid \\text{Enfermo})\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 81,
    pregunta: "Si \\(P(A) = 0.5\\), \\(P(B) = 0.3\\) y \\(P(B \\mid A) = 0.6\\), ¿cuánto vale \\(P(A \\mid B)\\)?",
    opciones: [
      "\\(1.0\\)",
      "\\(0.6\\)",
      "\\(0.5\\)",
      "\\(0.3\\)"
    ],
    correcta: 0,
    explicacion: "Por la regla de Bayes: \\(P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)} = \\frac{0.6 \\times 0.5}{0.3} = \\frac{0.30}{0.30} = 1.0\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 82,
    pregunta: "Se tienen dos urnas. Urna 1: 3 rojas y 2 negras. Urna 2: 1 roja y 4 negras. Se lanza una moneda equilibrada para elegir una urna y se extrae una bola que resulta ser roja. ¿Cuál es la probabilidad de que provenga de la Urna 1?",
    opciones: [
      "\\(1/2 = 0.50\\)",
      "\\(\\frac{0.5(3/5)}{0.5(3/5) + 0.5(1/5)} = \\frac{3/5}{4/5} = 3/4 = 0.75\\)",
      "\\(3/5 = 0.60\\)",
      "\\(1/4 = 0.25\\)"
    ],
    correcta: 1,
    explicacion: "Por Bayes: \\(P(U_1 \\mid R) = \\frac{P(R \\mid U_1)P(U_1)}{P(R \\mid U_1)P(U_1) + P(R \\mid U_2)P(U_2)} = \\frac{(3/5)(1/2)}{(3/5)(1/2) + (1/5)(1/2)} = \\frac{3/10}{4/10} = 3/4 = 0.75\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 83,
    pregunta: "¿Cuál es el concepto de 'Independencia Condicional' entre \\(A\\) y \\(B\\) dado un tercer evento \\(C\\)?",
    opciones: [
      "\\(P(A \\cap B \\mid C) = P(A \\mid C) \\cdot P(B \\mid C)\\)",
      "\\(P(A \\cap B) = P(A)P(B)\\)",
      "\\(P(A \\mid B \\cap C) = 0\\)",
      "\\(P(C \\mid A \\cap B) = 1\\)"
    ],
    correcta: 0,
    explicacion: "Dos eventos \\(A\\) y \\(B\\) son condicionalmente independientes dado \\(C\\) si conocer la ocurrencia de \\(B\\) no aporta información adicional sobre \\(A\\) una vez que se conoce que \\(C\\) ocurrió: \\(P(A \\cap B \\mid C) = P(A \\mid C)P(B \\mid C)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 84,
    pregunta: "Si \\(P(A) = 0.7\\) y \\(P(B) = 0.8\\), ¿cuál es el valor máximo posible para \\(P(A \\cup B)\\)?",
    opciones: [
      "\\(1.5\\)",
      "\\(1.0\\)",
      "\\(0.8\\)",
      "\\(0.56\\)"
    ],
    correcta: 1,
    explicacion: "Por el axioma de normalización, ninguna probabilidad puede exceder 1. El valor máximo posible es 1.0 (cuando \\(P(A \\cap B) = 0.5\\)).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 85,
    pregunta: "El problema de los tres prisioneros es un análogo conceptual de:",
    opciones: [
      "La aguja de Buffon",
      "La paradoja de Monty Hall",
      "La ruina del jugador",
      "La distribución geométrica"
    ],
    correcta: 1,
    explicacion: "El problema de los tres prisioneros de Martin Gardner (1959) es matemáticamente idéntico al dilema de Monty Hall, demostrando cómo la información condicional asimétrica modifica las probabilidades posteriores de supervivencia.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 86,
    pregunta: "Si \\(P(A \\mid B) = 0.4\\) y \\(P(B) = 0.5\\), ¿cuánto vale \\(P(A^c \\cap B)\\)?",
    opciones: [
      "\\(0.20\\)",
      "\\(0.30\\)",
      "\\(0.50\\)",
      "\\(0.10\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(P(A \\cap B) = P(A \\mid B)P(B) = 0.4 \\times 0.5 = 0.20\\), y dado que \\(B = (A \\cap B) \\cup (A^c \\cap B)\\), se tiene \\(P(A^c \\cap B) = P(B) - P(A \\cap B) = 0.50 - 0.20 = 0.30\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 87,
    pregunta: "En inferencia bayesiana, la función de Verosimilitud (Likelihood) \\(L(\\theta \\mid x)\\) representa:",
    opciones: [
      "La probabilidad a priori de los parámetros.",
      "La probabilidad o densidad de observar los datos muestrales \\(x\\) en función del parámetro \\(\\theta\\).",
      "El intervalo de confianza al 95%.",
      "La distribución marginal del estadístico de prueba."
    ],
    correcta: 1,
    explicacion: "La verosimilitud cuantifica qué tan plausible es la muestra observada \\(x\\) bajo diferentes valores hipotéticos del parámetro \\(\\theta\\): \\(L(\\theta \\mid x) = P(x \\mid \\theta)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 88,
    pregunta: "Si tres eventos \\(A, B, C\\) son independientes con probabilidades \\(0.2, 0.3, 0.5\\), ¿cuál es la probabilidad de que ninguno ocurra?",
    opciones: [
      "\\((0.8)(0.7)(0.5) = 0.28\\)",
      "\\(1 - (0.2 + 0.3 + 0.5) = 0\\)",
      "\\(0.03\\)",
      "\\(0.50\\)"
    ],
    correcta: 0,
    explicacion: "Por independencia de los complementos: \\(P(A^c \\cap B^c \\cap C^c) = (1 - 0.2)(1 - 0.3)(1 - 0.5) = 0.8 \\times 0.7 \\times 0.5 = 0.28\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 89,
    pregunta: "Si \\(P(A) = 0.4\\) y \\(P(B) = 0.5\\), y se sabe que \\(A\\) y \\(B\\) son independientes, ¿cuánto vale \\(P(A \\mid B^c)\\)?",
    opciones: [
      "\\(0.5\\)",
      "\\(0.4\\)",
      "\\(0.2\\)",
      "\\(0.8\\)"
    ],
    correcta: 1,
    explicacion: "Por la independencia entre \\(A\\) y \\(B^c\\), la ocurrencia o no de \\(B\\) no altera la probabilidad de \\(A\\): \\(P(A \\mid B^c) = P(A) = 0.4\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 90,
    pregunta: "Un sistema consta de 2 componentes en paralelo que funcionan de manera independiente con probabilidades de falla \\(q_1 = 0.1\\) y \\(q_2 = 0.2\\). ¿Cuál es la confiabilidad del sistema (probabilidad de que funcione)?",
    opciones: [
      "\\((0.9)(0.8) = 0.72\\)",
      "\\(1 - (0.1)(0.2) = 1 - 0.02 = 0.98\\)",
      "\\(0.80\\)",
      "\\(0.90\\)"
    ],
    correcta: 1,
    explicacion: "Un sistema en paralelo funciona si al menos un componente funciona (falla solo si ambos fallan simultáneamente): \\(P(\\text{éxito}) = 1 - P(\\text{falla conjunta}) = 1 - (0.1 \\times 0.2) = 1 - 0.02 = 0.98\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 91,
    pregunta: "Un sistema consta de 2 componentes en serie que funcionan independientemente con confiabilidades \\(p_1 = 0.9\\) y \\(p_2 = 0.8\\). ¿Cuál es la confiabilidad global del sistema?",
    opciones: [
      "\\(0.9 \\times 0.8 = 0.72\\)",
      "\\(0.9 + 0.8 - 0.72 = 0.98\\)",
      "\\(0.85\\)",
      "\\(0.10\\)"
    ],
    correcta: 0,
    explicacion: "En serie, el sistema funciona únicamente si ambos componentes funcionan a la vez: \\(P(\\text{sistema}) = p_1 \\cdot p_2 = 0.9 \\times 0.8 = 0.72\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 92,
    pregunta: "Si \\(P(A) = 0.6\\), \\(P(B) = 0.4\\) y \\(P(A \\cap B) = 0.24\\), se puede asegurar que:",
    opciones: [
      "\\(A\\) y \\(B\\) son independientes.",
      "\\(A\\) y \\(B\\) son disjuntos.",
      "\\(A \\subseteq B\\).",
      "\\(P(A \\mid B) = 0.4\\)."
    ],
    correcta: 0,
    explicacion: "Como \\(P(A) \\cdot P(B) = 0.6 \\times 0.4 = 0.24 = P(A \\cap B)\\), se cumple exactamente la condición necesaria y suficiente de independencia estocástica.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 93,
    pregunta: "¿Cuál es la probabilidad de obtener al menos un as al lanzar 4 dados equilibrados de 6 caras independientes?",
    opciones: [
      "\\(4/6 = 2/3\\)",
      "\\(1 - (5/6)^4 = 1 - 625/1296 = 671/1296 \\approx 0.5177\\)",
      "\\((1/6)^4\\)",
      "\\(1/6\\)"
    ],
    correcta: 1,
    explicacion: "Por el método del complemento (problema histórico del Caballero de Méré): \\(P(\\text{al menos 1}) = 1 - P(\\text{ningún as}) = 1 - (5/6)^4 = 1 - 0.4823 = 0.5177\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 94,
    pregunta: "Si \\(P(A \\cap B \\cap C) = P(A)P(B)P(C)\\), ¿garantiza esto por sí solo que los 3 eventos sean mutuamente independientes?",
    opciones: [
      "Sí, es la única condición requerida.",
      "No, se requiere además que sean independientes dos a dos (\\(P(AB)=P(A)P(B)\\), \\(P(AC)=P(A)P(C)\\), \\(P(BC)=P(B)P(C)\\)).",
      "Solo si el espacio muestral es continuo.",
      "Solo si sus probabilidades suman 1."
    ],
    correcta: 1,
    explicacion: "Para que 3 eventos sean completamente independientes se deben verificar simultáneamente 4 ecuaciones: las 3 independencias por pares y la independencia triple.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 95,
    pregunta: "En una fábrica de software, el módulo A genera el 70% del código y el módulo B el 30%. El módulo A tiene 2 bugs por cada 100 líneas y el B tiene 5 bugs por cada 100 líneas. Si se detecta un bug, ¿cuál es la probabilidad de que provenga del módulo B?",
    opciones: [
      "\\(0.30\\)",
      "\\(\\frac{0.30(0.05)}{0.70(0.02) + 0.30(0.05)} = \\frac{0.015}{0.014 + 0.015} = \\frac{0.015}{0.029} \\approx 0.5172\\)",
      "\\(0.05\\)",
      "\\(0.50\\)"
    ],
    correcta: 1,
    explicacion: "Por Bayes: \\(P(B \\mid \\text{Bug}) = \\frac{0.30 \\times 0.05}{0.70 \\times 0.02 + 0.30 \\times 0.05} = \\frac{0.015}{0.029} \\approx 0.5172\\) (51.72%).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 96,
    pregunta: "Si \\(P(A \\mid B) = 0.8\\) y \\(P(A \\cap B) = 0.24\\), ¿cuánto vale \\(P(B)\\)?",
    opciones: [
      "\\(0.30\\)",
      "\\(0.192\\)",
      "\\(0.56\\)",
      "\\(0.80\\)"
    ],
    correcta: 0,
    explicacion: "Como \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\implies P(B) = \\frac{P(A \\cap B)}{P(A \\mid B)} = \\frac{0.24}{0.8} = 0.30\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 97,
    pregunta: "La 'tasa de falsos negativos' de una prueba clínica se relaciona con la sensibilidad mediante:",
    opciones: [
      "\\(\\text{Falsos Negativos} = 1 - \\text{Sensibilidad}\\)",
      "\\(\\text{Falsos Negativos} = 1 - \\text{Especificidad}\\)",
      "\\(\\text{Falsos Negativos} = \\text{Sensibilidad} \\times \\text{Especificidad}\\)",
      "\\(\\text{Falsos Negativos} = 1 - \\text{Prevalencia}\\)"
    ],
    correcta: 0,
    explicacion: "Dado que \\(P(- \\mid E) + P(+ \\mid E) = 1\\), la tasa de falsos negativos \\(P(- \\mid E)\\) es exactamente el complemento de la sensibilidad \\(1 - P(+ \\mid E)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 98,
    pregunta: "Si \\(A\\) y \\(B\\) son independientes con \\(P(A) = 0.5\\) y \\(P(B) = 0.2\\), ¿cuánto vale \\(P(A \\Delta B)\\)?",
    opciones: [
      "\\(0.5 + 0.2 - 2(0.1) = 0.50\\)",
      "\\(0.70\\)",
      "\\(0.10\\)",
      "\\(0.60\\)"
    ],
    correcta: 0,
    explicacion: "Por independencia: \\(P(A \\cap B) = 0.5 \\times 0.2 = 0.10\\). Luego \\(P(A \\Delta B) = P(A \\cup B) - P(A \\cap B) = (0.5 + 0.2 - 0.1) - 0.1 = 0.6 - 0.1 = 0.50\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 99,
    pregunta: "Se tienen 2 urnas idénticas: Urna A con 2 monedas de oro y Urna B con 1 de oro y 1 de plata. Se elige una urna al azar y se extrae una moneda que resulta ser de oro. ¿Cuál es la probabilidad de que la otra moneda en esa misma urna sea también de oro (Paradoja de las cajas de Bertrand)?",
    opciones: [
      "\\(1/2\\)",
      "\\(2/3\\)",
      "\\(3/4\\)",
      "\\(1/3\\)"
    ],
    correcta: 1,
    explicacion: "Hay 3 monedas de oro en total: 2 en la Urna A y 1 en la Urna B. Cada una tiene la misma probabilidad de ser extraída. Si salió oro, hay 2 posibilidades de 3 de haber elegido una moneda de la Urna A (cuya segunda moneda también es de oro). \\(P = 2/3\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 100,
    pregunta: "El principio de actualización bayesiana establece que la distribución posterior es proporcional a:",
    opciones: [
      "\\(\\text{Posterior} \\propto \\text{Verosimilitud} \\times \\text{Prior}\\)",
      "\\(\\text{Posterior} \\propto \\text{Verosimilitud} / \\text{Prior}\\)",
      "\\(\\text{Posterior} \\propto \\text{Prior} / \\text{Evidencia}\\)",
      "\\(\\text{Posterior} = \\text{Media Muestral}\\)"
    ],
    correcta: 0,
    explicacion: "En notación bayesiana continua o discreta: \\(P(\\theta \\mid x) = \\frac{P(x \\mid \\theta)P(\\theta)}{P(x)} \\propto L(\\theta \\mid x) \\pi(\\theta)\\), donde la constante normalizadora es la evidencia marginal \\(P(x)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
];
