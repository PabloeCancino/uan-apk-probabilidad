import React, { useState, useEffect, useContext, createContext } from "react";
import { useProgreso } from "./hooks/useProgreso";
import { CATEGORIAS, QUIZZES, META } from "./data/contenido.js";
import { DARK, LIGHT, ThemeCtx } from "./ThemeCtx";
import { Sidebar } from "./components/Sidebar";
import { VistaTema } from "./components/VistaTema";
import { Simulador } from "./components/Simulador";
import { Creditos } from "./components/Creditos";
import { DocumentosBasicos } from "./components/DocumentosBasicos";
import { CentroEvaluaciones } from "./components/CentroEvaluaciones";
import { renderTextWithMath } from "./components/Formula";

// ── CONTEXTO DE TAMAÑO DE FUENTE (7+ niveles de 0.85x a 2.00x) ────────────────
const FONT_SCALES = [0.85, 0.95, 1.0, 1.15, 1.30, 1.50, 1.75, 2.00];
const FontSizeCtx = createContext({ scaleIdx: 2, aumentar: () => {}, reducir: () => {} });
export const useFontSize = () => useContext(FontSizeCtx);

function FontSizeProvider({ children }) {
  const [scaleIdx, setScaleIdx] = useState(() => {
    try {
      const guardado = Number(localStorage.getItem("uan_font_scale"));
      return Number.isInteger(guardado) && guardado >= 0 && guardado < FONT_SCALES.length ? guardado : 2;
    } catch {
      return 2;
    }
  });

  const aumentar = () => setScaleIdx(i => Math.min(i + 1, FONT_SCALES.length - 1));
  const reducir = () => setScaleIdx(i => Math.max(i - 1, 0));

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", FONT_SCALES[scaleIdx]);
    try {
      localStorage.setItem("uan_font_scale", scaleIdx);
    } catch {}
  }, [scaleIdx]);

  return (
    <FontSizeCtx.Provider value={{ scaleIdx, aumentar, reducir, escalaActual: FONT_SCALES[scaleIdx] }}>
      {children}
    </FontSizeCtx.Provider>
  );
}

// ── CONTEXTO DE TEMA ───────────────────────────────────────────────────────────
function ThemeProvider({ children }) {
  const [modo, setModo] = useState(() => {
    try { return localStorage.getItem("uan_tema") || "oscuro"; } catch { return "oscuro"; }
  });
  const C = modo === "claro" ? LIGHT : DARK;

  const toggleTema = () => setModo(m => {
    const nuevo = m === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("uan_tema", nuevo); } catch {}
    return nuevo;
  });

  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  }, [C.bg, C.text]);

  return (
    <ThemeCtx.Provider value={{ C, toggleTema }}>
      {children}
    </ThemeCtx.Provider>
  );
}

// ── TODOS LOS TEMAS APLANADOS ──────────────────────────────────────────────────
const TODOS_TEMAS = CATEGORIAS.flatMap(c =>
  c.temas.map(t => ({ ...t, categoria: c.id, catNombre: c.nombre, catColor: c.color }))
);

// ── COMPONENTE SESIÓN DE QUIZ ─────────────────────────────────────────────────
function SesionQuiz({ pool, nPreguntas, guardarQuiz, onVolver, tituloModulo }) {
  const { C } = useContext(ThemeCtx);
  const [fase, setFase] = useState("quiz"); // "quiz" | "resultado"
  const [qIdx, setQIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [sel, setSel] = useState(null);
  const [exp, setExp] = useState(false);

  const buildQs = () => {
    const arr = [...pool];
    return arr.sort(() => 0.5 - Math.random()).slice(0, Math.min(nPreguntas, arr.length));
  };

  const [qs, setQs] = useState(buildQs);
  const q = qs[qIdx];
  const total = qs.length;
  const aciertos = Object.entries(resp).filter(([idx, ans]) => qs[Number(idx)]?.correcta === ans).length;

  const seleccionarOpcion = (idx) => {
    if (sel !== null) return;
    setSel(idx);
    setResp(r => ({ ...r, [qIdx]: idx }));
    setExp(true);
  };

  const siguiente = () => {
    if (qIdx + 1 < total) {
      setQIdx(i => i + 1);
      setSel(resp[qIdx + 1] ?? null);
      setExp(resp[qIdx + 1] !== undefined);
    } else {
      guardarQuiz(aciertos, total);
      setFase("resultado");
    }
  };

  const reiniciar = () => {
    setQs(buildQs());
    setFase("quiz");
    setQIdx(0);
    setResp({});
    setSel(null);
    setExp(false);
  };

  if (!q) {
    return (
      <div className="contenido-vista" style={{ textAlign: "center", padding: 40 }}>
        <p style={{ color: C.muted }}>No hay preguntas disponibles para este módulo.</p>
        <button onClick={onVolver} style={{ padding: "8px 16px", borderRadius: 8, background: C.accent, color: "#fff", border: "none", cursor: "pointer" }}>
          Volver
        </button>
      </div>
    );
  }

  if (fase === "resultado") {
    const porcentaje = Math.round((aciertos / total) * 100);
    const aprobado = porcentaje >= 60;
    return (
      <div className="fade-slide-in contenido-vista" style={{ textAlign: "center", maxWidth: 500, margin: "40px auto" }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{aprobado ? "🎉" : "📚"}</div>
          <h2 style={{ color: C.text, fontSize: "var(--fs-xl)", margin: "8px 0" }}>
            {aprobado ? "¡Excelente Desempeño!" : "¡Sigue Practicando!"}
          </h2>
          <p style={{ color: C.muted, fontSize: "var(--fs-sm)" }}>
            Has completado la evaluación de {tituloModulo || "Probabilidad"}.
          </p>

          <div style={{
            fontSize: "var(--fs-xl)", fontWeight: "bold",
            color: aprobado ? C.green : C.orange,
            margin: "20px 0"
          }}>
            {aciertos} / {total} correctas ({porcentaje}%)
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={reiniciar}
              style={{
                padding: "10px 20px", borderRadius: 8,
                background: `${C.accent}22`, border: `1px solid ${C.accent}`,
                color: C.accent, fontWeight: 600, cursor: "pointer", fontSize: "var(--fs-sm)"
              }}
            >
              🔄 Intentar de nuevo
            </button>
            <button
              onClick={onVolver}
              style={{
                padding: "10px 20px", borderRadius: 8,
                background: C.accent, border: "none",
                color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: "var(--fs-sm)"
              }}
            >
              ← Volver al curso
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-slide-in contenido-vista" style={{ maxWidth: 680, margin: "0 auto" }}>
      {/* Cabecera del Quiz */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <span style={{ fontSize: "var(--fs-xs)", color: C.accent, fontWeight: 600, textTransform: "uppercase" }}>
            {q.nivel || tituloModulo || "Evaluación Continua"}
          </span>
          <h3 style={{ color: C.text, margin: 0, fontSize: "var(--fs-md)" }}>
            Pregunta {qIdx + 1} de {total}
          </h3>
        </div>
        <button
          onClick={onVolver}
          style={{
            padding: "4px 10px", borderRadius: 6,
            background: C.surface2, border: `1px solid ${C.border}`,
            color: C.muted, fontSize: "var(--fs-xs)", cursor: "pointer"
          }}
        >
          Salir
        </button>
      </div>

      {/* Barra de progreso de preguntas */}
      <div style={{ width: "100%", height: 4, background: C.surface2, borderRadius: 2, marginBottom: 20, overflow: "hidden" }}>
        <div style={{ width: `${((qIdx + 1) / total) * 100}%`, height: "100%", background: C.accent, transition: "width 0.2s" }} />
      </div>

      {/* Caja de Pregunta */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "var(--sp-md)", marginBottom: 16 }}>
        <div style={{ fontSize: "var(--fs-md)", color: C.text, lineHeight: 1.6, fontWeight: 500 }}>
          {renderTextWithMath(q.pregunta)}
        </div>
      </div>

      {/* Opciones de respuesta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {q.opciones.map((opcion, idx) => {
          const esCorrecta = idx === q.correcta;
          const esSeleccionada = sel === idx;
          let bg = C.surface;
          let border = C.border;
          let color = C.text;

          if (exp) {
            if (esCorrecta) {
              bg = `${C.green}22`;
              border = C.green;
              color = C.green;
            } else if (esSeleccionada) {
              bg = `${C.red}22`;
              border = C.red;
              color = C.red;
            }
          } else if (esSeleccionada) {
            bg = `${C.accent}22`;
            border = C.accent;
            color = C.accent;
          }

          return (
            <button
              key={idx}
              onClick={() => seleccionarOpcion(idx)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 16px", borderRadius: 10,
                background: bg, border: `1px solid ${border}`,
                color: color, fontSize: "var(--fs-sm)",
                textAlign: "left", cursor: sel !== null ? "default" : "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                background: C.surface2, display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 600, fontSize: 11, minWidth: 24
              }}>
                {String.fromCharCode(65 + idx)}
              </div>
              <div style={{ flex: 1 }}>{renderTextWithMath(opcion)}</div>
            </button>
          );
        })}
      </div>

      {/* Explicación paso a paso */}
      {exp && (
        <div className="fade-slide-in" style={{
          background: C.surface2,
          borderLeft: `4px solid ${sel === q.correcta ? C.green : C.red}`,
          borderRadius: 8, padding: 14, marginBottom: 16
        }}>
          <div style={{ fontWeight: 600, color: sel === q.correcta ? C.green : C.red, fontSize: "var(--fs-xs)", marginBottom: 4 }}>
            {sel === q.correcta ? "✓ Respuesta Correcta" : "✗ Respuesta Incorrecta"}
          </div>
          <div style={{ color: C.text, fontSize: "var(--fs-sm)", lineHeight: 1.6 }}>
            {renderTextWithMath(q.explicacion)}
          </div>
        </div>
      )}

      {/* Botón Siguiente */}
      {exp && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={siguiente}
            style={{
              padding: "10px 24px", borderRadius: 8,
              background: C.accent, border: "none",
              color: "#fff", fontWeight: 600, fontSize: "var(--fs-sm)",
              cursor: "pointer",
            }}
          >
            {qIdx + 1 < total ? "Siguiente Pregunta →" : "Ver Resultados Finales"}
          </button>
        </div>
      )}
    </div>
  );
}

// ── APLICACIÓN PRINCIPAL ──────────────────────────────────────────────────────
function AppContenido() {
  const { C, toggleTema } = useContext(ThemeCtx);
  const { escalaActual, aumentar, reducir } = useFontSize();
  const { progreso, marcarVisitado, guardarQuiz } = useProgreso();

  const [temaActivoId, setTemaActivoId] = useState(() => {
    return progreso?.ultimoTema || TODOS_TEMAS[0]?.id || "historia_probabilidad";
  });

  const [vista, setVista] = useState("tema"); // "tema" | "documentos" | "simulador" | "evaluaciones" | "quiz" | "creditos"
  const [quizConfig, setQuizConfig] = useState({
    moduloId: null,
    nPreguntas: 10,
    titulo: "Evaluación",
  });
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const temaActual = TODOS_TEMAS.find(t => t.id === temaActivoId) || TODOS_TEMAS[0];

  // Marcar tema visitado al abrir
  useEffect(() => {
    if (temaActual && vista === "tema") {
      marcarVisitado(temaActual.id, temaActual.categoria);
    }
  }, [temaActivoId, vista, temaActual, marcarVisitado]);

  const iniciarQuiz = (moduloId, nPreguntas = 10, titulo = "Evaluación") => {
    setQuizConfig({ moduloId, nPreguntas, titulo });
    setVista("quiz");
  };

  const poolActivo = quizConfig.moduloId && quizConfig.moduloId !== "global"
    ? QUIZZES.filter(q => q.nivel === CATEGORIAS.find(c => c.id === quizConfig.moduloId)?.nombre)
    : QUIZZES;

  return (
    <div style={{ display: "flex", width: "100%", height: "100%", background: C.bg, color: C.text, overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar
        temaActivo={temaActivoId}
        setTemaActivo={setTemaActivoId}
        vista={vista}
        setVista={setVista}
        progreso={progreso}
        abierto={sidebarAbierto}
        setAbierto={setSidebarAbierto}
        aumentarFuente={aumentar}
        reducirFuente={reducir}
        escalaActual={escalaActual}
        onIniciarQuizModulo={(catId) => {
          const cat = CATEGORIAS.find(c => c.id === catId);
          iniciarQuiz(catId, 10, `Unidad: ${cat?.nombre || "Módulo"}`);
        }}
      />

      {/* Área Principal de Contenido */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        {/* Topbar para móvil y tablet */}
        <header
          className="topbar-mobile"
          style={{
            display: "none",
            height: 52,
            background: C.surface,
            borderBottom: `1px solid ${C.border}`,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            zIndex: 100,
          }}
        >
          <button
            onClick={() => setSidebarAbierto(true)}
            style={{
              background: "transparent", border: "none",
              color: C.text, fontSize: 20, cursor: "pointer"
            }}
          >
            ☰
          </button>
          <span style={{ fontWeight: 700, fontSize: "var(--fs-sm)", color: C.text }}>
            {META.nombreCompleto}
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={toggleTema}
              style={{
                background: C.surface2, border: `1px solid ${C.border}`,
                borderRadius: 6, padding: "4px 8px", color: C.text, fontSize: 12
              }}
            >
              {C.nombre === "oscuro" ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Scrollable Main View */}
        <div style={{ flex: 1, overflowY: "auto", padding: "var(--sp-sm) 0" }}>
          {vista === "tema" && (
            <VistaTema tema={temaActual} onIniciarQuizModulo={(catId) => {
              const cat = CATEGORIAS.find(c => c.id === catId);
              iniciarQuiz(catId, 10, `Unidad: ${cat?.nombre || "Módulo"}`);
            }} />
          )}
          {vista === "documentos" && <DocumentosBasicos />}
          {vista === "simulador" && <Simulador />}
          {vista === "evaluaciones" && (
            <CentroEvaluaciones
              onIniciarQuiz={iniciarQuiz}
              progreso={progreso}
            />
          )}
          {vista === "creditos" && <Creditos />}
          {vista === "quiz" && (
            <SesionQuiz
              pool={poolActivo}
              nPreguntas={quizConfig.nPreguntas}
              guardarQuiz={(a, t) => guardarQuiz(a, t, quizConfig.moduloId)}
              onVolver={() => setVista("evaluaciones")}
              tituloModulo={quizConfig.titulo}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <AppContenido />
      </FontSizeProvider>
    </ThemeProvider>
  );
}
