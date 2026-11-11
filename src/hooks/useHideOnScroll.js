import { useEffect, useRef, useState } from 'react';

// Píxeles mínimos de scroll para cambiar de estado (evita parpadeos con el trackpad)
const THRESHOLD = 8;

/**
 * true mientras se hace scroll hacia abajo (pasado `offset`); false al subir o cerca del inicio.
 * - disabled: congela el estado en visible (p. ej. con el menú abierto)
 * - resetKey: al cambiar (p. ej. location.key) vuelve a visible desde la nueva posición
 */
export default function useHideOnScroll({ offset = 0, disabled = false, resetKey } = {}) {
  const [hidden, setHidden] = useState(false);
  const [lastResetKey, setLastResetKey] = useState(resetKey);
  const lastY = useRef(0);

  if (resetKey !== lastResetKey) {
    setLastResetKey(resetKey);
    setHidden(false);
  }
  // Al deshabilitarse queda visible, y al reactivarse arranca visible (no con el valor viejo)
  if (disabled && hidden) setHidden(false);

  useEffect(() => {
    if (disabled) return undefined;

    lastY.current = Math.max(0, window.scrollY);
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY); // iOS da valores negativos en el rebote
      const delta = y - lastY.current;
      if (Math.abs(delta) < THRESHOLD) return;
      setHidden(delta > 0 && y > offset);
      lastY.current = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [offset, disabled, resetKey]);

  return hidden;
}
