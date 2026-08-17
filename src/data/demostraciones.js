// NTE-UAN-APK-001 v1.3 — Demostraciones Matemáticas Formales Paso a Paso
// Asignatura: Probabilidad (CBIMAT-234) — PALMAT UAN
// Docente Responsable: Dr. Pablo Eduardo Cancino Marentes

export const DEMOSTRACIONES = [
  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 1: ESPACIOS DE PROBABILIDAD Y COMBINATORIA
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "dem_complemento",
    categoria: "Espacios de Probabilidad y Combinatoria",
    color: "#58a6ff",
    titulo: "Probabilidad del Evento Complementario: P(Aᶜ) = 1 - P(A)",
    descripcion: "Demostración rigurosa a partir de los axiomas de Kolmogórov de que la probabilidad del complemento de cualquier evento es 1 menos su probabilidad.",
    teorema: "P(A^c) = 1 - P(A) \\quad \\text{y en particular} \\quad P(\\emptyset) = 0",
    pasos: [
      {
        n: 1,
        enunciado: "Por definición de espacio muestral \\(\\Omega\\) y evento complementario, \\(\\Omega = A \\cup A^c\\).",
        justificacion: "Partición canónica de \\(\\Omega\\)",
      },
      {
        n: 2,
        enunciado: "Por definición de complemento de conjuntos, \\(A\\) y \\(A^c\\) son mutuamente excluyentes: \\(A \\cap A^c = \\emptyset\\).",
        justificacion: "Eventos disjuntos",
      },
      {
        n: 3,
        enunciado: "Aplicando el Axioma 3 de Kolmogórov (\\(\\sigma\\)-aditividad finita): \\(P(\\Omega) = P(A \\cup A^c) = P(A) + P(A^c)\\).",
        justificacion: "Axioma 3 de Kolmogórov (Aditividad)",
      },
      {
        n: 4,
        enunciado: "Por el Axioma 2 de Kolmogórov (Certidumbre o Normalización), la probabilidad del espacio muestral completo es \\(P(\\Omega) = 1\\).",
        justificacion: "Axioma 2 de Kolmogórov (Certidumbre)",
      },
      {
        n: 5,
        enunciado: "Sustituyendo el valor unitario en la igualdad: \\(1 = P(A) + P(A^c)\\).",
        justificacion: "Sustitución de axiomas",
      },
      {
        n: 6,
        enunciado: "Despejando algebraicamente: \\(P(A^c) = 1 - P(A)\\). En particular, si tomamos \\(A = \\Omega\\), entonces \\(P(\\emptyset) = 1 - P(\\Omega) = 1 - 1 = 0\\). \\(\\blacksquare\\)",
        justificacion: "Conclusión formal (Q.E.D.)",
      },
    ],
  },
  {
    id: "dem_monotonia",
    categoria: "Espacios de Probabilidad y Combinatoria",
    color: "#58a6ff",
    titulo: "Monotonía de la Medida de Probabilidad: Si A ⊆ B, entonces P(A) ≤ P(B)",
    descripcion: "Demostración de que la contención de eventos preserva el orden de sus probabilidades inducido por la no negatividad de la medida.",
    teorema: "A \\subseteq B \\implies P(B \\setminus A) = P(B) - P(A) \\implies P(A) \\le P(B)",
    pasos: [
      {
        n: 1,
        enunciado: "Supongamos la hipótesis de contención: \\(A \\subseteq B\\).",
        justificacion: "Hipótesis inicial",
      },
      {
        n: 2,
        enunciado: "Podemos descomponer el conjunto \\(B\\) como la unión disjunta de \\(A\\) y la diferencia relativa: \\(B = A \\cup (B \\setminus A)\\).",
        justificacion: "Descomposición conjuntista",
      },
      {
        n: 3,
        enunciado: "Por definición de diferencia de conjuntos, \\(A \\cap (B \\setminus A) = A \\cap (B \\cap A^c) = \\emptyset\\).",
        justificacion: "Conjuntos mutuamente disjuntos",
      },
      {
        n: 4,
        enunciado: "Por el Axioma 3 de Kolmogórov: \\(P(B) = P(A \\cup (B \\setminus A)) = P(A) + P(B \\setminus A)\\).",
        justificacion: "Axioma 3 de Kolmogórov",
      },
      {
        n: 5,
        enunciado: "Despejando la probabilidad de la diferencia: \\(P(B \\setminus A) = P(B) - P(A)\\).",
        justificacion: "Transposición algebraica",
      },
      {
        n: 6,
        enunciado: "Por el Axioma 1 de Kolmogórov (No negatividad), \\(P(B \\setminus A) \\ge 0\\). Por consiguiente: \\(P(B) - P(A) \\ge 0 \\implies P(A) \\le P(B)\\). \\(\\blacksquare\\)",
        justificacion: "Axioma 1 y conclusión",
      },
    ],
  },
  {
    id: "dem_inclusion_exclusion",
    categoria: "Espacios de Probabilidad y Combinatoria",
    color: "#58a6ff",
    titulo: "Principio de Inclusión-Exclusión: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    descripcion: "Deducción rigurosa de la aditividad de probabilidades para eventos arbitrarios que pueden no ser mutuamente excluyentes.",
    teorema: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    pasos: [
      {
        n: 1,
        enunciado: "Descomponemos la unión \\(A \\cup B\\) en dos subconjuntos disjuntos: \\(A \\cup B = A \\cup (B \\setminus A)\\).",
        justificacion: "Unión disjunta",
      },
      {
        n: 2,
        enunciado: "Dado que \\(A \\cap (B \\setminus A) = \\emptyset\\), aplicamos el Axioma 3: \\(P(A \\cup B) = P(A) + P(B \\setminus A)\\).",
        justificacion: "Axioma 3 de Kolmogórov",
      },
      {
        n: 3,
        enunciado: "Ahora descomponemos el conjunto \\(B\\) usando la partición inducida por \\(A\\): \\(B = (A \\cap B) \\cup (B \\setminus A)\\).",
        justificacion: "Partición de \\(B\\)",
      },
      {
        n: 4,
        enunciado: "Como \\((A \\cap B) \\cap (B \\setminus A) = \\emptyset\\), por el Axioma 3: \\(P(B) = P(A \\cap B) + P(B \\setminus A)\\).",
        justificacion: "Axioma 3 sobre \\(B\\)",
      },
      {
        n: 5,
        enunciado: "Despejamos la diferencia: \\(P(B \\setminus A) = P(B) - P(A \\cap B)\\).",
        justificacion: "Álgebra de probabilidades",
      },
      {
        n: 6,
        enunciado: "Sustituimos esta expresión en la igualdad del Paso 2: \\(P(A \\cup B) = P(A) + [P(B) - P(A \\cap B)] = P(A) + P(B) - P(A \\cap B)\\). \\(\\blacksquare\\)",
        justificacion: "Sustitución y conclusión",
      },
    ],
  },
  {
    id: "dem_boole",
    categoria: "Espacios de Probabilidad y Combinatoria",
    color: "#58a6ff",
    titulo: "Desigualdad de Boole (Subaditividad Finita): P(⋃ Aᵢ) ≤ ∑ P(Aᵢ)",
    descripcion: "Demostración por inducción matemática de la cota superior universal para la unión de una cantidad finita de eventos.",
    teorema: "P\\left(\\bigcup_{i=1}^n A_i\\right) \\le \\sum_{i=1}^n P(A_i)",
    pasos: [
      {
        n: 1,
        enunciado: "Caso base \\(n=1\\): \\(P(A_1) \\le P(A_1)\\) es una igualdad reflexiva trivialmente válida.",
        justificacion: "Caso base de inducción",
      },
      {
        n: 2,
        enunciado: "Para \\(n=2\\), por inclusión-exclusión: \\(P(A_1 \\cup A_2) = P(A_1) + P(A_2) - P(A_1 \\cap A_2)\\).",
        justificacion: "Teorema de adición",
      },
      {
        n: 3,
        enunciado: "Como \\(P(A_1 \\cap A_2) \\ge 0\\) por el Axioma 1, restar esta cantidad implica: \\(P(A_1 \\cup A_2) \\le P(A_1) + P(A_2)\\).",
        justificacion: "Axioma 1 (No negatividad)",
      },
      {
        n: 4,
        enunciado: "Hipótesis de Inducción: Supongamos que la desigualdad se cumple para \\(k\\) eventos: \\(P(\\bigcup_{i=1}^k A_i) \\le \\sum_{i=1}^k P(A_i)\\).",
        justificacion: "Hipótesis inductiva",
      },
      {
        n: 5,
        enunciado: "Para \\(k+1\\), definimos el evento agrupado \\(B = \\bigcup_{i=1}^k A_i\\). Entonces \\(\\bigcup_{i=1}^{k+1} A_i = B \\cup A_{k+1}\\).",
        justificacion: "Asociatividad conjuntista",
      },
      {
        n: 6,
        enunciado: "Aplicando el caso \\(n=2\\): \\(P(B \\cup A_{k+1}) \\le P(B) + P(A_{k+1})\\).",
        justificacion: "Subaditividad para 2 eventos",
      },
      {
        n: 7,
        enunciado: "Aplicando la hipótesis de inducción para acotar \\(P(B)\\): \\(P(\\bigcup_{i=1}^{k+1} A_i) \\le \\sum_{i=1}^k P(A_i) + P(A_{k+1}) = \\sum_{i=1}^{k+1} P(A_i)\\). \\(\\blacksquare\\)",
        justificacion: "Paso inductivo completado",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 2: PROBABILIDAD CONDICIONAL E INFERENCIA BAYESIANA
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "dem_indep_complementos",
    categoria: "Probabilidad Condicional e Inferencia Bayesiana",
    color: "#f0883e",
    titulo: "Independencia de Eventos Complementarios: A ⊥ B ⟹ Aᶜ ⊥ Bᶜ",
    descripcion: "Prueba de que si dos eventos son estocásticamente independientes, sus complementos respectivos también preservan la independencia.",
    teorema: "P(A \\cap B) = P(A)P(B) \\implies P(A^c \\cap B^c) = P(A^c)P(B^c)",
    pasos: [
      {
        n: 1,
        enunciado: "Hipótesis: \\(A\\) y \\(B\\) son independientes, lo que significa que \\(P(A \\cap B) = P(A)P(B)\\).",
        justificacion: "Hipótesis de independencia",
      },
      {
        n: 2,
        enunciado: "Por las Leyes de De Morgan de la teoría de conjuntos: \\(A^c \\cap B^c = (A \\cup B)^c\\).",
        justificacion: "Leyes de De Morgan",
      },
      {
        n: 3,
        enunciado: "Por la propiedad del complemento: \\(P(A^c \\cap B^c) = P((A \\cup B)^c) = 1 - P(A \\cup B)\\).",
        justificacion: "Probabilidad del complemento",
      },
      {
        n: 4,
        enunciado: "Aplicamos el principio de Inclusión-Exclusión: \\(1 - P(A \\cup B) = 1 - [P(A) + P(B) - P(A \\cap B)]\\).",
        justificacion: "Inclusión-Exclusión",
      },
      {
        n: 5,
        enunciado: "Sustituimos la hipótesis \\(P(A \\cap B) = P(A)P(B)\\): \\(= 1 - P(A) - P(B) + P(A)P(B)\\).",
        justificacion: "Sustitución de hipótesis",
      },
      {
        n: 6,
        enunciado: "Factorizamos la expresión algebraica por agrupación de términos: \\(= (1 - P(A)) - P(B)(1 - P(A)) = (1 - P(A))(1 - P(B))\\).",
        justificacion: "Factorización algebraica",
      },
      {
        n: 7,
        enunciado: "Dado que \\(P(A^c) = 1 - P(A)\\) y \\(P(B^c) = 1 - P(B)\\), concluimos: \\(P(A^c \\cap B^c) = P(A^c)P(B^c)\\). \\(\\blacksquare\\)",
        justificacion: "Conclusión de independencia",
      },
    ],
  },
  {
    id: "dem_probabilidad_total",
    categoria: "Probabilidad Condicional e Inferencia Bayesiana",
    color: "#f0883e",
    titulo: "Teorema de la Probabilidad Total: P(A) = ∑ P(Bᵢ) P(A|Bᵢ)",
    descripcion: "Demostración paso a paso de la reconstrucción de la probabilidad marginal de un evento mediante una partición exhaustiva.",
    teorema: "P(A) = \\sum_{i=1}^k P(B_i) P(A|B_i) \\quad \\text{donde } \\bigcup_{i=1}^k B_i = \\Omega, \\; B_i \\cap B_j = \\emptyset",
    pasos: [
      {
        n: 1,
        enunciado: "Sea \\(\\{B_1, \\dots, B_k\\}\\) una partición de \\(\\Omega\\) con \\(P(B_i) > 0\\), tal que \\(\\bigcup_{i=1}^k B_i = \\Omega\\) y \\(B_i \\cap B_j = \\emptyset\\) para \\(i \\neq j\\).",
        justificacion: "Definición de partición",
      },
      {
        n: 2,
        enunciado: "El evento \\(A\\) se puede escribir como su intersección con \\(\\Omega\\): \\(A = A \\cap \\Omega = A \\cap \\left(\\bigcup_{i=1}^k B_i\\right)\\).",
        justificacion: "Identidad conjuntista con \\(\\Omega\\)",
      },
      {
        n: 3,
        enunciado: "Por la ley distributiva de la intersección respecto a la unión: \\(A = \\bigcup_{i=1}^k (A \\cap B_i)\\).",
        justificacion: "Distributividad conjuntista",
      },
      {
        n: 4,
        enunciado: "Dado que los \\(B_i\\) son disjuntos dos a dos, los eventos \\((A \\cap B_i)\\) también son mutuamente disjuntos: \\((A \\cap B_i) \\cap (A \\cap B_j) = \\emptyset\\) para \\(i \\neq j\\).",
        justificacion: "Disjuntitud heredada",
      },
      {
        n: 5,
        enunciado: "Por el Axioma 3 de Kolmogórov: \\(P(A) = P\\left(\\bigcup_{i=1}^k (A \\cap B_i)\\right) = \\sum_{i=1}^k P(A \\cap B_i)\\).",
        justificacion: "Axioma 3 de Kolmogórov",
      },
      {
        n: 6,
        enunciado: "Por definición de probabilidad condicional, \\(P(A \\cap B_i) = P(B_i) P(A|B_i)\\).",
        justificacion: "Regla del producto",
      },
      {
        n: 7,
        enunciado: "Sustituyendo en la suma obtenemos la fórmula final: \\(P(A) = \\sum_{i=1}^k P(B_i) P(A|B_i)\\). \\(\\blacksquare\\)",
        justificacion: "Teorema de Probabilidad Total",
      },
    ],
  },
  {
    id: "dem_bayes",
    categoria: "Probabilidad Condicional e Inferencia Bayesiana",
    color: "#f0883e",
    titulo: "Teorema de Bayes: Inversión de Probabilidades Condicionales",
    descripcion: "Deducción de la ley fundamental de inferencia bayesiana para actualizar probabilidades a priori a la luz de nueva evidencia.",
    teorema: "P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum_{i=1}^k P(B_i) P(A|B_i)}",
    pasos: [
      {
        n: 1,
        enunciado: "Sea \\(\\{B_1, \\dots, B_k\\}\\) una partición de \\(\\Omega\\) y \\(A\\) un evento observado con \\(P(A) > 0\\).",
        justificacion: "Marco probabilístico",
      },
      {
        n: 2,
        enunciado: "Por la definición axiomática de probabilidad condicional: \\(P(B_j|A) = \\frac{P(A \\cap B_j)}{P(A)}\\).",
        justificacion: "Definición de prob. condicional",
      },
      {
        n: 3,
        enunciado: "Aplicando la regla de la multiplicación en el numerador: \\(P(A \\cap B_j) = P(B_j) P(A|B_j)\\).",
        justificacion: "Regla del producto (Priori × Verosimilitud)",
      },
      {
        n: 4,
        enunciado: "Aplicando el Teorema de la Probabilidad Total al denominador: \\(P(A) = \\sum_{i=1}^k P(B_i) P(A|B_i)\\).",
        justificacion: "Probabilidad marginal de la evidencia",
      },
      {
        n: 5,
        enunciado: "Sustituimos numerador y denominador: \\(P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum_{i=1}^k P(B_i) P(A|B_i)}\\). \\(\\blacksquare\\)",
        justificacion: "Teorema de Bayes formulado",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 3: VARIABLES ALEATORIAS Y DISTRIBUCIONES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "dem_falta_memoria_exp",
    categoria: "Variables Aleatorias y Familias de Distribuciones",
    color: "#39d353",
    titulo: "Falta de Memoria de la Distribución Exponencial",
    descripcion: "Demostración analítica de que el tiempo de espera transcurrido no influye en la probabilidad de espera remanente.",
    teorema: "P(X > s+t \\mid X > s) = P(X > t) \\quad \\forall s, t > 0 \\quad \\text{para } X \\sim \\text{Exp}(\\lambda)",
    pasos: [
      {
        n: 1,
        enunciado: "Para \\(X \\sim \\text{Exp}(\\lambda)\\), la función de supervivencia es: \\(P(X > x) = \\int_x^\\infty \\lambda e^{-\\lambda u} du = \\left[-e^{-\\lambda u}\\right]_x^\\infty = e^{-\\lambda x}\\).",
        justificacion: "Función de supervivencia",
      },
      {
        n: 2,
        enunciado: "Planteamos la probabilidad condicional: \\(P(X > s+t \\mid X > s) = \\frac{P(\\{X > s+t\\} \\cap \\{X > s\\})}{P(X > s)}\\).",
        justificacion: "Definición de prob. condicional",
      },
      {
        n: 3,
        enunciado: "Dado que \\(s+t > s\\), el conjunto \\(\\{X > s+t\\}\\) está contenido en \\(\\{X > s\\}\\), por lo que su intersección es exactamente \\(\\{X > s+t\\}\\).",
        justificacion: "Intersección de eventos continuos",
      },
      {
        n: 4,
        enunciado: "Sustituimos las probabilidades de cola: \\(\\frac{P(X > s+t)}{P(X > s)} = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}\\).",
        justificacion: "Sustitución de supervivencias",
      },
      {
        n: 5,
        enunciado: "Aplicando leyes de los exponentes: \\(\\frac{e^{-\\lambda s} e^{-\\lambda t}}{e^{-\\lambda s}} = e^{-\\lambda t}\\).",
        justificacion: "Simplificación algebraica",
      },
      {
        n: 6,
        enunciado: "Dado que \\(e^{-\\lambda t} = P(X > t)\\), concluimos: \\(P(X > s+t \\mid X > s) = P(X > t)\\). \\(\\blacksquare\\)",
        justificacion: "Falta de memoria continua demostrada",
      },
    ],
  },
  {
    id: "dem_binomial_esperanza_var",
    categoria: "Variables Aleatorias y Familias de Distribuciones",
    color: "#39d353",
    titulo: "Media y Varianza de la Distribución Binomial vía Ensayos de Bernoulli",
    descripcion: "Deducción elegante de E[X] = np y Var(X) = np(1-p) descomponiendo la Binomial en suma de indicadores independientes.",
    teorema: "X = \\sum_{i=1}^n I_i \\implies \\mathbb{E}[X] = np, \\quad \\operatorname{Var}(X) = np(1-p)",
    pasos: [
      {
        n: 1,
        enunciado: "Una variable \\(X \\sim \\text{Bin}(n, p)\\) es la suma de \\(n\\) variables independientes Bernoulli: \\(X = \\sum_{i=1}^n I_i\\), donde \\(P(I_i = 1) = p\\) y \\(P(I_i = 0) = 1-p\\).",
        justificacion: "Descomposición en Bernoulli",
      },
      {
        n: 2,
        enunciado: "Calculamos la esperanza de cada ensayo: \\(\\mathbb{E}[I_i] = 1(p) + 0(1-p) = p\\).",
        justificacion: "Esperanza de Bernoulli",
      },
      {
        n: 3,
        enunciado: "Por linealidad del operador esperanza matemática: \\(\\mathbb{E}[X] = \\mathbb{E}[\\sum_{i=1}^n I_i] = \\sum_{i=1}^n \\mathbb{E}[I_i] = \\sum_{i=1}^n p = np\\).",
        justificacion: "Linealidad de la esperanza",
      },
      {
        n: 4,
        enunciado: "Calculamos el segundo momento del ensayo Bernoulli: \\(\\mathbb{E}[I_i^2] = 1^2(p) + 0^2(1-p) = p\\).",
        justificacion: "Segundo momento de Bernoulli",
      },
      {
        n: 5,
        enunciado: "Calculamos la varianza individual: \\(\\operatorname{Var}(I_i) = \\mathbb{E}[I_i^2] - (\\mathbb{E}[I_i])^2 = p - p^2 = p(1-p)\\).",
        justificacion: "Fórmula de la varianza",
      },
      {
        n: 6,
        enunciado: "Dado que los ensayos son mutuamente independientes, la covarianza cruzada es nula: \\(\\operatorname{Var}(X) = \\sum_{i=1}^n \\operatorname{Var}(I_i) = \\sum_{i=1}^n p(1-p) = np(1-p)\\). \\(\\blacksquare\\)",
        justificacion: "Varianza de suma independiente",
      },
    ],
  },
  {
    id: "dem_normal_integral_gauss",
    categoria: "Variables Aleatorias y Familias de Distribuciones",
    color: "#39d353",
    titulo: "Normalización de la Campana de Gauss (Integral de Poisson-Gauss)",
    descripcion: "Demostración en coordenadas polares de que el área total bajo la densidad normal estándar es estrictamente igual a 1.",
    teorema: "\\int_{-\\infty}^{\\infty} \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} dz = 1",
    pasos: [
      {
        n: 1,
        enunciado: "Sea \\(I = \\int_{-\\infty}^\\infty e^{-z^2/2} dz\\). Multiplicamos por sí misma expresándola como integral doble en \\(\\mathbb{R}^2\\): \\(I^2 = \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty e^{-(x^2+y^2)/2} dx dy\\).",
        justificacion: "Conversión a integral doble",
      },
      {
        n: 2,
        enunciado: "Realizamos la transformación a coordenadas polares: \\(x = r\\cos\\theta\\), \\(y = r\\operatorname{sen}\\theta\\), \\(x^2 + y^2 = r^2\\), con jacobiano \\(dx dy = r dr d\\theta\\) para \\(r \\in [0, \\infty)\\), \\(\\theta \\in [0, 2\\pi)\\).",
        justificacion: "Cambio a coordenadas polares",
      },
      {
        n: 3,
        enunciado: "Reescribimos en integrales iteradas separables: \\(I^2 = \\int_0^{2\\pi} d\\theta \\int_0^\\infty r e^{-r^2/2} dr\\).",
        justificacion: "Separación de variables",
      },
      {
        n: 4,
        enunciado: "La integral angular inmediata es \\(\\int_0^{2\\pi} d\\theta = 2\\pi\\).",
        justificacion: "Integral en \\(\\theta\\)",
      },
      {
        n: 5,
        enunciado: "Para la radial, sustituimos \\(u = r^2/2 \\implies du = r dr\\): \\(\\int_0^\\infty e^{-u} du = \\left[-e^{-u}\\right]_0^\\infty = 0 - (-1) = 1\\).",
        justificacion: "Sustitución en \\(u\\)",
      },
      {
        n: 6,
        enunciado: "Multiplicando ambos resultados: \\(I^2 = 2\\pi \\times 1 = 2\\pi \\implies I = \\sqrt{2\\pi}\\).",
        justificacion: "Raíz cuadrada positiva",
      },
      {
        n: 7,
        enunciado: "Dividiendo entre la constante normalizadora: \\(\\int_{-\\infty}^\\infty \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} dz = \\frac{I}{\\sqrt{2\\pi}} = \\frac{\\sqrt{2\\pi}}{\\sqrt{2\\pi}} = 1\\). \\(\\blacksquare\\)",
        justificacion: "Densidad Normal válida",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 4: ESPERANZA MATEMÁTICA Y TEOREMAS ASINTÓTICOS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "dem_markov",
    categoria: "Esperanza Matemática y Teoremas Asintóticos",
    color: "#bc8cff",
    titulo: "Desigualdad de Márkov: P(X ≥ a) ≤ E[X] / a",
    descripcion: "Demostración de la cota fundamental de cola derecha para variables aleatorias no negativas.",
    teorema: "P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a} \\quad \\forall a > 0, \\; X \\ge 0",
    pasos: [
      {
        n: 1,
        enunciado: "Sea \\(X\\) una variable aleatoria continua con \\(X \\ge 0\\) y función de densidad \\(f(x)\\). Por definición: \\(\\mathbb{E}[X] = \\int_0^\\infty x f(x) dx\\).",
        justificacion: "Definición de \\(\\mathbb{E}[X]\\)",
      },
      {
        n: 2,
        enunciado: "Para cualquier constante \\(a > 0\\), particionamos el dominio de integración en \\([0, a)\\) y \\([a, \\infty)\\): \\(\\mathbb{E}[X] = \\int_0^a x f(x) dx + \\int_a^\\infty x f(x) dx\\).",
        justificacion: "Partición de la integral",
      },
      {
        n: 3,
        enunciado: "Como \\(x \\ge 0\\) y \\(f(x) \\ge 0\\), el término \\(\\int_0^a x f(x) dx \\ge 0\\). Acotamos omitiendo este término no negativo: \\(\\mathbb{E}[X] \\ge \\int_a^\\infty x f(x) dx\\).",
        justificacion: "Acotación por no negatividad",
      },
      {
        n: 4,
        enunciado: "En el intervalo de integración \\([a, \\infty)\\), se cumple que \\(x \\ge a\\). Por monotonía de la integral: \\(\\int_a^\\infty x f(x) dx \\ge \\int_a^\\infty a f(x) dx = a \\int_a^\\infty f(x) dx\\).",
        justificacion: "Monotonía del integrando",
      },
      {
        n: 5,
        enunciado: "Por definición de la distribución de probabilidad: \\(\\int_a^\\infty f(x) dx = P(X \\ge a)\\).",
        justificacion: "Probabilidad acumulada en la cola",
      },
      {
        n: 6,
        enunciado: "Encadenando las desigualdades: \\(\\mathbb{E}[X] \\ge a P(X \\ge a)\\). Dividiendo entre \\(a > 0\\): \\(P(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}\\). \\(\\blacksquare\\)",
        justificacion: "Desigualdad de Márkov demostrada",
      },
    ],
  },
  {
    id: "dem_chebyshev",
    categoria: "Esperanza Matemática y Teoremas Asintóticos",
    color: "#bc8cff",
    titulo: "Desigualdad de Chebyshev: P(|X - μ| ≥ kσ) ≤ 1 / k²",
    descripcion: "Deducción de la cota universal de dispersión para cualquier variable aleatoria con varianza finita a partir de la desigualdad de Márkov.",
    teorema: "P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2} \\quad \\forall k > 0",
    pasos: [
      {
        n: 1,
        enunciado: "Sea \\(X\\) una variable aleatoria con media \\(\\mu = \\mathbb{E}[X]\\) y varianza finita \\(\\sigma^2 = \\operatorname{Var}(X)\\). Definimos la variable no negativa \\(Y = (X - \\mu)^2 \\ge 0\\).",
        justificacion: "Definición de variable auxiliar",
      },
      {
        n: 2,
        enunciado: "El evento \\(\\{|X - \\mu| \\ge k\\sigma\\}\\) es idéntico al evento cuadrático \\(\\{(X - \\mu)^2 \\ge k^2 \\sigma^2\\}\\), es decir, \\(\\{Y \\ge k^2 \\sigma^2\\}\\).",
        justificacion: "Equivalencia de eventos",
      },
      {
        n: 3,
        enunciado: "Aplicamos la Desigualdad de Márkov a la variable \\(Y \\ge 0\\) con la constante \\(a = k^2 \\sigma^2 > 0\\): \\(P(Y \\ge k^2 \\sigma^2) \\le \\frac{\\mathbb{E}[Y]}{k^2 \\sigma^2}\\).",
        justificacion: "Aplicación de Márkov",
      },
      {
        n: 4,
        enunciado: "Por la definición misma de varianza: \\(\\mathbb{E}[Y] = \\mathbb{E}[(X - \\mu)^2] = \\operatorname{Var}(X) = \\sigma^2\\).",
        justificacion: "Definición de varianza",
      },
      {
        n: 5,
        enunciado: "Sustituyendo \\(\\mathbb{E}[Y] = \\sigma^2\\) en la cota: \\(P(|X - \\mu| \\ge k\\sigma) \\le \\frac{\\sigma^2}{k^2 \\sigma^2}\\).",
        justificacion: "Sustitución de varianza",
      },
      {
        n: 6,
        enunciado: "Cancelando \\(\\sigma^2\\) en el numerador y denominador: \\(P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}\\). \\(\\blacksquare\\)",
        justificacion: "Desigualdad de Chebyshev demostrada",
      },
    ],
  },
  {
    id: "dem_ley_grandes_numeros",
    categoria: "Esperanza Matemática y Teoremas Asintóticos",
    color: "#bc8cff",
    titulo: "Ley Débil de los Grandes Números (Teorema de Khinchin)",
    descripcion: "Prueba de la convergencia en probabilidad del promedio muestral hacia la esperanza matemática mediante la desigualdad de Chebyshev.",
    teorema: "\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0 \\quad \\forall \\epsilon > 0",
    pasos: [
      {
        n: 1,
        enunciado: "Sean \\(X_1, \\dots, X_n\\) variables aleatorias i.i.d. con media \\(\\mathbb{E}[X_i] = \\mu\\) y varianza finita \\(\\operatorname{Var}(X_i) = \\sigma^2\\). Definimos el promedio \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\).",
        justificacion: "Hipótesis i.i.d.",
      },
      {
        n: 2,
        enunciado: "Calculamos el valor esperado del promedio: \\(\\mathbb{E}[\\bar{X}_n] = \\frac{1}{n} \\sum_{i=1}^n \\mathbb{E}[X_i] = \\frac{1}{n}(n\\mu) = \\mu\\).",
        justificacion: "Insesgadez de la media muestral",
      },
      {
        n: 3,
        enunciado: "Por la independencia de las variables, la varianza de la suma es la suma de las varianzas: \\(\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n^2} \\sum_{i=1}^n \\operatorname{Var}(X_i) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}\\).",
        justificacion: "Varianza del promedio muestral",
      },
      {
        n: 4,
        enunciado: "Aplicamos la Desigualdad de Chebyshev a \\(\\bar{X}_n\\) para un margen de error fijo \\(\\epsilon > 0\\): \\(P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\le \\frac{\\operatorname{Var}(\\bar{X}_n)}{\\epsilon^2}\\).",
        justificacion: "Desigualdad de Chebyshev",
      },
      {
        n: 5,
        enunciado: "Sustituyendo \\(\\operatorname{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n}\\): \\(P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\le \\frac{\\sigma^2}{n \\epsilon^2}\\).",
        justificacion: "Cota analítica explícita",
      },
      {
        n: 6,
        enunciado: "Tomando el límite asintótico conforme el tamaño de muestra \\(n \\to \\infty\\): \\(\\lim_{n \\to \\infty} \\frac{\\sigma^2}{n \\epsilon^2} = 0\\).",
        justificacion: "Paso al límite",
      },
      {
        n: 7,
        enunciado: "Por el teorema de compresión (emparedado), como \\(P(\\cdot) \\ge 0\\): \\(\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0\\), lo que demuestra la convergencia en probabilidad \\(\\bar{X}_n \\xrightarrow{P} \\mu\\). \\(\\blacksquare\\)",
        justificacion: "Ley Débil demostrada",
      },
    ],
  },
  {
    id: "dem_mgf_momentos",
    categoria: "Esperanza Matemática y Teoremas Asintóticos",
    color: "#bc8cff",
    titulo: "Teorema de Extracción de Momentos vía MGF: E[Xᵏ] = M_X⁽ᵏ⁾(0)",
    descripcion: "Demostración del método analítico para calcular el momento k-ésimo derivando k veces la Función Generadora de Momentos.",
    teorema: "\\mathbb{E}[X^k] = \\left. \\frac{d^k M_X(t)}{dt^k} \\right|_{t=0}",
    pasos: [
      {
        n: 1,
        enunciado: "Por definición, la Función Generadora de Momentos es \\(M_X(t) = \\mathbb{E}[e^{tX}]\\).",
        justificacion: "Definición de MGF",
      },
      {
        n: 2,
        enunciado: "Expandimos \\(e^{tX}\\) mediante su serie infinita de potencias de Maclaurin: \\(e^{tX} = \\sum_{j=0}^\\infty \\frac{(tX)^j}{j!} = 1 + tX + \\frac{t^2 X^2}{2!} + \\dots + \\frac{t^k X^k}{k!} + \\dots\\).",
        justificacion: "Serie de Taylor de la exponencial",
      },
      {
        n: 3,
        enunciado: "Aplicando linealidad del operador esperanza término a término: \\(M_X(t) = \\sum_{j=0}^\\infty \\frac{t^j}{j!} \\mathbb{E}[X^j]\\).",
        justificacion: "Linealidad de la esperanza",
      },
      {
        n: 4,
        enunciado: "Diferenciamos \\(k\\) veces respecto a \\(t\\). Los términos con grado \\(j < k\\) tienen derivada nula: \\(\\frac{d^k M_X(t)}{dt^k} = \\sum_{j=k}^\\infty \\frac{j(j-1)\\dots(j-k+1) t^{j-k}}{j!} \\mathbb{E}[X^j]\\).",
        justificacion: "Diferenciación de orden \\(k\\)",
      },
      {
        n: 5,
        enunciado: "Para el término inicial \\(j = k\\), el coeficiente es \\(\\frac{k!}{k!} t^0 = 1\\), quedando el sumando constante \\(\\mathbb{E}[X^k]\\).",
        justificacion: "Aislamiento del término constante",
      },
      {
        n: 6,
        enunciado: "Para todo \\(j > k\\), cada sumando contiene potencias de \\(t\\) de la forma \\(t^{j-k}\\).",
        justificacion: "Términos residuales con \\(t\\)",
      },
      {
        n: 7,
        enunciado: "Evaluando en \\(t = 0\\), todos los términos con \\(t\\) se anulan exactamente, obteniendo: \\(\\left. \\frac{d^k M_X(t)}{dt^k} \\right|_{t=0} = \\mathbb{E}[X^k]\\). \\(\\blacksquare\\)",
        justificacion: "Evaluación en \\(t=0\\) y conclusión",
      },
    ],
  },
];
