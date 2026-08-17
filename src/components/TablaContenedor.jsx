import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { renderTextWithMath } from "./Formula";

export function TablaContenedor({ tabla, catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  if (!tabla || !tabla.filas) return null;

  return (
    <div style={{ width: "100%", overflowX: "auto", margin: "10px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-sm)" }}>
        {tabla.cabecera && (
          <thead>
            <tr style={{ background: C.surface2, borderBottom: `2px solid ${catColor}` }}>
              {tabla.cabecera.map((col, i) => (
                <th key={i} style={{ padding: "8px 12px", textAlign: "left", color: C.text, fontWeight: 600 }}>
                  {renderTextWithMath(col)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {tabla.filas.map((fila, i) => (
            <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? "transparent" : `${C.surface2}55` }}>
              {fila.map((celda, j) => (
                <td key={j} style={{ padding: "8px 12px", color: j === 0 ? catColor : C.muted, fontWeight: j === 0 ? 600 : 400 }}>
                  {renderTextWithMath(celda)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
