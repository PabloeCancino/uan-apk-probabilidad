import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CATEGORIAS, QUIZZES } from "../data/contenido.js";

export function CentroEvaluaciones({ onIniciarQuiz, progreso }) {
  const { C } = useContext(ThemeCtx);

  // Calcular estadísticas por módulo
  const historial = progreso?.quizHistorial || [];

  const getStatsModulo = (moduloId) => {
    const intentos = historial.filter(h => h.moduloId === moduloId);
    if (intentos.length === 0) return { intentos: 0, mejorPuntaje: null, promedio: null };
    const porcentajes = intentos.map(i => Math.round((i.aciertos / i.total) * 100));
    const mejorPuntaje = Math.max(...porcentajes);
    const promedio = Math.round(porcentajes.reduce((a, b) => a + b, 0) / porcentajes.length);
    return { intentos: intentos.length, mejorPuntaje, promedio };
  };

  const statsGlobal = getStatsModulo("global");

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Evaluación Formativa por Competencias
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Centro de Evaluaciones Curriculares
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Selecciona un bloque temático para evaluar tus competencias en cada una de las 4 unidades de aprendizaje o realiza el Examen Global de la asignatura.
        </p>
      </div>

      {/* Grid de Bloques de Evaluación por Unidad */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
        {CATEGORIAS.map((cat, idx) => {
          const qsUnidad = QUIZZES.filter(q => q.nivel === cat.nombre);
          const stats = getStatsModulo(cat.id);

          return (
            <div
              key={cat.id}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderTop: `4px solid ${cat.color}`,
                borderRadius: 12,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: "11px", color: cat.color, fontWeight: 700, textTransform: "uppercase" }}>
                    Unidad {idx + 1}
                  </span>
                  <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: 10, background: `${cat.color}22`, color: cat.color, fontWeight: 600 }}>
                    {qsUnidad.length} Reactivos
                  </span>
                </div>

                <h3 style={{ fontSize: "var(--fs-md)", color: C.text, margin: "2px 0 6px", fontWeight: 700 }}>
                  {cat.icon} {cat.nombre}
                </h3>

                <p style={{ fontSize: "var(--fs-xs)", color: C.muted, lineHeight: 1.4, margin: "0 0 10px" }}>
                  {idx === 0 && "Conteo, Laplace, σ-álgebras, axiomas de Kolmogórov y probabilidad geométrica."}
                  {idx === 1 && "Independencia estocástica, Teorema de la Probabilidad Total y Teorema de Bayes."}
                  {idx === 2 && "Variables discretas y continuas, PMF, PDF, CDF y modelos clásicos."}
                  {idx === 3 && "Esperanza matemática, momentos, desigualdades de Chebyshev y Teorema del Límite Central."}
                </p>

                {/* Métricas de desempeño */}
                <div style={{
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  padding: "6px 10px",
                  fontSize: "11px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: C.text,
                }}>
                  <span>Intentos: <strong>{stats.intentos}</strong></span>
                  <span>Mejor: <strong style={{ color: stats.mejorPuntaje >= 80 ? C.green : cat.color }}>{stats.mejorPuntaje !== null ? `${stats.mejorPuntaje}%` : "—"}</strong></span>
                </div>
              </div>

              {/* Botones de Inicio */}
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                <button
                  onClick={() => onIniciarQuiz(cat.id, 10, `Unidad ${idx + 1}: ${cat.nombre}`)}
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: `${cat.color}22`,
                    border: `1px solid ${cat.color}`,
                    color: cat.color,
                    fontSize: "var(--fs-xs)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  📝 Rápido (10 Q)
                </button>
                <button
                  onClick={() => onIniciarQuiz(cat.id, qsUnidad.length, `Unidad ${idx + 1}: ${cat.nombre} (Completo)`)}
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: C.surface2,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontSize: "var(--fs-xs)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  🏆 Todo ({qsUnidad.length} Q)
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Card del Examen Global */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.surface} 0%, ${C.surface2} 100%)`,
          border: `1px solid ${C.yellow}66`,
          borderLeft: `5px solid ${C.yellow}`,
          borderRadius: 12,
          padding: 18,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 20 }}>🎯</span>
            <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, margin: 0, fontWeight: 700 }}>
              Examen Global de la Asignatura
            </h3>
          </div>
          <p style={{ color: C.muted, fontSize: "var(--fs-sm)", margin: "4px 0 8px" }}>
            Evaluación integral comprensiva con preguntas aleatorias ponderadas de las 4 unidades curriculares ({QUIZZES.length} reactivos en el banco).
          </p>
          <div style={{ fontSize: "11px", color: C.muted }}>
            Intentos registrados: <strong>{statsGlobal.intentos}</strong> · Mejor calificación: <strong style={{ color: C.yellow }}>{statsGlobal.mejorPuntaje !== null ? `${statsGlobal.mejorPuntaje}%` : "Sin intentos"}</strong>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => onIniciarQuiz("global", 15, "Examen Global (15 Preguntas)")}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              background: C.yellow,
              border: "none",
              color: "#000",
              fontSize: "var(--fs-sm)",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            🚀 Iniciar Examen Global (15 Q)
          </button>
          <button
            onClick={() => onIniciarQuiz("global", 25, "Examen Integral Extenso (25 Preguntas)")}
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              background: C.surface,
              border: `1px solid ${C.yellow}`,
              color: C.yellow,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            📚 Extenso (25 Q)
          </button>
        </div>
      </div>
    </div>
  );
}
