// ThemeCtx.js — Paletas de color y contexto de tema
// NTE-UAN-APK-001 v1.3
import { createContext } from "react";

export const DARK = {
  bg:         "#010409",
  surface:    "#0d1117",
  surface2:   "#161b22",
  border:     "#21262d",
  accent:     "#58a6ff",
  accentSoft: "#58a6ff18",
  green:      "#3fb950",
  greenSoft:  "#238636",
  orange:     "#f0883e",
  red:        "#f85149",
  text:       "#e6edf3",
  muted:      "#8b949e",
  purple:     "#bc8cff",
  yellow:     "#e3b341",
  teal:       "#39d353",
  nombre:     "oscuro",
};

export const LIGHT = {
  bg:         "#ffffff",
  surface:    "#f6f8fa",
  surface2:   "#eaeef2",
  border:     "#d0d7de",
  accent:     "#0969da",
  accentSoft: "#0969da15",
  green:      "#1a7f37",
  greenSoft:  "#dafbe1",
  orange:     "#bc4c00",
  red:        "#cf222e",
  text:       "#1f2328",
  muted:      "#656d76",
  purple:     "#8250df",
  yellow:     "#9a6700",
  teal:       "#0f6e31",
  nombre:     "claro",
};

export const ThemeCtx = createContext({ C: DARK, toggleTema: () => {} });
