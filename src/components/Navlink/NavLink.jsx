import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.css';

/**
 * Link principal del menú. En hover el texto blanco sale hacia la derecha
 * y entra una copia en Slate desde la izquierda (variante Hover de Figma).
 * Usa el NavLink del router: en la página actual agrega `aria-current="page"`.
 */
export default function NavLink({ href, children, className = '', ...props }) {
  return (
    <RouterNavLink className={['navlink', className].filter(Boolean).join(' ')} to={href} {...props}>
      <span className="navlink__text">{children}</span>
      <span className="navlink__text navlink__text--hover" aria-hidden="true">
        {children}
      </span>
    </RouterNavLink>
  );
}
