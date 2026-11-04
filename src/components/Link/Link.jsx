import './Link.css';

/**
 * Link de texto de Lees Lab.
 * - variant: 'blue' (Fira Bold, Azul Lees Lab) | 'light' (Trebuchet, blanco — footer)
 * - className: clase de la capa en Figma (p. ej. "psi__link")
 */
export default function Link({ variant = 'blue', href = '#', className = '', children, ...props }) {
  const classes = ['link', `link--${variant}`, className].filter(Boolean).join(' ');

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
