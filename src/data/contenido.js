// NTE-UAN-APK-001 v1.3 — Base de Conocimiento Curricular: Probabilidad (CBIMAT-234)
// Universidad Autónoma de Nayarit — Licenciatura en Matemáticas (PALMAT Plan 2024 / Act. 2026)
// Docente Responsable: Dr. Pablo Eduardo Cancino Marentes

export const META = {
  materia:        "probabilidad",
  nombreCompleto: "Probabilidad UAN",
  version:        "1.0.0",
  autor:          "Dr. Pablo Eduardo Cancino Marentes",
  anio:           "2026",
  descripcion:    "Aplicación interactiva de Probabilidad — Licenciatura en Matemáticas (PALMAT UAN) CBIMAT-234",
  unidad:         "Unidad Académica de Ciencias Básicas e Ingenierías",
  programa:       "Licenciatura en Matemáticas (PALMAT)",
  norma:          "NTE-UAN-APK-001 v1.3",
};

export const CATEGORIAS = [
  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 1: ESPACIOS DE PROBABILIDAD Y COMBINATORIA
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "espacios_combinatoria",
    nombre: "Espacios de Probabilidad y Combinatoria",
    icon:   "📐",
    color:  "#58a6ff",
    temas: [
      {
        id:         "historia_probabilidad",
        titulo:     "1.1 Introducción y Desarrollo Histórico del Azar",
        definicion: "La teoría de la probabilidad surgió formalmente en el siglo XVII a partir de la correspondencia entre Pierre de Fermat y Blaise Pascal (1654) sobre el problema del reparto de apuestas (caballero de Méré). Evolucionó desde la concepción clásica de Laplace (1812) basada en la simetría de casos favorables y posibles, pasando por el enfoque frecuentista de von Mises, hasta alcanzar su fundamentación axiomática rigurosa con Andréi Kolmogórov en 1933 mediante la teoría de la medida.",
        formula:    "P(A) = \\lim_{N \\to \\infty} \\frac{N_A}{N} \\quad \\text{(Enfoque Frecuentista)}",
        notas: [
          "Distingue entre determinismo mecánico (laplaciano) y procesos estocásticos irreducibles.",
          "La asignación de probabilidades puede ser clásica (a priori), frecuentista (a posteriori) o subjetiva/bayesiana (grados de creencia).",
          "La axiomatización de 1933 resolvió la crisis de consistencia matemática de las paradojas geométricas del siglo XIX."
        ],
        widget: "buffon",
      },
      {
        id:         "tecnicas_conteo",
        titulo:     "1.2 Técnicas de Conteo y Regla de Laplace",
        definicion: "En espacios muestrales finitos equiprobables \\(\\Omega\\), la probabilidad de un evento \\(A\\) según la Regla de Laplace es el cociente entre el número de resultados favorables y posibles \\(P(A) = |A| / |\\Omega|\\). El cálculo combinatorio proporciona las herramientas cardinales fundamentales: principio multiplicativo, permutaciones de \\(n\\) elementos \\(P_n = n!\\), variaciones \\(V_k^n = n!/(n-k)!\\) y combinaciones \\(\\binom{n}{k} = \\frac{n!}{k!(n-k)!}\\).",
        formula:    "P(A) = \\frac{\\text{Casos Favorables}}{\\text{Casos Posibles}} = \\frac{|A|}{|\\Omega|}, \\quad \\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
        notas: [
          "Orden relevante sin repetición: Variaciones \\(V_k^n = \\frac{n!}{(n-k)!}\\).",
          "Orden irrelevante sin repetición: Combinaciones \\(C_k^n = \\binom{n}{k}\\).",
          "Permutaciones con repetición de grupos: \\(PR_n^{n_1, \\dots, n_k} = \\frac{n!}{n_1! n_2! \\dots n_k!}\\).",
          "Muestreo con reemplazo no ordenado: \\(CR_k^n = \\binom{n+k-1}{k}\\)."
        ],
        tabla: {
          cabecera: ["Técnica de Conteo", "Importa el Orden", "¿Permite Repetición?", "Fórmula Matemática"],
          filas: [
            ["Permutación simple", "Sí", "No", "\\(n!\\)"],
            ["Variación (k de n)", "Sí", "No", "\\(\\frac{n!}{(n-k)!}\\)"],
            ["Variación con repetición", "Sí", "Sí", "\\(n^k\\)"],
            ["Combinación simple", "No", "No", "\\(\\binom{n}{k} = \\frac{n!}{k!(n-k)!}\\)"],
            ["Combinación con repetición", "No", "Sí", "\\(\\binom{n+k-1}{k}\\)"],
          ],
        },
        widget: "pascal",
      },
      {
        id:         "espacio_muestral_algebra",
        titulo:     "1.3 Espacios Muestrales y sigma-Álgebras",
        definicion: "Un experimento aleatorio se modela mediante una terna probabilística \\((\\Omega, \\mathcal{F}, P)\\). El espacio muestral \\(\\Omega\\) es el conjunto no vacío de todos los resultados posibles. Una \\(\\sigma\\)-álgebra \\(\\mathcal{F}\\) sobre \\(\\Omega\\) es una familia de subconjuntos de \\(\\Omega\\) que contiene al conjunto vacío \\(\\emptyset\\) y es cerrada bajo complementos y uniones numerables. Los elementos de \\(\\mathcal{F}\\) se denominan eventos aleatorios medibles.",
        formula:    "\\mathcal{F} \\subseteq \\mathcal{P}(\\Omega): \\quad \\Omega \\in \\mathcal{F}, \\quad A \\in \\mathcal{F} \\implies A^c \\in \\mathcal{F}, \\quad \\bigcup_{i=1}^{\\infty} A_i \\in \\mathcal{F}",
        notas: [
          "Para \\(\\Omega\\) finito o numerable, se toma habitualmente \\(\\mathcal{F} = \\mathcal{P}(\\Omega)\\).",
          "Para \\(\\Omega = \\mathbb{R}\\), \\(\\mathcal{P}(\\mathbb{R})\\) genera paradojas (conjuntos no medibles de Vitali); se utiliza la \\(\\sigma\\)-álgebra de Borel \\(\\mathcal{B}(\\mathbb{R})\\) generada por intervalos abiertos.",
          "Propiedad de De Morgan: \\((\\bigcup A_i)^c = \\bigcap A_i^c\\) y \\((\\bigcap A_i)^c = \\bigcup A_i^c\\)."
        ],
        widget: "venn",
        widgetProps: { operacion: "union" },
      },
      {
        id:         "axiomatica_kolmogorov",
        titulo:     "1.4 Axiomas de Kolmogórov y Propiedades",
        definicion: "Una medida de probabilidad \\(P: \\mathcal{F} \\to [0, 1]\\) es una función de conjunto sobre un espacio medible \\((\\Omega, \\mathcal{F})\\) que satisface los tres axiomas fundamentales de Kolmogórov (1933):\n\n• Axioma 1 (No negatividad): Para todo evento \\(A \\in \\mathcal{F}\\), \\(P(A) \\ge 0\\).\n\n• Axioma 2 (Normalización o Certidumbre): La probabilidad del espacio muestral completo es unitaria, \\(P(\\Omega) = 1\\).\n\n• Axioma 3 (\\(\\sigma\\)-aditividad o Aditividad Contable): Para cualquier sucesión de eventos disjuntos dos a dos \\(A_1, A_2, \\dots\\) (donde \\(A_i \\cap A_j = \\emptyset\\) si \\(i \\neq j\\)), se cumple que \\(P(\\bigcup_{i=1}^\\infty A_i) = \\sum_{i=1}^\\infty P(A_i)\\).",
        formula:    "P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i) \\quad \\text{si } A_i \\cap A_j = \\emptyset \\; (i \\neq j)",
        notas: [
          "Probabilidad del complemento: \\(P(A^c) = 1 - P(A)\\); en particular, \\(P(\\emptyset) = 0\\).",
          "Monotonía: Si \\(A \\subseteq B\\), entonces \\(P(A) \\le P(B)\\) y \\(P(B \\setminus A) = P(B) - P(A)\\).",
          "Principio de Inclusión-Exclusión: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\).",
          "Continuidad de la probabilidad: Si \\(A_n \\uparrow A\\), entonces \\(\\lim_{n \\to \\infty} P(A_n) = P(A)\\)."
        ],
        widget: "venn",
        widgetProps: { operacion: "interseccion" },
      },
      {
        id:         "probabilidad_geometrica",
        titulo:     "1.5 Probabilidad Geométrica y Aguja de Buffon",
        definicion: "Cuando el espacio muestral \\(\\Omega\\) es una región continua acotada de \\(\\mathbb{R}^n\\) equipada con la medida de Lebesgue \\(\\mu\\) (longitud, área o volumen), la probabilidad geométrica de un evento medible \\(A \\subset \\Omega\\) es \\(P(A) = \\mu(A) / \\mu(\\Omega)\\). Un problema clásico es la Aguja de Buffon (1777), donde una aguja de longitud \\(L\\) lanzada sobre líneas paralelas a distancia \\(D \\ge L\\) cruza una línea con probabilidad \\(P = \\frac{2L}{\\pi D}\\), permitiendo estimar \\(\\pi\\) estocásticamente.",
        formula:    "P(A) = \\frac{\\text{Área}(A)}{\\text{Área}(\\Omega)}, \\qquad P(\\text{cruce de Buffon}) = \\frac{2L}{\\pi D}",
        notas: [
          "Permite modelar problemas de encuentros temporales (ej. dos personas que llegan independientemente a un intervalo).",
          "Fundamento de los métodos de integración numérica de Monte Carlo.",
          "La Paradoja de Bertrand demuestra que la probabilidad geométrica requiere explicitar la distribución de probabilidad en el espacio de parámetros."
        ],
        widget: "buffon",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 2: PROBABILIDAD CONDICIONAL, INDEPENDENCIA Y BAYES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "probabilidad_condicional",
    nombre: "Probabilidad Condicional e Inferencia Bayesiana",
    icon:   "🌳",
    color:  "#f0883e",
    temas: [
      {
        id:         "prob_condicional_multiplicacion",
        titulo:     "2.1 Probabilidad Condicional y Regla del Producto",
        definicion: "Dado un evento \\(B\\) con \\(P(B) > 0\\), la probabilidad condicional de que ocurra \\(A\\) dado que ya ocurrió \\(B\\) se define como \\(P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\). Geométricamente, el conocimiento de \\(B\\) restringe el espacio muestral original \\(\\Omega\\) a \\(B\\). De esta definición se deriva la regla de la multiplicación: \\(P(A \\cap B) = P(B) P(A|B) = P(A) P(B|A)\\), generalizable por inducción mediante la regla de la cadena: \\(P(A_1 \\cap \\dots \\cap A_n) = P(A_1) P(A_2|A_1) \\dots P(A_n|A_1 \\cap \\dots \\cap A_{n-1})\\).",
        formula:    "P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad P(A \\cap B \\cap C) = P(A) P(B|A) P(C|A \\cap B)",
        notas: [
          "Para un evento fijo \\(B\\) con \\(P(B) > 0\\), la función \\(P(\\cdot | B)\\) es una auténtica medida de probabilidad que satisface todos los axiomas de Kolmogórov.",
          "La probabilidad condicional no es simétrica: en general \\(P(A|B) \\neq P(B|A)\\).",
          "Se representa intuitivamente a través de diagramas de árbol multiplicativos."
        ],
        widget: "arbol",
      },
      {
        id:         "independencia_estocastica",
        titulo:     "2.2 Eventos Independientes vs. Mutuamente Excluyentes",
        definicion: "Dos eventos \\(A\\) y \\(B\\) son estocásticamente independientes si y solo si \\(P(A \\cap B) = P(A) P(B)\\), lo cual equivale a \\(P(A|B) = P(A)\\) siempre que \\(P(B) > 0\\). La independencia implica que la ocurrencia de uno no aporta información sobre la probabilidad del otro. Esto contrasta con eventos mutuamente excluyentes (disjuntos, \\(A \\cap B = \\emptyset\\)), los cuales son fuertemente dependientes: si uno ocurre, la probabilidad del otro se anula.",
        formula:    "A \\perp B \\iff P(A \\cap B) = P(A) P(B) \\iff P(A|B) = P(A)",
        notas: [
          "Independencia mutua para \\(n\\) eventos requiere que para todo subconjunto de índices \\(I\\), \\(P(\\bigcap_{i \\in I} A_i) = \\prod_{i \\in I} P(A_i)\\).",
          "La independencia por pares no garantiza la independencia mutua conjunta (contraejemplo de Bernstein).",
          "Si \\(A\\) y \\(B\\) son independientes, también lo son \\(A\\) y \\(B^c\\), así como \\(A^c\\) y \\(B^c\\)."
        ],
        widget: "venn",
        widgetProps: { operacion: "interseccion" },
      },
      {
        id:         "particiones_probabilidad_total",
        titulo:     "2.3 Particiones y Teorema de la Probabilidad Total",
        definicion: "Una familia de eventos \\(\\{B_1, B_2, \\dots, B_k\\}\\) constituye una partición exhaustiva del espacio muestral \\(\\Omega\\) si son disjuntos dos a dos (\\(B_i \\cap B_j = \\emptyset\\) para \\(i \\neq j\\)) y su unión cubre todo el espacio (\\(\\bigcup_{i=1}^k B_i = \\Omega\\)), con \\(P(B_i) > 0\\). El Teorema de la Probabilidad Total establece que para cualquier evento \\(A \\in \\mathcal{F}\\), su probabilidad marginal se reconstruye sumando las contribuciones ponderadas de cada partición: \\(P(A) = \\sum_{i=1}^k P(B_i) P(A|B_i)\\).",
        formula:    "P(A) = \\sum_{i=1}^{k} P(B_i) P(A|B_i) \\quad \\text{donde } \\bigcup_{i=1}^k B_i = \\Omega, \\; B_i \\cap B_j = \\emptyset",
        notas: [
          "Caso binario fundamental: \\(P(A) = P(B) P(A|B) + P(B^c) P(A|B^c)\\).",
          "El teorema funciona como la ley del valor esperado marginal aplicado al indicador \\(\\mathbb{I}_A\\).",
          "Constituye el denominador indispensable para la inversión bayesiana."
        ],
        widget: "arbol",
      },
      {
        id:         "teorema_bayes",
        titulo:     "2.4 Teorema de Bayes, Falacias y Diagnóstico Clínico",
        definicion: "El Teorema de Bayes permite calcular la probabilidad posterior \\(P(B_j|A)\\) de una causa o hipótesis \\(B_j\\) dada la evidencia observada \\(A\\), invirtiendo el condicionamiento temporal/causal. Combina las probabilidades a priori \\(P(B_j)\\) con las verosimilitudes \\(P(A|B_j)\\). Es de vital relevancia en epidemiología (sensibilidad, especificidad, prevalencia y valor predictivo positivo) y permite desmitificar la falacia de la tasa base (Base Rate Fallacy) y la falacia del fiscal.",
        formula:    "P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum_{i=1}^k P(B_i) P(A|B_i)} = \\frac{\\text{Priori} \\times \\text{Verosimilitud}}{\\text{Probabilidad Total de la Evidencia}}",
        notas: [
          "Sensibilidad: \\(P(+|\\text{Enfermo})\\); Especificidad: \\(P(-|\\text{Sano})\\).",
          "Valor Predictivo Positivo (VPP): \\(P(\\text{Enfermo}|+) = \\frac{\\text{Prev} \\cdot \\text{Sens}}{\\text{Prev} \\cdot \\text{Sens} + (1-\\text{Prev})(1-\\text{Esp})}\\).",
          "Si una enfermedad es rara (baja prevalencia), la mayoría de los positivos serán falsos positivos incluso con pruebas de alta precisión."
        ],
        widget: "bayes",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 3: VARIABLES ALEATORIAS Y DISTRIBUCIONES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "variables_aleatorias",
    nombre: "Variables Aleatorias y Familias de Distribuciones",
    icon:   "📊",
    color:  "#39d353",
    temas: [
      {
        id:         "concepto_variable_aleatoria",
        titulo:     "3.1 Concepto y Clasificación Formal",
        definicion: "Formalmente, una variable aleatoria real sobre un espacio de probabilidad \\((\\Omega, \\mathcal{F}, P)\\) es una función medible \\(X: \\Omega \\to \\mathbb{R}\\), tal que para todo conjunto Boreliano \\(B \\in \\mathcal{B}(\\mathbb{R})\\), la preimagen satisface \\(X^{-1}(B) = \\{\\omega \\in \\Omega : X(\\omega) \\in B\\} \\in \\mathcal{F}\\). Se clasifican en: (1) Discretas: su rango \\(R_X\\) es finito o numerable; (2) Continuas: su función de distribución es absolutamente continua respecto a la medida de Lebesgue; (3) Mixtas: combinación lineal de saltos y densidad.",
        formula:    "X: \\Omega \\to \\mathbb{R} \\quad \\text{tal que } \\forall x \\in \\mathbb{R}, \\; \\{\\omega \\in \\Omega : X(\\omega) \\le x\\} \\in \\mathcal{F}",
        notas: [
          "El término 'variable' es histórico; rigurosamente es una función determinista cuyo argumento es el resultado estocástico \\(\\omega\\).",
          "Induce una medida de probabilidad en \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\) denominada ley de probabilidad \\(P_X(B) = P(X^{-1}(B))\\).",
          "Permite trasladar el análisis del espacio abstracto \\(\\Omega\\) a la recta real \\(\\mathbb{R}\\)."
        ],
        tabla: {
          cabecera: ["Tipo de Variable", "Rango \\(R_X\\)", "Función de Asignación", "Condición de Normalización"],
          filas: [
            ["Discreta", "Finito / Numerable", "Masa \\(p_X(x) = P(X = x)\\)", "\\(\\sum_{x} p_X(x) = 1\\)"],
            ["Continua", "Continuo (intervalos en \\(\\mathbb{R}\\))", "Densidad \\(f_X(x)\\)", "\\(\\int_{-\\infty}^{\\infty} f_X(x) dx = 1\\)"],
            ["Mixta", "Puntos aislados + Intervalos", "Masa + Densidad acoplada", "Suma de saltos + Integral = 1"],
          ],
        },
        widget: "espacio_muestral",
      },
      {
        id:         "pmf_pdf_cdf",
        titulo:     "3.2 Funciones PMF, PDF y CDF",
        definicion: "La función de distribución acumulada (CDF) se define universalmente como \\(F_X(x) = P(X \\le x)\\). Cumple: (1) \\(0 \\le F_X(x) \\le 1\\); (2) Es no decreciente; (3) Es continua por la derecha: \\(\\lim_{h \\to 0^+} F_X(x+h) = F_X(x)\\); (4) \\(\\lim_{x \\to -\\infty} F_X(x) = 0\\) y \\(\\lim_{x \\to \\infty} F_X(x) = 1\\). Para variables discretas, la PMF da probabilidades puntuales \\(P(X = x)\\); para continuas, la PDF \\(f_X(x) = F_X'(x)\\) define probabilidades por integración \\(P(a \\le X \\le b) = \\int_a^b f_X(x) dx\\).",
        formula:    "F_X(x) = P(X \\le x), \\qquad P(a < X \\le b) = F_X(b) - F_X(a) = \\int_a^b f_X(t) dt",
        notas: [
          "Para variables continuas, la probabilidad de cualquier punto aislado es cero: \\(P(X = c) = 0\\) para todo \\(c \\in \\mathbb{R}\\).",
          "La densidad \\(f_X(x)\\) no es una probabilidad; puede ser mayor que 1. La probabilidad es el área bajo la curva.",
          "Cuantiles: El cuantil de orden \\(p\\) es \\(x_p = F_X^{-1}(p)\\)."
        ],
        widget: "distribucion",
        widgetProps: { tipoInicial: "normal" },
      },
      {
        id:         "distribuciones_discretas",
        titulo:     "3.4 Familias de Distribuciones Discretas",
        definicion: "Las principales distribuciones discretas modelan procesos de conteo y ensayos estocásticos: (1) Bernoulli \\(\\text{Ber}(p)\\): ensayo único éxito/fracaso; (2) Binomial \\(\\text{Bin}(n,p)\\): suma de \\(n\\) Bernoulli independientes; (3) Geométrica \\(\\text{Geom}(p)\\): ensayos hasta el primer éxito (sin memoria); (4) Binomial Negativa \\(\\text{BN}(r,p)\\): ensayos hasta el \\(r\\)-ésimo éxito; (5) Hipergeométrica \\(\\text{Hiper}(N,K,n)\\): muestreo sin reemplazo; (6) Poisson \\(\\text{Pois}(\\lambda)\\): eventos en soporte continuo (límite de la Binomial cuando \\(n \\to \\infty, p \\to 0, np = \\lambda\\)).",
        formula:    "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k} \\; (\\text{Bin}), \\qquad P(Y=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\; (\\text{Poisson})",
        notas: [
          "Binomial: \\(\\mathbb{E}[X] = np\\), \\(\\text{Var}(X) = np(1-p)\\).",
          "Poisson: \\(\\mathbb{E}[Y] = \\lambda\\), \\(\\text{Var}(Y) = \\lambda\\) (equidispersión).",
          "Propiedad de falta de memoria: La geométrica es la única distribución discreta que satisface \\(P(X > s+t | X > s) = P(X > t)\\)."
        ],
        tabla: {
          cabecera: ["Distribución", "PMF \\(P(X = k)\\)", "Soporte \\(R_X\\)", "Media \\(\\mathbb{E}[X]\\)", "Varianza \\(\\text{Var}(X)\\)"],
          filas: [
            ["Bernoulli(p)", "\\(p^k (1-p)^{1-k}\\)", "\\(\\{0, 1\\}\\)", "\\(p\\)", "\\(p(1-p)\\)"],
            ["Binomial(n, p)", "\\(\\binom{n}{k} p^k (1-p)^{n-k}\\)", "\\(\\{0, 1, \\dots, n\\}\\)", "\\(np\\)", "\\(np(1-p)\\)"],
            ["Geométrica(p)", "\\(p(1-p)^{k-1}\\)", "\\(\\{1, 2, 3, \\dots\\}\\)", "\\(1/p\\)", "\\((1-p)/p^2\\)"],
            ["Poisson(λ)", "\\(\\frac{\\lambda^k e^{-\\lambda}}{k!}\\)", "\\(\\{0, 1, 2, \\dots\\}\\)", "\\(\\lambda\\)", "\\(\\lambda\\)"],
            ["Hipergeométrica", "\\(\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}\\)", "\\(\\max(0, n-N+K) .. \\min(n,K)\\)", "\\(n\\frac{K}{N}\\)", "\\(n\\frac{K}{N}(1-\\frac{K}{N})\\frac{N-n}{N-1}\\)"],
          ],
        },
      },
      {
        id:         "distribuciones_continuas",
        titulo:     "3.5 Familias de Distribuciones Continuas",
        definicion: "Las distribuciones continuas modelan magnitudes físicas, tiempos y variaciones biológicas/financieras: (1) Normal \\(\\mathcal{N}(\\mu, \\sigma^2)\\): simétrica y canónica por el TLC; (2) Exponencial \\(\\text{Exp}(\\lambda)\\): tiempos de espera entre eventos de Poisson (falta de memoria continua); (3) Gamma \\(\\Gamma(\\alpha, \\beta)\\): suma de \\(\\alpha\\) exponenciales; (4) Beta \\(\\text{Beta}(\\alpha, \\beta)\\): soporte acotado \\([0,1]\\), ideal para probabilidades a priori; (5) Distribuciones muestrales: \\(t\\)-Student, Chi-cuadrada \\(\\chi^2_k\\) y Snedecor-Fisher \\(F\\).",
        formula:    "f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} \\; (\\text{Normal}), \\qquad g(x) = \\lambda e^{-\\lambda x} \\mathbb{I}_{(x \\ge 0)} \\; (\\text{Exp})",
        notas: [
          "Regla empírica Normal 68-95-99.7: \\(P(\\mu - \\sigma \\le X \\le \\mu + \\sigma) \\approx 68.27\\%\\), \\(P(\\mu \\pm 2\\sigma) \\approx 95.45\\%\\), \\(P(\\mu \\pm 3\\sigma) \\approx 99.73\\%\\).",
          "Estandarización: Si \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2)\\), entonces \\(Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)\\).",
          "Relación Chi-cuadrada: Si \\(Z_1, \\dots, Z_k \\stackrel{iid}{\\sim} \\mathcal{N}(0,1)\\), entonces \\(\\sum_{i=1}^k Z_i^2 \\sim \\chi^2_k\\)."
        ],
        widget: "gauss_inflexion",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 4: ESPERANZA MATEMÁTICA, MOMENTOS Y TEOREMAS ASINTÓTICOS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "esperanza_teoremas_asintoticos",
    nombre: "Esperanza Matemática y Teoremas Asintóticos",
    icon:   "🎲",
    color:  "#bc8cff",
    temas: [
      {
        id:         "esperanza_linealidad",
        titulo:     "4.1 Esperanza Matemática y Linealidad",
        definicion: "La esperanza matemática \\(\\mathbb{E}[X]\\) es el centro de masa o promedio ponderado de una variable aleatoria. Para discretas se define como \\(\\sum x_i p(x_i)\\) y para continuas como \\(\\int_{-\\infty}^{\\infty} x f(x) dx\\), siempre que la integral/serie converja absolutamente (\\(\\mathbb{E}[|X|] < \\infty\\)). Teorema del estadístico inconsciente (LOTUS): para una función \\(g(X)\\), \\(\\mathbb{E}[g(X)] = \\int g(x) f(x) dx\\). El operador esperanza es rigurosamente lineal: \\(\\mathbb{E}[aX + bY + c] = a\\mathbb{E}[X] + b\\mathbb{E}[Y] + c\\), independientemente de si \\(X\\) e \\(Y\\) son independientes.",
        formula:    "\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x f_X(x) dx, \\qquad \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y]",
        notas: [
          "La linealidad no exige independencia: \\(\\mathbb{E}[X+Y] = \\mathbb{E}[X] + \\mathbb{E}[Y]\\) siempre se cumple.",
          "Para el producto, \\(\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]\\) requiere que \\(X\\) e \\(Y\\) sean no correlacionadas (propiedad garantizada si son independientes).",
          "Desigualdad de Jensen: Si \\(g\\) es convexa, entonces \\(g(\\mathbb{E}[X]) \\le \\mathbb{E}[g(X)]\\)."
        ],
        widget: "distribucion",
        widgetProps: { tipoInicial: "normal" },
      },
      {
        id:         "momentos_varianza_covarianza",
        titulo:     "4.2 Momentos, Varianza, Covarianza y Correlación",
        definicion: "Los momentos ordinarios son \\(\\mu_k' = \\mathbb{E}[X^k]\\) y los momentos centrales \\(\\mu_k = \\mathbb{E}[(X - \\mu)^k]\\). La varianza es el segundo momento central \\(\\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2\\), midiendo la dispersión cuadrática. La covarianza entre dos variables es \\(\\text{Cov}(X,Y) = \\mathbb{E}[(X-\\mu_X)(Y-\\mu_Y)] = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]\\). El coeficiente de correlación lineal de Pearson es \\(\\rho_{XY} = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]\\).",
        formula:    "\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2, \\qquad \\text{Var}(aX + bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\text{Cov}(X,Y)",
        notas: [
          "Propiedades de la varianza: \\(\\text{Var}(aX + b) = a^2 \\text{Var}(X)\\); \\(\\text{Var}(X) \\ge 0\\).",
          "Si \\(X \\perp Y\\), entonces \\(\\text{Cov}(X,Y) = 0\\) y \\(\\rho_{XY} = 0\\). El recíproco no es cierto en general.",
          "Asimetría (Skewness): \\(\\gamma_1 = \\mathbb{E}[(X-\\mu)^3]/\\sigma^3\\); Curtosis: \\(\\gamma_2 = \\mathbb{E}[(X-\\mu)^4]/\\sigma^4 - 3\\)."
        ],
        tabla: {
          cabecera: ["Concepto", "Fórmula", "Rango", "Interpretación"],
          filas: [
            ["Varianza \\(\\text{Var}(X)\\)", "\\(\\mathbb{E}[X^2] - (\\mathbb{E}[X])^2\\)", "\\([0, \\infty)\\)", "Dispersión cuadrática media"],
            ["Desviación Estándar \\(\\sigma\\)", "\\(\\sqrt{\\text{Var}(X)}\\)", "\\([0, \\infty)\\)", "Dispersión en unidades de la variable"],
            ["Covarianza \\(\\text{Cov}(X,Y)\\)", "\\(\\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]\\)", "\\((-\\infty, \\infty)\\)", "Tendencia de co-variación lineal"],
            ["Correlación \\(\\rho_{XY}\\)", "\\(\\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}\\)", "\\([-1, 1]\\)", "Fuerza y dirección de asociación lineal"],
          ],
        },
      },
      {
        id:         "mgf_funcion_generadora",
        titulo:     "4.3 Función Generadora de Momentos (MGF)",
        definicion: "La función generadora de momentos (MGF) de una variable aleatoria \\(X\\) se define como \\(M_X(t) = \\mathbb{E}[e^{tX}]\\), para todo \\(t\\) en un entorno abierto alrededor de cero donde la esperanza exista. Los momentos se obtienen derivando \\(k\\) veces respecto a \\(t\\) y evaluando en \\(t=0\\): \\(\\mathbb{E}[X^k] = M_X^{(k)}(0)\\). Por el Teorema de Unicidad, si dos variables poseen la misma MGF en un entorno de cero, tienen idéntica distribución de probabilidad.",
        formula:    "M_X(t) = \\mathbb{E}[e^{tX}], \\qquad \\mathbb{E}[X^k] = \\left. \\frac{d^k M_X(t)}{dt^k} \\right|_{t=0}, \\qquad M_{X+Y}(t) = M_X(t) M_Y(t) \\; (\\text{si } X \\perp Y)",
        notas: [
          "Para combinaciones lineales: \\(M_{aX+b}(t) = e^{bt} M_X(at)\\).",
          "La MGF de una suma de variables independientes es el producto algebraico de sus MGF individuales.",
          "Si la MGF no existe en un entorno real de cero (como en la distribución de Cauchy o log-normal), se recurre a la Función Característica \\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\), la cual siempre existe para toda variable aleatoria."
        ],
      },
      {
        id:         "desigualdades_probabilidad",
        titulo:     "4.4 Desigualdades de Márkov y Chebyshev",
        definicion: "Permiten acotar la probabilidad de colas y eventos extremos sin conocer la forma analítica de la distribución: (1) Desigualdad de Márkov: Si \\(X\\) es una variable no negativa (\\(X \\ge 0\\)) y \\(a > 0\\), entonces \\(P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}\\); (2) Desigualdad de Chebyshev: Para cualquier variable \\(X\\) con media \\(\\mu\\) y varianza finita \\(\\sigma^2\\), y cualquier constante \\(k > 0\\), se cumple que \\(P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}\\).",
        formula:    "P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a} \\; (X \\ge 0), \\qquad P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}",
        notas: [
          "Para \\(k=2\\), al menos el \\(75\\%\\) de cualquier distribución está a menos de 2 desviaciones estándar de su media.",
          "Para \\(k=3\\), al menos el \\(88.89\\%\\) de los datos cae en \\(\\mu \\pm 3\\sigma\\) (para cualquier forma de distribución).",
          "La desigualdad de Chebyshev es la herramienta matemática clave para demostrar rigurosamente la Ley Débil de los Grandes Números."
        ],
      },
      {
        id:         "ley_grandes_numeros_tlc",
        titulo:     "4.5 Ley de los Grandes Números y Teorema del Límite Central",
        definicion: "Constituyen los pilares asintóticos de la probabilidad y la inferencia estadística: (1) Ley Débil de los Grandes Números (Khinchin): El promedio muestral \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\) de variables i.i.d. con media \\(\\mu\\) converge en probabilidad a \\(\\mu\\) (\\(\\bar{X}_n \\xrightarrow{P} \\mu\\)); (2) Teorema del Límite Central de Lindeberg-Lévy: La suma estandarizada \\(Z_n = \\frac{\\sum X_i - n\\mu}{\\sigma \\sqrt{n}} = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}}\\) converge en distribución a una normal estándar \\(\\mathcal{N}(0, 1)\\) conforme \\(n \\to \\infty\\).",
        formula:    "\\lim_{n \\to \\infty} P\\left( \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\le z \\right) = \\Phi(z) = \\int_{-\\infty}^z \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2} dt",
        notas: [
          "El TLC explica por qué tantos fenómenos en la naturaleza, ingeniería y sociedad exhiben distribuciones acampanadas normales.",
          "Aproximación Normal a la Binomial (De Moivre-Laplace): \\(\\text{Bin}(n,p) \\approx \\mathcal{N}(np, np(1-p))\\) cuando \\(np \\ge 5\\) y \\(n(1-p) \\ge 5\\).",
          "Regla práctica: A partir de \\(n \\ge 30\\), el promedio muestral es prácticamente indistinguible de una distribución normal."
        ],
        widget: "tlc",
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// BANCO DE QUIZZES (≥ 50 REACTIVOS CON EXPLICACIONES DETALLADAS)
// ══════════════════════════════════════════════════════════════════════════════
export const QUIZZES = [
  // ── UNIDAD 1: Espacios de Probabilidad y Combinatoria (13 preguntas) ────────
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
    explicacion: "La palabra 'PROBABILIDAD' tiene 11 letras en total con repeticiones: 'B' se repite 2 veces, 'A' 2 veces y 'I' 2 veces. Aplicando la fórmula de permutaciones con repetición: \\(PR_{11}^{2,2,2} = \\frac{11!}{2! \\cdot 2! \\cdot 2!} = \\frac{39,916,800}{8} = 4,989,600\\).",
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
    explicacion: "Una \\(\\sigma\\)-álgebra sobre \\(\\Omega\\) satisface obligatoriamente: (1) \\(\\Omega \\in \\mathcal{F}\\), (2) \\(A \\in \\mathcal{F} \\implies A^c \\in \\mathcal{F}\\), y (3) Si \\(A_1, A_2, \\dots \\in \\mathcal{F}\\), entonces \\(\\bigcup_{i=1}^\\infty A_i \\in \\mathcal{F}\\).",
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
    explicacion: "El número de formas de elegir 3 ases de 4 es \\(\\binom{4}{3} = 4\\), y el total de ternas de 52 cartas es \\(\\binom{52}{3} = \\frac{52 \\times 51 \\times 50}{6} = 22,100\\). Por Laplace: \\(P = \\frac{4}{22,100} = \\frac{1}{5,525}\\).",
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
    pregunta: "Si \\(P(A) = 0.7\\), ¿cuál es el valor de \\(P(A^c)\\)?",
    opciones: [
      "\\(0.7\\)",
      "\\(0.3\\)",
      "\\(-0.7\\)",
      "\\(1.43\\)"
    ],
    correcta: 1,
    explicacion: "Por los axiomas de Kolmogórov, \\(P(A^c) = 1 - P(A) = 1 - 0.7 = 0.3\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 11,
    pregunta: "La \\(\\sigma\\)-álgebra más pequeña posible sobre un espacio muestral \\(\\Omega\\) no vacío es:",
    opciones: [
      "\\(\\mathcal{P}(\\Omega)\\)",
      "\\(\\{\\emptyset, \\Omega\\}\\) (\\(\\sigma\\)-álgebra trivial)",
      "\\(\\{\\Omega\\}\\)",
      "La \\(\\sigma\\)-álgebra de Borel"
    ],
    correcta: 1,
    explicacion: "La colección \\(\\{\\emptyset, \\Omega\\}\\) contiene al espacio completo, es cerrada bajo complementos (\\(\\emptyset^c = \\Omega\\)) y bajo uniones numerables, constituyendo la \\(\\sigma\\)-álgebra trivial o mínima.",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 12,
    pregunta: "Si se lanzan dos dados honestos de 6 caras, ¿cuál es la probabilidad de que la suma de sus caras sea estrictamente mayor que 9?",
    opciones: [
      "\\(6/36 = 1/6\\)",
      "\\(4/36 = 1/9\\)",
      "\\(10/36 = 5/18\\)",
      "\\(12/36 = 1/3\\)"
    ],
    correcta: 0,
    explicacion: "Los resultados con suma \\(> 9\\) son: suma 10 \\(\\{(4,6),(5,5),(6,4)\\}\\) (3 casos), suma 11 \\(\\{(5,6),(6,5)\\}\\) (2 casos), suma 12 \\(\\{(6,6)\\}\\) (1 caso). Total de casos favorables = \\(3 + 2 + 1 = 6\\). Por Laplace: \\(P = 6/36 = 1/6\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "facil",
  },
  {
    id: 13,
    pregunta: "¿Por qué el espacio medible \\((\\mathbb{R}, \\mathcal{P}(\\mathbb{R}))\\) no puede admitir una medida de probabilidad no trivial que sea invariante por traslaciones?",
    opciones: [
      "Porque los números reales son infinitos.",
      "Por la existencia de conjuntos no medibles construidos con el axioma de elección (Conjunto de Vitali).",
      "Porque Kolmogórov prohibió las probabilidades continuas.",
      "Porque la suma de probabilidades reales siempre diverge a infinito."
    ],
    correcta: 1,
    explicacion: "El teorema de Vitali (1905) demuestra que bajo el Axioma de Elección es imposible asignar una medida de probabilidad \\(\\sigma\\)-aditiva, no trivial e invariante por traslaciones a todos los subconjuntos de \\(\\mathcal{P}(\\mathbb{R})\\), justificando el uso indispensable de la \\(\\sigma\\)-álgebra de Borel \\(\\mathcal{B}(\\mathbb{R})\\).",
    nivel: "Espacios de Probabilidad y Combinatoria",
    dificultad: "dificil",
  },

  // ── UNIDAD 2: Probabilidad Condicional e Inferencia Bayesiana (13 preguntas) ───
  {
    id: 14,
    pregunta: "Si \\(P(A) = 0.5\\), \\(P(B) = 0.4\\) y \\(P(A \\cap B) = 0.2\\), ¿cuánto vale \\(P(A|B)\\)?",
    opciones: [
      "\\(0.2 / 0.5 = 0.4\\)",
      "\\(0.2 / 0.4 = 0.5\\)",
      "\\(0.5 \\times 0.4 = 0.2\\)",
      "\\(0.5 + 0.4 = 0.9\\)"
    ],
    correcta: 1,
    explicacion: "Por definición de probabilidad condicional: \\(P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.4} = 0.5\\). Nótese que como \\(P(A|B) = P(A) = 0.5\\), \\(A\\) y \\(B\\) son independientes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 15,
    pregunta: "Dos eventos \\(A\\) y \\(B\\) tienen probabilidades \\(P(A) = 0.3\\) y \\(P(B) = 0.4\\). Si son independientes, ¿cuál es la probabilidad de su unión \\(P(A \\cup B)\\)?",
    opciones: [
      "\\(0.70\\)",
      "\\(0.58\\)",
      "\\(0.12\\)",
      "\\(0.82\\)"
    ],
    correcta: 1,
    explicacion: "Por independencia, \\(P(A \\cap B) = P(A)P(B) = 0.3 \\times 0.4 = 0.12\\). Por inclusión-exclusión: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.3 + 0.4 - 0.12 = 0.58\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 16,
    pregunta: "Si dos eventos \\(A\\) y \\(B\\) con probabilidades no nulas son mutuamente excluyentes (\\(A \\cap B = \\emptyset\\)), ¿pueden ser estocásticamente independientes?",
    opciones: [
      "Sí, siempre son independientes.",
      "No, nunca pueden ser independientes porque \\(P(A \\cap B) = 0 \\neq P(A)P(B) > 0\\).",
      "Solo si uno de ellos tiene probabilidad 1.",
      "Solo si el espacio muestral es continuo."
    ],
    correcta: 1,
    explicacion: "Para ser independientes se requiere \\(P(A \\cap B) = P(A)P(B)\\). Si son excluyentes, \\(P(A \\cap B) = 0\\), pero si \\(P(A) > 0\\) y \\(P(B) > 0\\), su producto es estrictamente positivo, por lo que \\(0 \\neq P(A)P(B)\\). Dos eventos de probabilidad no nula disjuntos son mutuamente dependientes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 17,
    pregunta: "Una fábrica produce focos con dos máquinas: \\(M_1\\) produce el 60% con 2% defectuosos, y \\(M_2\\) el 40% con 5% defectuosos. ¿Cuál es la probabilidad total de que un foco elegido al azar sea defectuoso?",
    opciones: [
      "\\(7\\% = 0.07\\)",
      "\\(3.2\\% = 0.032\\)",
      "\\(3.5\\% = 0.035\\)",
      "\\(2\\% = 0.02\\)"
    ],
    correcta: 1,
    explicacion: "Por el Teorema de la Probabilidad Total: \\(P(D) = P(M_1)P(D|M_1) + P(M_2)P(D|M_2) = (0.60)(0.02) + (0.40)(0.05) = 0.012 + 0.020 = 0.032\\) (3.2%).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 18,
    pregunta: "En la fábrica anterior, si se selecciona un foco y resulta ser DEFECTUOSO, ¿cuál es la probabilidad a posteriori de que haya sido producido por la máquina \\(M_2\\)?",
    opciones: [
      "\\(0.020 / 0.032 = 62.5\\%\\)",
      "\\(40\\%\\)",
      "\\(50\\%\\)",
      "\\(37.5\\%\\)"
    ],
    correcta: 0,
    explicacion: "Aplicando el Teorema de Bayes: \\(P(M_2|D) = \\frac{P(M_2)P(D|M_2)}{P(D)} = \\frac{(0.40)(0.05)}{0.032} = \\frac{0.020}{0.032} = 0.625 = 62.5\\%\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 19,
    pregunta: "Una enfermedad tiene una prevalencia del 1% (\\(P(E) = 0.01\\)). Un test tiene sensibilidad del 99% (\\(P(+|E) = 0.99\\)) y especificidad del 95% (\\(P(-|E^c) = 0.95\\)). Si una persona da positivo, ¿cuál es su probabilidad real de estar enferma \\(P(E|+)\\)?",
    opciones: [
      "\\(99\\%\\)",
      "\\(95\\%\\)",
      "\\(16.67\\%\\)",
      "\\(50\\%\\)"
    ],
    correcta: 2,
    explicacion: "\\(P(+) = P(E)P(+|E) + P(E^c)P(+|E^c) = (0.01)(0.99) + (0.99)(0.05) = 0.0099 + 0.0495 = 0.0594\\). Por Bayes: \\(P(E|+) = \\frac{0.0099}{0.0594} \\approx 0.1667 = 16.67\\%\\). Este resultado ilustra la Falacia de la Tasa Base.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "dificil",
  },
  {
    id: 20,
    pregunta: "¿Qué propiedad describe a la regla de la cadena para tres eventos \\(A, B, C\\)?",
    opciones: [
      "\\(P(A \\cap B \\cap C) = P(A) + P(B) + P(C)\\)",
      "\\(P(A \\cap B \\cap C) = P(A) P(B|A) P(C|A \\cap B)\\)",
      "\\(P(A \\cap B \\cap C) = P(A|B) P(B|C) P(C|A)\\)",
      "\\(P(A \\cap B \\cap C) = P(A)P(B)P(C)\\) solo si son dependientes"
    ],
    correcta: 1,
    explicacion: "La regla de la cadena de la probabilidad condicional generaliza la regla del producto sucesivamente: \\(P(A \\cap B \\cap C) = P(A) \\frac{P(A \\cap B)}{P(A)} \\frac{P(A \\cap B \\cap C)}{P(A \\cap B)} = P(A) P(B|A) P(C|A \\cap B)\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 21,
    pregunta: "Si \\(P(A|B) = 0.8\\) y \\(P(A|B^c) = 0.8\\), ¿qué podemos concluir sobre los eventos \\(A\\) y \\(B\\)?",
    opciones: [
      "Son mutuamente excluyentes.",
      "Son estocásticamente independientes.",
      "Uno es subconjunto del otro.",
      "No existe información suficiente."
    ],
    correcta: 1,
    explicacion: "Por probabilidad total, \\(P(A) = P(B)P(A|B) + P(B^c)P(A|B^c) = 0.8(P(B) + P(B^c)) = 0.8(1) = 0.8\\). Como \\(P(A|B) = P(A) = 0.8\\), la condición de \\(B\\) no altera a \\(A\\), por lo que \\(A\\) y \\(B\\) son independientes.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 22,
    pregunta: "¿Cuál de las siguientes condiciones es estrictamente requerida para aplicar el Teorema de Bayes?",
    opciones: [
      "Que todos los eventos de la partición tengan exactamente la misma probabilidad.",
      "Que los eventos \\(B_1, \\dots, B_k\\) formen una partición de \\(\\Omega\\) con \\(P(B_i) > 0\\) y \\(P(A) > 0\\).",
      "Que las variables aleatorias sean continuas gaussianas.",
      "Que no existan falsos positivos en el sistema."
    ],
    correcta: 1,
    explicacion: "El Teorema de Bayes requiere que las causas o hipótesis \\(B_i\\) formen un sistema completo (partición) mutuamente excluyente y exhaustivo con probabilidades a priori no nulas y que el evento evidencia \\(A\\) tenga \\(P(A) > 0\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 23,
    pregunta: "En el Problema de Monty Hall (3 puertas, 1 auto y 2 cabras), tras elegir una puerta y ver que el presentador abre otra con una cabra, ¿cuál es la probabilidad de ganar el auto si el concursante cambia de puerta?",
    opciones: [
      "\\(1/2 = 50\\%\\)",
      "\\(2/3 \\approx 66.67\\%\\)",
      "\\(1/3 \\approx 33.33\\%\\)",
      "\\(3/4 = 75\\%\\)"
    ],
    correcta: 1,
    explicacion: "La probabilidad inicial de elegir la puerta correcta es \\(1/3\\) y la de fallar es \\(2/3\\). Cuando el presentador revela una cabra, la probabilidad condicional acumulada de que el auto esté en la puerta restante no elegida se concentra en \\(2/3\\). Por tanto, cambiar de puerta duplica las probabilidades de éxito.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 24,
    pregunta: "Si \\(A\\) y \\(B\\) son eventos independientes con \\(P(A) = 0.5\\) y \\(P(B) = 0.6\\), ¿cuál es \\(P(A^c \\cap B^c)\\)?",
    opciones: [
      "\\(0.20\\)",
      "\\(0.30\\)",
      "\\(0.10\\)",
      "\\(0.70\\)"
    ],
    correcta: 0,
    explicacion: "Si \\(A\\) y \\(B\\) son independientes, sus complementos \\(A^c\\) y \\(B^c\\) también son independientes. Por ende, \\(P(A^c \\cap B^c) = P(A^c)P(B^c) = (1 - 0.5)(1 - 0.6) = (0.5)(0.4) = 0.20\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },
  {
    id: 25,
    pregunta: "La falacia del fiscal (Prosecutor's Fallacy) consiste fundamentalmente en:",
    opciones: [
      "Suponer que \\(P(A \\cap B) = P(A) + P(B)\\).",
      "Confundir la probabilidad condicional \\(P(\\text{Evidencia} | \\text{Inocente})\\) con \\(P(\\text{Inocente} | \\text{Evidencia})\\).",
      "Asumir que las pruebas de ADN tienen un 100% de especificidad.",
      "Ignorar el principio de inclusión-exclusión."
    ],
    correcta: 1,
    explicacion: "La falacia del fiscal ocurre al equiparar indebidamente la verosimilitud de la prueba en un inocente con la probabilidad posterior de inocencia dado el hallazgo de la prueba, invirtiendo erróneamente el orden del condicionamiento bayesiano.",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "medio",
  },
  {
    id: 26,
    pregunta: "Si \\(P(A) = 0\\), ¿qué valor tiene \\(P(A \\cap B)\\) para cualquier evento \\(B\\)?",
    opciones: [
      "\\(P(B)\\)",
      "\\(0\\)",
      "Indeterminado",
      "\\(1\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(A \\cap B \\subseteq A\\), por monotonía de la probabilidad \\(0 \\le P(A \\cap B) \\le P(A) = 0\\), lo que obliga a que \\(P(A \\cap B) = 0\\).",
    nivel: "Probabilidad Condicional e Inferencia Bayesiana",
    dificultad: "facil",
  },

  // ── UNIDAD 3: Variables Aleatorias y Distribuciones (13 preguntas) ─────────────
  {
    id: 27,
    pregunta: "Una variable aleatoria continua \\(X\\) tiene función de densidad \\(f(x) = c x^2\\) para \\(0 \\le x \\le 3\\) (y 0 en otro caso). ¿Cuál es el valor de la constante de normalización \\(c\\)?",
    opciones: [
      "\\(c = 1/9\\)",
      "\\(c = 1/27\\)",
      "\\(c = 3\\)",
      "\\(c = 1/3\\)"
    ],
    correcta: 0,
    explicacion: "Por la condición de normalización \\(\\int_0^3 c x^2 dx = 1 \\implies c \\left[ \\frac{x^3}{3} \\right]_0^3 = c \\left( \\frac{27}{3} \\right) = 9c = 1 \\implies c = \\frac{1}{9}\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 28,
    pregunta: "Si \\(X \\sim \\text{Bin}(n=10, p=0.3)\\), ¿cuál es la media \\(\\mathbb{E}[X]\\) y la varianza \\(\\text{Var}(X)\\)?",
    opciones: [
      "\\(\\mathbb{E}[X] = 3\\), \\(\\text{Var}(X) = 2.1\\)",
      "\\(\\mathbb{E}[X] = 3\\), \\(\\text{Var}(X) = 3\\)",
      "\\(\\mathbb{E}[X] = 0.3\\), \\(\\text{Var}(X) = 0.21\\)",
      "\\(\\mathbb{E}[X] = 10\\), \\(\\text{Var}(X) = 2.1\\)"
    ],
    correcta: 0,
    explicacion: "Para una distribución binomial, \\(\\mathbb{E}[X] = np = 10(0.3) = 3\\) y \\(\\text{Var}(X) = np(1-p) = 10(0.3)(0.7) = 2.1\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 29,
    pregunta: "Si los clientes llegan a un banco siguiendo un proceso de Poisson con tasa media \\(\\lambda = 6\\) clientes por hora, ¿cuál es la probabilidad de que lleguen exactamente 2 clientes en una hora determinada?",
    opciones: [
      "\\(18 e^{-6} \\approx 0.0446\\)",
      "\\(6 e^{-6}\\)",
      "\\(1/3\\)",
      "\\(36 e^{-6}\\)"
    ],
    correcta: 0,
    explicacion: "La PMF de Poisson es \\(P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}\\). Para \\(\\lambda=6\\) y \\(k=2\\): \\(P(X=2) = \\frac{6^2 e^{-6}}{2!} = \\frac{36 e^{-6}}{2} = 18 e^{-6} \\approx 0.0446\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 30,
    pregunta: "Si \\(X \\sim \\mathcal{N}(\\mu = 100, \\sigma^2 = 25)\\), ¿cuál es la puntuación estandarizada \\(Z\\) correspondiente a un valor \\(X = 115\\)?",
    opciones: [
      "\\(Z = 3.0\\)",
      "\\(Z = 0.6\\)",
      "\\(Z = 15.0\\)",
      "\\(Z = -3.0\\)"
    ],
    correcta: 0,
    explicacion: "La desviación estándar es \\(\\sigma = \\sqrt{25} = 5\\). Estandarizando: \\(Z = \\frac{X - \\mu}{\\sigma} = \\frac{115 - 100}{5} = \\frac{15}{5} = 3.0\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 31,
    pregunta: "La única distribución continua que posee la propiedad de 'falta de memoria' (es decir, \\(P(X > s+t | X > s) = P(X > t)\\)) es:",
    opciones: [
      "La distribución Normal",
      "La distribución Exponencial",
      "La distribución Uniforme continua",
      "La distribución Gamma"
    ],
    correcta: 1,
    explicacion: "La distribución Exponencial es la única distribución de soporte continuo no acotado que satisface \\(P(X > s+t | X > s) = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 32,
    pregunta: "Para una variable aleatoria continua \\(X\\) con función de distribución \\(F(x)\\), ¿cuánto vale siempre la probabilidad en un punto aislado \\(P(X = c)\\)?",
    opciones: [
      "\\(f(c)\\)",
      "\\(0\\)",
      "\\(F(c)\\)",
      "\\(1\\)"
    ],
    correcta: 1,
    explicacion: "Para variables continuas, \\(P(X = c) = \\lim_{h \\to 0} \\int_{c-h}^c f(t) dt = 0\\). Las probabilidades solo se acumulan sobre intervalos de longitud positiva.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 33,
    pregunta: "Si \\(X \\sim \\text{Geom}(p = 0.2)\\) modela el número de lanzamientos hasta el primer éxito, ¿cuál es su valor esperado \\(\\mathbb{E}[X]\\)?",
    opciones: [
      "\\(0.2\\)",
      "\\(5\\)",
      "\\(1.25\\)",
      "\\(25\\)"
    ],
    correcta: 1,
    explicacion: "Para la distribución geométrica con soporte \\(\\{1, 2, 3, \\dots\\}\\), el valor esperado es \\(\\mathbb{E}[X] = 1/p = 1/0.2 = 5\\) ensayos.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 34,
    pregunta: "Si \\(Z \\sim \\mathcal{N}(0, 1)\\), ¿cuál es la distribución exacta de la variable \\(W = Z^2\\)?",
    opciones: [
      "Exponencial con \\(\\lambda = 1\\)",
      "Chi-cuadrada con 1 grado de libertad (\\(\\chi^2_1\\))",
      "Normal estándar \\(\\mathcal{N}(0,1)\\)",
      "Uniforme en \\([0, 1]\\)"
    ],
    correcta: 1,
    explicacion: "El cuadrado de una variable normal estándar sigue por definición analítica una distribución Chi-cuadrada con 1 grado de libertad: \\(Z^2 \\sim \\chi^2_1 = \\text{Gamma}(\\alpha = 1/2, \\beta = 1/2)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 35,
    pregunta: "Una variable aleatoria continua \\(X\\) sigue una distribución Uniforme en el intervalo \\([2, 8]\\). ¿Cuál es su varianza \\(\\text{Var}(X)\\)?",
    opciones: [
      "\\((8-2)^2 / 12 = 36/12 = 3\\)",
      "\\((8+2)/2 = 5\\)",
      "\\(6\\)",
      "\\(12\\)"
    ],
    correcta: 0,
    explicacion: "Para una distribución \\(U(a, b)\\), la varianza es \\(\\text{Var}(X) = \\frac{(b-a)^2}{12}\\). Con \\(a=2, b=8\\): \\(\\text{Var}(X) = \\frac{6^2}{12} = \\frac{36}{12} = 3\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 36,
    pregunta: "La distribución Gamma con parámetro de forma \\(\\alpha = 1\\) y parámetro de tasa \\(\\beta = \\lambda\\) coincide exactamente con:",
    opciones: [
      "La distribución Normal",
      "La distribución Exponencial(\\(\\lambda\\))",
      "La distribución de Poisson",
      "La distribución Chi-cuadrada con 2 grados de libertad"
    ],
    correcta: 1,
    explicacion: "La PDF de la Gamma es \\(f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}\\). Al sustituir \\(\\alpha=1\\) (con \\(\\Gamma(1)=1\\) y \\(x^0=1\\)), se reduce a \\(f(x) = \\beta e^{-\\beta x}\\), que es la densidad Exponencial(\\(\\beta\\)).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 37,
    pregunta: "Si \\(X\\) e \\(Y\\) tienen función de densidad conjunta \\(f_{X,Y}(x,y)\\), ¿cómo se obtiene la función de densidad marginal \\(f_X(x)\\)?",
    opciones: [
      "\\(f_X(x) = f_{X,Y}(x, y) / f_Y(y)\\)",
      "\\(f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dy\\)",
      "\\(f_X(x) = \\frac{\\partial f_{X,Y}}{\\partial x}\\)",
      "\\(f_X(x) = f_{X,Y}(x, 0)\\)"
    ],
    correcta: 1,
    explicacion: "La densidad marginal de \\(X\\) se obtiene integrando la densidad conjunta sobre todo el soporte de la variable \\(Y\\): \\(f_X(x) = \\int_{-\\infty}^\\infty f_{X,Y}(x, y) dy\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 38,
    pregunta: "Si dos variables aleatorias continuas son independientes, su densidad conjunta satisface:",
    opciones: [
      "\\(f_{X,Y}(x,y) = f_X(x) + f_Y(y)\\)",
      "\\(f_{X,Y}(x,y) = f_X(x) \\cdot f_Y(y)\\) para casi todo \\((x,y)\\)",
      "\\(f_{X,Y}(x,y) = 0\\)",
      "\\(f_{X,Y}(x,y) = \\max(f_X(x), f_Y(y))\\)"
    ],
    correcta: 1,
    explicacion: "La independencia de variables continuas equivale a la factorización de su función de densidad conjunta en el producto de sus densidades marginales: \\(f_{X,Y}(x,y) = f_X(x)f_Y(y)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 39,
    pregunta: "La función de distribución acumulada \\(F_X(x)\\) de cualquier variable aleatoria es obligatoriamente:",
    opciones: [
      "Continua por la izquierda y estrictamente creciente.",
      "Continua por la derecha y no decreciente.",
      "Diferenciable en todo \\(\\mathbb{R}\\).",
      "Simétrica respecto al origen."
    ],
    correcta: 1,
    explicacion: "Por los axiomas de Kolmogórov, toda CDF satisface \\(\\lim_{h \\to 0^+} F_X(x+h) = F_X(x)\\) (continuidad por la derecha) y \\(x_1 \\le x_2 \\implies F_X(x_1) \\le F_X(x_2)\\) (monotonía no decreciente).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },

  // ── UNIDAD 4: Esperanza, Momentos y Teoremas Asintóticos (13 preguntas) ────────
  {
    id: 40,
    pregunta: "Si \\(\\mathbb{E}[X] = 4\\) y \\(\\mathbb{E}[Y] = 5\\), ¿cuánto vale \\(\\mathbb{E}[3X - 2Y + 7]\\)?",
    opciones: [
      "\\(9\\)",
      "\\(3(4) - 2(5) + 7 = 12 - 10 + 7 = 9\\)",
      "\\(17\\)",
      "Depende de si \\(X\\) e \\(Y\\) son independientes"
    ],
    correcta: 1,
    explicacion: "Por la linealidad incondicional del operador esperanza matemática: \\(\\mathbb{E}[3X - 2Y + 7] = 3\\mathbb{E}[X] - 2\\mathbb{E}[Y] + 7 = 3(4) - 2(5) + 7 = 12 - 10 + 7 = 9\\), sin importar la correlación o independencia.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 41,
    pregunta: "Si \\(\\text{Var}(X) = 4\\), ¿cuál es la varianza de la variable transformada \\(Y = -3X + 5\\)?",
    opciones: [
      "\\(-12\\)",
      "\\((-3)^2 \\text{Var}(X) = 9 \\times 4 = 36\\)",
      "\\(17\\)",
      "\\(12\\)"
    ],
    correcta: 1,
    explicacion: "Por las propiedades de la varianza: \\(\\text{Var}(aX + b) = a^2 \\text{Var}(X)\\). Así, \\(\\text{Var}(-3X + 5) = (-3)^2 \\text{Var}(X) = 9 \\times 4 = 36\\). Las constantes aditivas no afectan la varianza.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 42,
    pregunta: "Si \\(X\\) e \\(Y\\) son variables independientes con \\(\\text{Var}(X) = 9\\) y \\(\\text{Var}(Y) = 16\\), ¿cuál es la desviación estándar de \\(X - Y\\)?",
    opciones: [
      "\\(\\sqrt{9 + 16} = \\sqrt{25} = 5\\)",
      "\\(\\sqrt{16 - 9} = \\sqrt{7}\\)",
      "\\(3 - 4 = -1\\)",
      "\\(25\\)"
    ],
    correcta: 0,
    explicacion: "Para variables independientes, las varianzas siempre se suman: \\(\\text{Var}(X - Y) = 1^2 \\text{Var}(X) + (-1)^2 \\text{Var}(Y) = 9 + 16 = 25\\). La desviación estándar es \\(\\sigma = \\sqrt{25} = 5\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 43,
    pregunta: "Según la Desigualdad de Chebyshev, para cualquier variable con media \\(\\mu\\) y varianza \\(\\sigma^2\\), ¿cuál es la cota superior de \\(P(|X - \\mu| \\ge 3\\sigma)\\)?",
    opciones: [
      "\\(1/3 \\approx 33.3\\%\\)",
      "\\(1/3^2 = 1/9 \\approx 11.11\\%\\)",
      "\\(5\\%\\)",
      "\\(0.27\\%\\)"
    ],
    correcta: 1,
    explicacion: "La desigualdad de Chebyshev afirma que \\(P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}\\). Para \\(k = 3\\), \\(P(|X - \\mu| \\ge 3\\sigma) \\le \\frac{1}{9} \\approx 0.1111\\) (11.11%).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 44,
    pregunta: "Si la función generadora de momentos de una variable aleatoria es \\(M_X(t) = e^{2t + 8t^2}\\), ¿cuál es su distribución y parámetros?",
    opciones: [
      "Poisson con \\(\\lambda = 2\\)",
      "Normal con media \\(\\mu = 2\\) y varianza \\(\\sigma^2 = 16\\)",
      "Normal con media \\(\\mu = 2\\) y varianza \\(\\sigma^2 = 8\\)",
      "Gamma con \\(\\alpha = 2, \\beta = 8\\)"
    ],
    correcta: 1,
    explicacion: "La MGF de una Normal \\(\\mathcal{N}(\\mu, \\sigma^2)\\) tiene la forma \\(M(t) = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}\\). Comparando: \\(\\mu = 2\\) y \\(\\frac{1}{2}\\sigma^2 = 8 \\implies \\sigma^2 = 16\\). Por el teorema de unicidad, \\(X \\sim \\mathcal{N}(2, 16)\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 45,
    pregunta: "El Teorema del Límite Central de Lindeberg-Lévy garantiza que para variables aleatorias i.i.d. con media \\(\\mu\\) y varianza \\(\\sigma^2 < \\infty\\), el promedio muestral \\(\\bar{X}_n\\) cumple:",
    opciones: [
      "\\(\\bar{X}_n\\) es exactamente normal para todo \\(n \\ge 1\\).",
      "La distribución de \\(\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}}\\) converge en distribución a \\(\\mathcal{N}(0, 1)\\) cuando \\(n \\to \\infty\\).",
      "La varianza de \\(\\bar{X}_n\\) tiende a infinito.",
      "La media muestral converge a 0."
    ],
    correcta: 1,
    explicacion: "El TLC formaliza que la estandarización del promedio muestral \\(Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}}\\) converge asintóticamente en distribución (ley) a una variable normal estándar \\(\\mathcal{N}(0,1)\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 46,
    pregunta: "Si \\(\\text{Cov}(X,Y) = 0\\), ¿qué se puede afirmar con rigor matemático estricto?",
    opciones: [
      "\\(X\\) e \\(Y\\) son obligatoriamente independientes.",
      "\\(X\\) e \\(Y\\) no tienen asociación lineal (están incorrelacionadas), pero podrían tener dependencia no lineal.",
      "\\(\\mathbb{E}[X+Y] = 0\\).",
      "\\(P(X = Y) = 1\\)."
    ],
    correcta: 1,
    explicacion: "La covarianza nula solo evalúa relaciones lineales. Existen variables fuertemente dependientes con covarianza cero (ejemplo: \\(X \\sim U(-1,1)\\) e \\(Y = X^2\\), donde \\(\\text{Cov}(X,Y) = 0\\) pero \\(Y\\) depende completamente de \\(X\\)). Solo en el caso normal bivariado no-correlación equivale a independencia.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 47,
    pregunta: "Si \\(X \\ge 0\\) y \\(\\mathbb{E}[X] = 10\\), por la Desigualdad de Márkov la cota superior para \\(P(X \\ge 50)\\) es:",
    opciones: [
      "\\(10/50 = 1/5 = 0.20\\)",
      "\\(50/10 = 5\\)",
      "\\(1/25 = 0.04\\)",
      "\\(0.50\\)"
    ],
    correcta: 0,
    explicacion: "La desigualdad de Márkov establece que para \\(X \\ge 0\\) y \\(a > 0\\), \\(P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}\\). Con \\(a = 50\\): \\(P(X \\ge 50) \\le \\frac{10}{50} = 0.20\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 48,
    pregunta: "¿Cómo se obtiene el momento de orden \\(k\\) (\\(\\mathbb{E}[X^k]\\)) a partir de la Función Generadora de Momentos \\(M_X(t)\\)?",
    opciones: [
      "Evaluando \\(M_X(k)\\)",
      "Calculando la \\(k\\)-ésima derivada respecto a \\(t\\) y evaluándola en \\(t=0\\): \\(M_X^{(k)}(0)\\)",
      "Integrando \\(M_X(t)\\) de \\(0\\) a \\(k\\)",
      "Multiplicando \\(M_X(t)\\) por \\(k!\\)"
    ],
    correcta: 1,
    explicacion: "Expandiendo \\(e^{tX} = \\sum_{j=0}^\\infty \\frac{t^j X^j}{j!}\\), se demuestra que \\(\\left. \\frac{d^k M_X(t)}{dt^k} \\right|_{t=0} = \\mathbb{E}[X^k]\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 49,
    pregunta: "La Ley Débil de los Grandes Números establece que el promedio muestral \\(\\bar{X}_n\\) converge a \\(\\mu\\) en:",
    opciones: [
      "Convergencia casi segura (\\(\\text{c.s.}\\))",
      "Convergencia en probabilidad (\\(\\xrightarrow{P}\\))",
      "Convergencia puntual",
      "Convergencia uniforme"
    ],
    correcta: 1,
    explicacion: "La Ley Débil (Khinchin) asegura la convergencia en probabilidad: \\(\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| > \\varepsilon) = 0\\) para todo \\(\\varepsilon > 0\\). La convergencia casi segura corresponde a la Ley Fuerte de Kolmogórov.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 50,
    pregunta: "Si \\(X_1, X_2, \\dots, X_{100}\\) son variables i.i.d. con media \\(\\mu = 5\\) y varianza \\(\\sigma^2 = 4\\), ¿cuál es la distribución aproximada de la suma \\(S_{100} = \\sum_{i=1}^{100} X_i\\)?",
    opciones: [
      "\\(\\mathcal{N}(5, 4)\\)",
      "\\(\\mathcal{N}(500, 400)\\)",
      "\\(\\mathcal{N}(500, 20)\\)",
      "\\(\\text{Bin}(100, 5)\\)"
    ],
    correcta: 1,
    explicacion: "Por el TLC, la suma \\(S_n\\) se aproxima a una normal con media \\(n\\mu = 100(5) = 500\\) y varianza \\(n\\sigma^2 = 100(4) = 400\\) (desviación estándar \\(\\sigma_S = \\sqrt{400} = 20\\)).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 51,
    pregunta: "¿Cuál es la función característica \\(\\varphi_X(t)\\) y por qué es superior a la MGF en análisis armónico?",
    opciones: [
      "Porque no usa números complejos.",
      "\\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\), la cual está acotada por 1 (\\(|\\varphi_X(t)| \\le 1\\)) y existe para TODA variable aleatoria real.",
      "Porque solo sirve para variables discretas.",
      "Porque es idéntica a la función de densidad."
    ],
    correcta: 1,
    explicacion: "La función característica es la transformada de Fourier de la medida de probabilidad: \\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\). Como \\(|e^{itX}| = 1\\), la integral converge absolutamente siempre, existiendo para distribuciones sin momentos finitos (como Cauchy).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 52,
    pregunta: "Si el coeficiente de correlación entre dos variables es \\(\\rho_{XY} = -1\\), esto significa que:",
    opciones: [
      "No existe ninguna relación entre ellas.",
      "Existe una relación lineal perfecta con pendiente negativa: \\(Y = aX + b\\) con \\(a < 0\\).",
      "Una variable es cuadrática respecto a la otra.",
      "La varianza conjunta es negativa."
    ],
    correcta: 1,
    explicacion: "Un valor \\(\\rho_{XY} = \\pm 1\\) indica una relación lineal determinista perfecta. El signo negativo denota que la pendiente de la recta es estrictamente negativa.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// CRÉDITOS INSTITUCIONALES Y AUTORÍA
// ══════════════════════════════════════════════════════════════════════════════
export const CREDITOS = [
  {
    rol:   "Docente Investigador Responsable",
    icono: "🎓",
    personas: [
      {
        nombre:  "Dr. Pablo Eduardo Cancino Marentes",
        detalle: "Profesor e Investigador — Academia de Probabilidad y Estadística · PALMAT UAN",
      },
    ],
  },
  {
    rol:   "Alineación Curricular y Metodología",
    icono: "🏛️",
    personas: [
      {
        nombre:  "Licenciatura en Matemáticas (PALMAT)",
        detalle: "Unidad Académica de Ciencias Básicas e Ingenierías — Universidad Autónoma de Nayarit",
      },
      {
        nombre:  "Plan de Estudios 2024 / Actualización 2026",
        detalle: "Unidad de Aprendizaje: Probabilidad (CBIMAT-234) — 8 Créditos Institucionales",
      },
    ],
  },
  {
    rol:   "Tecnología Educativa y Desarrollo",
    icono: "💻",
    personas: [
      {
        nombre:  "Proyecto de Software Libre Educativo UAN",
        detalle: "Norma Técnica NTE-UAN-APK-001 v1.3 — React, Vite, KaTeX & Capacitor",
      },
    ],
  },
];
