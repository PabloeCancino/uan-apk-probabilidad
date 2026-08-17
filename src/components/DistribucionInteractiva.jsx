import React, { useState, useContext, useMemo } from "react";
import { ThemeCtx } from "../ThemeCtx";

// Funciones auxiliares matemáticas
function factorial(n) {
  if (n <= 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function combinatoria(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let c = 1;
  for (let i = 1; i <= k; i++) {
    c = (c * (n - i + 1)) / i;
  }
  return c;
}

function gammaFunction(z) {
  // Aproximación de Lanczos para gamma
  const g = 7;
  const C = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
  ];
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gammaFunction(1 - z));
  z -= 1;
  let x = C[0];
  for (let i = 1; i < g + 2; i++) x += C[i] / (z + i);
  const t = z + g + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
}

export function DistribucionInteractiva({ tipoInicial = "normal", catColor = "#39d353" }) {
  const { C } = useContext(ThemeCtx);
  const [dist, setDist] = useState(tipoInicial);

  // Parámetros
  const [nBin, setNBin] = useState(10);
  const [pBin, setPBin] = useState(0.5);
  const [lambdaPois, setLambdaPois] = useState(4);
  const [muNorm, setMuNorm] = useState(0);
  const [sigmaNorm, setSigmaNorm] = useState(1);
  const [lambdaExp, setLambdaExp] = useState(1);
  const [alphaGamma, setAlphaGamma] = useState(2);
  const [betaGamma, setBetaGamma] = useState(1);

  // Datos calculados según la distribución seleccionada
  const calculo = useMemo(() => {
    let puntos = [];
    let media = 0;
    let varianza = 0;
    let esDiscreta = false;

    if (dist === "binomial") {
      esDiscreta = true;
      media = nBin * pBin;
      varianza = nBin * pBin * (1 - pBin);
      for (let k = 0; k <= nBin; k++) {
        const prob = combinatoria(nBin, k) * Math.pow(pBin, k) * Math.pow(1 - pBin, nBin - k);
        puntos.push({ x: k, y: prob });
      }
    } else if (dist === "poisson") {
      esDiscreta = true;
      media = lambdaPois;
      varianza = lambdaPois;
      const maxK = Math.min(25, Math.ceil(lambdaPois + 4 * Math.sqrt(lambdaPois)));
      for (let k = 0; k <= maxK; k++) {
        const prob = (Math.pow(lambdaPois, k) * Math.exp(-lambdaPois)) / factorial(k);
        puntos.push({ x: k, y: prob });
      }
    } else if (dist === "normal") {
      esDiscreta = false;
      media = muNorm;
      varianza = sigmaNorm * sigmaNorm;
      const xMin = muNorm - 3.5 * sigmaNorm;
      const xMax = muNorm + 3.5 * sigmaNorm;
      const pasos = 80;
      const dx = (xMax - xMin) / pasos;
      for (let i = 0; i <= pasos; i++) {
        const x = xMin + i * dx;
        const pdf = (1 / (sigmaNorm * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - muNorm) / sigmaNorm, 2));
        puntos.push({ x, y: pdf });
      }
    } else if (dist === "exponencial") {
      esDiscreta = false;
      media = 1 / lambdaExp;
      varianza = 1 / (lambdaExp * lambdaExp);
      const xMax = 5 / lambdaExp;
      const pasos = 80;
      const dx = xMax / pasos;
      for (let i = 0; i <= pasos; i++) {
        const x = i * dx;
        const pdf = lambdaExp * Math.exp(-lambdaExp * x);
        puntos.push({ x, y: pdf });
      }
    } else if (dist === "gamma") {
      esDiscreta = false;
      media = alphaGamma / betaGamma;
      varianza = alphaGamma / (betaGamma * betaGamma);
      const xMax = Math.max(10, (alphaGamma / betaGamma) + 3 * Math.sqrt(alphaGamma) / betaGamma);
      const pasos = 80;
      const dx = xMax / pasos;
      const gamA = gammaFunction(alphaGamma);
      for (let i = 1; i <= pasos; i++) {
        const x = i * dx;
        const pdf = (Math.pow(betaGamma, alphaGamma) / gamA) * Math.pow(x, alphaGamma - 1) * Math.exp(-betaGamma * x);
        puntos.push({ x, y: pdf });
      }
    }

    return { puntos, media: +media.toFixed(3), varianza: +varianza.toFixed(3), esDiscreta };
  }, [dist, nBin, pBin, lambdaPois, muNorm, sigmaNorm, lambdaExp, alphaGamma, betaGamma]);

  // Escalado SVG
  const width = 320;
  const height = 160;
  const padding = { top: 15, right: 15, bottom: 25, left: 35 };

  const maxY = Math.max(...calculo.puntos.map(p => p.y), 0.01) * 1.15;
  const minX = calculo.puntos.length ? Math.min(...calculo.puntos.map(p => p.x)) : 0;
  const maxX = calculo.puntos.length ? Math.max(...calculo.puntos.map(p => p.x)) : 1;

  const scaleX = x => padding.left + ((x - minX) / (maxX - minX || 1)) * (width - padding.left - padding.right);
  const scaleY = y => height - padding.bottom - (y / maxY) * (height - padding.top - padding.bottom);

  let pathD = "";
  if (!calculo.esDiscreta && calculo.puntos.length > 0) {
    pathD = `M ${scaleX(calculo.puntos[0].x)} ${scaleY(calculo.puntos[0].y)} ` +
      calculo.puntos.slice(1).map(p => `L ${scaleX(p.x)} ${scaleY(p.y)}`).join(" ");
  }

  return (
    <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Selector de Distribución */}
      <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 4 }}>
        {[
          { id: "binomial", label: "Binomial" },
          { id: "poisson", label: "Poisson" },
          { id: "normal", label: "Normal" },
          { id: "exponencial", label: "Exponencial" },
          { id: "gamma", label: "Gamma" },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setDist(item.id)}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              fontSize: "10px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              border: dist === item.id ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: dist === item.id ? `${catColor}33` : C.surface2,
              color: dist === item.id ? catColor : C.muted,
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Controles de Parámetros */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, fontSize: "11px", display: "flex", flexDirection: "column", gap: 6 }}>
        {dist === "binomial" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.muted }}>Ensayos n = {nBin}</span>
              <span style={{ color: C.muted }}>Éxito p = {pBin}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input type="range" min="1" max="25" value={nBin} onChange={e => setNBin(parseInt(e.target.value))} style={{ accentColor: catColor }} />
              <input type="range" min="0.05" max="0.95" step="0.05" value={pBin} onChange={e => setPBin(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
            </div>
          </>
        )}
        {dist === "poisson" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.muted }}>Tasa λ = {lambdaPois}</span>
            </div>
            <input type="range" min="0.5" max="15" step="0.5" value={lambdaPois} onChange={e => setLambdaPois(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
          </>
        )}
        {dist === "normal" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.muted }}>Media μ = {muNorm}</span>
              <span style={{ color: C.muted }}>Desv. σ = {sigmaNorm}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input type="range" min="-5" max="5" step="0.5" value={muNorm} onChange={e => setMuNorm(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
              <input type="range" min="0.3" max="3" step="0.1" value={sigmaNorm} onChange={e => setSigmaNorm(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
            </div>
          </>
        )}
        {dist === "exponencial" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.muted }}>Parámetro de tasa λ = {lambdaExp}</span>
            </div>
            <input type="range" min="0.2" max="3" step="0.1" value={lambdaExp} onChange={e => setLambdaExp(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
          </>
        )}
        {dist === "gamma" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.muted }}>Forma α = {alphaGamma}</span>
              <span style={{ color: C.muted }}>Tasa β = {betaGamma}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input type="range" min="1" max="6" step="0.5" value={alphaGamma} onChange={e => setAlphaGamma(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
              <input type="range" min="0.5" max="3" step="0.5" value={betaGamma} onChange={e => setBetaGamma(parseFloat(e.target.value))} style={{ accentColor: catColor }} />
            </div>
          </>
        )}
      </div>

      {/* Gráfico SVG */}
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", background: C.surface2, borderRadius: 8, border: `1px solid ${C.border}` }}>
        {/* Ejes */}
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke={C.border} strokeWidth="1.5" />
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke={C.border} strokeWidth="1.5" />

        {/* Gráfico Discreto (Barras) */}
        {calculo.esDiscreta && calculo.puntos.map((p, i) => {
          const xPos = scaleX(p.x);
          const yPos = scaleY(p.y);
          const barW = Math.max(3, (width - padding.left - padding.right) / (calculo.puntos.length * 1.8));
          return (
            <g key={i}>
              <rect x={xPos - barW / 2} y={yPos} width={barW} height={height - padding.bottom - yPos} fill={`${catColor}88`} rx="2" stroke={catColor} strokeWidth="1" />
              <text x={xPos} y={height - padding.bottom + 12} fill={C.muted} fontSize="8" textAnchor="middle">{p.x}</text>
            </g>
          );
        })}

        {/* Gráfico Continuo (Curva y Área) */}
        {!calculo.esDiscreta && calculo.puntos.length > 0 && (
          <>
            <path
              d={`${pathD} L ${scaleX(calculo.puntos[calculo.puntos.length - 1].x)} ${height - padding.bottom} L ${scaleX(calculo.puntos[0].x)} ${height - padding.bottom} Z`}
              fill={`${catColor}33`}
            />
            <path d={pathD} fill="none" stroke={catColor} strokeWidth="2.5" />
          </>
        )}

        {/* Línea de Media E[X] */}
        {calculo.media >= minX && calculo.media <= maxX && (
          <line
            x1={scaleX(calculo.media)} y1={padding.top}
            x2={scaleX(calculo.media)} y2={height - padding.bottom}
            stroke="#f0883e" strokeWidth="1.5" strokeDasharray="3 3"
          />
        )}
      </svg>

      {/* Valores Teóricos Calculados */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: "11px" }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "6px 8px" }}>
          <span style={{ color: C.muted }}>Esperanza E[X]: </span>
          <strong style={{ color: "#f0883e" }}>{calculo.media}</strong>
        </div>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "6px 8px" }}>
          <span style={{ color: C.muted }}>Varianza Var(X): </span>
          <strong style={{ color: "#3fb950" }}>{calculo.varianza}</strong>
        </div>
      </div>
    </div>
  );
}
