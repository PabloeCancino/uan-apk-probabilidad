// quizzes_u4.js — 50 Reactivos de la Unidad 4: Esperanza Matemática y Teoremas Asintóticos
// Norma NTE-UAN-APK-001 v1.4

export const QUIZZES_U4 = [
  {
    id: 151,
    pregunta: "Por la propiedad de linealidad del operador esperanza matemática, si \\(X\\) y \\(Y\\) son dos variables aleatorias cualesquiera (no necesariamente independientes), ¿cuánto vale \\(\\mathbb{E}[3X - 2Y + 5]\\)?",
    opciones: [
      "\\(3\\mathbb{E}[X] - 2\\mathbb{E}[Y] + 5\\)",
      "\\(3\\mathbb{E}[X] + 2\\mathbb{E}[Y]\\)",
      "\\(3\\mathbb{E}[X] - 2\\mathbb{E}[Y]\\)",
      "\\(6\\mathbb{E}[XY] + 5\\)"
    ],
    correcta: 0,
    explicacion: "El operador esperanza es estrictamente lineal: para cualesquiera constantes \\(a, b, c\\) y variables aleatorias \\(X, Y\\), se cumple siempre \\(\\mathbb{E}[aX + bY + c] = a\\mathbb{E}[X] + b\\mathbb{E}[Y] + c\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 152,
    pregunta: "Si \\(X\\) y \\(Y\\) son variables aleatorias con \\(\\text{Var}(X) = 4\\), \\(\\text{Var}(Y) = 9\\) y \\(\\text{Cov}(X, Y) = 2\\), ¿cuál es la varianza de \\(W = 2X - Y\\)?",
    opciones: [
      "\\(2^2(4) + (-1)^2(9) + 2(2)(-1)(2) = 16 + 9 - 8 = 17\\)",
      "\\(2(4) - 9 = -1\\)",
      "\\(16 + 9 + 8 = 33\\)",
      "\\(4 + 9 - 2 = 11\\)"
    ],
    correcta: 0,
    explicacion: "Por la fórmula de la varianza de una combinación lineal: \\(\\text{Var}(aX + bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\text{Cov}(X,Y)\\). Sustituyendo: \\(\\text{Var}(2X - Y) = 4(4) + 1(9) + 2(2)(-1)(2) = 16 + 9 - 8 = 17\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 153,
    pregunta: "La Desigualdad de Chebyshev garantiza que para cualquier variable aleatoria \\(X\\) con media \\(\\mu\\) y varianza finita \\(\\sigma^2\\), la probabilidad de alejarse al menos \\(k=3\\) desviaciones estándar de su media satisface:",
    opciones: [
      "\\(P(|X - \\mu| \\ge 3\\sigma) \\le \\frac{1}{3^2} = \\frac{1}{9} \\approx 0.1111\\)",
      "\\(P(|X - \\mu| \\ge 3\\sigma) \\le 0.05\\)",
      "\\(P(|X - \\mu| \\ge 3\\sigma) = 0.0027\\)",
      "\\(P(|X - \\mu| \\ge 3\\sigma) \\ge 0.8889\\)"
    ],
    correcta: 0,
    explicacion: "Por Chebyshev: \\(P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}\\). Para \\(k = 3\\): \\(P(|X - \\mu| \\ge 3\\sigma) \\le \\frac{1}{9} \\approx 11.11\\%\\), independientemente de la forma analítica de la distribución.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 154,
    pregunta: "El Teorema del Límite Central (Lindeberg-Lévy) establece que si \\(X_1, \\dots, X_n\\) son variables i.i.d. con media \\(\\mu\\) y varianza finita \\(\\sigma^2\\), la variable tipificada \\(Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}}\\) converge conforme \\(n \\to \\infty\\) en:",
    opciones: [
      "Distribución a una Normal Estándar \\(\\mathcal{N}(0, 1)\\).",
      "Probabilidad a una constante \\(\\sigma\\).",
      "Media cuadrática a una distribución de Poisson.",
      "Casi con certeza a cero."
    ],
    correcta: 0,
    explicacion: "El TLC garantiza formalmente la convergencia en distribución (o convergencia débil) del promedio estandarizado hacia la ley gaussiana universal: \\(Z_n \\xrightarrow{d} \\mathcal{N}(0, 1)\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 155,
    pregunta: "Si la Función Generadora de Momentos (MGF) de una variable \\(X\\) es \\(M_X(t) = \\mathbb{E}[e^{tX}]\\), ¿cómo se obtiene el \\(k\\)-ésimo momento ordinario \\(\\mathbb{E}[X^k]\\)?",
    opciones: [
      "Evaluando la \\(k\\)-ésima derivada en cero: \\(\\mathbb{E}[X^k] = M_X^{(k)}(0) = \\left. \\frac{d^k M_X(t)}{dt^k} \\right|_{t=0}\\).",
      "Integrando \\(M_X(t)\\) de 0 a 1.",
      "Multiplicando \\(M_X(0) \\times k!\\).",
      "Evaluando \\(M_X(k)\\)."
    ],
    correcta: 0,
    explicacion: "Al expandir \\(e^{tX} = \\sum_{k=0}^\\infty \\frac{t^k X^k}{k!}\\), derivar \\(k\\) veces respecto a \\(t\\) y evaluar en \\(t=0\\) aísla exactamente el momento \\(\\mathbb{E}[X^k]\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 156,
    pregunta: "La Desigualdad de Márkov establece que si \\(X\\) es una variable aleatoria no negativa (\\(X \\ge 0\\)) y \\(a > 0\\), entonces:",
    opciones: [
      "\\(P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}\\)",
      "\\(P(X \\ge a) \\ge \\frac{\\mathbb{E}[X]}{a}\\)",
      "\\(P(X \\le a) \\le \\frac{a}{\\mathbb{E}[X]}\\)",
      "\\(P(X \\ge a) \\le \\frac{\\text{Var}(X)}{a^2}\\)"
    ],
    correcta: 0,
    explicacion: "La desigualdad de Márkov acota la probabilidad de cola derecha para variables no negativas a partir exclusivamente de su primer momento: \\(P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 157,
    pregunta: "Si \\(X\\) y \\(Y\\) son dos variables aleatorias independientes, ¿cuál es el valor de su covarianza \\(\\text{Cov}(X, Y)\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\mathbb{E}[X]\\mathbb{E}[Y]\\)",
      "\\(\\text{Var}(X) \\cdot \\text{Var}(Y)\\)"
    ],
    correcta: 0,
    explicacion: "Por independencia, \\(\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]\\). En consecuencia, \\(\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y] = 0\\). (Nota: La recíproca no siempre es cierta).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 158,
    pregunta: "El Coeficiente de Correlación Lineal de Pearson \\(\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}\\) siempre está acotado en el intervalo:",
    opciones: [
      "\\([0, 1]\\)",
      "\\([-1, 1]\\)",
      "\\((-\\infty, \\infty)\\)",
      "\\([0, \\infty)\\)"
    ],
    correcta: 1,
    explicacion: "Por la desigualdad de Cauchy-Schwarz: \\(|\\text{Cov}(X,Y)| \\le \\sigma_X \\sigma_Y \\implies -1 \\le \\rho_{X,Y} \\le 1\\). Los extremos \\(\\pm 1\\) indican una relación lineal determinista perfecta.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 159,
    pregunta: "La Ley Débil de los Grandes Números (Teorema de Khinchin) garantiza que el promedio muestral \\(\\bar{X}_n\\) de variables i.i.d. con media finita \\(\\mu\\) satisface para cualquier \\(\\epsilon > 0\\):",
    opciones: [
      "\\(\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0\\) (convergencia en probabilidad)",
      "\\(\\bar{X}_n = \\mu\\) para todo \\(n > 30\\)",
      "\\(\\lim_{n \\to \\infty} \\text{Var}(\\bar{X}_n) = 1\\)",
      "\\(P(\\bar{X}_n = \\mu) = 1\\)"
    ],
    correcta: 0,
    explicacion: "La convergencia en probabilidad \\(\\bar{X}_n \\xrightarrow{P} \\mu\\) establece que la probabilidad de que el promedio difiera de la media teórica por más de un margen \\(\\epsilon\\) infinitesimal tiende a cero conforme crece el tamaño muestral.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 160,
    pregunta: "Si \\(X_1, X_2, \\dots, X_n\\) son variables aleatorias independientes con la misma MGF \\(M_X(t)\\), la MGF de su suma \\(S_n = \\sum_{i=1}^n X_i\\) es:",
    opciones: [
      "\\(n M_X(t)\\)",
      "\\([M_X(t)]^n\\)",
      "\\(M_X(nt)\\)",
      "\\(e^{n M_X(t)}\\)"
    ],
    correcta: 1,
    explicacion: "Para variables independientes: \\(M_{S_n}(t) = \\mathbb{E}[e^{t \\sum X_i}] = \\mathbb{E}[\\prod e^{t X_i}] = \\prod \\mathbb{E}[e^{t X_i}] = [M_X(t)]^n\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 161,
    pregunta: "¿Por qué la Función Característica \\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\) es preferida teóricamente sobre la MGF en la demostración rigurosa del TLC?",
    opciones: [
      "Porque \\(\\varphi_X(t)\\) siempre existe para toda variable aleatoria real (dado que \\(|e^{itX}| = 1\\)), mientras que la MGF puede no existir.",
      "Porque solo usa números enteros.",
      "Porque es igual a cero en el infinito.",
      "Porque no requiere integración."
    ],
    correcta: 0,
    explicacion: "La función característica involucra la exponencial compleja, cuyo módulo acotado \\(|e^{itX}| = 1\\) garantiza su existencia para cualquier distribución, superando las limitaciones de la MGF en familias con colas pesadas (como Cauchy).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 162,
    pregunta: "Si \\(X\\) es una variable aleatoria con \\(\\mathbb{E}[X] = 10\\) y \\(\\mathbb{E}[X^2] = 116\\), ¿cuál es su desviación estándar \\(\\sigma_X\\)?",
    opciones: [
      "\\(\\text{Var}(X) = 116 - 10^2 = 16 \\implies \\sigma = \\sqrt{16} = 4\\)",
      "\\(\\sigma = 16\\)",
      "\\(\\sigma = 11.6\\)",
      "\\(\\sigma = \\sqrt{116} \\approx 10.77\\)"
    ],
    correcta: 0,
    explicacion: "Por la fórmula de cálculo de varianza: \\(\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = 116 - 100 = 16\\). Por tanto, la desviación estándar es \\(\\sigma = \\sqrt{16} = 4\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 163,
    pregunta: "La Ley Fuerte de los Grandes Números (SLLN de Kolmogórov) establece que el promedio muestral converge a la media teórica en el sentido de:",
    opciones: [
      "Convergencia casi segura (almost sure): \\(P(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu) = 1\\).",
      "Convergencia en distribución únicamente.",
      "Convergencia en cota superior.",
      "Convergencia periódica."
    ],
    correcta: 0,
    explicacion: "La Ley Fuerte es un resultado asintótico más potente que la Ley Débil: afirma que el conjunto de trayectorias muestrales para las cuales el límite del promedio no converge a \\(\\mu\\) tiene medida de probabilidad exactamente cero.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 164,
    pregunta: "Si \\(X\\) es una variable aleatoria que representa el número de caras en 100 lanzamientos de una moneda justa, ¿cuál es su valor esperado \\(\\mathbb{E}[X]\\)?",
    opciones: [
      "\\(50\\)",
      "\\(100\\)",
      "\\(25\\)",
      "\\(0.5\\)"
    ],
    correcta: 0,
    explicacion: "Para \\(X \\sim \\text{Bin}(n=100, p=0.5)\\), \\(\\mathbb{E}[X] = np = 100 \\times 0.5 = 50\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 165,
    pregunta: "Si \\(\\text{Var}(X) = 9\\), ¿cuánto vale \\(\\text{Var}(-3X + 4)\\)?",
    opciones: [
      "\\((-3)^2 \\text{Var}(X) = 9 \\times 9 = 81\\)",
      "\\(-27\\)",
      "\\(27 + 4 = 31\\)",
      "\\(81 + 16 = 97\\)"
    ],
    correcta: 0,
    explicacion: "Por las propiedades de la varianza: \\(\\text{Var}(aX + b) = a^2 \\text{Var}(X)\\). Las constantes aditivas no aportan variabilidad y los escalares salen al cuadrado: \\((-3)^2(9) = 81\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 166,
    pregunta: "En una ruleta europea (números del 0 al 36, total 37 casillas), apostar 1 dólar al color rojo paga 1 dólar neto si sale rojo (18 casillas) y pierde 1 dólar en otro caso (19 casillas). ¿Cuál es la ganancia esperada del jugador por apuesta?",
    opciones: [
      "\\((+1)(18/37) + (-1)(19/37) = -1/37 \\approx -0.0270\\text{ dólares}\\)",
      "\\(0\\text{ dólares}\\)",
      "\\(+1/37\\text{ dólares}\\)",
      "\\(-0.50\\text{ dólares}\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\mathbb{E}[X] = (+1)(18/37) + (-1)(19/37) = -1/37 \\approx -0.027\\) dólares (ventaja de la casa del 2.70%).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 167,
    pregunta: "La Desigualdad de Cauchy-Schwarz para variables aleatorias con momentos de segundo orden finitos establece que:",
    opciones: [
      "\\((\\mathbb{E}[XY])^2 \\le \\mathbb{E}[X^2] \\cdot \\mathbb{E}[Y^2]\\)",
      "\\(\\mathbb{E}[X + Y] \\le \\mathbb{E}[X] + \\mathbb{E}[Y]\\)",
      "\\(\\mathbb{E}[X/Y] = \\mathbb{E}[X] / \\mathbb{E}[Y]\\)",
      "\\(\\text{Var}(XY) = \\text{Var}(X)\\text{Var}(Y)\\)"
    ],
    correcta: 0,
    explicacion: "Es la desigualdad fundamental en el espacio de Hilbert \\(L^2(\\Omega, \\mathcal{F}, P)\\) con producto interno \\(\\langle X, Y \\rangle = \\mathbb{E}[XY]\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 168,
    pregunta: "Si \\(X \\ge 0\\) con \\(\\mathbb{E}[X] = 5\\), ¿cuál es la cota superior dada por Márkov para \\(P(X \\ge 20)\\)?",
    opciones: [
      "\\(5/20 = 0.25\\)",
      "\\(20/5 = 4\\)",
      "\\(0.05\\)",
      "\\(1/25 = 0.04\\)"
    ],
    correcta: 0,
    explicacion: "Por la desigualdad de Márkov: \\(P(X \\ge 20) \\le \\frac{\\mathbb{E}[X]}{20} = \\frac{5}{20} = 0.25\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 169,
    pregunta: "Si \\(X_1, \\dots, X_n\\) son variables aleatorias con la misma varianza \\(\\sigma^2\\) y correlación mutua nula, la varianza del promedio muestral \\(\\bar{X}_n = \\frac{1}{n}\\sum X_i\\) es:",
    opciones: [
      "\\(\\sigma^2 / n\\)",
      "\\(\\sigma^2 / \\sqrt{n}\\)",
      "\\(n \\sigma^2\\)",
      "\\(\\sigma^2\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\text{Var}(\\bar{X}_n) = \\text{Var}\\left(\\frac{1}{n}\\sum X_i\\right) = \\frac{1}{n^2} \\sum \\text{Var}(X_i) = \\frac{1}{n^2} (n\\sigma^2) = \\frac{\\sigma^2}{n}\\). Su desviación estándar es el error estándar \\(\\sigma / \\sqrt{n}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 170,
    pregunta: "La Desigualdad de Jensen establece que si \\(g(x)\\) es una función estrictamente convexa y \\(X\\) es una variable aleatoria, entonces:",
    opciones: [
      "\\(g(\\mathbb{E}[X]) \\le \\mathbb{E}[g(X)]\\)",
      "\\(g(\\mathbb{E}[X]) \\ge \\mathbb{E}[g(X)]\\)",
      "\\(g(\\mathbb{E}[X]) = \\mathbb{E}[g(X)]\\)",
      "\\(\\mathbb{E}[g(X)] = 0\\)"
    ],
    correcta: 0,
    explicacion: "Para funciones convexas (como \\(g(x)=x^2\\) o \\(e^x\\)), la función de la media nunca supera a la media de la función: \\(g(\\mathbb{E}[X]) \\le \\mathbb{E}[g(X)]\\). Un ejemplo directo es \\((\\mathbb{E}[X])^2 \\le \\mathbb{E}[X^2]\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 171,
    pregunta: "La MGF de una variable Normal estándar \\(Z \\sim \\mathcal{N}(0, 1)\\) es:",
    opciones: [
      "\\(M_Z(t) = e^{t^2 / 2}\\)",
      "\\(M_Z(t) = e^t\\)",
      "\\(M_Z(t) = \\frac{1}{1 - t}\\)",
      "\\(M_Z(t) = \\frac{1}{\\sqrt{1 - 2t}}\\)"
    ],
    correcta: 0,
    explicacion: "Completando el cuadrado en la integral gaussiana: \\(M_Z(t) = \\int_{-\\infty}^\\infty e^{tz} \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} dz = e^{t^2/2} \\int_{-\\infty}^\\infty \\frac{1}{\\sqrt{2\\pi}} e^{-(z-t)^2/2} dz = e^{t^2/2}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 172,
    pregunta: "Si \\(X\\) tiene media \\(\\mu = 100\\) y desviación estándar \\(\\sigma = 10\\), ¿qué porcentaje mínimo de los valores está garantizado que cae en el intervalo \\([80, 120]\\) según Chebyshev?",
    opciones: [
      "\\(75\\%\\)",
      "\\(95\\%\\)",
      "\\(68\\%\\)",
      "\\(88.89\\%\\)"
    ],
    correcta: 0,
    explicacion: "El intervalo \\([80, 120]\\) corresponde a \\(\\mu \\pm 2\\sigma\\) (\\(k = 2\\)). Por Chebyshev: \\(P(|X - \\mu| < 2\\sigma) \\ge 1 - \\frac{1}{2^2} = 1 - 0.25 = 0.75\\) (al menos 75%).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 173,
    pregunta: "El Teorema de Aproximación de De Moivre-Laplace establece que para una variable binomial \\(X \\sim \\text{Bin}(n, p)\\) con \\(n\\) grande, se puede aproximar mediante una normal \\(\\mathcal{N}(np, np(1-p))\\) aplicando la corrección por continuidad:",
    opciones: [
      "\\(P(X \\le k) \\approx P(Z \\le \\frac{k + 0.5 - np}{\\sqrt{np(1-p)}})\\)",
      "\\(P(X \\le k) \\approx P(Z \\le \\frac{k - np}{np})\\)",
      "\\(P(X \\le k) = \\Phi(k)\\)",
      "\\(P(X = k) \\approx 0\\)"
    ],
    correcta: 0,
    explicacion: "La corrección por continuidad de Yates ajusta el paso de una variable discreta con soporte entero a una continua expandiendo el intervalo en \\(\\pm 0.5\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 174,
    pregunta: "Si dos variables aleatorias tienen covarianza \\(\\text{Cov}(X, Y) = 0\\), ¿significa esto necesariamente que sean independientes?",
    opciones: [
      "No, la incorrelación solo implica ausencia de relación lineal; pueden tener dependencias no lineales (salvo en el caso normal conjunto).",
      "Sí, siempre garantiza independencia.",
      "Solo si sus varianzas son iguales.",
      "Solo si ambas son discretas."
    ],
    correcta: 0,
    explicacion: "Un contraejemplo clásico: Si \\(X \\sim \\mathcal{U}(-1, 1)\\) y \\(Y = X^2\\), \\(\\text{Cov}(X,Y) = 0\\), pero \\(Y\\) depende completamente de \\(X\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 175,
    pregunta: "El tercer momento central \\(\\mu_3 = \\mathbb{E}[(X - \\mu)^3]\\) estandarizado \\(\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}\\) mide:",
    opciones: [
      "El Coeficiente de Asimetría (Skewness) de la distribución.",
      "La curtosis (apuntamiento).",
      "La dispersión media.",
      "El rango intercuartílico."
    ],
    correcta: 0,
    explicacion: "\\(\\gamma_1\\) cuantifica la asimetría de la distribución: \\(\\gamma_1 = 0\\) indica simetría perfecta, \\(\\gamma_1 > 0\\) sesgo hacia la derecha y \\(\\gamma_1 < 0\\) sesgo hacia la izquierda.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 176,
    pregunta: "El cuarto momento central estandarizado \\(\\gamma_2 = \\frac{\\mu_4}{\\sigma^4} - 3\\) se denomina:",
    opciones: [
      "Exceso de Curtosis (Kurtosis) respecto a la distribución normal.",
      "Coeficiente de variación.",
      "Asimetría cuadrática.",
      "Momento de inercia."
    ],
    correcta: 0,
    explicacion: "El exceso de curtosis compara el apuntamiento y el peso de las colas de una distribución con el de la distribución normal estándar (cuya curtosis es 3, por lo que su exceso es 0).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 177,
    pregunta: "Si \\(X \\sim \\text{Exp}(\\lambda)\\), su MGF es:",
    opciones: [
      "\\(M_X(t) = \\frac{\\lambda}{\\lambda - t}\\) para \\(t < \\lambda\\)",
      "\\(M_X(t) = \\frac{1}{1 - \\lambda t}\\)",
      "\\(M_X(t) = e^{\\lambda t}\\)",
      "\\(M_X(t) = \\frac{\\lambda^2}{(\\lambda - t)^2}\\)"
    ],
    correcta: 0,
    explicacion: "\\(M_X(t) = \\int_0^\\infty e^{tx} \\lambda e^{-\\lambda x} dx = \\lambda \\int_0^\\infty e^{-(\\lambda - t)x} dx = \\frac{\\lambda}{\\lambda - t}\\) convergente para \\(t < \\lambda\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 178,
    pregunta: "Si \\(X\\) y \\(Y\\) son independientes con \\(\\mathbb{E}[X] = 4\\) y \\(\\mathbb{E}[Y] = 5\\), ¿cuánto vale \\(\\mathbb{E}[XY]\\)?",
    opciones: [
      "\\(4 \\times 5 = 20\\)",
      "\\(9\\)",
      "\\(1\\)",
      "\\(41\\)"
    ],
    correcta: 0,
    explicacion: "Para variables aleatorias independientes: \\(\\mathbb{E}[XY] = \\mathbb{E}[X] \\cdot \\mathbb{E}[Y] = 4 \\times 5 = 20\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 179,
    pregunta: "La Desigualdad de Cantelli (Chebyshev unilateral) establece que para cualquier \\(k > 0\\):",
    opciones: [
      "\\(P(X - \\mu \\ge k\\sigma) \\le \\frac{1}{1 + k^2}\\)",
      "\\(P(X - \\mu \\ge k\\sigma) \\le \\frac{1}{k^2}\\)",
      "\\(P(X - \\mu \\ge k\\sigma) \\le \\frac{1}{2k^2}\\)",
      "\\(P(X - \\mu \\ge k\\sigma) = 0\\)"
    ],
    correcta: 0,
    explicacion: "La desigualdad de Cantelli proporciona una cota superior más ajustada para una sola cola de la distribución: \\(P(X - \\mu \\ge k\\sigma) \\le \\frac{1}{1 + k^2}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 180,
    pregunta: "Si \\(X_1, \\dots, X_{100}\\) son variables i.i.d. con media \\(\\mu = 2\\) y varianza \\(\\sigma^2 = 4\\), ¿cuál es la distribución aproximada de su suma \\(S_{100} = \\sum_{i=1}^{100} X_i\\)?",
    opciones: [
      "\\(S_{100} \\approx \\mathcal{N}(200, 400)\\)",
      "\\(S_{100} \\approx \\mathcal{N}(2, 0.04)\\)",
      "\\(S_{100} \\approx \\mathcal{N}(200, 20)\\)",
      "\\(S_{100} \\approx \\text{Poisson}(200)\\)"
    ],
    correcta: 0,
    explicacion: "Por el TLC: \\(\\mathbb{E}[S_n] = n\\mu = 100(2) = 200\\), y \\(\\text{Var}(S_n) = n\\sigma^2 = 100(4) = 400\\). Por tanto, \\(S_{100} \\approx \\mathcal{N}(200, 400)\\) con desviación estándar \\(\\sqrt{400} = 20\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 181,
    pregunta: "¿Cuál es el valor de \\(\\mathbb{E}[c]\\) si \\(c\\) es una constante fija?",
    opciones: [
      "\\(c\\)",
      "\\(0\\)",
      "\\(c^2\\)",
      "\\(1\\)"
    ],
    correcta: 0,
    explicacion: "El valor esperado de una constante es la misma constante: \\(\\mathbb{E}[c] = c\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 182,
    pregunta: "¿Cuál es el valor de \\(\\text{Var}(c)\\) para una constante fija \\(c\\)?",
    opciones: [
      "\\(0\\)",
      "\\(c\\)",
      "\\(c^2\\)",
      "Indefinido"
    ],
    correcta: 0,
    explicacion: "Una constante no presenta ninguna variabilidad aleatoria: \\(\\text{Var}(c) = \\mathbb{E}[(c - c)^2] = 0\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 183,
    pregunta: "Si \\(X\\) y \\(Y\\) son independientes con \\(\\text{Var}(X) = 3\\) y \\(\\text{Var}(Y) = 5\\), ¿cuánto vale \\(\\text{Var}(X - Y)\\)?",
    opciones: [
      "\\(3 + 5 = 8\\)",
      "\\(3 - 5 = -2\\)",
      "\\(\\sqrt{8}\\)",
      "\\(15\\)"
    ],
    correcta: 0,
    explicacion: "Para variables independientes: \\(\\text{Var}(X - Y) = 1^2 \\text{Var}(X) + (-1)^2 \\text{Var}(Y) = 3 + 5 = 8\\). Las varianzas siempre se suman.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 184,
    pregunta: "La convergencia en media cuadrática \\(X_n \\xrightarrow{L^2} X\\) se define formalmente como:",
    opciones: [
      "\\(\\lim_{n \\to \\infty} \\mathbb{E}[(X_n - X)^2] = 0\\)",
      "\\(\\lim_{n \\to \\infty} P(X_n = X) = 1\\)",
      "\\(\\lim_{n \\to \\infty} \\mathbb{E}[X_n] = X\\)",
      "\\(\\text{Var}(X_n) = \\text{Var}(X)\\)"
    ],
    correcta: 0,
    explicacion: "La convergencia en norma \\(L^2\\) exige que la esperanza del error cuadrático tienda a cero conforme \\(n \\to \\infty\\), lo cual implica la convergencia en probabilidad.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 185,
    pregunta: "El Lema de Fatou en teoría de la probabilidad permite:",
    opciones: [
      "Intercambiar el límite inferior con la integral de esperanza: \\(\\mathbb{E}[\\liminf X_n] \\le \\liminf \\mathbb{E}[X_n]\\) para variables no negativas.",
      "Calcular varianzas sin integrales.",
      "Demostrar que toda distribución es simétrica.",
      "Resolver ecuaciones diferenciales estocásticas."
    ],
    correcta: 0,
    explicacion: "El Lema de Fatou es una herramienta fundamental del análisis real y la teoría de la medida de Lebesgue para manejar sucesiones de funciones medibles no negativas.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 186,
    pregunta: "El Teorema de Convergencia Dominada de Lebesgue establece que si \\(X_n \\to X\\) en probabilidad o casi seguramente y \\(|X_n| \\le Y\\) con \\(\\mathbb{E}[Y] < \\infty\\), entonces:",
    opciones: [
      "\\(\\lim_{n \\to \\infty} \\mathbb{E}[X_n] = \\mathbb{E}[X]\\)",
      "\\(\\mathbb{E}[X] = \\infty\\)",
      "\\(\\text{Var}(X_n) = 0\\)",
      "\\(X = Y\\)"
    ],
    correcta: 0,
    explicacion: "Garantiza la validez del intercambio del límite con el operador de integración/esperanza bajo la existencia de una variable dominante integrable.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 187,
    pregunta: "Si \\(X \\sim \\text{Poisson}(\\lambda)\\), su MGF es:",
    opciones: [
      "\\(M_X(t) = e^{\\lambda (e^t - 1)}\\)",
      "\\(M_X(t) = \\lambda e^t\\)",
      "\\(M_X(t) = e^{\\lambda t}\\)",
      "\\(M_X(t) = \\frac{1}{1 - \\lambda t}\\)"
    ],
    correcta: 0,
    explicacion: "\\(M_X(t) = \\sum_{k=0}^\\infty e^{tk} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum \\frac{(\\lambda e^t)^k}{k!} = e^{-\\lambda} e^{\\lambda e^t} = e^{\\lambda(e^t - 1)}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 188,
    pregunta: "Si \\(X \\sim \\text{Bin}(n, p)\\), su MGF es:",
    opciones: [
      "\\(M_X(t) = (1 - p + p e^t)^n\\)",
      "\\(M_X(t) = (p + (1-p)e^t)^n\\)",
      "\\(M_X(t) = e^{npt}\\)",
      "\\(M_X(t) = n(1 - p + pe^t)\\)"
    ],
    correcta: 0,
    explicacion: "Como \\(X = \\sum_{i=1}^n B_i\\) con \\(B_i \\sim \\text{Bernoulli}(p)\\) cuya MGF es \\(1-p+pe^t\\), la MGF de su suma independiente es \\((1-p+pe^t)^n\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 189,
    pregunta: "El Teorema de Continuidad de Paul Lévy establece una correspondencia biyectiva fundamental entre:",
    opciones: [
      "La convergencia puntual de funciones características \\(\\varphi_{X_n}(t) \\to \\varphi_X(t)\\) y la convergencia en distribución de las variables aleatorias \\(X_n \\xrightarrow{d} X\\).",
      "La media y la moda.",
      "El espacio muestral y los números enteros.",
      "La varianza y el tamaño muestral."
    ],
    correcta: 0,
    explicacion: "El Teorema de Continuidad de Lévy es el puente analítico que permite demostrar teoremas asintóticos (como el TLC) trabajando algebraicamente con funciones características.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 190,
    pregunta: "Si \\(X\\) toma los valores -1, 0, 1 con probabilidades 0.25, 0.50 y 0.25 respectivamente, ¿cuál es su varianza \\(\\text{Var}(X)\\)?",
    opciones: [
      "\\(0.50\\)",
      "\\(0.25\\)",
      "\\(1.00\\)",
      "\\(0\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\mathbb{E}[X] = (-1)(0.25) + (0)(0.50) + (1)(0.25) = 0\\). \\(\\mathbb{E}[X^2] = (-1)^2(0.25) + 0^2(0.50) + 1^2(0.25) = 0.50\\). Por tanto, \\(\\text{Var}(X) = 0.50 - 0^2 = 0.50\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 191,
    pregunta: "El Teorema de Slutsky permite deducir que si \\(X_n \\xrightarrow{d} X\\) y \\(Y_n \\xrightarrow{P} c\\) (constante), entonces:",
    opciones: [
      "\\(X_n + Y_n \\xrightarrow{d} X + c\\) y \\(X_n Y_n \\xrightarrow{d} cX\\).",
      "\\(X_n = Y_n\\)",
      "\\(X_n Y_n \\xrightarrow{P} 0\\)",
      "Las varianzas se anulan."
    ],
    correcta: 0,
    explicacion: "El Teorema de Slutsky preserva la convergencia en distribución bajo operaciones algebraicas con sucesiones que convergen en probabilidad a constantes.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 192,
    pregunta: "El método Delta en estadística asintótica se utiliza para:",
    opciones: [
      "Aproximar la distribución asintótica de una función no lineal \\(g(\\bar{X}_n)\\) aplicando una expansión en serie de Taylor de primer orden.",
      "Calcular integrales sin derivadas.",
      "Reducir el tamaño muestral a cero.",
      "Eliminar la varianza de un estimador."
    ],
    correcta: 0,
    explicacion: "Por el Método Delta: si \\(\\sqrt{n}(\\bar{X}_n - \\mu) \\xrightarrow{d} \\mathcal{N}(0, \\sigma^2)\\), entonces \\(\\sqrt{n}(g(\\bar{X}_n) - g(\\mu)) \\xrightarrow{d} \\mathcal{N}(0, \\sigma^2 [g'(\\mu)]^2)\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 193,
    pregunta: "Si \\(X\\) y \\(Y\\) son idénticamente distribuidas (no necesariamente independientes), ¿cuánto vale \\(\\mathbb{E}[(X - Y)]\\)?",
    opciones: [
      "\\(0\\)",
      "\\(2\\mathbb{E}[X]\\)",
      "\\(\\text{Var}(X)\\)",
      "No se puede calcular sin conocer su correlación."
    ],
    correcta: 0,
    explicacion: "Por linealidad: \\(\\mathbb{E}[X - Y] = \\mathbb{E}[X] - \\mathbb{E}[Y]\\). Dado que son idénticamente distribuidas, \\(\\mathbb{E}[X] = \\mathbb{E}[Y]\\), resultando exactamente 0.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 194,
    pregunta: "La Desigualdad de Hoeffding en teoría de aprendizaje computacional y probabilidad se emplea para:",
    opciones: [
      "Acotar exponencialmente la probabilidad de cola de la suma de variables aleatorias acotadas e independientes.",
      "Calcular el valor de pi.",
      "Demostrar la existencia de modas.",
      "Invertir matrices de covarianza."
    ],
    correcta: 0,
    explicacion: "La desigualdad de Hoeffding proporciona cotas de concentración exponencial extremadamente precisas: \\(P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\le 2e^{-2n\\epsilon^2 / (b-a)^2}\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 195,
    pregunta: "Si \\(X\\) es una variable aleatoria simétrica respecto a cero (es decir, \\(f(x) = f(-x)\\)) con momentos finitos, todos sus momentos impares \\(\\mathbb{E}[X^{2k+1}]\\) valen:",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\infty\\)",
      "\\(\\sigma^{2k+1}\\)"
    ],
    correcta: 0,
    explicacion: "La integral de una función impar sobre un dominio simétrico \\(\\int_{-\\infty}^\\infty x^{2k+1} f(x) dx = 0\\) es siempre cero.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "facil",
  },
  {
    id: 196,
    pregunta: "La paradoja de San Petersburgo desafía la teoría clásica de la esperanza matemática porque:",
    opciones: [
      "El juego tiene un valor esperado infinito \\(\\mathbb{E}[X] = \\infty\\), pero ningún participante racional pagaría una suma grande por jugar, lo que motivó la introducción de la Teoría de la Utilidad Esperada por Daniel Bernoulli.",
      "La probabilidad de ganar es cero.",
      "El casino siempre gana con probabilidad 1.",
      "La varianza es negativa."
    ],
    correcta: 0,
    explicacion: "La paradoja de San Petersburgo (1738) demostró que el valor monetario esperado no refleja adecuadamente la toma de decisiones humanas bajo incertidumbre.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 197,
    pregunta: "Si \\(X_n\\) converge casi seguramente a \\(X\\) (\\(X_n \\xrightarrow{a.s.} X\\)), ¿implica esto que \\(X_n\\) también converge en probabilidad a \\(X\\)?",
    opciones: [
      "Sí, la convergencia casi segura implica estrictamente la convergencia en probabilidad.",
      "No, son conceptos disjuntos.",
      "Solo si la varianza es constante.",
      "Solo para variables discretas."
    ],
    correcta: 0,
    explicacion: "Jerarquía de modos de convergencia: Convergencia Casi Segura \\(\\implies\\) Convergencia en Probabilidad \\(\\implies\\) Convergencia en Distribución.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
  {
    id: 198,
    pregunta: "Si \\(X_1, X_2, \\dots, X_n\\) son variables aleatorias con correlación \\(\\rho\\) constante entre cada par y varianza común \\(\\sigma^2\\), la varianza de su suma es:",
    opciones: [
      "\\(n\\sigma^2 + n(n-1)\\rho\\sigma^2\\)",
      "\\(n\\sigma^2\\)",
      "\\(n^2\\sigma^2\\)",
      "\\(\\sigma^2 / n\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\text{Var}(\\sum X_i) = \\sum \\text{Var}(X_i) + \\sum_{i \\neq j} \\text{Cov}(X_i, X_j) = n\\sigma^2 + n(n-1)\\rho\\sigma^2\\).",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 199,
    pregunta: "El Teorema de los Tres Cuadros de Kolmogórov proporciona una condición necesaria y suficiente para:",
    opciones: [
      "La convergencia casi segura de series infinitas de variables aleatorias independientes \\(\\sum_{n=1}^\\infty X_n\\).",
      "La existencia de medianas.",
      "El cálculo de derivadas en distribuciones discretas.",
      "La simulación de procesos de Poisson."
    ],
    correcta: 0,
    explicacion: "Es uno de los teoremas cumbre de la probabilidad clásica, resolviendo completamente el problema de convergencia de sumas infinitas de variables independientes.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "dificil",
  },
  {
    id: 200,
    pregunta: "En el marco general de la teoría de la probabilidad moderna, ¿cuál es el significado epistemológico supremo del Teorema del Límite Central?",
    opciones: [
      "Demuestra cómo el orden y la regularidad matemática determinista (la campana gaussiana) emergen de manera universal a partir de la acumulación masiva de perturbaciones aleatorias microscópicas individuales.",
      "Que no existen variables aleatorias fuera de la distribución normal.",
      "Que todo proceso estocástico termina en equilibrio termodinámico.",
      "Que la varianza tiende a infinito en el tiempo."
    ],
    correcta: 0,
    explicacion: "El TLC constituye uno de los mayores logros intelectuales de la ciencia: explica por qué la distribución normal gobierna universalmente los errores de medición, la física estadística, la genética cuantitativa y las ciencias sociales.",
    nivel: "Esperanza Matemática y Teoremas Asintóticos",
    dificultad: "medio",
  },
];
