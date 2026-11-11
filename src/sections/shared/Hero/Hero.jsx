import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button/Button.jsx';
import useInView from '@/hooks/useInView.js';
import usePageVisible from '@/hooks/usePageVisible.js';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion.js';
import heroImage from '@/assets/hero-image.png';
import heroIcon from '@/assets/hero-icon.png';
import './Hero.css';

// Tiempo que se queda cada imagen antes de pasar a la siguiente
const SLIDE_MS = 6000;

/**
 * - images: lista de { src, position? }. Con más de una, rotan en slideshow
 *   (se detiene fuera de vista, con la pestaña oculta o con movimiento reducido).
 */
export default function Hero({ images = [{ src: heroImage, position: 'center 41%' }] }) {
  const imageRef = useRef(null);
  const [active, setActive] = useState(0);

  const inView = useInView(imageRef, { threshold: 0.2 });
  const pageVisible = usePageVisible();
  const reducedMotion = usePrefersReducedMotion();
  const isPlaying = images.length > 1 && inView && pageVisible && !reducedMotion;

  useEffect(() => {
    if (!isPlaying) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [isPlaying, images.length]);

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

      <div ref={imageRef} className="hero__image">
        {images.map((image, i) => (
          <img
            key={image.src}
            className={`hero__background ${i === active ? 'hero__background--active' : ''}`}
            src={image.src}
            alt=""
            aria-hidden="true"
            style={image.position ? { objectPosition: image.position } : undefined}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <img className="hero__icon" src={heroIcon} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
