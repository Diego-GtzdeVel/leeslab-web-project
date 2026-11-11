import './LineLink.css';

/**
 * Indicador del carrusel (componente "Line Link" en Figma).
 * Estados: default (32px), hover y active (48px).
 * En active, la barra se llena durante `duration` ms y al terminar llama a `onComplete`.
 */
export default function LineLink({
  label,
  isActive = false,
  isPlaying = false,
  duration = 6000,
  onClick,
  onComplete,
  className = '',
  ...props
}) {
  const classes = ['line-link', isActive && 'line-link--active', isPlaying && 'line-link--playing', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      aria-label={label}
      aria-current={isActive ? 'true' : undefined}
      onClick={onClick}
      style={{ '--line-duration': `${duration}ms` }}
      {...props}
    >
      <span className="line-link__bar">
        {isActive && <span className="line-link__progress" onAnimationEnd={onComplete} />}
      </span>
    </button>
  );
}
