import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function VennSVG({ conjuntosInicial = 2, catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [numConjuntos, setNumConjuntos] = useState(conjuntosInicial);
  const [op, setOp] = useState("interseccion");

  // Colores para eventos
  const cA = "#58a6ff";
  const cB = "#3fb950";
  const cC = "#bc8cff";

  // Operaciones predefinidas para 2 conjuntos
  const ops2 = [
    { id: "interseccion", label: "P(A ∩ B)", formula: "P(A \\cap B)", exp: "Probabilidad conjunta: Ocurrencia simultánea de A y B." },
    { id: "union", label: "P(A ∪ B)", formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", exp: "Principio de Inclusión-Exclusión: Ocurrencia de al menos uno." },
    { id: "solo_a", label: "P(A \\ B)", formula: "P(A \\setminus B) = P(A) - P(A \\cap B)", exp: "Ocurre A pero NO ocurre B." },
    { id: "complemento", label: "P((A ∪ B)ᶜ)", formula: "P((A \\cup B)^c) = 1 - P(A \\cup B)", exp: "1ª Ley de De Morgan: No ocurre ninguno de los dos eventos." },
  ];

  // Operaciones predefinidas para 3 conjuntos
  const ops3 = [
    { id: "inter3", label: "P(A ∩ B ∩ C)", formula: "P(A \\cap B \\cap C)", exp: "Intersección triple: Ocurrencia simultánea de los tres eventos." },
    { id: "union3", label: "P(A ∪ B ∪ C)", formula: "P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)", exp: "Inclusión-Exclusión para 3 eventos." },
    { id: "al_menos_dos", label: "Al menos 2", formula: "P(AB) + P(AC) + P(BC) - 2P(ABC)", exp: "Ocurrencia de al menos dos de los tres eventos." },
    { id: "solo_uno", label: "Exactamente 1", formula: "P(A \\setminus (B \\cup C)) + \\dots", exp: "Ocurrencia exclusiva de uno solo de los tres eventos." },
  ];

  const opsActuales = numConjuntos === 2 ? ops2 : ops3;
  const opInfo = opsActuales.find(o => o.id === op) || opsActuales[0];

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Selector 2 / 3 Conjuntos */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: C.muted, fontWeight: 600 }}>Diagrama de Venn Probabilístico:</span>
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={() => { setNumConjuntos(2); setOp("interseccion"); }}
            style={{
              padding: "2px 8px", borderRadius: 4, fontSize: "10px", fontWeight: 600,
              background: numConjuntos === 2 ? catColor : C.surface2,
              color: numConjuntos === 2 ? "#fff" : C.muted,
              border: `1px solid ${C.border}`, cursor: "pointer"
            }}
          >
            2 Eventos
          </button>
          <button
            onClick={() => { setNumConjuntos(3); setOp("inter3"); }}
            style={{
              padding: "2px 8px", borderRadius: 4, fontSize: "10px", fontWeight: 600,
              background: numConjuntos === 3 ? catColor : C.surface2,
              color: numConjuntos === 3 ? "#fff" : C.muted,
              border: `1px solid ${C.border}`, cursor: "pointer"
            }}
          >
            3 Eventos
          </button>
        </div>
      </div>

      {/* Botones de Operaciones */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {opsActuales.map(item => (
          <button
            key={item.id}
            onClick={() => setOp(item.id)}
            style={{
              padding: "4px 8px", borderRadius: 6, fontSize: "10px", fontWeight: 600,
              cursor: "pointer",
              border: op === item.id ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: op === item.id ? `${catColor}33` : C.surface2,
              color: op === item.id ? catColor : C.muted,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Gráfico SVG */}
      <svg viewBox="0 0 320 200" style={{ width: "100%", height: "auto", background: C.surface2, borderRadius: 8, border: `1px solid ${C.border}` }}>
        <defs>
          <clipPath id="clip2A"><circle cx="120" cy="100" r="60" /></clipPath>
          <clipPath id="clip2B"><circle cx="185" cy="100" r="60" /></clipPath>

          <clipPath id="clip3A"><circle cx="125" cy="85" r="50" /></clipPath>
          <clipPath id="clip3B"><circle cx="185" cy="85" r="50" /></clipPath>
          <clipPath id="clip3C"><circle cx="155" cy="130" r="50" /></clipPath>
        </defs>

        {/* Espacio Muestral Omega */}
        <rect x="8" y="8" width="304" height="184" rx="6"
          fill={op === "complemento" ? `${catColor}55` : "none"}
          stroke={C.border} strokeWidth="1.5"
        />
        <text x="22" y="26" fill={C.muted} fontSize="13" fontWeight="bold">Ω</text>

        {numConjuntos === 2 ? (
          <>
            {/* Sombreas para 2 conjuntos */}
            {op === "union" && (
              <>
                <circle cx="120" cy="100" r="60" fill={`${catColor}55`} />
                <circle cx="185" cy="100" r="60" fill={`${catColor}55`} />
              </>
            )}

            {op === "interseccion" && (
              <g clipPath="url(#clip2A)">
                <circle cx="185" cy="100" r="60" fill={catColor} fillOpacity="0.6" />
              </g>
            )}

            {op === "solo_a" && (
              <g clipPath="url(#clip2A)">
                <rect x="8" y="8" width="304" height="184" fill={`${catColor}66`} />
                <circle cx="185" cy="100" r="60" fill={C.surface2} />
              </g>
            )}

            {/* Círculos y Etiquetas */}
            <circle cx="120" cy="100" r="60" fill="none" stroke={cA} strokeWidth="2" />
            <circle cx="185" cy="100" r="60" fill="none" stroke={cB} strokeWidth="2" />
            <text x="85" y="105" fill={cA} fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
            <text x="220" y="105" fill={cB} fontSize="13" fontWeight="bold" textAnchor="middle">B</text>
            {op === "interseccion" && <text x="152" y="105" fill={C.text} fontSize="10" fontWeight="600" textAnchor="middle">A ∩ B</text>}
          </>
        ) : (
          <>
            {/* Sombreas para 3 conjuntos */}
            {op === "union3" && (
              <>
                <circle cx="125" cy="85" r="50" fill={`${catColor}44`} />
                <circle cx="185" cy="85" r="50" fill={`${catColor}44`} />
                <circle cx="155" cy="130" r="50" fill={`${catColor}44`} />
              </>
            )}

            {op === "inter3" && (
              <g clipPath="url(#clip3A)">
                <g clipPath="url(#clip3B)">
                  <circle cx="155" cy="130" r="50" fill={catColor} fillOpacity="0.8" />
                </g>
              </g>
            )}

            {op === "al_menos_dos" && (
              <>
                <g clipPath="url(#clip3A)"><circle cx="185" cy="85" r="50" fill={catColor} fillOpacity="0.6" /></g>
                <g clipPath="url(#clip3A)"><circle cx="155" cy="130" r="50" fill={catColor} fillOpacity="0.6" /></g>
                <g clipPath="url(#clip3B)"><circle cx="155" cy="130" r="50" fill={catColor} fillOpacity="0.6" /></g>
              </>
            )}

            {/* Círculos y Etiquetas */}
            <circle cx="125" cy="85" r="50" fill="none" stroke={cA} strokeWidth="2" />
            <circle cx="185" cy="85" r="50" fill="none" stroke={cB} strokeWidth="2" />
            <circle cx="155" cy="130" r="50" fill="none" stroke={cC} strokeWidth="2" />

            <text x="95" y="70" fill={cA} fontSize="12" fontWeight="bold">A</text>
            <text x="215" y="70" fill={cB} fontSize="12" fontWeight="bold">B</text>
            <text x="155" y="172" fill={cC} fontSize="12" fontWeight="bold" textAnchor="middle">C</text>
          </>
        )}
      </svg>

      {/* Información Teórica y KaTeX */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px" }}>
        <div style={{ color: catColor, fontWeight: "bold", marginBottom: 2 }}>
          <InlineFormula latex={opInfo.formula} />
        </div>
        <div style={{ color: C.muted }}>{opInfo.exp}</div>
      </div>
    </div>
  );
}
