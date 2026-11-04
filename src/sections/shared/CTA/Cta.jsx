import Button from '@/components/Button/Button.jsx';
import ctaImage from '@/assets/cta-image.png';
import './Cta.css';

export default function Cta({
  title = '¿Necesita cumplir con la NMX-AA-179?',
  primary = { label: 'Solicite una evaluación', href: '/contacto' },
  secondary = { label: 'Conozca nuestra solución', href: '/norma' },
}) {
  return (
    <section className="cta">
      <img className="cta__image" src={ctaImage} alt="" aria-hidden="true" />
      <div className="cta__container">
        <h2 className="cta__title">{title}</h2>
        <div className="cta__buttons">
          <Button variant="blue" href={primary.href} className="cta__button">
            {primary.label}
          </Button>
          <Button variant="green" href={secondary.href} className="cta__button">
            {secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
