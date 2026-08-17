import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CATEGORIAS } from "../data/contenido.js";

export function Sidebar({
  temaActivo,
  setTemaActivo,
  vista,
  setVista,
  progreso,
  abierto,
  setAbierto,
  aumentarFuente,
  reducirFuente,
  escalaActual,
  onIniciarQuizModulo,
}) {
  const { C, toggleTema } = useContext(ThemeCtx);
  const [busqueda, setBusqueda] = useState("");
  const [catExpandida, setCatExpandida] = useState(null);

  const totalTemas = CATEGORIAS.reduce((acc, cat) => acc + cat.temas.length, 0);
  const visitados = progreso?.temasVisitados?.length || 0;
  const porcentaje = totalTemas > 0 ? Math.round((visitados / totalTemas) * 100) : 0;

  const toggleCat = (catId) => {
    setCatExpandida(prev => prev === catId ? null : catId);
  };

  const seleccionarTema = (t, catId) => {
    setTemaActivo(t.id);
    setVista("tema");
    if (window.innerWidth < 600) setAbierto(false);
  };

  const irAVista = (v) => {
    setVista(v);
    if (window.innerWidth < 600) setAbierto(false);
  };

  return (
    <>
      {/* Overlay para móvil */}
      {abierto && (
        <div
          className="sidebar-overlay"
          onClick={() => setAbierto(false)}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "#00000088",
            zIndex: 190,
            display: "none",
          }}
        />
      )}

      <aside
        className={`sidebar-panel ${abierto ? "abierto" : ""}`}
        style={{
          width: 280,
          minWidth: 280,
          height: "100%",
          background: C.surface,
          borderRight: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Cabecera del Sidebar */}
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: `${C.accent}22`, border: `1px solid ${C.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.accent, fontWeight: "bold", fontSize: 13
              }}>
                P
              </div>
              <span style={{ fontWeight: 700, fontSize: "var(--fs-md)", color: C.text }}>
                Probabilidad <span style={{ color: C.accent, fontSize: "var(--fs-xs)" }}>UAN</span>
              </span>
            </div>
            <button
              onClick={() => setAbierto(false)}
              className="topbar-mobile"
              style={{
                background: "transparent", border: "none", color: C.muted,
                fontSize: 18, cursor: "pointer", display: "none"
              }}
            >
              ✕
            </button>
          </div>

          {/* Barra de Progreso */}
          <div style={{ marginTop: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 4 }}>
              <span>Avance Académico</span>
              <strong>{porcentaje}% ({visitados}/{totalTemas})</strong>
            </div>
            <div style={{ width: "100%", height: 5, background: C.surface2, borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: `${porcentaje}%`, height: "100%", background: C.green, transition: "width 0.3s ease" }} />
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda */}
        <div style={{ padding: "8px 16px" }}>
          <input
            type="text"
            placeholder="Buscar tema o fórmula..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 10px",
              borderRadius: 6,
              background: C.surface2,
              border: `1px solid ${C.border}`,
              color: C.text,
              fontSize: "var(--fs-xs)",
              outline: "none",
            }}
          />
        </div>

        {/* Navegación y Temario */}
        <div style={{ flex: 1, overflowY: "auto", padding: "4px 8px" }}>
          {/* Accesos rápidos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 12 }}>
            <button
              onClick={() => irAVista("documentos")}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 12px", borderRadius: 6,
                background: vista === "documentos" ? `${C.accent}22` : "transparent",
                border: "none", color: vista === "documentos" ? C.accent : C.text,
                fontSize: "var(--fs-sm)", fontWeight: 600, cursor: "pointer", textAlign: "left"
              }}
            >
              <span>📄</span>
              <span>Documentos Básicos UAN</span>
            </button>
            <button
              onClick={() => irAVista("simulador")}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 12px", borderRadius: 6,
                background: vista === "simulador" ? `${C.accent}22` : "transparent",
                border: "none", color: vista === "simulador" ? C.accent : C.text,
                fontSize: "var(--fs-sm)", fontWeight: 600, cursor: "pointer", textAlign: "left"
              }}
            >
              <span>🔬</span>
              <span>Laboratorio de Simulación</span>
            </button>
            <button
              onClick={() => irAVista("evaluaciones")}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 12px", borderRadius: 6,
                background: (vista === "evaluaciones" || vista === "quiz_modulo" || vista === "quiz_general") ? `${C.yellow}22` : "transparent",
                border: "none", color: (vista === "evaluaciones" || vista === "quiz_modulo" || vista === "quiz_general") ? C.yellow : C.text,
                fontSize: "var(--fs-sm)", fontWeight: 600, cursor: "pointer", textAlign: "left"
              }}
            >
              <span>🎯</span>
              <span>Centro de Evaluaciones</span>
            </button>
          </div>

          {/* Categorías Temáticas */}
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted, padding: "4px 8px", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
            Unidades Curriculares
          </div>

          {CATEGORIAS.map((cat) => {
            const temasFiltrados = cat.temas.filter(t =>
              t.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
              t.definicion.toLowerCase().includes(busqueda.toLowerCase())
            );
            if (busqueda && temasFiltrados.length === 0) return null;

            const estaExpandida = busqueda ? true : catExpandida === cat.id;

            return (
              <div key={cat.id} style={{ marginBottom: 4 }}>
                <button
                  onClick={() => toggleCat(cat.id)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 10px", borderRadius: 6,
                    background: "transparent", border: "none",
                    color: cat.color, fontSize: "var(--fs-sm)", fontWeight: 600,
                    cursor: "pointer", textAlign: "left"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{cat.icon}</span>
                    <span style={{ fontSize: "var(--fs-xs)" }}>{cat.nombre}</span>
                  </div>
                  <span style={{ fontSize: 10, color: C.muted, transform: estaExpandida ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                    ▼
                  </span>
                </button>

                {estaExpandida && (
                  <div style={{ paddingLeft: 12, borderLeft: `2px solid ${cat.color}44`, marginLeft: 16, marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                    {temasFiltrados.map((t) => {
                      const visitado = progreso?.temasVisitados?.includes(t.id);
                      const esActivo = vista === "tema" && temaActivo === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => seleccionarTema(t, cat.id)}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "6px 8px", borderRadius: 4,
                            background: esActivo ? `${cat.color}22` : "transparent",
                            border: "none",
                            color: esActivo ? cat.color : visitado ? C.text : C.muted,
                            fontSize: "var(--fs-xs)",
                            cursor: "pointer",
                            textAlign: "left",
                            fontWeight: esActivo ? 600 : 400,
                          }}
                        >
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {t.titulo}
                          </span>
                          {visitado && <span style={{ color: C.green, fontSize: 10, marginLeft: 4 }}>✓</span>}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => onIniciarQuizModulo(cat.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 6,
                        padding: "6px 8px", borderRadius: 4,
                        background: `${cat.color}15`,
                        border: `1px dashed ${cat.color}66`,
                        color: cat.color,
                        fontSize: "11px",
                        cursor: "pointer",
                        marginTop: 4,
                        fontWeight: 600,
                      }}
                    >
                      <span>📝</span>
                      <span>Evaluar Unidad (Quiz)</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer con Accesibilidad y Créditos */}
        <div style={{ padding: "10px 16px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Controles de Fuente */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button
              onClick={reducirFuente}
              title="Reducir tamaño de fuente"
              style={{
                width: 26, height: 26, borderRadius: 4,
                background: C.surface2, border: `1px solid ${C.border}`,
                color: C.text, fontSize: 12, cursor: "pointer", fontWeight: "bold"
              }}
            >
              A-
            </button>
            <span style={{ fontSize: 10, color: C.muted }}>{escalaActual}x</span>
            <button
              onClick={aumentarFuente}
              title="Aumentar tamaño de fuente"
              style={{
                width: 26, height: 26, borderRadius: 4,
                background: C.surface2, border: `1px solid ${C.border}`,
                color: C.text, fontSize: 12, cursor: "pointer", fontWeight: "bold"
              }}
            >
              A+
            </button>
          </div>

          {/* Tema y Créditos */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={toggleTema}
              title="Alternar tema Claro / Oscuro"
              style={{
                padding: "4px 8px", borderRadius: 6,
                background: C.surface2, border: `1px solid ${C.border}`,
                color: C.text, fontSize: 12, cursor: "pointer"
              }}
            >
              {C.nombre === "oscuro" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => irAVista("creditos")}
              title="Créditos y Autoría UAN"
              style={{
                padding: "4px 8px", borderRadius: 6,
                background: vista === "creditos" ? `${C.accent}22` : C.surface2,
                border: `1px solid ${C.border}`,
                color: vista === "creditos" ? C.accent : C.muted,
                fontSize: 12, cursor: "pointer"
              }}
            >
              ℹ️
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
