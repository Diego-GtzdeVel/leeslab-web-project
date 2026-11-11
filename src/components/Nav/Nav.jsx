import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link from '@/components/Link/Link.jsx';
import NavLink from '@/components/Navlink/NavLink.jsx';
import logo from '@/assets/nav-logo.png';
import divider from '@/assets/nav-divider.svg';
import useHideOnScroll from '@/hooks/useHideOnScroll.js';
import isInternalHref from '@/utils/isInternalHref.js';
import './Nav.css';

const PRIMARY_LINKS = [
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Norma', href: '/norma' },
  { label: 'Hydralog', href: '/hydralog' },
];

const SECONDARY_GROUPS = [
  [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/lees-lab/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/19WsgDxwGt/?mibextid=wwXIfr' },
    { label: 'Correo', href: 'mailto:contacto@leeslab.com.mx' },
  ],
  [
    { label: 'Contacto', href: '/contacto' },
    { label: 'WhatsApp', href: '#' },
    { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
  ],
];

// Scroll mínimo antes de poder esconderse: la altura del nav (--nav-height)
const NAV_HIDE_OFFSET = 96;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const panelId = useId();

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = () => setIsOpen((open) => !open);

  // Al navegar (cualquier ruta, incluso la misma) el nav vuelve a su estado inicial
  // sin animación: se cierra en el mismo render y `nav--instant` apaga las transiciones.
  const location = useLocation();
  const [lastKey, setLastKey] = useState(location.key);
  const [isInstant, setIsInstant] = useState(false);
  if (location.key !== lastKey) {
    setLastKey(location.key);
    setIsOpen(false);
    setIsInstant(true);
  }

  // Se esconde al bajar y reaparece al subir; con el menú abierto no se mueve
  const isHidden = useHideOnScroll({ offset: NAV_HIDE_OFFSET, disabled: isOpen, resetKey: location.key });

  // Reactiva las transiciones después de que el navegador pintó el estado cerrado
  useEffect(() => {
    if (!isInstant) return undefined;
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setIsInstant(false));
    });
    return () => cancelAnimationFrame(id);
  }, [isInstant]);

  useEffect(() => {
    if (!isOpen) return undefined;

    // Cerrar con Escape y regresar el foco al botón
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        menuButtonRef.current?.focus();
      }
    };

    // Cerrar al dar clic fuera del nav
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) close();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen, close]);

  return (
    <header
      ref={navRef}
      className={['nav', isOpen && 'nav--open', isHidden && 'nav--hidden', isInstant && 'nav--instant']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="nav__bar">
        <RouterLink className="nav__logo" to="/" aria-label="Lees Lab, inicio">
          <img src={logo} alt="" />
        </RouterLink>

        <button
          ref={menuButtonRef}
          type="button"
          className="nav__menu"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
        >
          <span className="menu__label">Menú</span>
          <span className="menu__hamburger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="visually-hidden">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      {/* Panel colapsable: anima la altura con grid-template-rows 0fr → 1fr */}
      <div id={panelId} className="nav__panel" inert={!isOpen}>
        <div className="nav__panel-inner">
          <div className="nav__content">
            <nav className="nav__secondary" aria-label="Enlaces secundarios">
              {SECONDARY_GROUPS.map((group, i) => (
                <ul className="nav__group" key={i}>
                  {group.map((link) => (
                    <li key={link.label}>
                      <Link
                        variant="light"
                        href={link.href}
                        className="nav__sublink"
                        // Externos: pestaña nueva y cierre animado. Rutas propias: navegan
                        // aquí y el cambio de ruta resetea el nav sin animación.
                        {...(isInternalHref(link.href)
                          ? {}
                          : { target: '_blank', rel: 'noopener noreferrer', onClick: close })}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>

            <nav className="nav__primary" aria-label="Principal">
              <ul>
                {PRIMARY_LINKS.map((link) => (
                  <li className="nav__item" key={link.label}>
                    <NavLink href={link.href}>
                      {link.label}
                    </NavLink>
                    <img className="nav__divider" src={divider} alt="" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
