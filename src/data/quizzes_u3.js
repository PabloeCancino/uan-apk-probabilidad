// quizzes_u3.js — 50 Reactivos de la Unidad 3: Variables Aleatorias y Familias de Distribuciones
// Norma NTE-UAN-APK-001 v1.4

export const QUIZZES_U3 = [
  {
    id: 101,
    pregunta: "Una variable aleatoria real \\(X\\) se define formalmente en teoría de la probabilidad como:",
    opciones: [
      "Un número aleatorio generado por un algoritmo computacional.",
      "Una función medible \\(X: \\Omega \\to \\mathbb{R}\\) tal que para todo \\(x \\in \\mathbb{R}\\), el conjunto \\(\\{\\omega \\in \\Omega : X(\\omega) \\le x\\} \\in \\mathcal{F}\\).",
      "Una distribución de frecuencias muestrales.",
      "Cualquier conjunto no vacío de eventos mutuamente excluyentes."
    ],
    correcta: 1,
    explicacion: "En teoría de la medida, una variable aleatoria es una función medible desde el espacio muestral \\((\\Omega, \\mathcal{F}, P)\\) hacia la recta de Borel \\((\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))\\), permitiendo asignar probabilidades a intervalos de números reales.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 102,
    pregunta: "Si \\(X \\sim \\text{Bin}(n=10, p=0.3)\\), ¿cuál es la probabilidad exacta de obtener \\(P(X = 3)\\)?",
    opciones: [
      "\\(\\binom{10}{3} (0.3)^3 (0.7)^7 = 120 \\times 0.027 \\times 0.0823543 \\approx 0.2668\\)",
      "\\(10 \\times (0.3)^3 = 0.27\\)",
      "\\((0.3)^3 (0.7)^7 \\approx 0.0022\\)",
      "\\(\\binom{10}{3} (0.3)^7 (0.7)^3 \\approx 0.009\\)"
    ],
    correcta: 0,
    explicacion: "Por la fórmula de la función de masa binomial: \\(P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}\\). Para \\(n=10, k=3, p=0.3\\): \\(P(X=3) = 120(0.027)(0.0823543) = 0.2668\\) (26.68%).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 103,
    pregunta: "¿Cuál de las siguientes es una propiedad matemática obligatoria de toda Función de Distribución Acumulada (CDF) \\(F_X(x) = P(X \\le x)\\)?",
    opciones: [
      "Debe ser simétrica respecto al origen \\(F(-x) = 1 - F(x)\\).",
      "Es monótona no decreciente, continua por la derecha, con \\(\\lim_{x \\to -\\infty} F(x) = 0\\) y \\(\\lim_{x \\to +\\infty} F(x) = 1\\).",
      "Debe ser diferenciable en todo punto de la recta real.",
      "Su integral en todo \\(\\mathbb{R}\\) debe ser igual a 1."
    ],
    correcta: 1,
    explicacion: "Toda CDF satisface axiomáticamente: (1) \\(x_1 < x_2 \\implies F(x_1) \\le F(x_2)\\), (2) Continuidad por la derecha \\(\\lim_{h \\to 0^+} F(x+h) = F(x)\\), (3) \\(\\lim_{x \\to -\\infty} F(x) = 0\\) y \\(\\lim_{x \\to \\infty} F(x) = 1\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 104,
    pregunta: "Si \\(X\\) es una variable aleatoria continua con función de densidad \\(f(x)\\), ¿cuál es la probabilidad puntual de cualquier valor individual \\(P(X = c)\\)?",
    opciones: [
      "\\(f(c)\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\int_0^c f(x)dx\\)"
    ],
    correcta: 1,
    explicacion: "Para toda variable aleatoria absolutamente continua: \\(P(X = c) = \\int_c^c f(x)dx = 0\\). En variables continuas, la probabilidad se define únicamente sobre intervalos con longitud no nula.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 105,
    pregunta: "Si el número de clientes que llegan a un banco sigue una distribución de Poisson con media \\(\\lambda = 4\\) clientes por hora, ¿cuál es la probabilidad de que lleguen exactamente 2 clientes en una hora?",
    opciones: [
      "\\(\\frac{4^2 e^{-4}}{2!} = \\frac{16 e^{-4}}{2} = 8 e^{-4} \\approx 0.1465\\)",
      "\\(4^2 / 2 = 8\\)",
      "\\(e^{-4} \\approx 0.0183\\)",
      "\\(\\frac{2^4 e^{-2}}{4!} \\approx 0.0902\\)"
    ],
    correcta: 0,
    explicacion: "La PMF de Poisson es \\(P(X = k) = \\frac{\\lambda^k e^{-\lambda}}{k!}\\). Para \\(\\lambda = 4, k = 2\\): \\(P(X = 2) = \\frac{16 e^{-4}}{2} = 8 e^{-4} \\approx 0.1465\\) (14.65%).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 106,
    pregunta: "La propiedad de 'Falta de Memoria' (Memoryless Property) establece que \\(P(X > s+t \\mid X > s) = P(X > t)\\). ¿Cuáles son las únicas distribuciones que poseen esta propiedad en los casos discreto y continuo?",
    opciones: [
      "Binomial y Normal",
      "Geométrica (discreta) y Exponencial (continua)",
      "Poisson y Gamma",
      "Uniforme y Beta"
    ],
    correcta: 1,
    explicacion: "La distribución Geométrica \\(P(X=k)=p(1-p)^{k-1}\\) en el ámbito discreto y la distribución Exponencial \\(f(x)=\\lambda e^{-\\lambda x}\\) en el continuo son las únicas familias univariadas con falta de memoria.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 107,
    pregunta: "Si \\(X \\sim \\mathcal{N}(\\mu = 50, \\sigma^2 = 25)\\), ¿cómo se estandariza \\(X\\) para obtener \\(Z \\sim \\mathcal{N}(0, 1)\\) en el cálculo de \\(P(X \\le 60)\\)?",
    opciones: [
      "\\(Z = \\frac{60 - 50}{25} = 0.4\\)",
      "\\(Z = \\frac{60 - 50}{\\sqrt{25}} = \\frac{10}{5} = 2\\)",
      "\\(Z = (60 - 50) \\times 5 = 50\\)",
      "\\(Z = \\frac{60}{50} = 1.2\\)"
    ],
    correcta: 1,
    explicacion: "La transformación de estandarización es \\(Z = \\frac{X - \\mu}{\\sigma}\\). Dado que \\(\\sigma^2 = 25 \\implies \\sigma = 5\\), se tiene \\(Z = \\frac{60 - 50}{5} = 2\\). Luego \\(P(X \\le 60) = \\Phi(2) \\approx 0.9772\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 108,
    pregunta: "Para que una función \\(f(x) = k x^2\\) sea una función de densidad de probabilidad válida en el intervalo \\([0, 3]\\), ¿cuánto debe valer la constante \\(k\\)?",
    opciones: [
      "\\(k = 1/9\\)",
      "\\(k = 1/3\\)",
      "\\(k = 1/27\\)",
      "\\(k = 3\\)"
    ],
    correcta: 0,
    explicacion: "Por la condición de normalización: \\(\\int_0^3 k x^2 dx = 1 \\implies k \\left[ \\frac{x^3}{3} \\right]_0^3 = k \\left( \\frac{27}{3} \\right) = 9k = 1 \\implies k = 1/9\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 109,
    pregunta: "Si \\(X \\sim \\text{Geom}(p = 0.2)\\) modela el número de intentos hasta el primer éxito, ¿cuál es su valor esperado \\(\\mathbb{E}[X]\\)?",
    opciones: [
      "\\(1/p = 1/0.2 = 5\\)",
      "\\(p = 0.2\\)",
      "\\(1 - p = 0.8\\)",
      "\\(1/p^2 = 25\\)"
    ],
    correcta: 0,
    explicacion: "Para una distribución geométrica que cuenta el número de ensayos hasta obtener el primer éxito, la media teórica es \\(\\mathbb{E}[X] = \\frac{1}{p} = \\frac{1}{0.2} = 5\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 110,
    pregunta: "En una distribución Normal Estándar \\(Z \\sim \\mathcal{N}(0, 1)\\), ¿qué porcentaje aproximado del área bajo la curva se ubica en el intervalo \\([-1, 1]\\) (regla empírica)?",
    opciones: [
      "\\(50.00\\%\\)",
      "\\(68.27\\%\\)",
      "\\(95.45\\%\\)",
      "\\(99.73\\%\\)"
    ],
    correcta: 1,
    explicacion: "Por la regla empírica normal 68-95-99.7: \\(P(-1 \\le Z \\le 1) = \\Phi(1) - \\Phi(-1) = 0.8413 - 0.1587 = 0.6826\\) (aproximadamente 68.27%).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 111,
    pregunta: "La distribución Hipergeométrica se aplica en lugar de la Binomial cuando:",
    opciones: [
      "Los ensayos son independientes con reposición.",
      "El muestreo se realiza SIN reemplazo a partir de una población finita, por lo que la probabilidad de éxito cambia en cada extracción.",
      "El número de ensayos tiende a infinito.",
      "La variable aleatoria es continua."
    ],
    correcta: 1,
    explicacion: "La distribución hipergeométrica modela el número de éxitos en una muestra de tamaño \\(n\\) extraída sin reemplazo de una población finita \\(N\\) con \\(K\\) elementos favorables.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 112,
    pregunta: "Si \\(X \\sim \\text{Exp}(\\lambda = 2)\\), ¿cuál es la función de distribución acumulada \\(F_X(x)\\) para \\(x \\ge 0\\)?",
    opciones: [
      "\\(F(x) = 2 e^{-2x}\\)",
      "\\(F(x) = 1 - e^{-2x}\\)",
      "\\(F(x) = e^{-2x}\\)",
      "\\(F(x) = 1 - 2e^{-x}\\)"
    ],
    correcta: 1,
    explicacion: "\\(F(x) = \\int_0^x 2e^{-2t} dt = \\left[ -e^{-2t} \\right]_0^x = -e^{-2x} - (-1) = 1 - e^{-2x}\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 113,
    pregunta: "Si \\(X \\sim \\mathcal{U}(2, 8)\\) (uniforme continua entre 2 y 8), ¿cuál es la probabilidad \\(P(3 \\le X \\le 6)\\)?",
    opciones: [
      "\\(\\frac{6 - 3}{8 - 2} = \\frac{3}{6} = 0.50\\)",
      "\\(3/8 = 0.375\\)",
      "\\(1/6 \\approx 0.167\\)",
      "\\(6/8 = 0.75\\)"
    ],
    correcta: 0,
    explicacion: "Para \\(X \\sim \\mathcal{U}(a, b)\\), \\(P(c \\le X \\le d) = \\frac{d - c}{b - a}\\). Sustituyendo: \\(P(3 \\le X \\le 6) = \\frac{6-3}{8-2} = \\frac{3}{6} = 0.50\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 114,
    pregunta: "La distribución de Poisson surge como el límite asintótico de una distribución Binomial \\(\\text{Bin}(n, p)\\) cuando:",
    opciones: [
      "\\(n \\to \\infty\\) y \\(p \\to \\infty\\)",
      "\\(n \\to \\infty\\) y \\(p \\to 0\\) de modo que el producto \\(\\lambda = np\\) permanezca constante.",
      "\\(p = 0.5\\) y \\(n \\to \\infty\\)",
      "\\(n = 1\\)"
    ],
    correcta: 1,
    explicacion: "Por la Ley de Eventos Raros de Poisson: cuando el número de ensayos es muy grande y la probabilidad individual de éxito es muy pequeña, la distribución Binomial converge formalmente a \\(\\text{Poisson}(\\lambda = np)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 115,
    pregunta: "¿Cuál es la función de densidad de la distribución de Cauchy estándar \\(X \\sim \\text{Cauchy}(0, 1)\\)?",
    opciones: [
      "\\(f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}\\)",
      "\\(f(x) = \\frac{1}{\\pi (1 + x^2)}\\)",
      "\\(f(x) = \\frac{1}{2} e^{-|x|}\\)",
      "\\(f(x) = \\frac{1}{\\pi \\sqrt{1 - x^2}}\\)"
    ],
    correcta: 1,
    explicacion: "La densidad de Cauchy estándar es \\(f(x) = \\frac{1}{\\pi(1+x^2)}\\) para \\(x \\in \\mathbb{R}\\). Es célebre porque sus colas pesadas provocan que su esperanza y su varianza no existan.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 116,
    pregunta: "Si \\(X \\sim \\text{Bin}(n=20, p=0.4)\\), ¿cuál es su varianza teórica \\(\\text{Var}(X)\\)?",
    opciones: [
      "\\(np = 8\\)",
      "\\(np(1-p) = 20(0.4)(0.6) = 4.8\\)",
      "\\(\\sqrt{4.8} \\approx 2.19\\)",
      "\\(20 \\times 0.6 = 12\\)"
    ],
    correcta: 1,
    explicacion: "Para una distribución binomial: \\(\\text{Var}(X) = np(1-p) = 20 \\times 0.4 \\times 0.6 = 4.8\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 117,
    pregunta: "Si \\(X\\) es una variable aleatoria con función de densidad \\(f_X(x)\\) continua y monótona creciente, y \\(Y = g(X)\\) es una transformación estrictamente diferenciable, la densidad \\(f_Y(y)\\) se obtiene mediante:",
    opciones: [
      "\\(f_Y(y) = f_X(g(y))\\)",
      "\\(f_Y(y) = f_X(g^{-1}(y)) \\cdot |\\frac{d}{dy} g^{-1}(y)|\\)",
      "\\(f_Y(y) = \\frac{f_X(y)}{g'(y)}\\)",
      "\\(f_Y(y) = \\int f_X(x) dx\\)"
    ],
    correcta: 1,
    explicacion: "Por el Teorema del Cambio de Variable (método del Jacobiano unidimensional): \\(f_Y(y) = f_X(g^{-1}(y)) \\left| \\frac{d}{dy} g^{-1}(y) \\right|\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 118,
    pregunta: "La distribución Gamma \\(\\text{Gamma}(\\alpha, \\beta)\\) modela:",
    opciones: [
      "El número de éxitos en ensayos dependientes.",
      "El tiempo de espera continuo hasta la ocurrencia de \\(\\alpha\\) eventos independientes en un proceso de Poisson con tasa \\(\\beta\\).",
      "La proporción de defectuosos acotada en \\([0, 1]\\).",
      "La suma de variables uniformes discretas."
    ],
    correcta: 1,
    explicacion: "La distribución Gamma generaliza la Exponencial: representa el tiempo total acumulado hasta observar \\(\\alpha\\) eventos de Poisson independientes.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 119,
    pregunta: "La distribución Beta \\(\\text{Beta}(\\alpha, \\beta)\\) se utiliza extensamente en inferencia bayesiana porque:",
    opciones: [
      "Tiene soporte acotado en el intervalo \\([0, 1]\\) y es el prior conjugado natural para parámetros de probabilidad binomial.",
      "Es simétrica respecto al infinito.",
      "Su varianza siempre es igual a 1.",
      "Solo admite valores enteros positivos."
    ],
    correcta: 0,
    explicacion: "Al tener soporte en \\([0, 1]\\), la distribución Beta es ideal para modelar probabilidades y proporciones aleatorias, actuando como distribución a priori conjugada de la Binomial.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 120,
    pregunta: "Si \\(X \\sim \\text{Poisson}(\\lambda = 3)\\), ¿cuál es la probabilidad de que \\(X = 0\\)?",
    opciones: [
      "\\(0\\)",
      "\\(e^{-3} \\approx 0.0498\\)",
      "\\(3e^{-3} \\approx 0.1494\\)",
      "\\(1 - e^{-3} \\approx 0.9502\\)"
    ],
    correcta: 1,
    explicacion: "Para \\(k=0\\): \\(P(X=0) = \\frac{3^0 e^{-3}}{0!} = \\frac{1 \\cdot e^{-3}}{1} = e^{-3} \\approx 0.0498\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 121,
    pregunta: "Una variable aleatoria \\(X\\) se dice que tiene distribución Log-Normal si:",
    opciones: [
      "\\(X = \\log(Z)\\) con \\(Z\\) normal.",
      "\\(Y = \\ln(X)\\) sigue una distribución Normal \\(\\mathcal{N}(\\mu, \\sigma^2)\\).",
      "Su función de densidad es una línea recta.",
      "Tiene soporte en todos los números reales negativos."
    ],
    correcta: 1,
    explicacion: "Por definición, \\(X\\) es log-normal si su logaritmo natural \\(Y = \\ln(X)\\) está normalmente distribuido, lo que implica que \\(X = e^Y > 0\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 122,
    pregunta: "¿Cuál es la relación entre la función de distribución acumulada \\(F(x)\\) y la función de densidad \\(f(x)\\) de una variable aleatoria continua?",
    opciones: [
      "\\(f(x) = F'(x) = \\frac{d}{dx}F(x)\\) en todo punto donde \\(F\\) sea diferenciable.",
      "\\(F(x) = f'(x)\\)",
      "\\(f(x) = \\int_{-\\infty}^x F(t) dt\\)",
      "\\(f(x) = 1 - F(x)\\)"
    ],
    correcta: 0,
    explicacion: "Por el Teorema Fundamental del Cálculo: \\(F(x) = \\int_{-\\infty}^x f(t) dt \\implies f(x) = F'(x)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 123,
    pregunta: "Si \\(X \\sim \\text{Bernoulli}(p = 0.7)\\), ¿cuál es la varianza \\(\\text{Var}(X)\\)?",
    opciones: [
      "\\(0.7\\)",
      "\\(0.7 \\times 0.3 = 0.21\\)",
      "\\(0.3\\)",
      "\\(0.49\\)"
    ],
    correcta: 1,
    explicacion: "Para una variable Bernoulli: \\(\\text{Var}(X) = p(1-p) = 0.7 \\times (1 - 0.7) = 0.7 \\times 0.3 = 0.21\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 124,
    pregunta: "La función de densidad de una variable aleatoria uniforme en \\([a, b]\\) es:",
    opciones: [
      "\\(f(x) = \\frac{1}{b - a}\\) para \\(a \\le x \\le b\\)",
      "\\(f(x) = b - a\\)",
      "\\(f(x) = \\frac{x - a}{b - a}\\)",
      "\\(f(x) = \\frac{1}{2}(a+b)\\)"
    ],
    correcta: 0,
    explicacion: "La densidad de la uniforme continua es constante sobre su soporte: \\(f(x) = \\frac{1}{b-a}\\) si \\(x \\in [a, b]\\), garantizando que el área total sea \\((b-a) \\times \\frac{1}{b-a} = 1\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 125,
    pregunta: "Si \\(Z \\sim \\mathcal{N}(0, 1)\\), ¿cuánto vale \\(P(Z > 0)\\) por la simetría de la curva de Gauss?",
    opciones: [
      "\\(0.50\\)",
      "\\(1.00\\)",
      "\\(0.68\\)",
      "\\(0.00\\)"
    ],
    correcta: 0,
    explicacion: "La campana de Gauss estándar es perfectamente simétrica respecto a su media \\(\\mu = 0\\), por lo que \\(P(Z > 0) = P(Z < 0) = 0.50\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 126,
    pregunta: "¿Cuál es la distribución del tiempo transcurrido entre llegadas consecutivas en un proceso de Poisson con tasa \\(\\lambda\\)?",
    opciones: [
      "Distribución de Poisson",
      "Distribución Exponencial con parámetro \\(\\lambda\\)",
      "Distribución Normal",
      "Distribución Geométrica"
    ],
    correcta: 1,
    explicacion: "En un proceso de Poisson homogéneo de tasa \\(\\lambda\\), los tiempos de inter-arribo entre eventos sucesivos son variables aleatorias independientes e idénticamente distribuidas con distribución \\(\\text{Exp}(\\lambda)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 127,
    pregunta: "Si \\(X \\sim \\text{Poisson}(\\lambda)\\), la media y la varianza de \\(X\\) satisfacen la notable propiedad de que:",
    opciones: [
      "\\(\\mathbb{E}[X] = \\text{Var}(X) = \\lambda\\)",
      "\\(\\mathbb{E}[X] = \\lambda\\) y \\(\\text{Var}(X) = \\lambda^2\\)",
      "\\(\\text{Var}(X) = \\sqrt{\\lambda}\\)",
      "\\(\\mathbb{E}[X] = 1/\\lambda\\)"
    ],
    correcta: 0,
    explicacion: "La distribución de Poisson se caracteriza teóricamente por la igualdad fundamental entre su esperanza matemática y su varianza: \\(\\mathbb{E}[X] = \\text{Var}(X) = \\lambda\\) (equidispersión).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 128,
    pregunta: "La distribución Binomial Negativa \\(\\text{NB}(r, p)\\) modela:",
    opciones: [
      "El número de fracasos (o de ensayos) antes de observar el \\(r\\)-ésimo éxito en ensayos Bernoulli independientes.",
      "Variables con valores negativos exclusivamente.",
      "El cociente de dos normales estándar.",
      "La probabilidad acumulada de Poisson."
    ],
    correcta: 0,
    explicacion: "La binomial negativa (o distribución de Pascal) generaliza la geométrica para modelar el tiempo de espera hasta acumular \\(r\\) éxitos.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 129,
    pregunta: "Si \\(X\\) tiene función de densidad \\(f(x) = 3x^2\\) en \\([0, 1]\\), ¿cuál es la probabilidad \\(P(X \\le 0.5)\\)?",
    opciones: [
      "\\((0.5)^3 = 0.125\\)",
      "\\(3(0.5)^2 = 0.75\\)",
      "\\(0.50\\)",
      "\\(0.25\\)"
    ],
    correcta: 0,
    explicacion: "\\(P(X \\le 0.5) = \\int_0^{0.5} 3x^2 dx = \\left[ x^3 \\right]_0^{0.5} = (0.5)^3 = 0.125\\) (1/8).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 130,
    pregunta: "Si \\(Z \\sim \\mathcal{N}(0, 1)\\), la distribución de \\(Y = Z^2\\) corresponde a:",
    opciones: [
      "Una distribución Ji-cuadrado con 1 grado de libertad (\\(\\chi^2_1\\)).",
      "Una distribución Exponencial con \\(\\lambda = 1\\).",
      "Una distribución Normal \\(\\mathcal{N}(0, 1)\\).",
      "Una distribución Cauchy."
    ],
    correcta: 0,
    explicacion: "El cuadrado de una variable normal estándar sigue por definición una distribución Ji-cuadrada con 1 grado de libertad: \\(Z^2 \\sim \\chi^2_1 = \\text{Gamma}(1/2, 1/2)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 131,
    pregunta: "¿Cuál es la mediana de una variable aleatoria \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2)\\)?",
    opciones: [
      "\\(\\mu\\)",
      "\\(0\\)",
      "\\(\\mu + \\sigma\\)",
      "\\(\\sigma^2\\)"
    ],
    correcta: 0,
    explicacion: "Debido a la simetría univariada de la campana de Gauss, la media, la mediana y la moda coinciden exactamente en el parámetro de localización \\(\\mu\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 132,
    pregunta: "Si \\(X \\sim \\text{Exp}(\\lambda)\\), ¿cuál es la probabilidad de que \\(X\\) supere su propia media \\(\\mathbb{E}[X] = 1/\\lambda\\)?",
    opciones: [
      "\\(e^{-1} \\approx 0.3679\\)",
      "\\(0.50\\)",
      "\\(1 - e^{-1} \\approx 0.6321\\)",
      "\\(1/\\lambda\\)"
    ],
    correcta: 0,
    explicacion: "Para \\(X \\sim \\text{Exp}(\\lambda)\\), \\(P(X > x) = e^{-\\lambda x}\\). Evaluando en \\(x = 1/\\lambda\\): \\(P(X > 1/\\lambda) = e^{-\\lambda(1/\\lambda)} = e^{-1} \\approx 0.3679\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 133,
    pregunta: "En una distribución de Poisson, el parámetro \\(\\lambda\\) representa:",
    opciones: [
      "La tasa promedio de ocurrencia de eventos por unidad de tiempo, área o volumen.",
      "El número total de ensayos fijos.",
      "La probabilidad de fracaso.",
      "El rango intercuartílico."
    ],
    correcta: 0,
    explicacion: "\\(\\lambda > 0\\) es la tasa o intensidad esperada del proceso de Poisson en el intervalo de observación considerado.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 134,
    pregunta: "Si \\(F(x)\\) es la función de distribución acumulada de una variable discreta, su gráfica es:",
    opciones: [
      "Una curva suave y continua sin saltos.",
      "Una función escalonada no decreciente continua por la derecha, con saltos en los puntos de masa iguales a \\(P(X = x_k)\\).",
      "Una recta con pendiente positiva constante.",
      "Una parábola cóncava hacia abajo."
    ],
    correcta: 1,
    explicacion: "Para variables discretas, \\(F(x)\\) es una función en escalera cuyos saltos verticales representan la probabilidad de masa puntual de cada valor.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 135,
    pregunta: "Si \\(X \\sim \\text{Bin}(n=100, p=0.02)\\), ¿cuál es la mejor aproximación mediante una distribución de Poisson?",
    opciones: [
      "\\(\\text{Poisson}(\\lambda = 2)\\)",
      "\\(\\text{Poisson}(\\lambda = 20)\\)",
      "\\(\\text{Poisson}(\\lambda = 0.02)\\)",
      "\\(\\text{Poisson}(\\lambda = 50)\\)"
    ],
    correcta: 0,
    explicacion: "Aproximación de Poisson con \\(\\lambda = np = 100 \\times 0.02 = 2\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 136,
    pregunta: "¿Cuál es el soporte de una variable aleatoria con distribución Beta \\(\\text{Beta}(\\alpha, \\beta)\\)?",
    opciones: [
      "\\(\\mathbb{R}\\)",
      "\\([0, \\infty)\\)",
      "\\([0, 1]\\)",
      "\\(\\{0, 1, 2, \\dots\\}\\)"
    ],
    correcta: 2,
    explicacion: "La distribución Beta tiene soporte compacto en el intervalo unitario \\([0, 1]\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 137,
    pregunta: "Si \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2)\\), ¿cuáles son los puntos de inflexión de su función de densidad \\(f''(x) = 0\\)?",
    opciones: [
      "\\(x = \\mu\\)",
      "\\(x = \\mu \\pm \\sigma\\)",
      "\\(x = \\mu \\pm 2\\sigma\\)",
      "\\(x = 0\\)"
    ],
    correcta: 1,
    explicacion: "La segunda derivada de la densidad gaussiana se anula exactamente en \\(x = \\mu - \\sigma\\) y \\(x = \\mu + \\sigma\\), marcando el cambio de concavidad de la campana.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 138,
    pregunta: "Si \\(X_1, \\dots, X_k\\) son variables de Poisson independientes con parámetros \\(\\lambda_1, \\dots, \\lambda_k\\), la distribución de su suma \\(S = \\sum X_i\\) es:",
    opciones: [
      "\\(\\text{Poisson}(\\sum_{i=1}^k \\lambda_i)\\)",
      "\\(\\text{Binomial}(k, \\lambda)\\)",
      "\\(\\text{Normal}(\\sum \\lambda_i, \\prod \\lambda_i)\\)",
      "\\(\\text{Gamma}(k, \\lambda)\\)"
    ],
    correcta: 0,
    explicacion: "Por la propiedad de aditividad de la distribución de Poisson, la suma de variables de Poisson independientes es también Poisson con parámetro igual a la suma de sus tasas.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 139,
    pregunta: "Una variable aleatoria discreta \\(X\\) toma los valores 1, 2, 3 con probabilidades \\(P(X=1) = 0.2\\), \\(P(X=2) = 0.5\\) y \\(P(X=3) = c\\). ¿Cuánto vale \\(c\\)?",
    opciones: [
      "\\(0.3\\)",
      "\\(0.5\\)",
      "\\(0.7\\)",
      "\\(0.1\\)"
    ],
    correcta: 0,
    explicacion: "Por la condición de cierre de toda función de masa: \\(\\sum P(X=x) = 1 \\implies 0.2 + 0.5 + c = 1 \\implies c = 0.3\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 140,
    pregunta: "La distribución \\(t\\) de Student con \\(\\nu\\) grados de libertad se define formalmente como el cociente:",
    opciones: [
      "\\(T = \\frac{Z}{\\sqrt{V / \\nu}}\\) donde \\(Z \\sim \\mathcal{N}(0, 1)\\) y \\(V \\sim \\chi^2_\\nu\\) son independientes.",
      "\\(T = Z \\cdot V\\)",
      "\\(T = \\frac{V_1 / \\nu_1}{V_2 / \\nu_2}\\)",
      "\\(T = \\ln(Z)\\)"
    ],
    correcta: 0,
    explicacion: "La distribución \\(t\\) de Gosset ('Student') surge del cociente entre una normal estándar y la raíz cuadrada de una Ji-cuadrada dividida por sus grados de libertad.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 141,
    pregunta: "Si \\(X \\sim \\text{Geom}(p)\\), ¿cuál es su función de distribución acumulada \\(F(k) = P(X \\le k)\\) para \\(k \\in \\mathbb{N}\\)?",
    opciones: [
      "\\(F(k) = 1 - (1-p)^k\\)",
      "\\(F(k) = (1-p)^k\\)",
      "\\(F(k) = p^k\\)",
      "\\(F(k) = 1 - p^k\\)"
    ],
    correcta: 0,
    explicacion: "\\(P(X \\le k) = 1 - P(X > k) = 1 - (1-p)^k\\), ya que \\(X > k\\) significa no haber obtenido ningún éxito en los primeros \\(k\\) ensayos.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 142,
    pregunta: "La distribución \\(F\\) de Snedecor-Fisher se utiliza primordialmente en estadística para:",
    opciones: [
      "Comparar las varianzas de dos poblaciones normales independientes (cociente de varianzas muestrales) en pruebas ANOVA.",
      "Modelar el número de accidentes en una autopista.",
      "Calcular probabilidades de cartas en el póker.",
      "Aproximar distribuciones discretas uniformes."
    ],
    correcta: 0,
    explicacion: "La distribución \\(F = \\frac{\\chi^2_{\\nu_1} / \\nu_1}{\\chi^2_{\\nu_2} / \\nu_2}\\) es la base del análisis de varianza (ANOVA) y pruebas de cociente de varianzas.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 143,
    pregunta: "Si \\(X \\sim \\mathcal{U}(0, 1)\\), la distribución de \\(Y = -\\frac{1}{\\lambda} \\ln(1 - X)\\) corresponde a:",
    opciones: [
      "\\(Y \\sim \\text{Exp}(\\lambda)\\) (Método de la transformada inversa).",
      "\\(Y \\sim \\mathcal{N}(0, 1)\\)",
      "\\(Y \\sim \\text{Poisson}(\\lambda)\\)",
      "\\(Y \\sim \\text{Cauchy}(0, 1)\\)"
    ],
    correcta: 0,
    explicacion: "Por el método de la transformada inversa para generación de números aleatorios: si \\(U \\sim \\mathcal{U}(0, 1)\\), entonces \\(F^{-1}(U) = -\\frac{1}{\\lambda}\\ln(1-U) \\sim \\text{Exp}(\\lambda)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "dificil",
  },
  {
    id: 144,
    pregunta: "¿Cuál es el valor de la función Gamma \\(\\Gamma(n)\\) para cualquier número entero positivo \\(n\\)?",
    opciones: [
      "\\((n - 1)!\\)",
      "\\(n!\\)",
      "\\(n^2\\)",
      "\\(2^n\\)"
    ],
    correcta: 0,
    explicacion: "Por la propiedad fundamental de la función Gamma de Euler: \\(\\Gamma(n) = (n-1)!\\) para todo entero positivo \\(n\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 145,
    pregunta: "Si \\(X\\) y \\(Y\\) son variables normales independientes con \\(X \\sim \\mathcal{N}(\\mu_1, \\sigma_1^2)\\) e \\(Y \\sim \\mathcal{N}(\\mu_2, \\sigma_2^2)\\), entonces \\(W = X + Y\\) sigue una distribución:",
    opciones: [
      "\\(\\mathcal{N}(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)\\)",
      "\\(\\mathcal{N}(\\mu_1 + \\mu_2, (\\sigma_1 + \\sigma_2)^2)\\)",
      "\\(\\text{Gamma}(\\mu_1, \\mu_2)\\)",
      "\\(\\text{Log-Normal}(\\mu_1, \\sigma_1^2)\\)"
    ],
    correcta: 0,
    explicacion: "La suma de variables normales independientes es siempre normal, con media igual a la suma de las medias y varianza igual a la suma de las varianzas: \\(W \\sim \\mathcal{N}(\\mu_1+\\mu_2, \\sigma_1^2+\\sigma_2^2)\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 146,
    pregunta: "La distribución de Weibull es ampliamente empleada en ingeniería para modelar:",
    opciones: [
      "La vida útil y confiabilidad de componentes mecánicos y electrónicos sujetos a desgaste o envejecimiento.",
      "El número de caras en monedas perfectas.",
      "El conteo de bacterias estables.",
      "El cociente de varianzas muestrales."
    ],
    correcta: 0,
    explicacion: "La distribución de Weibull modela tasas de falla variables (crecientes, constantes o decrecientes) en análisis de supervivencia y confiabilidad industrial.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "medio",
  },
  {
    id: 147,
    pregunta: "Si \\(X\\) es una variable aleatoria con función de masa \\(P(X = k) = \\frac{1}{6}\\) para \\(k \\in \\{1, 2, 3, 4, 5, 6\\}\\), ¿a qué familia pertenece?",
    opciones: [
      "Uniforme Discreta",
      "Poisson",
      "Geométrica",
      "Bernoulli"
    ],
    correcta: 0,
    explicacion: "Modela el lanzamiento de un dado honesto donde cada uno de los \\(n=6\\) valores tiene la misma probabilidad \\(1/n\\): Uniforme Discreta.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 148,
    pregunta: "¿Cuál es el percentil 50 de una distribución continua \\(X\\)?",
    opciones: [
      "El valor \\(m\\) tal que \\(F_X(m) = 0.50\\) (la Mediana).",
      "La moda",
      "El rango intercuartílico",
      "El valor esperado más 1 desviación estándar"
    ],
    correcta: 0,
    explicacion: "El percentil 50 divide la masa probabilística en dos mitades del 50%, coincidiendo por definición con la mediana \\(F(m) = 0.5\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 149,
    pregunta: "Si \\(X \\sim \\text{Bin}(n=8, p=0.5)\\), la distribución de \\(X\\) es:",
    opciones: [
      "Completamente simétrica alrededor de su media \\(\\mu = np = 4\\).",
      "Asimétrica positiva (sesgada a la derecha).",
      "Asimétrica negativa (sesgada a la izquierda).",
      "Bimodal en 0 y 8."
    ],
    correcta: 0,
    explicacion: "Cuando \\(p = 0.5\\), la distribución Binomial es perfectamente simétrica respecto a su media \\(np = 4\\) debido a que \\(\\binom{n}{k} = \\binom{n}{n-k}\\).",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "facil",
  },
  {
    id: 150,
    pregunta: "La integral de la densidad gaussiana estándar \\(\\int_{-\\infty}^\\infty e^{-x^2/2} dx = \\sqrt{2\\pi}\\) se demuestra analíticamente mediante:",
    opciones: [
      "La integral de Poisson en coordenadas polares bidimensionales \\(I^2 = \\int_0^{2\\pi} d\\theta \\int_0^\\infty r e^{-r^2/2} dr\\).",
      "Integración por partes simple.",
      "La regla de L'Hôpital.",
      "El teorema del emparedado."
    ],
    correcta: 0,
    explicacion: "La constante de normalización \\(\\frac{1}{\\sqrt{2\\pi}}\\) de la curva de Gauss se deduce mediante la técnica clásica de Gauss/Poisson transformando \\(I^2\\) a coordenadas polares.",
    nivel: "Variables Aleatorias y Familias de Distribuciones",
    dificultad: "dificil",
  },
];
