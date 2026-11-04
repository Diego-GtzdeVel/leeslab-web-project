import './NavLink.css';

/**
 * Link principal del menú. En hover el texto blanco sale hacia la derecha
 * y entra una copia en Slate desde la izquierda (variante Hover de Figma).
 */
export default function NavLink({ href, children, className = '', ...props }) {
  return (
    <a className={['navlink', className].filter(Boolean).join(' ')} href={href} {...props}>
      <span className="navlink__text">{children}</span>
      <span className="navlink__text navlink__text--hover" aria-hidden="true">
        {children}
      </span>
    </a>
  );
}
