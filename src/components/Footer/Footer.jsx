import Button from '@/components/Button/Button.jsx';
import Link from '@/components/Link/Link.jsx';
import logo from '@/assets/logo-lees-lab.png';
import spacer from '@/assets/footer-spacer.svg';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Norma', href: '/norma' },
  { label: 'Hydralog', href: '/hydralog' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Contacto', href: '/contacto' },
];

function LinkColumn({ title, links }) {
  return (
    <nav className="links__container" aria-label={title}>
      <h2 className="links__title">{title}</h2>
      <ul className="links__content">
        {links.map((link) => (
          <li key={link.label}>
            <Link variant="light" href={link.href} className="links__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contents">
          <div className="footer__promo">
            <div className="promo__logo">
              <img src={logo} alt="Lees Lab" />
            </div>
            <p className="promo__text">
              Conozca Hydralog.
              <br />
              La plataforma que centraliza todos sus puntos de medición.
            </p>
            <Button variant="green" href="/hydralog" className="promo__cta">
              Demo de Hydralog
            </Button>
          </div>

          <div className="footer__links">
            <LinkColumn title="Navegación" links={NAV_LINKS} />
            <LinkColumn title="Links" links={SOCIAL_LINKS} />
          </div>
        </div>

        <img className="footer__spacer" src={spacer} alt="" aria-hidden="true" />

        <p className="footer__copyright">© Lees Lab 2026 - Todos los derechos reservados</p>
      </div>

      <div className="footer__logo" aria-hidden="true">
        <div className="footer__image">
          <img src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
}
