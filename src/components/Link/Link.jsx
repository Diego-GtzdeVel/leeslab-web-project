import { Link as RouterLink } from 'react-router-dom';
import isInternalHref from '@/utils/isInternalHref.js';
import './Link.css';

/**
 * Link de texto de Lees Lab.
 * - variant: 'blue' (Fira Bold, Azul Lees Lab) | 'light' (Trebuchet, blanco — footer)
 * - href: rutas propias ("/norma") navegan con el router; el resto con <a> normal
 * - className: clase de la capa en Figma (p. ej. "psi__link")
 */
export default function Link({ variant = 'blue', href = '#', className = '', children, ...props }) {
  const classes = ['link', `link--${variant}`, className].filter(Boolean).join(' ');

  if (isInternalHref(href)) {
    return (
      <RouterLink className={classes} to={href} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
