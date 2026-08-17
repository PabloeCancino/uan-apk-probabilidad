import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { DistribucionInteractiva } from "./DistribucionInteractiva";
import { ArbolProbabilidadSVG } from "./ArbolProbabilidadSVG";
import { CalculadoraBayes } from "./CalculadoraBayes";
import { SimuladorTLC } from "./SimuladorTLC";
import { AgujaBuffonSVG } from "./AgujaBuffonSVG";
import { VennSVG } from "./VennSVG";
import { GraficoPascal } from "./GraficoPascal";
import { GraficoCampanaGaussInflexion } from "./GraficoCampanaGaussInflexion";
import { GraficoEspacioMuestral } from "./GraficoEspacioMuestral";

export function Simulador() {
  const { C } = useContext(ThemeCtx);
  const [lab, setLab] = useState("distribuciones");

  const laboratorios = [
    { id: "distribuciones", nombre: "📊 Distribuciones", color: "#39d353" },
    { id: "gauss_inflexion", nombre: "🔔 Puntos Inflexión Gauss", color: "#bc8cff" },
    { id: "bayes", nombre: "🩺 Inferencia Bayesiana", color: "#f0883e" },
    { id: "arbol", nombre: "🌳 Árbol Estocástico", color: "#e3b341" },
    { id: "tlc", nombre: "🎲 Teorema Límite Central", color: "#ff7b72" },
    { id: "buffon", nombre: "📐 Aguja de Buffon (π)", color: "#79c0ff" },
    { id: "venn", nombre: "🔵 Diagramas de Venn", color: "#58a6ff" },
    { id: "pascal", nombre: "🔢 Triángulo de Pascal", color: "#3fb950" },
    { id: "espacio", nombre: "📍 Soporte en ℝ", color: "#bc8cff" },
  ];

  const labActual = laboratorios.find(l => l.id === lab) || laboratorios[0];

  return (
    <div className="fade-slide-in contenido-vista">
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: labActual.color,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Laboratorio de Simulación Estocástica y Visualización
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Simuladores y Modelado Interactivo
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Experimenta en tiempo real con parámetros matemáticos, procesos de Monte Carlo, combinatoria, cálculo diferencial en densidades y análisis probabilístico computacional.
        </p>
      </div>

      {/* Selector de Laboratorios */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 8, marginBottom: 16 }}>
        {laboratorios.map(l => (
          <button
            key={l.id}
            onClick={() => setLab(l.id)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              border: lab === l.id ? `1px solid ${l.color}` : `1px solid ${C.border}`,
              background: lab === l.id ? `${l.color}22` : C.surface,
              color: lab === l.id ? l.color : C.muted,
              transition: "all 0.2s ease",
            }}
          >
            {l.nombre}
          </button>
        ))}
      </div>

      {/* Contenedor del Laboratorio Activo */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: "var(--sp-md)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {lab === "distribuciones" && <DistribucionInteractiva catColor="#39d353" />}
        {lab === "gauss_inflexion" && <GraficoCampanaGaussInflexion catColor="#bc8cff" />}
        {lab === "bayes" && <CalculadoraBayes catColor="#f0883e" />}
        {lab === "arbol" && <ArbolProbabilidadSVG catColor="#e3b341" />}
        {lab === "tlc" && <SimuladorTLC catColor="#ff7b72" />}
        {lab === "buffon" && <AgujaBuffonSVG catColor="#79c0ff" />}
        {lab === "venn" && <VennSVG catColor="#58a6ff" />}
        {lab === "pascal" && <GraficoPascal catColor="#3fb950" />}
        {lab === "espacio" && <GraficoEspacioMuestral catColor="#bc8cff" />}
      </div>
    </div>
  );
}
