import { Link as RouterLink } from 'react-router-dom';
import isInternalHref from '@/utils/isInternalHref.js';
import './Button.css';

/**
 * Botón píldora de Lees Lab.
 * - variant: 'green' (Verde Lab) | 'blue' (Azul de contraste)
 * - href: rutas propias ("/contacto") navegan con el router; otras se renderizan
 *   como <a>; sin href, como <button>
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

  if (isInternalHref(href)) {
    return (
      <RouterLink className={classes} to={href} {...props}>
        {children}
      </RouterLink>
    );
  }

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
