import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";

export function ArbolProbabilidadSVG({ catColor = "#f0883e" }) {
  const { C } = useContext(ThemeCtx);
  const [pA, setPA] = useState(0.4);
  const [pBgA, setPBgA] = useState(0.85);
  const [pBgAc, setPBgAc] = useState(0.15);

  const pAc = +(1 - pA).toFixed(4);
  const pBcgA = +(1 - pBgA).toFixed(4);
  const pBcgAc = +(1 - pBgAc).toFixed(4);

  const pAnB = +(pA * pBgA).toFixed(4);
  const pAnBc = +(pA * pBcgA).toFixed(4);
  const pAcnB = +(pAc * pBgAc).toFixed(4);
  const pAcnBc = +(pAc * pBcgAc).toFixed(4);

  const pTotalB = +(pAnB + pAcnB).toFixed(4);
  const pAgB = pTotalB > 0 ? +((pAnB / pTotalB) * 100).toFixed(2) : 0;

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Controles interactivos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: "11px" }}>
        <div>
          <div style={{ color: C.muted, marginBottom: 2 }}>P(A) = {(pA * 100).toFixed(0)}%</div>
          <input
            type="range" min="0.05" max="0.95" step="0.05" value={pA}
            onChange={(e) => setPA(parseFloat(e.target.value))}
            style={{ width: "100%", accentColor: catColor }}
          />
        </div>
        <div>
          <div style={{ color: C.muted, marginBottom: 2 }}>P(B|A) = {(pBgA * 100).toFixed(0)}%</div>
          <input
            type="range" min="0.05" max="0.95" step="0.05" value={pBgA}
            onChange={(e) => setPBgA(parseFloat(e.target.value))}
            style={{ width: "100%", accentColor: catColor }}
          />
        </div>
      </div>

      {/* SVG del Árbol de Probabilidad */}
      <svg viewBox="0 0 320 180" style={{ width: "100%", height: "auto", background: C.surface2, borderRadius: 8, border: `1px solid ${C.border}` }}>
        {/* Raíz */}
        <circle cx="25" cy="90" r="5" fill={catColor} />

        {/* Ramas Nivel 1 */}
        <line x1="25" y1="90" x2="110" y2="45" stroke={catColor} strokeWidth="2" />
        <line x1="25" y1="90" x2="110" y2="135" stroke={C.muted} strokeWidth="2" />

        <text x="60" y="55" fill={catColor} fontSize="10" fontWeight="bold">P(A)={pA}</text>
        <text x="60" y="130" fill={C.muted} fontSize="10" fontWeight="bold">P(Aᶜ)={pAc}</text>

        {/* Nodos Nivel 1 */}
        <circle cx="110" cy="45" r="7" fill={catColor} />
        <text x="110" y="49" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">A</text>

        <circle cx="110" cy="135" r="7" fill={C.muted} />
        <text x="110" y="139" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">Aᶜ</text>

        {/* Ramas Nivel 2 desde A */}
        <line x1="110" y1="45" x2="200" y2="25" stroke="#3fb950" strokeWidth="1.5" />
        <line x1="110" y1="45" x2="200" y2="65" stroke="#f85149" strokeWidth="1.5" />
        <text x="150" y="27" fill="#3fb950" fontSize="9">{pBgA}</text>
        <text x="150" y="67" fill="#f85149" fontSize="9">{pBcgA}</text>

        {/* Ramas Nivel 2 desde Ac */}
        <line x1="110" y1="135" x2="200" y2="115" stroke="#3fb950" strokeWidth="1.5" />
        <line x1="110" y1="135" x2="200" y2="155" stroke="#f85149" strokeWidth="1.5" />
        <text x="150" y="117" fill="#3fb950" fontSize="9">{pBgAc}</text>
        <text x="150" y="157" fill="#f85149" fontSize="9">{pBcgAc}</text>

        {/* Nodos Nivel 2 y Probabilidades Conjuntas */}
        <text x="210" y="28" fill={C.text} fontSize="9" fontWeight="600">B → P(A∩B) = {pAnB}</text>
        <text x="210" y="68" fill={C.muted} fontSize="9">Bᶜ → P(A∩Bᶜ) = {pAnBc}</text>
        <text x="210" y="118" fill={C.text} fontSize="9" fontWeight="600">B → P(Aᶜ∩B) = {pAcnB}</text>
        <text x="210" y="158" fill={C.muted} fontSize="9">Bᶜ → P(Aᶜ∩Bᶜ) = {pAcnBc}</text>
      </svg>

      {/* Resultados de Probabilidad Total y Bayes */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", display: "flex", justifyContent: "space-between" }}>
        <div>
          <span style={{ color: C.muted }}>Probabilidad Total: </span>
          <strong style={{ color: "#3fb950" }}>P(B) = {pTotalB}</strong>
        </div>
        <div>
          <span style={{ color: C.muted }}>Teorema de Bayes: </span>
          <strong style={{ color: catColor }}>P(A|B) = {pAgB}%</strong>
        </div>
      </div>
    </div>
  );
}
