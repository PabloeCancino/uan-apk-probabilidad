import React, { useState, useContext, useMemo } from "react";
import { ThemeCtx } from "../ThemeCtx";

export function SimuladorTLC({ catColor = "#ff7b72" }) {
  const { C } = useContext(ThemeCtx);
  const [distOrigen, setDistOrigen] = useState("uniforme"); // "uniforme", "dado", "exponencial", "bernoulli"
  const [nTamMuestra, setNTamMuestra] = useState(10);
  const [numSimulaciones, setNumSimulaciones] = useState(1000);
  const [seed, setSeed] = useState(1);

  // Generación estocástica de medias muestrales
  const datos = useMemo(() => {
    let muTeorica = 0;
    let sigmaTeorica = 0;

    const generarValor = () => {
      if (distOrigen === "uniforme") {
        return Math.random(); // U(0,1)
      } else if (distOrigen === "dado") {
        return Math.floor(Math.random() * 6) + 1; // 1..6
      } else if (distOrigen === "exponencial") {
        return -Math.log(1 - Math.random()); // Exp(1)
      } else if (distOrigen === "bernoulli") {
        return Math.random() < 0.3 ? 1 : 0; // Ber(0.3)
      }
      return 0;
    };

    if (distOrigen === "uniforme") {
      muTeorica = 0.5;
      sigmaTeorica = Math.sqrt(1 / 12);
    } else if (distOrigen === "dado") {
      muTeorica = 3.5;
      sigmaTeorica = Math.sqrt(35 / 12);
    } else if (distOrigen === "exponencial") {
      muTeorica = 1.0;
      sigmaTeorica = 1.0;
    } else if (distOrigen === "bernoulli") {
      muTeorica = 0.3;
      sigmaTeorica = Math.sqrt(0.3 * 0.7);
    }

    const sigmaMuestral = sigmaTeorica / Math.sqrt(nTamMuestra);

    // Generar muestras y calcular promedios
    const medias = [];
    for (let s = 0; s < numSimulaciones; s++) {
      let suma = 0;
      for (let i = 0; i < nTamMuestra; i++) {
        suma += generarValor();
      }
      medias.push(suma / nTamMuestra);
    }

    // Histograma de 20 bins
    const minVal = Math.min(...medias);
    const maxVal = Math.max(...medias);
    const numBins = 20;
    const binWidth = (maxVal - minVal) / numBins || 0.1;
    const bins = Array(numBins).fill(0);

    medias.forEach(m => {
      let idx = Math.floor((m - minVal) / binWidth);
      if (idx >= numBins) idx = numBins - 1;
      if (idx < 0) idx = 0;
      bins[idx]++;
    });

    const mediaEmpirica = medias.reduce((a, b) => a + b, 0) / numSimulaciones;
    const varEmpirica = medias.reduce((a, b) => a + Math.pow(b - mediaEmpirica, 2), 0) / numSimulaciones;

    return {
      medias,
      bins,
      minVal,
      maxVal,
      binWidth,
      muTeorica,
      sigmaMuestral,
      mediaEmpirica: +mediaEmpirica.toFixed(3),
      varEmpirica: +varEmpirica.toFixed(4),
    };
  }, [distOrigen, nTamMuestra, numSimulaciones, seed]);

  // Dimensiones SVG
  const width = 320;
  const height = 150;
  const padding = { top: 15, right: 15, bottom: 25, left: 35 };

  const maxCount = Math.max(...datos.bins, 1) * 1.15;
  const scaleX = val => padding.left + ((val - datos.minVal) / (datos.maxVal - datos.minVal || 1)) * (width - padding.left - padding.right);
  const scaleY = count => height - padding.bottom - (count / maxCount) * (height - padding.top - padding.bottom);

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Selector de Distribución Origen */}
      <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
        {[
          { id: "uniforme", label: "Uniforme (0,1)" },
          { id: "dado", label: "Dado (1-6)" },
          { id: "exponencial", label: "Exponencial" },
          { id: "bernoulli", label: "Bernoulli (0.3)" },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setDistOrigen(item.id)}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              fontSize: "10px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              border: distOrigen === item.id ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: distOrigen === item.id ? `${catColor}33` : C.surface2,
              color: distOrigen === item.id ? catColor : C.muted,
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Controles de Tamaño de Muestra */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: C.muted }}>Tamaño de muestra (n):</span>
          <strong style={{ color: catColor }}>n = {nTamMuestra}</strong>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 5, 15, 30, 50].map(n => (
            <button
              key={n}
              onClick={() => setNTamMuestra(n)}
              style={{
                flex: 1,
                padding: "3px 0",
                fontSize: "10px",
                borderRadius: 4,
                border: nTamMuestra === n ? `1px solid ${catColor}` : `1px solid ${C.border}`,
                background: nTamMuestra === n ? catColor : C.surface2,
                color: nTamMuestra === n ? "#fff" : C.text,
                cursor: "pointer",
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
          <span style={{ color: C.muted }}>Simulaciones: {numSimulaciones}</span>
          <button
            onClick={() => setSeed(s => s + 1)}
            style={{
              padding: "3px 10px",
              background: `${catColor}22`,
              border: `1px solid ${catColor}`,
              color: catColor,
              borderRadius: 6,
              fontSize: "10px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            🎲 Re-simular
          </button>
        </div>
      </div>

      {/* Histograma SVG */}
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", background: C.surface2, borderRadius: 8, border: `1px solid ${C.border}` }}>
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke={C.border} strokeWidth="1.5" />
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke={C.border} strokeWidth="1.5" />

        {/* Barras del Histograma de Medias Muestrales */}
        {datos.bins.map((c, i) => {
          const xVal = datos.minVal + i * datos.binWidth;
          const xPos = scaleX(xVal);
          const yPos = scaleY(c);
          const barW = Math.max(2, (width - padding.left - padding.right) / datos.bins.length - 1);
          return (
            <rect
              key={i}
              x={xPos}
              y={yPos}
              width={barW}
              height={height - padding.bottom - yPos}
              fill={`${catColor}77`}
              stroke={catColor}
              strokeWidth="0.75"
              rx="1"
            />
          );
        })}

        {/* Línea de Media Teórica */}
        {datos.muTeorica >= datos.minVal && datos.muTeorica <= datos.maxVal && (
          <line
            x1={scaleX(datos.muTeorica)} y1={padding.top}
            x2={scaleX(datos.muTeorica)} y2={height - padding.bottom}
            stroke="#3fb950" strokeWidth="2" strokeDasharray="3 3"
          />
        )}
      </svg>

      {/* Resultados Estadísticos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: "11px" }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "6px 8px" }}>
          <span style={{ color: C.muted }}>Media Empírica: </span>
          <strong style={{ color: "#3fb950" }}>{datos.mediaEmpirica}</strong>
          <div style={{ color: C.muted, fontSize: "9px" }}>μ teórica = {datos.muTeorica}</div>
        </div>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "6px 8px" }}>
          <span style={{ color: C.muted }}>Varianza Empírica: </span>
          <strong style={{ color: catColor }}>{datos.varEmpirica}</strong>
          <div style={{ color: C.muted, fontSize: "9px" }}>σ²/n teórica = {(datos.sigmaMuestral * datos.sigmaMuestral).toFixed(4)}</div>
        </div>
      </div>
    </div>
  );
}
