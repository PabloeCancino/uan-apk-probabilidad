import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";

export function AgujaBuffonSVG({ catColor = "#e3b341" }) {
  const { C } = useContext(ThemeCtx);
  const [agujas, setAgujas] = useState([]);
  const [totalLanzadas, setTotalLanzadas] = useState(0);
  const [totalCruces, setTotalCruces] = useState(0);

  const ancho = 320;
  const alto = 160;
  const distanciaLineas = 40;
  const longitudAguja = 28;

  const lanzar = (cantidad) => {
    let nuevosCruces = 0;
    const nuevasAgujas = [];

    for (let i = 0; i < cantidad; i++) {
      const cx = 20 + Math.random() * (ancho - 40);
      const cy = 10 + Math.random() * (alto - 20);
      const angulo = Math.random() * Math.PI;

      const dx = (longitudAguja / 2) * Math.cos(angulo);
      const dy = (longitudAguja / 2) * Math.sin(angulo);

      const y1 = cy - dy;
      const y2 = cy + dy;

      // Cruza si cruza alguna línea horizontal y = k * distanciaLineas
      const cruza = Math.floor(y1 / distanciaLineas) !== Math.floor(y2 / distanciaLineas);
      if (cruza) nuevosCruces++;

      nuevasAgujas.push({ x1: cx - dx, y1, x2: cx + dx, y2, cruza });
    }

    setAgujas(prev => [...prev.slice(-150), ...nuevasAgujas.slice(-100)]);
    setTotalLanzadas(t => t + cantidad);
    setTotalCruces(c => c + nuevosCruces);
  };

  const reiniciar = () => {
    setAgujas([]);
    setTotalLanzadas(0);
    setTotalCruces(0);
  };

  const piEstimado = totalCruces > 0
    ? ((2 * longitudAguja * totalLanzadas) / (distanciaLineas * totalCruces)).toFixed(4)
    : "---";

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Botones de acción */}
      <div style={{ display: "flex", gap: 6, justifyContent: "space-between" }}>
        <button
          onClick={() => lanzar(25)}
          style={{
            flex: 1, padding: "5px 0", background: `${catColor}22`,
            border: `1px solid ${catColor}`, color: catColor, borderRadius: 6,
            fontSize: "11px", fontWeight: 600, cursor: "pointer"
          }}
        >
          +25 Agujas
        </button>
        <button
          onClick={() => lanzar(100)}
          style={{
            flex: 1, padding: "5px 0", background: `${catColor}22`,
            border: `1px solid ${catColor}`, color: catColor, borderRadius: 6,
            fontSize: "11px", fontWeight: 600, cursor: "pointer"
          }}
        >
          +100 Agujas
        </button>
        <button
          onClick={reiniciar}
          style={{
            padding: "5px 10px", background: C.surface2,
            border: `1px solid ${C.border}`, color: C.muted, borderRadius: 6,
            fontSize: "11px", cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>

      {/* Lienzo SVG */}
      <svg viewBox={`0 0 ${ancho} ${alto}`} style={{ width: "100%", height: "auto", background: C.surface2, borderRadius: 8, border: `1px solid ${C.border}` }}>
        {/* Líneas horizontales paralelas */}
        {[40, 80, 120].map(y => (
          <line key={y} x1="0" y1={y} x2={ancho} y2={y} stroke={C.border} strokeWidth="1.5" strokeDasharray="4 4" />
        ))}

        {/* Agujas */}
        {agujas.map((a, i) => (
          <line
            key={i}
            x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
            stroke={a.cruza ? "#f85149" : "#3fb950"}
            strokeWidth={a.cruza ? "2" : "1.2"}
            strokeOpacity="0.85"
          />
        ))}
      </svg>

      {/* Resultados de Probabilidad Geométrica y Estimación de Pi */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <div>
          <span style={{ color: C.muted }}>Lanzadas: </span>
          <strong>{totalLanzadas}</strong>
          <div style={{ color: C.muted }}>Cruces: <strong style={{ color: "#f85149" }}>{totalCruces}</strong></div>
        </div>
        <div>
          <span style={{ color: C.muted }}>Aproximación de π:</span>
          <div style={{ fontSize: "16px", fontWeight: "bold", color: catColor }}>
            π ≈ {piEstimado}
          </div>
          <div style={{ color: C.muted, fontSize: "9px" }}>Teórico: 3.14159...</div>
        </div>
      </div>
    </div>
  );
}
