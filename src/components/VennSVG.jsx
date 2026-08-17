import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function VennSVG({ conjuntosInicial = 2, catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [numConjuntos, setNumConjuntos] = useState(conjuntosInicial);
  const [op, setOp] = useState("comp_a");
  const [regionesLibres, setRegionesLibres] = useState(new Set());
  const [modoLibre, setModoLibre] = useState(false);

  // Colores para eventos
  const cA = "#58a6ff";
  const cB = "#3fb950";
  const cC = "#bc8cff";

  // Operaciones completas para 2 eventos (usando regiones atómicas: rA, rB, rAB, rU)
  const ops2 = [
    { id: "comp_a", label: "Aᶜ = 1 - P(A)", formula: "P(A^c) = 1 - P(A)", exp: "Complemento de A: Todo el espacio muestral Ω excepto el evento A (incluye Solo B y el Exterior).", regs: ["rB", "rU"] },
    { id: "comp_b", label: "Bᶜ = 1 - P(B)", formula: "P(B^c) = 1 - P(B)", exp: "Complemento de B: Todo el espacio muestral Ω excepto el evento B (incluye Solo A y el Exterior).", regs: ["rA", "rU"] },
    { id: "union", label: "A ∪ B (Unión)", formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", exp: "Principio de Inclusión-Exclusión: Ocurrencia de al menos uno de los dos eventos.", regs: ["rA", "rB", "rAB"] },
    { id: "interseccion", label: "A ∩ B (Conjunta)", formula: "P(A \\cap B)", exp: "Probabilidad conjunta: Ocurrencia simultánea de ambos eventos A y B.", regs: ["rAB"] },
    { id: "solo_a", label: "A \\ B (Solo A)", formula: "P(A \\setminus B) = P(A \\cap B^c) = P(A) - P(A \\cap B)", exp: "Ocurrencia exclusiva de A sin que ocurra B.", regs: ["rA"] },
    { id: "solo_b", label: "B \\ A (Solo B)", formula: "P(B \\setminus A) = P(B \\cap A^c) = P(B) - P(A \\cap B)", exp: "Ocurrencia exclusiva de B sin que ocurra A.", regs: ["rB"] },
    { id: "dif_simetrica", label: "A Δ B (Exactamente 1)", formula: "P(A \\Delta B) = P(A \\cup B) - P(A \\cap B)", exp: "Diferencia Simétrica: Ocurre A o ocurre B, pero NO ambos a la vez.", regs: ["rA", "rB"] },
    { id: "demorgan1", label: "(A ∪ B)ᶜ (Ninguno)", formula: "P((A \\cup B)^c) = P(A^c \\cap B^c) = 1 - P(A \\cup B)", exp: "1ª Ley de De Morgan: Ninguno de los dos eventos ocurre (solo el exterior).", regs: ["rU"] },
    { id: "demorgan2", label: "(A ∩ B)ᶜ (No ambos)", formula: "P((A \\cap B)^c) = P(A^c \\cup B^c) = 1 - P(A \\cap B)", exp: "2ª Ley de De Morgan: No ocurren simultáneamente ambos eventos (todo excepto la intersección).", regs: ["rA", "rB", "rU"] },
    { id: "condicional", label: "P(A | B) (Condicional)", formula: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}", exp: "Probabilidad condicional: El espacio muestral se restringe al evento condicionante B.", regs: ["rAB"], highlightB: true },
  ];

  // Operaciones completas para 3 eventos (usando regiones atómicas: rA, rB, rC, rAB, rAC, rBC, rABC, rU)
  const ops3 = [
    { id: "union3", label: "A ∪ B ∪ C (Unión Triple)", formula: "P(A \\cup B \\cup C) = \\sum P(A) - \\sum P(AB) + P(ABC)", exp: "Principio de Inclusión-Exclusión para tres eventos: Al menos uno ocurre.", regs: ["rA", "rB", "rC", "rAB", "rAC", "rBC", "rABC"] },
    { id: "inter3", label: "A ∩ B ∩ C (Intersección)", formula: "P(A \\cap B \\cap C)", exp: "Intersección triple: Ocurrencia simultánea de los tres eventos A, B y C.", regs: ["rABC"] },
    { id: "solo_a3", label: "Solo A", formula: "P(A \\cap B^c \\cap C^c) = P(A \\setminus (B \\cup C))", exp: "Ocurrencia exclusiva de A (ninguno de B ni C).", regs: ["rA"] },
    { id: "solo_uno", label: "Exactamente 1", formula: "P(\\text{Solo 1}) = P(A \\setminus (BC)) + P(B \\setminus (AC)) + P(C \\setminus (AB))", exp: "Ocurrencia de uno solo de los tres eventos sin solapamiento.", regs: ["rA", "rB", "rC"] },
    { id: "al_menos_dos", label: "Al menos 2", formula: "P(AB) + P(AC) + P(BC) - 2P(ABC)", exp: "Ocurrencia simultánea de dos o más eventos.", regs: ["rAB", "rAC", "rBC", "rABC"] },
    { id: "exacto_dos", label: "Exactamente 2", formula: "P(AB \\setminus C) + P(AC \\setminus B) + P(BC \\setminus A)", exp: "Ocurrencia de exactamente dos eventos (sin la intersección triple).", regs: ["rAB", "rAC", "rBC"] },
    { id: "distrib", label: "A ∩ (B ∪ C)", formula: "P(A \\cap (B \\cup C)) = P((A \\cap B) \\cup (A \\cap C))", exp: "Propiedad Distributiva: Intersección de A con la unión de B y C.", regs: ["rAB", "rAC", "rABC"] },
    { id: "comp_a3", label: "Aᶜ (No A en 3)", formula: "P(A^c) = 1 - P(A)", exp: "Complemento de A en 3 conjuntos: Todo el espacio muestral excepto A.", regs: ["rB", "rC", "rBC", "rU"] },
    { id: "ninguno3", label: "(A ∪ B ∪ C)ᶜ", formula: "P((A \\cup B \\cup C)^c) = 1 - P(A \\cup B \\cup C)", exp: "Complemento de la unión: Ninguno de los tres eventos ocurre.", regs: ["rU"] },
  ];

  const opsActuales = numConjuntos === 2 ? ops2 : ops3;
  const opInfo = opsActuales.find(o => o.id === op) || opsActuales[0];

  const toggleRegionLibre = (regId) => {
    setModoLibre(true);
    setRegionesLibres(prev => {
      const next = new Set(prev);
      if (next.has(regId)) next.delete(regId);
      else next.add(regId);
      return next;
    });
  };

  const seleccionarPreajuste = (item) => {
    setModoLibre(false);
    setOp(item.id);
  };

  const estaActiva = (regId) => {
    if (modoLibre) return regionesLibres.has(regId);
    return opInfo.regs.includes(regId);
  };

  return (
    <div style={{ width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Selector 2 / 3 Conjuntos */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: C.muted, fontWeight: 600 }}>Diagrama de Venn Probabilístico:</span>
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={() => { setNumConjuntos(2); setOp("comp_a"); setModoLibre(false); }}
            style={{
              padding: "3px 8px", borderRadius: 4, fontSize: "10px", fontWeight: 600,
              background: numConjuntos === 2 ? catColor : C.surface2,
              color: numConjuntos === 2 ? "#fff" : C.muted,
              border: `1px solid ${C.border}`, cursor: "pointer"
            }}
          >
            2 Eventos (10 Casos)
          </button>
          <button
            onClick={() => { setNumConjuntos(3); setOp("union3"); setModoLibre(false); }}
            style={{
              padding: "3px 8px", borderRadius: 4, fontSize: "10px", fontWeight: 600,
              background: numConjuntos === 3 ? catColor : C.surface2,
              color: numConjuntos === 3 ? "#fff" : C.muted,
              border: `1px solid ${C.border}`, cursor: "pointer"
            }}
          >
            3 Eventos (9 Casos)
          </button>
        </div>
      </div>

      {/* Botones de Operaciones */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", maxHeight: 105, overflowY: "auto", padding: 2 }}>
        {opsActuales.map(item => (
          <button
            key={item.id}
            onClick={() => seleccionarPreajuste(item)}
            style={{
              padding: "3px 7px", borderRadius: 6, fontSize: "10px", fontWeight: 600,
              cursor: "pointer",
              border: (!modoLibre && op === item.id) ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: (!modoLibre && op === item.id) ? `${catColor}33` : C.surface2,
              color: (!modoLibre && op === item.id) ? catColor : C.muted,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Gráfico SVG Interactivo con Regiones Disjuntas */}
      <svg viewBox="0 0 320 200" style={{ width: "100%", height: "auto", background: C.surface, borderRadius: 8, border: `1px solid ${C.border}` }}>
        <defs>
          <clipPath id="clip2A"><circle cx="120" cy="100" r="55" /></clipPath>
          <clipPath id="clip2B"><circle cx="185" cy="100" r="55" /></clipPath>

          <clipPath id="clip3A"><circle cx="125" cy="85" r="48" /></clipPath>
          <clipPath id="clip3B"><circle cx="185" cy="85" r="48" /></clipPath>
          <clipPath id="clip3C"><circle cx="155" cy="130" r="48" /></clipPath>
        </defs>

        {/* 1. Fondo Universal Ω */}
        <rect
          x="8" y="8" width="304" height="184" rx="6"
          fill={estaActiva("rU") ? `${catColor}55` : "none"}
          stroke={C.border} strokeWidth="1.5"
          onClick={() => toggleRegionLibre("rU")}
          style={{ cursor: "pointer" }}
        />
        <text x="22" y="26" fill={C.muted} fontSize="13" fontWeight="bold">Ω</text>

        {numConjuntos === 2 ? (
          <>
            {/* Si el exterior rU está activo, limpiamos el interior de A y B para que no hereden el sombreado del fondo */}
            {estaActiva("rU") && (
              <>
                <circle cx="120" cy="100" r="55" fill={C.surface} />
                <circle cx="185" cy="100" r="55" fill={C.surface} />
              </>
            )}

            {/* Región rA: Solo A */}
            {estaActiva("rA") && (
              <g clipPath="url(#clip2A)" onClick={() => toggleRegionLibre("rA")} style={{ cursor: "pointer" }}>
                <rect x="0" y="0" width="320" height="200" fill={catColor} fillOpacity="0.55" />
                <circle cx="185" cy="100" r="55" fill={C.surface} />
              </g>
            )}

            {/* Región rB: Solo B */}
            {estaActiva("rB") && (
              <g clipPath="url(#clip2B)" onClick={() => toggleRegionLibre("rB")} style={{ cursor: "pointer" }}>
                <rect x="0" y="0" width="320" height="200" fill={catColor} fillOpacity="0.55" />
                <circle cx="120" cy="100" r="55" fill={C.surface} />
              </g>
            )}

            {/* Región rAB: Intersección A ∩ B */}
            {estaActiva("rAB") && (
              <g clipPath="url(#clip2A)" onClick={() => toggleRegionLibre("rAB")} style={{ cursor: "pointer" }}>
                <circle cx="185" cy="100" r="55" fill={catColor} fillOpacity="0.85" />
              </g>
            )}

            {/* Contornos y Etiquetas */}
            <circle cx="120" cy="100" r="55" fill="none" stroke={cA} strokeWidth="2" />
            <circle cx="185" cy="100" r="55" fill="none" stroke={cB} strokeWidth={opInfo?.highlightB ? 3 : 2} strokeDasharray={opInfo?.highlightB ? "4 2" : "none"} />

            <text x="85" y="105" fill={cA} fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
            <text x="220" y="105" fill={cB} fontSize="13" fontWeight="bold" textAnchor="middle">B</text>
            {estaActiva("rAB") && <text x="152" y="104" fill={C.text} fontSize="9" fontWeight="bold" textAnchor="middle">A ∩ B</text>}
          </>
        ) : (
          <>
            {/* Si el exterior rU está activo en 3 conjuntos, limpiamos A, B y C */}
            {estaActiva("rU") && (
              <>
                <circle cx="125" cy="85" r="48" fill={C.surface} />
                <circle cx="185" cy="85" r="48" fill={C.surface} />
                <circle cx="155" cy="130" r="48" fill={C.surface} />
              </>
            )}

            {/* Solo A */}
            {estaActiva("rA") && (
              <g clipPath="url(#clip3A)">
                <rect x="0" y="0" width="320" height="200" fill={catColor} fillOpacity="0.5" />
                <circle cx="185" cy="85" r="48" fill={C.surface} />
                <circle cx="155" cy="130" r="48" fill={C.surface} />
              </g>
            )}

            {/* Solo B */}
            {estaActiva("rB") && (
              <g clipPath="url(#clip3B)">
                <rect x="0" y="0" width="320" height="200" fill={catColor} fillOpacity="0.5" />
                <circle cx="125" cy="85" r="48" fill={C.surface} />
                <circle cx="155" cy="130" r="48" fill={C.surface} />
              </g>
            )}

            {/* Solo C */}
            {estaActiva("rC") && (
              <g clipPath="url(#clip3C)">
                <rect x="0" y="0" width="320" height="200" fill={catColor} fillOpacity="0.5" />
                <circle cx="125" cy="85" r="48" fill={C.surface} />
                <circle cx="185" cy="85" r="48" fill={C.surface} />
              </g>
            )}

            {/* Intersección AB (excluyendo C) */}
            {estaActiva("rAB") && (
              <g clipPath="url(#clip3A)">
                <circle cx="185" cy="85" r="48" fill={catColor} fillOpacity="0.65" />
                {!estaActiva("rABC") && <circle cx="155" cy="130" r="48" fill={C.surface} />}
              </g>
            )}

            {/* Intersección AC (excluyendo B) */}
            {estaActiva("rAC") && (
              <g clipPath="url(#clip3A)">
                <circle cx="155" cy="130" r="48" fill={catColor} fillOpacity="0.65" />
                {!estaActiva("rABC") && <circle cx="185" cy="85" r="48" fill={C.surface} />}
              </g>
            )}

            {/* Intersección BC (excluyendo A) */}
            {estaActiva("rBC") && (
              <g clipPath="url(#clip3B)">
                <circle cx="155" cy="130" r="48" fill={catColor} fillOpacity="0.65" />
                {!estaActiva("rABC") && <circle cx="125" cy="85" r="48" fill={C.surface} />}
              </g>
            )}

            {/* Intersección Triple ABC */}
            {estaActiva("rABC") && (
              <g clipPath="url(#clip3A)">
                <g clipPath="url(#clip3B)">
                  <circle cx="155" cy="130" r="48" fill={catColor} fillOpacity="0.9" />
                </g>
              </g>
            )}

            {/* Contornos y Etiquetas */}
            <circle cx="125" cy="85" r="48" fill="none" stroke={cA} strokeWidth="2" />
            <circle cx="185" cy="85" r="48" fill="none" stroke={cB} strokeWidth="2" />
            <circle cx="155" cy="130" r="48" fill="none" stroke={cC} strokeWidth="2" />

            <text x="95" y="70" fill={cA} fontSize="12" fontWeight="bold">A</text>
            <text x="215" y="70" fill={cB} fontSize="12" fontWeight="bold">B</text>
            <text x="155" y="172" fill={cC} fontSize="12" fontWeight="bold" textAnchor="middle">C</text>
          </>
        )}
      </svg>

      {/* Información Teórica y KaTeX */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px" }}>
        <div style={{ color: catColor, fontWeight: "bold", marginBottom: 2 }}>
          {modoLibre ? (
            <span>🎨 Modo Exploratorio Interactivo</span>
          ) : (
            <InlineFormula latex={opInfo.formula} />
          )}
        </div>
        <div style={{ color: C.muted }}>
          {modoLibre ? "Haz clic en el exterior o en las opciones para alternar regiones." : opInfo.exp}
        </div>
      </div>
    </div>
  );
}
