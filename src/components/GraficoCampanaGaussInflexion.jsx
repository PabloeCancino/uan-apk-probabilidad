import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoCampanaGaussInflexion({ catColor = "#39d353" }) {
  const { C } = useContext(ThemeCtx);
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const [xPos, setXPos] = useState(1); // Posición interactiva x

  // Funciones de la campana de Gauss
  const f = (x) => (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
  const fPrime = (x) => -((x - mu) / (sigma * sigma)) * f(x);
  const fDoublePrime = (x) => ((Math.pow(x - mu, 2) - sigma * sigma) / Math.pow(sigma, 4)) * f(x);

  // Mapeo SVG
  const width = 340;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 25, left: 35 };

  const xMin = mu - 3.5 * sigma;
  const xMax = mu + 3.5 * sigma;
  const maxY = f(mu) * 1.2;

  const scaleX = (x) => padding.left + ((x - xMin) / (xMax - xMin)) * (width - padding.left - padding.right);
  const scaleY = (y) => height - padding.bottom - (y / maxY) * (height - padding.top - padding.bottom);

  // Generar curva
  const pasos = 80;
  const dx = (xMax - xMin) / pasos;
  let pathD = "";
  for (let i = 0; i <= pasos; i++) {
    const x = xMin + i * dx;
    const y = f(x);
    const sx = scaleX(x);
    const sy = scaleY(y);
    if (i === 0) pathD += `M ${sx} ${sy}`;
    else pathD += ` L ${sx} ${sy}`;
  }

  // Puntos de inflexión analíticos en mu - sigma y mu + sigma
  const xInfLeft = mu - sigma;
  const xInfRight = mu + sigma;
  const yInf = f(xInfLeft);

  const fxVal = f(xPos);
  const f2p = fDoublePrime(xPos);

  let estado = "inflexion";
  let colorEstado = C.purple;
  if (Math.abs(xPos - xInfLeft) < 0.08 || Math.abs(xPos - xInfRight) < 0.08) {
    estado = "inflexion";
    colorEstado = C.purple;
  } else if (f2p < 0) {
    estado = "concava_abajo";
    colorEstado = C.orange;
  } else {
    estado = "concava_arriba";
    colorEstado = C.green;
  }

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
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
        <span style={{ color: C.muted }}>Puntos de Inflexión de Gauss:</span>
        <strong style={{ color: catColor }}>x = μ ± σ ({xInfLeft.toFixed(1)}, {xInfRight.toFixed(1)})</strong>
      </div>

      {/* Controles de Parámetros */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: C.muted }}>
            <span>Media μ:</span> <strong>{mu}</strong>
          </div>
          <input type="range" min="-2" max="2" step="0.5" value={mu} onChange={e => setMu(parseFloat(e.target.value))} style={{ width: "100%", accentColor: catColor }} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: C.muted }}>
            <span>Desv. σ:</span> <strong>{sigma}</strong>
          </div>
          <input type="range" min="0.5" max="2" step="0.1" value={sigma} onChange={e => setSigma(parseFloat(e.target.value))} style={{ width: "100%", accentColor: catColor }} />
        </div>
      </div>

      {/* Slider del punto interactivo x */}
      <div style={{ fontSize: "11px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", color: C.muted, marginBottom: 2 }}>
          <span>Explorar posición x:</span>
          <strong style={{ color: colorEstado }}>x = {xPos.toFixed(2)}</strong>
        </div>
        <input
          type="range"
          min={mu - 3 * sigma}
          max={mu + 3 * sigma}
          step="0.05"
          value={xPos}
          onChange={e => setXPos(parseFloat(e.target.value))}
          style={{ width: "100%", accentColor: colorEstado }}
        />
      </div>

      {/* Gráfico SVG */}
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", background: C.surface, borderRadius: 8, border: `1px solid ${C.border}` }}>
        {/* Sombreado de 1 desviación estándar [mu-sigma, mu+sigma] (68.27%) */}
        <path
          d={`M ${scaleX(xInfLeft)} ${scaleY(0)} ` +
            pathD.split(" ").filter((_, idx, arr) => {
              // Filtrar solo puntos entre xInfLeft y xInfRight
              return true;
            }).join(" ") +
            ` L ${scaleX(xInfRight)} ${scaleY(0)} Z`}
          fill={`${catColor}22`}
        />

        {/* Ejes */}
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke={C.border} strokeWidth="1.5" />
        <line x1={scaleX(mu)} y1={padding.top} x2={scaleX(mu)} y2={height - padding.bottom} stroke={C.border} strokeWidth="1" strokeDasharray="3 3" />

        {/* Curva Gaussiana */}
        <path d={pathD} fill="none" stroke={catColor} strokeWidth="2.5" />

        {/* Puntos de Inflexión Fijos */}
        <g>
          <line x1={scaleX(xInfLeft)} y1={scaleY(yInf)} x2={scaleX(xInfLeft)} y2={height - padding.bottom} stroke={C.purple} strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx={scaleX(xInfLeft)} cy={scaleY(yInf)} r="4" fill={C.purple} />
          <text x={scaleX(xInfLeft)} y={height - padding.bottom + 12} fill={C.purple} fontSize="8" textAnchor="middle">μ - σ</text>
        </g>
        <g>
          <line x1={scaleX(xInfRight)} y1={scaleY(yInf)} x2={scaleX(xInfRight)} y2={height - padding.bottom} stroke={C.purple} strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx={scaleX(xInfRight)} cy={scaleY(yInf)} r="4" fill={C.purple} />
          <text x={scaleX(xInfRight)} y={height - padding.bottom + 12} fill={C.purple} fontSize="8" textAnchor="middle">μ + σ</text>
        </g>

        {/* Punto Interactivo */}
        <circle cx={scaleX(xPos)} cy={scaleY(fxVal)} r="5" fill={colorEstado} stroke="#fff" strokeWidth="1.5" />
      </svg>

      {/* Explicación Analítica */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        padding: 8,
        fontSize: "11px",
        lineHeight: 1.5,
      }}>
        <div style={{ color: colorEstado, fontWeight: 600, marginBottom: 2 }}>
          {estado === "inflexion" && "📍 Punto de Inflexión: f''(x) = 0"}
          {estado === "concava_abajo" && "🔽 Cóncava hacia abajo: f''(x) < 0 (zona central de máxima masa)"}
          {estado === "concava_arriba" && "🔼 Cóncava hacia arriba: f''(x) > 0 (colas asintóticas de la distribución)"}
        </div>
        <div style={{ color: C.muted, fontSize: "10px" }}>
          En <InlineFormula latex="x = \mu \pm \sigma" />, la curvatura cambia de concavidad; el intervalo <InlineFormula latex="[\mu-\sigma, \mu+\sigma]" /> concentra exactamente el <strong>68.27%</strong> de la masa de probabilidad.
        </div>
      </div>
    </div>
  );
}
