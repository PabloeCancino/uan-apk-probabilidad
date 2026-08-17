# 📱 Probabilidad — UAN

[![Android APK](https://img.shields.io/badge/Descargar-APK%20Android-green?style=for-the-badge&logo=android)](https://github.com/PabloeCancino/uan-apk-probabilidad/releases/download/v1.0.0/Probabilidad.apk)
[![Ver Web App](https://img.shields.io/badge/Ver-Web%20App%20en%20Vivo-blue?style=for-the-badge&logo=githubpages)](https://PabloeCancino.github.io/uan-apk-probabilidad/)
[![Norma](https://img.shields.io/badge/Norma-NTE--UAN--APK--001%20v1.4-purple?style=for-the-badge)](https://github.com/PabloeCancino/uan-apk-plantilla-arquetipo)

Aplicación interactiva para la enseñanza, modelado y simulación computacional de la **Probabilidad** (`CBIMAT-234`), desarrollada bajo la norma **NTE-UAN-APK-001 v1.4** de la **Universidad Autónoma de Nayarit**.

---

## 🎯 Características Principales

- 📖 **Alineación Curricular Estricta (4 Unidades Maestras):**
  - **Unidad 1:** Espacios de Probabilidad y Combinatoria (Técnicas de conteo, Regla de Laplace, $\sigma$-álgebras, Axiomas de Kolmogórov y Probabilidad Geométrica).
  - **Unidad 2:** Probabilidad Condicional e Inferencia Bayesiana (Independencia, Particiones, Teorema de la Probabilidad Total, Teorema de Bayes y Falacias).
  - **Unidad 3:** Variables Aleatorias y Familias de Distribuciones (PMF/PDF/CDF, Modelos Discretos y Continuos).
  - **Unidad 4:** Esperanza Matemática y Teoremas Asintóticos (Operador $\mathbb{E}[\cdot]$, Varianza, Covarianza, MGF, Desigualdades de Márkov/Chebyshev y Teorema del Límite Central).
- 🔬 **Laboratorio de Simulación Estocástica (9 Estaciones Interactivas):**
  1. 📊 *Graficador de Distribuciones:* PMF/PDF y CDF dinámicas con sliders en tiempo real.
  2. 🔔 *Puntos de Inflexión Gauss:* Análisis analítico de $f''(x)=0$ en $x = \mu \pm \sigma$ y concavidad.
  3. 🩺 *Inferencia Bayesiana:* Simulación de pruebas diagnósticas y matriz de confusión en 10,000 casos.
  4. 🌳 *Árbol Estocástico:* Ramas condicionales y cálculo compuesto de probabilidad total.
  5. 🎲 *Teorema del Límite Central:* Simulación de Monte Carlo con convergencia gaussiana en vivo.
  6. 📐 *Aguja de Buffon:* Estimación estocástica de $\pi$ mediante probabilidad geométrica.
  7. 🔵 *Diagramas de Venn:* Selector dinámico de 2 y 3 eventos e Inclusión-Exclusión.
  8. 🔢 *Triángulo de Pascal:* Coeficientes combinatorios $\binom{n}{k}$ y desarrollo de binomios.
  9. 📍 *Soporte en $\mathbb{R}$:* Visualizador de medidas continuas, discretas y puntos con medida nula.
- 📐 **Expresiones Matemáticas KaTeX:** Renderizado riguroso de notación matemática y probabilística ($\mathbb{P}, \mathbb{E}, \operatorname{Var}, \operatorname{Cov}, \Omega, \mathcal{F}$).
- 🧪 **Banco de Autoevaluación (Quizzes):** 52 reactivos con retroalimentación formativa y solución paso a paso.
- ♿ **Accesibilidad:** 8 niveles de tamaño de fuente ($0.85\times$ a $2.00\times$) y temas Alto Contraste Oscuro / Claro.
- 📶 **100% Offline:** Operación autónoma sin requerir conexión a internet tras su instalación.

---

## 📥 Descarga e Instalación

1. Descarga el instalador [Probabilidad.apk](https://github.com/PabloeCancino/uan-apk-probabilidad/releases/download/v1.0.0/Probabilidad.apk) desde la sección de **[Releases](https://github.com/PabloeCancino/uan-apk-probabilidad/releases)**.
2. Transfiere el archivo a tu dispositivo Android o ábrelo directamente desde la carpeta de Descargas.
3. Si el sistema lo solicita, autoriza la instalación desde fuentes externas ("Instalar aplicaciones desconocidas").

---

## 🛠️ Desarrollo y Compilación Local

### Requisitos previos
- Node.js 18+ LTS
- JDK 17+ (o JDK 21)
- Android Studio Ladybug+ (API 26+)

### Instrucciones
```bash
# 1. Clonar el repositorio
git clone https://github.com/PabloeCancino/uan-apk-probabilidad.git
cd uan-apk-probabilidad

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo web interactivo
npm run dev

# 4. Compilar proyecto web
npm run build
```

### Compilación de APKs (PowerShell)
```powershell
# Compilar APK Debug
& "I:\Desarrollo_de_APK\Codigo_y_artefactos\compilar_apk_debug.ps1" -ProjectPath "I:\Desarrollo_de_APK\Probabilidad"

# Compilar APK Release Firmada
& "I:\Desarrollo_de_APK\Codigo_y_artefactos\compilar_apk_release.ps1" -ProjectPath "I:\Desarrollo_de_APK\Probabilidad"
```

---

## 📄 Licencia y Créditos

Desarrollado en la **Universidad Autónoma de Nayarit** (UAN).  
Investigación Docente en Tecnología Educativa.  
Autor: **Dr. Pablo Eduardo Cancino Marentes**  
Programa Académico de Licenciatura en Matemáticas (PALMAT).  
Unidad Académica de Ciencias Básicas e Ingenierías.  
Norma Técnica: **NTE-UAN-APK-001 v1.4**.  
Todos los derechos reservados © 2026.
