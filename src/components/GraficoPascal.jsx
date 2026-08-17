import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoPascal({ catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [filaSeleccionada, setFilaSeleccionada] = useState(4); // Fila n=4 por defecto

  const rows = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1]
  ];

  // Coordenadas de los nodos
  const getPos = (n, k) => {
    const cx = 170 + (k - n / 2) * 38;
    const cy = 25 + n * 34;
    return { cx, cy };
  };

  return (
    <div style={{
      width: "100%",
      maxWidth: 380,
      background: C.surface2,
      border: `1px solid ${C.border}`,
      borderRadius: 12,
      padding: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontSize: "11px" }}>
        <span style={{ color: C.muted }}>Coeficientes Binomiales <InlineFormula latex="\binom{n}{k}" /></span>
        <span style={{ color: catColor, fontWeight: "bold" }}>Fila n = {filaSeleccionada} (Suma = {Math.pow(2, filaSeleccionada)})</span>
      </div>

      <svg viewBox="0 0 340 240" width="100%" height="auto" style={{ display: "block" }}>
        {/* Líneas conectoras */}
        <g stroke={`${C.border}`} strokeWidth="1" strokeDasharray="2 2">
          {rows.map((row, n) => {
            if (n === rows.length - 1) return null;
            return row.map((_, k) => {
              const parent = getPos(n, k);
              const childLeft = getPos(n + 1, k);
              const childRight = getPos(n + 1, k + 1);
              return (
                <g key={`${n}-${k}`}>
                  <line x1={parent.cx} y1={parent.cy} x2={childLeft.cx} y2={childLeft.cy} />
                  <line x1={parent.cx} y1={parent.cy} x2={childRight.cx} y2={childRight.cy} />
                </g>
              );
            });
          })}
        </g>

        {/* Nodos interactivos */}
        {rows.map((row, n) => {
          const esFilaActiva = n === filaSeleccionada;
          return row.map((val, k) => {
            const { cx, cy } = getPos(n, k);
            return (
              <g
                key={`${n}-${k}`}
                onClick={() => setFilaSeleccionada(n)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={cx} cy={cy} r="12"
                  fill={esFilaActiva ? `${catColor}33` : C.surface}
                  stroke={esFilaActiva ? catColor : C.border}
                  strokeWidth={esFilaActiva ? 2 : 1}
                />
                <text
                  x={cx}
                  y={cy + 4}
                  fill={esFilaActiva ? catColor : val === 1 ? C.muted : C.text}
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {val}
                </text>
              </g>
            );
          });
        })}

        {/* Expresiones binomiales a la derecha */}
        {rows.map((_, n) => {
          const { cy } = getPos(n, 0);
          const esFilaActiva = n === filaSeleccionada;
          return (
            <g key={n} onClick={() => setFilaSeleccionada(n)} style={{ cursor: "pointer" }}>
              <text
                x="300"
                y={cy + 3}
                fill={esFilaActiva ? catColor : C.muted}
                fontSize="10"
                fontWeight={esFilaActiva ? "bold" : "normal"}
                textAnchor="start"
              >
                n={n}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Expansión del binomio para la fila seleccionada */}
      <div style={{
        marginTop: 8,
        padding: "6px 10px",
        background: C.surface,
        borderRadius: 6,
        border: `1px solid ${C.border}`,
        fontSize: "11px",
        color: C.text,
        lineHeight: 1.5,
      }}>
        <div style={{ color: C.muted, fontSize: "10px", marginBottom: 2 }}>Expansión del Binomio y Combinatoria:</div>
        <div style={{ color: catColor, fontWeight: 600 }}>
          <InlineFormula latex={`(p + q)^${filaSeleccionada} = ` + rows[filaSeleccionada].map((c, k) => {
            const pExp = filaSeleccionada - k;
            const qExp = k;
            let term = c > 1 ? `${c}` : "";
            if (pExp > 0) term += `p${pExp > 1 ? `^{${pExp}}` : ""}`;
            if (qExp > 0) term += `q${qExp > 1 ? `^{${qExp}}` : ""}`;
            return term || "1";
          }).join(" + ")} />
        </div>
      </div>
    </div>
  );
}
