// NTE-UAN-APK-001 v1.3 — Simulador de Demostraciones Matemáticas Paso a Paso
// Asignatura: Probabilidad (CBIMAT-234) — PALMAT UAN
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { DEMOSTRACIONES } from "../data/demostraciones.js";
import { Formula, renderTextWithMath } from "./Formula";

export function SimuladorDemostraciones() {
  const { C } = useContext(ThemeCtx);
  const [catFiltro, setCatFiltro] = useState("Todos");
  const [demId, setDemId] = useState(DEMOSTRACIONES[0].id);
  const [pasoActual, setPasoActual] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const itvRef = useRef(null);

  const categorias = [
    "Todos",
    "Espacios de Probabilidad y Combinatoria",
    "Probabilidad Condicional e Inferencia Bayesiana",
    "Variables Aleatorias y Familias de Distribuciones",
    "Esperanza Matemática y Teoremas Asintóticos",
  ];

  const demsFilt = catFiltro === "Todos"
    ? DEMOSTRACIONES
    : DEMOSTRACIONES.filter(d => d.categoria === catFiltro);

  const dem = DEMOSTRACIONES.find(d => d.id === demId) || demsFilt[0] || DEMOSTRACIONES[0];

  const iniciarAuto = useCallback(() => {
    clearInterval(itvRef.current);
    setPasoActual(0);
    setCorriendo(true);
  }, []);

  const pausarAuto = useCallback(() => {
    setCorriendo(false);
    clearInterval(itvRef.current);
  }, []);

  useEffect(() => {
    if (!corriendo || !dem) return;
    itvRef.current = setInterval(() => {
      setPasoActual(p => {
        if (p >= dem.pasos.length - 1) {
          setCorriendo(false);
          return p;
        }
        return p + 1;
      });
    }, 1800);
    return () => clearInterval(itvRef.current);
  }, [corriendo, dem]);

  const seleccionarDem = (id) => {
    setDemId(id);
    setPasoActual(0);
    setCorriendo(false);
    clearInterval(itvRef.current);
  };

  const pasoObj = dem?.pasos?.[pasoActual] || { n: 1, enunciado: "—", justificacion: "" };
  const totalPasos = dem?.pasos?.length || 1;
  const progresoPct = Math.round(((pasoActual + 1) / totalPasos) * 100);

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 18 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: dem.color || C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Rigor Formal y Deducción Lógica
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          🧮 Simulador de Demostraciones Matemáticas
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Visualiza paso a paso la cadena de deducción formal de los teoremas fundamentales del curso, con justificaciones axiomáticas y notación KaTeX rigurosa.
        </p>
      </div>

      {/* Filtro por Categorías / Unidades Curriculares */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6, marginBottom: 12 }}>
        {categorias.map(c => {
          const activo = catFiltro === c;
          const label = c === "Todos" ? "🌐 Todas las Unidades" : c;
          return (
            <button
              key={c}
              onClick={() => {
                setCatFiltro(c);
                const primeros = c === "Todos" ? DEMOSTRACIONES : DEMOSTRACIONES.filter(d => d.categoria === c);
                if (primeros.length > 0) seleccionarDem(primeros[0].id);
              }}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: "var(--fs-xs)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                border: activo ? `1px solid ${C.accent}` : `1px solid ${C.border}`,
                background: activo ? `${C.accent}22` : C.surface,
                color: activo ? C.accent : C.muted,
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Selector de Demostraciones disponibles */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, marginBottom: 18 }}>
        {demsFilt.map(d => {
          const seleccionada = dem.id === d.id;
          return (
            <button
              key={d.id}
              onClick={() => seleccionarDem(d.id)}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: "var(--fs-xs)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                textAlign: "left",
                border: seleccionada ? `2px solid ${d.color}` : `1px solid ${C.border}`,
                background: seleccionada ? `${d.color}18` : C.surface,
                color: seleccionada ? d.color : C.text,
                boxShadow: seleccionada ? `0 2px 8px ${d.color}33` : "none",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ fontSize: "10px", color: d.color, opacity: 0.85, textTransform: "uppercase" }}>
                {d.categoria.split(" ")[0]} {d.categoria.includes("1") || d.categoria.includes("Espacios") ? "U1" : d.categoria.includes("Condicional") ? "U2" : d.categoria.includes("Variables") ? "U3" : "U4"}
              </div>
              <div>{d.titulo.split(":")[0]}</div>
            </button>
          );
        })}
      </div>

      {/* Enunciado del Teorema Activo */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderLeft: `4px solid ${dem.color || C.accent}`,
          borderRadius: 12,
          padding: "14px 18px",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <span style={{ fontSize: "11px", color: dem.color || C.accent, fontWeight: 700, textTransform: "uppercase" }}>
            {dem.categoria}
          </span>
          <span style={{ fontSize: "11px", color: C.muted }}>
            {totalPasos} Pasos Lógicos
          </span>
        </div>
        <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, margin: "2px 0 6px", fontWeight: 700 }}>
          {dem.titulo}
        </h3>
        <p style={{ color: C.muted, fontSize: "var(--fs-xs)", margin: "0 0 8px", lineHeight: 1.4 }}>
          {dem.descripcion}
        </p>
        <Formula latex={dem.teorema} color={dem.color} />
      </div>

      {/* Grid del Simulador: Lista de Pasos + Panel de Enfoque */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* Panel Izquierdo: Cadena Completa de Pasos */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 16,
            maxHeight: 520,
            overflowY: "auto",
          }}
        >
          <div style={{ fontSize: "11px", color: C.muted, textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 700, marginBottom: 12 }}>
            Cadena de Demostración Formal
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {dem.pasos.map((p, idx) => {
              const esActual = idx === pasoActual;
              const esPasado = idx < pasoActual;
              const esFuturo = idx > pasoActual;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setPasoActual(idx);
                    pausarAuto();
                  }}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    cursor: "pointer",
                    background: esActual
                      ? `${dem.color}22`
                      : esPasado
                      ? `${C.green}11`
                      : C.surface2,
                    border: esActual
                      ? `2px solid ${dem.color}`
                      : esPasado
                      ? `1px solid ${C.green}44`
                      : `1px solid ${C.border}`,
                    opacity: esFuturo ? 0.45 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: esActual ? dem.color : esPasado ? C.green : C.muted,
                      }}
                    >
                      {esPasado ? "✓ " : esActual ? "▶ " : "" }Paso {p.n}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: esActual ? `${dem.color}33` : `${C.border}66`,
                        color: esActual ? dem.color : C.muted,
                        fontWeight: 600,
                      }}
                    >
                      {p.justificacion}
                    </span>
                  </div>

                  <div style={{ fontSize: "var(--fs-sm)", color: C.text, lineHeight: 1.45 }}>
                    {renderTextWithMath(p.enunciado)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel Derecho: Visor de Enfoque y Controles de Ejecución */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: dem.color, fontWeight: 700 }}>
              Visualizador de Paso Activo
            </span>
            <span style={{ fontSize: "11px", color: C.muted }}>
              Paso {pasoActual + 1} de {totalPasos} ({progresoPct}%)
            </span>
          </div>

          {/* Caja Destacada del Paso Actual */}
          <div
            style={{
              background: C.surface2,
              border: `1px solid ${dem.color}55`,
              borderLeft: `4px solid ${dem.color}`,
              borderRadius: 10,
              padding: "16px 18px",
              minHeight: 140,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", color: C.muted, marginBottom: 6, fontWeight: 600 }}>
                Paso {pasoObj.n} — Enunciado Formal:
              </div>
              <div style={{ fontSize: "var(--fs-md)", color: C.text, fontWeight: 500, lineHeight: 1.55 }}>
                {renderTextWithMath(pasoObj.enunciado)}
              </div>
            </div>

            <div style={{ marginTop: 14, paddingTop: 10, borderTop: `1px dashed ${C.border}` }}>
              <span style={{ fontSize: "11px", color: C.muted }}>Justificación Lógica: </span>
              <strong style={{ fontSize: "12px", color: dem.color }}>
                {pasoObj.justificacion}
              </strong>
            </div>
          </div>

          {/* Barra de Progreso del Teorema */}
          <div>
            <div style={{ width: "100%", height: 6, background: C.surface2, borderRadius: 3, overflow: "hidden" }}>
              <div
                style={{
                  width: `${progresoPct}%`,
                  height: "100%",
                  background: dem.color || C.accent,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: C.muted, marginTop: 4 }}>
              <span>Inicio</span>
              <span>{pasoActual === totalPasos - 1 ? "Demostración Concluida (Q.E.D.)" : "En progreso..."}</span>
              <span>Fin</span>
            </div>
          </div>

          {/* Controles de Navegación y Reproducción */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                setPasoActual(p => Math.max(p - 1, 0));
                pausarAuto();
              }}
              disabled={pasoActual === 0}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                background: C.surface2,
                border: `1px solid ${C.border}`,
                color: pasoActual === 0 ? C.border : C.text,
                cursor: pasoActual === 0 ? "not-allowed" : "pointer",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
              }}
            >
              ◀ Anterior
            </button>

            <button
              onClick={corriendo ? pausarAuto : iniciarAuto}
              style={{
                flex: 1.2,
                padding: "10px 8px",
                borderRadius: 8,
                background: corriendo ? C.yellow : dem.color || C.accent,
                border: "none",
                color: corriendo ? "#000" : "#fff",
                cursor: "pointer",
                fontSize: "var(--fs-sm)",
                fontWeight: 700,
              }}
            >
              {corriendo ? "⏸ Pausar" : "▶ Reproducir Auto"}
            </button>

            <button
              onClick={() => {
                setPasoActual(p => Math.min(p + 1, totalPasos - 1));
                pausarAuto();
              }}
              disabled={pasoActual === totalPasos - 1}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                background: C.surface2,
                border: `1px solid ${C.border}`,
                color: pasoActual === totalPasos - 1 ? C.border : C.text,
                cursor: pasoActual === totalPasos - 1 ? "not-allowed" : "pointer",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
              }}
            >
              Siguiente ▶
            </button>
          </div>

          <button
            onClick={() => {
              setPasoActual(0);
              pausarAuto();
            }}
            style={{
              padding: "8px",
              borderRadius: 8,
              background: "transparent",
              border: `1px solid ${C.border}`,
              color: C.muted,
              fontSize: "var(--fs-xs)",
              cursor: "pointer",
            }}
          >
            ↺ Reiniciar Demostración al Paso 1
          </button>
        </div>
      </div>
    </div>
  );
}
