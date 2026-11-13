import { useEffect, useId, useState } from 'react';
import './Tooltip.css';

/**
 * Zona interactiva que muestra un globo con título y texto.
 * Se abre con hover, con foco de teclado o con tap (touch). Escape lo cierra.
 * - align: 'start' | 'center' | 'end' → cómo se alinea el globo respecto a la zona
 * - className / style: para posicionar la zona desde la sección que lo usa
 */
export default function Tooltip({ title, text, label, align = 'center', className = '', style }) {
  const [open, setOpen] = useState(false);
  const bubbleId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      className={['tooltip', `tooltip--${align}`, open && 'tooltip--open', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="tooltip__trigger"
        aria-label={label ?? title}
        aria-describedby={bubbleId}
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((value) => !value)}
      />
      <div id={bubbleId} role="tooltip" className="tooltip__bubble">
        <p className="tooltip__title">{title}</p>
        <p className="tooltip__text">{text}</p>
      </div>
    </div>
  );
}
