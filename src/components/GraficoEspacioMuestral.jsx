import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoEspacioMuestral({ catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [tipo, setTipo] = useState("continuo"); // "continuo" | "discreto" | "singleton"

  return (
    <div style={{
      width: "100%",
      maxWidth: 380,
      background: C.surface2,
      border: `1px solid ${C.border}`,
      borderRadius: 12,
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: C.muted, fontWeight: 600 }}>Soporte de Variables Aleatorias en ℝ:</span>
      </div>

      {/* Botones selectores */}
      <div style={{ display: "flex", gap: 4 }}>
        {[
          { id: "continuo", label: "Intervalo [a, b]" },
          { id: "discreto", label: "Discreto {x₁, x₂, ...}" },
          { id: "singleton", label: "Punto P(X = c) = 0" },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setTipo(item.id)}
            style={{
              flex: 1,
              padding: "4px 6px",
              borderRadius: 6,
              fontSize: "10px",
              fontWeight: 600,
              cursor: "pointer",
              border: tipo === item.id ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: tipo === item.id ? `${catColor}33` : C.surface,
              color: tipo === item.id ? catColor : C.muted,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Eje de la Recta Real SVG */}
      <svg viewBox="0 0 320 90" style={{ width: "100%", height: "auto", background: C.surface, borderRadius: 8, border: `1px solid ${C.border}` }}>
        <defs>
          <marker id="arrowR" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill={C.muted} />
          </marker>
        </defs>

        {/* Eje Real */}
        <line x1="20" y1="45" x2="300" y2="45" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#arrowR)" markerStart="url(#arrowR)" />
        <text x="306" y="49" fill={C.text} fontSize="12" fontWeight="bold">ℝ</text>

        {/* Marcas de enteros */}
        {[-2, -1, 0, 1, 2].map((v, i) => {
          const x = 160 + v * 50;
          return (
            <g key={v}>
              <line x1={x} y1="40" x2={x} y2="50" stroke={C.border} strokeWidth="1" />
              <text x={x} y="64" fill={C.muted} fontSize="9" textAnchor="middle">{v}</text>
            </g>
          );
        })}

        {/* Visualización según tipo */}
        {tipo === "continuo" && (
          <g>
            {/* Intervalo sombreado [-1, 1.5] */}
            <line x1="110" y1="45" x2="235" y2="45" stroke={catColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="110" cy="45" r="4" fill={catColor} />
            <circle cx="235" cy="45" r="4" fill={catColor} />
            <text x="172" y="32" fill={catColor} fontSize="10" fontWeight="bold" textAnchor="middle">P(a ≤ X ≤ b) = ∫ f(x)dx</text>
          </g>
        )}

        {tipo === "discreto" && (
          <g>
            {[-2, -1, 0, 1, 2].map(v => {
              const x = 160 + v * 50;
              return (
                <circle key={v} cx={x} cy="45" r="5" fill="#3fb950" stroke="#fff" strokeWidth="1.5" />
              );
            })}
            <text x="160" y="30" fill="#3fb950" fontSize="10" fontWeight="bold" textAnchor="middle">Masa de Probabilidad P(X = xₖ) > 0</text>
          </g>
        )}

        {tipo === "singleton" && (
          <g>
            <circle cx="210" cy="45" r="5" fill="#f85149" stroke="#fff" strokeWidth="1.5" />
            <line x1="210" y1="15" x2="210" y2="40" stroke="#f85149" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="210" y="12" fill="#f85149" fontSize="10" fontWeight="bold" textAnchor="middle">P(X = c) = 0 (Continuas)</text>
          </g>
        )}
      </svg>

      {/* Explicación Pedagógica */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", lineHeight: 1.5 }}>
        {tipo === "continuo" && (
          <div>
            <strong style={{ color: catColor }}>Variables Continuas:</strong> La probabilidad en intervalos no degenerados se calcula integrando la función de densidad: <InlineFormula latex="P(a \le X \le b) = \int_a^b f_X(x)dx" />.
          </div>
        )}
        {tipo === "discreto" && (
          <div>
            <strong style={{ color: "#3fb950" }}>Variables Discretas:</strong> El soporte <InlineFormula latex="R_X" /> es numerable. Cada valor puntual puede tener probabilidad estrictamente positiva: <InlineFormula latex="P(X = x_k) > 0" /> y <InlineFormula latex="\sum P(X=x_k) = 1" />.
          </div>
        )}
        {tipo === "singleton" && (
          <div>
            <strong style={{ color: "#f85149" }}>Puntos Aislados en Continuas:</strong> Como la integral de un punto es cero, <InlineFormula latex="P(X = c) = \int_c^c f(x)dx = 0" />. Un evento con probabilidad cero no es necesariamente imposible en soporte continuo.
          </div>
        )}
      </div>
    </div>
  );
}
