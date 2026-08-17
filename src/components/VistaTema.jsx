import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CATEGORIAS } from "../data/contenido.js";
import { Formula, renderTextWithMath } from "./Formula";
import { VennSVG } from "./VennSVG";
import { ArbolProbabilidadSVG } from "./ArbolProbabilidadSVG";
import { CalculadoraBayes } from "./CalculadoraBayes";
import { DistribucionInteractiva } from "./DistribucionInteractiva";
import { SimuladorTLC } from "./SimuladorTLC";
import { AgujaBuffonSVG } from "./AgujaBuffonSVG";
import { GraficoPascal } from "./GraficoPascal";
import { GraficoCampanaGaussInflexion } from "./GraficoCampanaGaussInflexion";
import { GraficoEspacioMuestral } from "./GraficoEspacioMuestral";
import { TablaContenedor } from "./TablaContenedor";

export function VistaTema({ tema, onIniciarQuizModulo }) {
  const { C } = useContext(ThemeCtx);
  const cat = CATEGORIAS.find(c => c.id === tema.categoria) || { nombre: "General", color: "#58a6ff", icon: "📐" };

  const renderWidget = () => {
    if (tema.widget === "venn") return <VennSVG catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "pascal") return <GraficoPascal catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "gauss_inflexion") return <GraficoCampanaGaussInflexion catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "espacio_muestral") return <GraficoEspacioMuestral catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "arbol") return <ArbolProbabilidadSVG catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "bayes") return <CalculadoraBayes catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "distribucion") return <DistribucionInteractiva catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "tlc") return <SimuladorTLC catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "buffon") return <AgujaBuffonSVG catColor={cat.color} {...tema.widgetProps} />;
    if (tema.tabla) return <TablaContenedor tabla={tema.tabla} catColor={cat.color} />;
    return null;
  };

  const hasWidget = !!(tema.widget || tema.tabla);

  return (
    <div key={tema.id} className="fade-slide-in contenido-vista">
      {/* Chip de Categoría */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span
          className="tema-categoria-chip"
          style={{
            padding: "3px 12px",
            borderRadius: 20,
            background: `${cat.color}22`,
            color: cat.color,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          {cat.icon} {cat.nombre}
        </span>
        {onIniciarQuizModulo && (
          <button
            onClick={() => onIniciarQuizModulo(cat.id)}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              background: C.surface2,
              border: `1px solid ${C.border}`,
              color: cat.color,
              fontSize: "var(--fs-xs)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            📝 Evaluar Módulo
          </button>
        )}
      </div>

      {/* Título */}
      <h2
        className="tema-titulo"
        style={{ color: C.text, fontWeight: 700, margin: "8px 0 16px", letterSpacing: -0.5 }}
      >
        {tema.titulo}
      </h2>

      {/* Grid: Definición + Widget */}
      <div className="vista-tema-grid" style={{ marginBottom: "var(--sp-md)" }}>
        <div>
          <div className="tema-definicion" style={{ color: C.text, marginTop: 0 }}>
            {renderTextWithMath(tema.definicion)}
          </div>
          {tema.formula && <Formula latex={tema.formula} color={cat.color} />}
        </div>

        {hasWidget && (
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "var(--sp-sm)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderWidget()}
          </div>
        )}
      </div>

      {/* Observaciones clave y Notas */}
      {tema.notas && tema.notas.length > 0 && (
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "var(--sp-sm) var(--sp-md)",
            marginTop: "var(--sp-sm)",
          }}
        >
          <div
            className="tema-nota-label"
            style={{
              color: C.muted,
              marginBottom: "var(--sp-xs)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              fontWeight: 600,
            }}
          >
            Observaciones y Demostraciones Clave
          </div>
          {tema.notas.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <span style={{ color: cat.color, fontSize: "var(--fs-md)", marginTop: -2, minWidth: 16 }}>›</span>
              <span className="tema-nota-texto" style={{ color: C.text }}>
                {renderTextWithMath(n)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
