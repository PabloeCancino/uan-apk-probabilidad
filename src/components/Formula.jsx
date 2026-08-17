import React, { useContext } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { ThemeCtx } from "../ThemeCtx";

// Macros LaTeX compartidos por todos los componentes y vistas matemáticas
export const MACROS = {
  // Operadores en español y funciones trigonométricas/hiperbólicas
  "\\sen": "\\operatorname{sen}",
  "\\tg": "\\operatorname{tg}",
  "\\cotg": "\\operatorname{cotg}",
  "\\senh": "\\operatorname{senh}",
  "\\tgh": "\\operatorname{tgh}",
  "\\sech": "\\operatorname{sech}",
  "\\csch": "\\operatorname{csch}",
  "\\coth": "\\operatorname{coth}",
  // Conjuntos y probabilidad
  "\\R": "\\mathbb{R}",
  "\\N": "\\mathbb{N}",
  "\\Z": "\\mathbb{Z}",
  "\\O": "\\emptyset",
  "\\P": "\\mathbb{P}",
  "\\E": "\\mathbb{E}",
  "\\Var": "\\operatorname{Var}",
  "\\Cov": "\\operatorname{Cov}",
  "\\Corr": "\\operatorname{Corr}",
  "\\sd": "\\operatorname{DE}",
  "\\Prob": "\\operatorname{P}",
};

/**
 * Formula — Renderiza LaTeX en bloque (display math).
 */
export function Formula({ latex, color = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  if (!latex) return null;
  let html = "";
  try {
    html = katex.renderToString(latex, {
      displayMode: true,
      throwOnError: false,
      errorColor: "#f85149",
      macros: MACROS,
    });
  } catch {
    html = `<span style="color:#f85149;font-family:monospace">${latex}</span>`;
  }
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        background: C.surface2,
        border: `1px solid ${color}33`,
        borderLeft: `3px solid ${color}`,
        borderRadius: 8,
        padding: "14px 18px",
        overflowX: "auto",
        color: C.text,
        fontSize: "var(--fs-sm)",
        marginTop: 12,
        marginBottom: 12,
        lineHeight: 1.6,
      }}
    />
  );
}

/**
 * InlineFormula — Renderiza LaTeX inline dentro de texto.
 */
export function InlineFormula({ latex }) {
  if (!latex) return null;
  let html = "";
  try {
    html = katex.renderToString(latex, {
      displayMode: false,
      throwOnError: false,
      errorColor: "#f85149",
      macros: MACROS,
    });
  } catch {
    html = `<span style="color:#f85149;font-family:monospace">${latex}</span>`;
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} style={{ display: "inline" }} />;
}

/**
 * renderTextWithMath — Extrae formulas inline \( ... \) y las renderiza con InlineFormula.
 */
export function renderTextWithMath(texto) {
  if (!texto || typeof texto !== "string") return texto;
  const partes = texto.split(/(\\\([\s\S]*?\\\))/g);
  return partes.map((parte, idx) => {
    if (parte.startsWith("\\(") && parte.endsWith("\\)")) {
      const formulaStr = parte.slice(2, -2).trim();
      return <InlineFormula key={idx} latex={formulaStr} />;
    }
    return parte;
  });
}
