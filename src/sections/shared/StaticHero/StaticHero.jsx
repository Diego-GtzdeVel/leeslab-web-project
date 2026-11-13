import Button from '@/components/Button/Button.jsx';
import './StaticHero.css';

/**
 * Hero de página reutilizable.
 * - variant: 'default' (título Azul Lees Lab) | 'home' (título Azul de contraste + subtítulo Fira)
 * - cta: { label, href, variant: 'green' | 'blue' }
 * - image: foto de fondo · icon: logo al centro (opcional)
 */
export default function StaticHero({
  title,
  subtitle,
  cta,
  image,
  imagePosition = 'center',
  icon,
  variant = 'default',
}) {
  return (
    <section className={`static-hero ${variant !== 'default' ? `static-hero--${variant}` : ''}`}>
      <div className="static-hero__heading">
        <h1 className="static-hero__title">{title}</h1>
        <div className="static-hero__subheader">
          {cta && (
            <Button variant={cta.variant ?? 'green'} href={cta.href} className="static-hero__cta">
              {cta.label}
            </Button>
          )}
          {subtitle && <p className="static-hero__subtitle">{subtitle}</p>}
        </div>
      </div>

      {image && (
        <div className="static-hero__image">
          <img
            className="static-hero__background"
            src={image}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: imagePosition }}
          />
          {icon && <img className="static-hero__icon" src={icon} alt="" aria-hidden="true" />}
        </div>
      )}
    </section>
  );
}
