import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";

export function CalculadoraBayes({ catColor = "#bc8cff" }) {
  const { C } = useContext(ThemeCtx);
  const [prevalencia, setPrevalencia] = useState(1); // 1%
  const [sensibilidad, setSensibilidad] = useState(95); // 95%
  const [especificidad, setEspecificidad] = useState(90); // 90%

  const prev = prevalencia / 100;
  const sens = sensibilidad / 100;
  const esp = especificidad / 100;

  const vp = prev * sens;
  const fp = (1 - prev) * (1 - esp);
  const fn = prev * (1 - sens);
  const vn = (1 - prev) * esp;

  const pPositivo = vp + fp;
  const vpp = pPositivo > 0 ? (vp / pPositivo) * 100 : 0;
  const vpn = (vn + fn) > 0 ? (vn / (vn + fn)) * 100 : 0;

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, fontSize: "11px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: C.muted }}>
            <span>Prevalencia de Enfermedad P(E):</span>
            <strong style={{ color: catColor }}>{prevalencia}%</strong>
          </div>
          <input
            type="range" min="0.1" max="20" step="0.1" value={prevalencia}
            onChange={e => setPrevalencia(parseFloat(e.target.value))}
            style={{ width: "100%", accentColor: catColor }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: C.muted }}>
            <span>Sensibilidad (Verdaderos Positivos):</span>
            <strong style={{ color: "#3fb950" }}>{sensibilidad}%</strong>
          </div>
          <input
            type="range" min="70" max="99.9" step="0.5" value={sensibilidad}
            onChange={e => setSensibilidad(parseFloat(e.target.value))}
            style={{ width: "100%", accentColor: "#3fb950" }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: C.muted }}>
            <span>Especificidad (Verdaderos Negativos):</span>
            <strong style={{ color: "#58a6ff" }}>{especificidad}%</strong>
          </div>
          <input
            type="range" min="70" max="99.9" step="0.5" value={especificidad}
            onChange={e => setEspecificidad(parseFloat(e.target.value))}
            style={{ width: "100%", accentColor: "#58a6ff" }}
          />
        </div>
      </div>

      {/* Matriz de confusión en 10,000 personas */}
      <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 10, fontSize: "11px" }}>
        <div style={{ fontWeight: 600, color: C.text, marginBottom: 6 }}>Población representativa: 10,000 personas</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <div style={{ background: `${C.surface}`, padding: 6, borderRadius: 6, borderLeft: `3px solid #3fb950` }}>
            <div style={{ color: C.muted, fontSize: "10px" }}>Verdaderos Positivos</div>
            <strong style={{ color: "#3fb950", fontSize: "13px" }}>{Math.round(vp * 10000)}</strong>
          </div>
          <div style={{ background: `${C.surface}`, padding: 6, borderRadius: 6, borderLeft: `3px solid #f85149` }}>
            <div style={{ color: C.muted, fontSize: "10px" }}>Falsos Positivos</div>
            <strong style={{ color: "#f85149", fontSize: "13px" }}>{Math.round(fp * 10000)}</strong>
          </div>
          <div style={{ background: `${C.surface}`, padding: 6, borderRadius: 6, borderLeft: `3px solid #e3b341` }}>
            <div style={{ color: C.muted, fontSize: "10px" }}>Falsos Negativos</div>
            <strong style={{ color: "#e3b341", fontSize: "13px" }}>{Math.round(fn * 10000)}</strong>
          </div>
          <div style={{ background: `${C.surface}`, padding: 6, borderRadius: 6, borderLeft: `3px solid #58a6ff` }}>
            <div style={{ color: C.muted, fontSize: "10px" }}>Verdaderos Negativos</div>
            <strong style={{ color: "#58a6ff", fontSize: "13px" }}>{Math.round(vn * 10000)}</strong>
          </div>
        </div>
      </div>

      {/* Inferencia Bayesiana VPP */}
      <div style={{
        background: `${catColor}18`,
        border: `1px solid ${catColor}44`,
        borderRadius: 8,
        padding: 10,
        textAlign: "center"
      }}>
        <div style={{ color: C.muted, fontSize: "11px" }}>Probabilidad real de estar enfermo si el test dio POSITIVO:</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", color: catColor, margin: "4px 0" }}>
          P(E | +) = {vpp.toFixed(1)}%
        </div>
        <div style={{ fontSize: "10px", color: C.muted }}>
          {vpp < 50
            ? "⚠️ Falacia de la tasa base: A pesar de la alta sensibilidad, la baja prevalencia genera más falsos positivos que verdaderos positivos."
            : "✅ Alta probabilidad posterior debido a la combinación de especificidad y prevalencia."}
        </div>
      </div>
    </div>
  );
}
