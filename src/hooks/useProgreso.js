import { useState, useCallback } from 'react';

// Clave única de almacenamiento según NTE-UAN-APK-001
const CLAVE = 'mx.uan.probabilidad_progreso';

const INICIAL = {
  version: 1,
  temasVisitados:   [],
  temasCompletados: [],
  quizHistorial:    [],
  ultimoTema:       null,
  ultimaCategoria:  null,
};

/**
 * useProgreso — Persistencia del progreso del estudiante en localStorage.
 * NTE-UAN-APK-001 v1.3 §7
 */
export function useProgreso() {
  const [progreso, setProgreso] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CLAVE)) || INICIAL;
    } catch {
      return INICIAL;
    }
  });

  const guardar = useCallback((nuevo) => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(nuevo));
    } catch {}
    setProgreso(nuevo);
  }, []);

  const marcarVisitado = useCallback((temaId, catId) => {
    guardar({
      ...progreso,
      temasVisitados: [...new Set([...progreso.temasVisitados, temaId])],
      ultimoTema:        temaId,
      ultimaCategoria:   catId,
    });
  }, [progreso, guardar]);

  const guardarQuiz = useCallback((aciertos, total, moduloId = null) => {
    guardar({
      ...progreso,
      quizHistorial: [...progreso.quizHistorial, {
        fecha:    new Date().toISOString(),
        aciertos,
        total,
        moduloId,
      }],
    });
  }, [progreso, guardar]);

  return { progreso, marcarVisitado, guardarQuiz };
}
