import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CREDITOS, META } from "../data/contenido.js";

export function Creditos() {
  const { C } = useContext(ThemeCtx);

  return (
    <div className="fade-slide-in contenido-vista">
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: "var(--fs-xs)", color: C.accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>
          {META.norma}
        </div>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          {META.nombreCompleto}
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", maxWidth: 500, margin: "8px auto 0" }}>
          {META.descripcion}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18 }}>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Información Institucional
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "var(--fs-sm)" }}>
            <div>
              <span style={{ color: C.muted }}>Institución: </span>
              <strong style={{ color: C.text }}>Universidad Autónoma de Nayarit (UAN)</strong>
            </div>
            <div>
              <span style={{ color: C.muted }}>Unidad Académica: </span>
              <strong style={{ color: C.text }}>{META.unidad}</strong>
            </div>
            <div>
              <span style={{ color: C.muted }}>Programa Académico: </span>
              <strong style={{ color: C.text }}>{META.programa}</strong>
            </div>
            <div>
              <span style={{ color: C.muted }}>Unidad de Aprendizaje: </span>
              <strong style={{ color: C.accent }}>Probabilidad (CBIMAT-234)</strong>
            </div>
            <div>
              <span style={{ color: C.muted }}>Versión y Año: </span>
              <strong style={{ color: C.text }}>v{META.version} ({META.anio})</strong>
            </div>
          </div>
        </div>

        {CREDITOS.map((grupo, idx) => (
          <div key={idx} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: "18px" }}>{grupo.icono}</span>
              <div style={{ fontSize: "var(--fs-xs)", color: C.muted, textTransform: "uppercase", letterSpacing: 1 }}>
                {grupo.rol}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {grupo.personas.map((p, pIdx) => (
                <div key={pIdx} style={{ borderLeft: `3px solid ${C.accent}`, paddingLeft: 10 }}>
                  <div style={{ color: C.text, fontWeight: 600, fontSize: "var(--fs-sm)" }}>{p.nombre}</div>
                  <div style={{ color: C.muted, fontSize: "var(--fs-xs)" }}>{p.detalle}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, textAlign: "center", fontSize: "var(--fs-xs)", color: C.muted }}>
        Desarrollado bajo el marco institucional de Tecnología Educativa y Software Libre de la Universidad Autónoma de Nayarit.
      </div>
    </div>
  );
}
