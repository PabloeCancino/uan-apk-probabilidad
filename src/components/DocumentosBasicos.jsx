import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { renderTextWithMath, InlineFormula } from "./Formula";

export function DocumentosBasicos() {
  const { C } = useContext(ThemeCtx);
  const [docActivo, setDocActivo] = useState("programa"); // "programa" | "linea" | "alineacion"

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Documentos Básicos e Institucionales UAN
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Fundamentación Curricular y Programa Oficial
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Consulte los documentos rectores del Programa Académico de la Licenciatura en Matemáticas (PALMAT) de la Universidad Autónoma de Nayarit.
        </p>
      </div>

      {/* Selector de Documentos */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, marginBottom: 16 }}>
        {[
          { id: "programa", nombre: "📄 Programa en Extenso (CBIMAT-234)", color: "#58a6ff" },
          { id: "linea", nombre: "🗺️ Línea de Probabilidad y Estadística", color: "#39d353" },
          { id: "alineacion", nombre: "🧭 Principios de Alineación Curricular", color: "#bc8cff" },
        ].map(d => (
          <button
            key={d.id}
            onClick={() => setDocActivo(d.id)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              border: docActivo === d.id ? `1px solid ${d.color}` : `1px solid ${C.border}`,
              background: docActivo === d.id ? `${d.color}22` : C.surface,
              color: docActivo === d.id ? d.color : C.muted,
              transition: "all 0.2s ease",
            }}
          >
            {d.nombre}
          </button>
        ))}
      </div>

      {/* Contenedor del Documento */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "var(--sp-md)",
          color: C.text,
          lineHeight: 1.6,
        }}
      >
        {/* DOCUMENTO 1: PROGRAMA EN EXTENSO */}
        {docActivo === "programa" && (
          <div>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "11px", color: C.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                UNIVERSIDAD AUTÓNOMA DE NAYARIT · DIRECCIÓN DE EDUCACIÓN SUPERIOR
              </div>
              <h3 style={{ fontSize: "var(--fs-lg)", margin: "4px 0", color: C.text }}>
                PROGRAMA DE ESTUDIOS EN EXTENSO: PROBABILIDAD (CBIMAT-234)
              </h3>
              <div style={{ color: C.muted, fontSize: "var(--fs-xs)" }}>
                Licenciatura en Matemáticas (PALMAT) · Plan 2024 · Actualización Agosto 2026
              </div>
            </div>

            {/* Ficha de Identificación */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 10,
              background: C.surface2,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
              fontSize: "var(--fs-xs)"
            }}>
              <div><strong>Clave:</strong> CBIMAT-234</div>
              <div><strong>Docente Responsable:</strong> Dr. Pablo Eduardo Cancino Marentes</div>
              <div><strong>Área:</strong> Disciplinar - Profesionalizante</div>
              <div><strong>Tipo:</strong> Obligatoria / Laboratorio</div>
              <div><strong>Horas Teoría / Práctica:</strong> 32 h / 48 h (128 h totales)</div>
              <div><strong>Valor en Créditos:</strong> 8 Créditos</div>
            </div>

            <h4 style={{ color: C.accent, margin: "16px 0 8px" }}>1. Presentación</h4>
            <p style={{ fontSize: "var(--fs-sm)" }}>
              La <strong>Probabilidad</strong> es la rama de las matemáticas que se ocupa de analizar, cuantificar y modelar el azar y la incertidumbre. En su esencia, estudia la posibilidad de ocurrencia de diversos eventos en el marco de experimentos aleatorios, proporcionando una base sólida y rigurosa para entender y predecir fenómenos que no siguen patrones determinísticos.
            </p>
            <p style={{ fontSize: "var(--fs-sm)" }}>
              Este curso-laboratorio se ubica en el 3° semestre del PALMAT y articula el pensamiento axiomático de Kolmogórov con prácticas de cómputo científico y simulación de Monte Carlo en Python/Jupyter.
            </p>

            <h4 style={{ color: C.accent, margin: "16px 0 8px" }}>2. Unidad de Competencia</h4>
            <div style={{ background: `${C.accent}11`, borderLeft: `3px solid ${C.accent}`, padding: "10px 14px", borderRadius: 6, fontSize: "var(--fs-sm)", marginBottom: 16 }}>
              Comprender, formalizar, demostrar y aplicar los principios y métodos de la teoría axiomática de la probabilidad, caracterizando variables aleatorias discretas y continuas, analizando operadores de momentos y verificando el comportamiento asintótico de los teoremas límite para resolver problemas estocásticos y modelar fenómenos bajo incertidumbre.
            </div>

            <h4 style={{ color: C.accent, margin: "16px 0 8px" }}>3. Saberes Clave</h4>
            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-xs)", border: `1px solid ${C.border}` }}>
                <thead>
                  <tr style={{ background: C.surface2, color: C.text }}>
                    <th style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "left", width: "25%" }}>Tipo de Saber</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "left" }}>Desglose Institucional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 8, border: `1px solid ${C.border}`, fontWeight: 600 }}>Teóricos</td>
                    <td style={{ padding: 8, border: `1px solid ${C.border}` }}>Axiomática de Kolmogórov, sigma-álgebras, probabilidad condicional, Teorema de Bayes, distribuciones clásicas (Binomial, Poisson, Normal, Gamma), teoría de momentos y teoremas límite (TLC, Ley de los Grandes Números).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: `1px solid ${C.border}`, fontWeight: 600 }}>Prácticos</td>
                    <td style={{ padding: 8, border: `1px solid ${C.border}` }}>Resolución analítica de problemas estocásticos, ajuste de modelos distribucionales, simulación de Monte Carlo y análisis en Python (NumPy, SciPy, Matplotlib).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: `1px solid ${C.border}`, fontWeight: 600 }}>Metodológicos</td>
                    <td style={{ padding: 8, border: `1px solid ${C.border}` }}>Deducción y demostración rigurosa, abstracción axiomática y pensamiento algorítmico computacional.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: `1px solid ${C.border}`, fontWeight: 600 }}>Formativos</td>
                    <td style={{ padding: 8, border: `1px solid ${C.border}` }}>Rigor científico, honestidad en el reporte de datos, trabajo colaborativo, pensamiento crítico y ética profesional.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ color: C.accent, margin: "16px 0 8px" }}>4. Desglose de las 4 Unidades Oficiales</h4>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                { u: "Unidad 1", t: "Espacios de Probabilidad y Combinatoria", h: "32 Horas", d: "Técnicas de conteo, Regla de Laplace, espacios muestrales finitos/infinitos, sigma-álgebras, axiomas de Kolmogórov y probabilidad geométrica." },
                { u: "Unidad 2", t: "Probabilidad Condicional, Independencia y Teorema de Bayes", h: "32 Horas", d: "Probabilidad condicional, independencia estocástica, particiones del espacio muestral, Teorema de la Probabilidad Total y Teorema de Bayes (diagnóstico epidemiológico)." },
                { u: "Unidad 3", t: "Variables Aleatorias y Familias de Distribuciones", h: "32 Horas", d: "Funciones PMF, PDF y CDF, vectores aleatorios bivariados, familias discretas (Binomial, Poisson, Geométrica) y continuas (Normal, Exponencial, Gamma, Beta)." },
                { u: "Unidad 4", t: "Esperanza Matemática, Momentos y Teoremas Asintóticos", h: "32 Horas", d: "Operador esperanza y linealidad, varianza, covarianza, función generadora de momentos (MGF), desigualdades de Márkov/Chebyshev, Ley de los Grandes Números y Teorema del Límite Central." },
              ].map(item => (
                <div key={item.u} style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <strong style={{ color: C.text, fontSize: "var(--fs-sm)" }}>{item.u}: {item.t}</strong>
                    <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: 4, background: `${C.accent}22`, color: C.accent, fontWeight: 600 }}>{item.h}</span>
                  </div>
                  <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTO 2: LÍNEA DE FORMACIÓN */}
        {docActivo === "linea" && (
          <div>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "11px", color: "#39d353", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                LICENCIATURA EN MATEMÁTICAS · PALMAT PLAN 2024
              </div>
              <h3 style={{ fontSize: "var(--fs-lg)", margin: "4px 0", color: C.text }}>
                LÍNEA DE FORMACIÓN EN PROBABILIDAD Y ESTADÍSTICA
              </h3>
              <div style={{ color: C.muted, fontSize: "var(--fs-xs)" }}>
                5° Línea de Formación · Secuencia Curricular Modular de 5 Unidades de Aprendizaje
              </div>
            </div>

            <p style={{ fontSize: "var(--fs-sm)" }}>
              La línea de formación en <strong>Probabilidad y Estadística</strong> se articula a lo largo del mapa curricular mediante una secuencia progresiva de unidades de aprendizaje teórico-prácticas (Laboratorios y Cursos-Taller):
            </p>

            {/* Tabla de la Línea */}
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-xs)", border: `1px solid ${C.border}` }}>
                <thead>
                  <tr style={{ background: C.surface2, color: C.text }}>
                    <th style={{ padding: 8, border: `1px solid ${C.border}` }}>Semestre</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}` }}>Clave</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "left" }}>Unidad de Aprendizaje</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}` }}>Tipo</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}` }}>Horas Totales</th>
                    <th style={{ padding: 8, border: `1px solid ${C.border}` }}>Créditos</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sem: "3°", c: "CBIMAT-234", n: "Probabilidad", t: "Laboratorio", h: 128, cr: 8, activo: true },
                    { sem: "4°", c: "CBIMAT-244", n: "Estadística Descriptiva e Inferencial", t: "Laboratorio", h: 128, cr: 8 },
                    { sem: "5°", c: "CBIMAT-254", n: "Elementos del Muestreo", t: "Laboratorio", h: 96, cr: 6 },
                    { sem: "6°", c: "CBIMAT-264", n: "Diseño de Experimentos", t: "Laboratorio", h: 128, cr: 8 },
                    { sem: "8°", c: "CBIMAT-386", n: "Procesos Estocásticos (Mat. Aplicadas)", t: "Curso-Taller", h: 128, cr: 8 },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ background: row.activo ? "#39d35315" : "transparent" }}>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "center", fontWeight: 600 }}>{row.sem}</td>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "center" }}><code>{row.c}</code></td>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, fontWeight: row.activo ? 700 : 500, color: row.activo ? "#39d353" : C.text }}>
                        {row.n} {row.activo && "(Esta App)"}
                      </td>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "center" }}>{row.t}</td>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "center" }}>{row.h} h</td>
                      <td style={{ padding: 8, border: `1px solid ${C.border}`, textAlign: "center", fontWeight: 600 }}>{row.cr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 style={{ color: "#39d353", margin: "16px 0 8px" }}>Articulación y Enlace con otras Líneas</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8, fontSize: "var(--fs-xs)" }}>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10 }}>
                <strong style={{ color: C.text }}>Álgebra y Álgebra Lineal:</strong>
                <p style={{ margin: "4px 0 0", color: C.muted }}>Estructuras matriciales, formas bilineales para matrices de covarianza y cadenas de Markov.</p>
              </div>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10 }}>
                <strong style={{ color: C.text }}>Cálculo y Análisis Matemático:</strong>
                <p style={{ margin: "4px 0 0", color: C.muted }}>Cálculo multivariado, teoría de la medida de Lebesgue e integrales para variables continuas y momentos.</p>
              </div>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10 }}>
                <strong style={{ color: C.text }}>Modelación y Métodos Numéricos:</strong>
                <p style={{ margin: "4px 0 0", color: C.muted }}>Algoritmos de optimización, simulación de Monte Carlo e integración estocástica.</p>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTO 3: PRINCIPIOS DE ALINEACIÓN */}
        {docActivo === "alineacion" && (
          <div>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "11px", color: "#bc8cff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                METODOLOGÍA DOCENTE Y DIRECTRIZ INSTITUCIONAL
              </div>
              <h3 style={{ fontSize: "var(--fs-lg)", margin: "4px 0", color: C.text }}>
                PRINCIPIOS DE ALINEACIÓN CURRICULAR (SSOT)
              </h3>
              <div style={{ color: C.muted, fontSize: "var(--fs-xs)" }}>
                Norma Técnica NTE-UAN-APK-001 v1.4 · Docente: Dr. Pablo Eduardo Cancino Marentes
              </div>
            </div>

            <p style={{ fontSize: "var(--fs-sm)" }}>
              El programa en extenso <strong>CBIMAT-234 (Versión 2026)</strong> constituye la <em>Fuente Única de Verdad (Single Source of Truth)</em> para todo el desarrollo de apuntes, laboratorios, reactivos de examen y visualizadores interactivos:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              {[
                { n: "1", t: "Fidelidad Temática y Secuencial", d: "Apego estricto a las 4 unidades maestras y su secuencia lógica oficial sin omisiones ni dispersiones." },
                { n: "2", t: "Rigor Matemático y Formalismo Axiomático", d: "Ningún concepto se aborda solo de manera empírica; todo teorema cuenta con formulación axiomática rigurosa en KaTeX (Ω, F, P, E[X], Var(X))." },
                { n: "3", t: "Integración Teórico-Práctica (Laboratorio en Python)", d: "Tipificación como Laboratorio (48 horas prácticas): vinculación entre demostración analítica y simulación computacional de Monte Carlo." },
                { n: "4", t: "Trazabilidad y Codificación Homogénea", d: "Estandarización institucional en identificadores, nombres de componentes y persistencia de progreso mx.uan.probabilidad_progreso." },
                { n: "5", t: "Progresión Transversal hacia la Estadística", d: "Construcción de puentes hacia la Inferencia Estadística (CBIMAT-244), Muestreo (CBIMAT-254) y Procesos Estocásticos (CBIMAT-386)." },
              ].map(p => (
                <div key={p.n} style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10, display: "flex", gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, minWidth: 28, borderRadius: "50%",
                    background: "#bc8cff22", border: "1px solid #bc8cff",
                    color: "#bc8cff", fontWeight: "bold", fontSize: 13,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {p.n}
                  </div>
                  <div>
                    <strong style={{ color: C.text, fontSize: "var(--fs-sm)" }}>{p.t}</strong>
                    <div style={{ color: C.muted, fontSize: "var(--fs-xs)", marginTop: 2 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
