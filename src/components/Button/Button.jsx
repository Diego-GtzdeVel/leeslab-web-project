import './Button.css';

/**
 * Botón píldora de Lees Lab.
 * - variant: 'green' (Verde Lab) | 'blue' (Azul de contraste)
 * - href: si existe, se renderiza como <a>; si no, como <button>
 * - className: clase de la capa en Figma (p. ej. "hero__cta")
 */
export default function Button({
  variant = 'green',
  href,
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
