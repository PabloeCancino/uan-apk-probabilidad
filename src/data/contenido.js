// NTE-UAN-APK-001 v1.3 — Base de Conocimiento Curricular: Probabilidad (CBIMAT-234)
// Universidad Autónoma de Nayarit — Licenciatura en Matemáticas (PALMAT Plan 2024 / Act. 2026)
// Docente Responsable: Dr. Pablo Eduardo Cancino Marentes
import { QUIZZES_U1 } from "./quizzes_u1.js";
import { QUIZZES_U2 } from "./quizzes_u2.js";
import { QUIZZES_U3 } from "./quizzes_u3.js";
import { QUIZZES_U4 } from "./quizzes_u4.js";

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
        definicion: "Las distribuciones continuas modelan magnitudes físicas, tiempos y variaciones biológicas/financieras: (1) Normal \\(\\mathcal{N}(\\mu, \\sigma^2)\\): simétrica y canónica por el TLC; (2) Exponencial \\(\\text{Exp}(\\lambda)\\): tiempos de espera entre eventos de Poisson (falta de memoria continua); (3) Gamma \\(\\Gamma(\\alpha, \\beta)\\): suma de \\(\\alpha\\) exponenciales; (4) Beta \\(\\text{Beta}(\\alpha, \\ beta)\\): soporte acotado \\([0,1]\\), ideal para probabilidades a priori; (5) Distribuciones muestrales: \\(t\\)-Student, Chi-cuadrada \\(\\chi^2_k\\) y Snedecor-Fisher \\(F\\).",
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
// BANCO DE QUIZZES (200 REACTIVOS: 50 POR CADA UNIDAD CURRICULAR)
// ══════════════════════════════════════════════════════════════════════════════
export const QUIZZES = [
  ...QUIZZES_U1,
  ...QUIZZES_U2,
  ...QUIZZES_U3,
  ...QUIZZES_U4,
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
