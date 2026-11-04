import Button from '@/components/Button/Button.jsx';
import heroImage from '@/assets/hero-image.png';
import heroIcon from '@/assets/hero-icon.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__heading">
        <h1 className="hero__title">Soluciones integrales en medición y telemetría</h1>
        <div className="hero__subheader">
          <Button variant="green" href="/contacto" className="hero__cta">
            Solicite una evaluación técnica
          </Button>
          <p className="hero__subtitle">
            Diseñamos e instalamos sistemas de medición para aprovechamientos, centrales
            hidroeléctricas y PTAR.
          </p>
        </div>
      </div>

      <div className="hero__image">
        <img className="hero__background" src={heroImage} alt="" aria-hidden="true" />
        <img className="hero__icon" src={heroIcon} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
