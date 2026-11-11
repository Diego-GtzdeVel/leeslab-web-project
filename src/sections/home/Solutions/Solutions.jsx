import { useCallback, useMemo, useRef, useState } from 'react';
import LineLink from '@/components/LineLink/LineLink.jsx';
import { SOLUCIONES_HOME } from '@/content/soluciones.js';
import useInView from '@/hooks/useInView.js';
import usePageVisible from '@/hooks/usePageVisible.js';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion.js';
import './Solutions.css';

// Tiempo de lectura: base + tiempo por palabra, con límites
const MIN_MS = 6000;
const MAX_MS = 12000;
const BASE_MS = 3000;
const MS_PER_WORD = 180;

function countWords(slide) {
  const text = [
    slide.title,
    ...slide.body.flatMap((block) => (block.type === 'ul' ? block.items : block.text)),
  ].join(' ');
  return text.trim().split(/\s+/).length;
}

function readingTime(slide) {
  return Math.min(MAX_MS, Math.max(MIN_MS, BASE_MS + countWords(slide) * MS_PER_WORD));
}

function SlideBody({ body }) {
  return body.map((block, i) =>
    block.type === 'ul' ? (
      <ul key={i}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <p key={i}>{block.text}</p>
    )
  );
}

export default function Solutions({ slides = SOLUCIONES_HOME }) {
  const sectionRef = useRef(null);
  const pointerStartX = useRef(null);

  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  const inView = useInView(sectionRef, { threshold: 0.4 });
  const pageVisible = usePageVisible();
  const reducedMotion = usePrefersReducedMotion();

  const durations = useMemo(() => slides.map(readingTime), [slides]);
  const isPlaying = inView && pageVisible && !isHovered && !hasFocus && !reducedMotion;

  const goTo = useCallback(
    (index) => setActive((index + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), [slides.length]);

  // Flechas ↑ ↓ ← → sobre los indicadores
  const onNavKeyDown = (event) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const target = (active + step + slides.length) % slides.length;
    goTo(target);
    event.currentTarget.querySelectorAll('button')[target]?.focus();
  };

  // Swipe en touch sobre la imagen
  const onPointerDown = (event) => {
    if (event.pointerType === 'touch') pointerStartX.current = event.clientX;
  };
  const onPointerUp = (event) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) > 50) goTo(active + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      ref={sectionRef}
      className="solutions"
      aria-roledescription="carrusel"
      aria-label="Nuestras soluciones"
      // Solo el foco con teclado pausa; un clic con mouse también deja el foco en el botón
      onFocus={(event) => setHasFocus(event.target.matches(':focus-visible'))}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >
      {/* Todos los textos ocupan la misma celda: la altura no brinca entre slides */}
      {/* Pausa solo mientras el mouse está sobre el texto (leyendo), no en toda la sección */}
      <div
        className="solutions__text"
        aria-live={isPlaying ? 'off' : 'polite'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.slug}
            className={`solutions__slide ${i === active ? 'solutions__slide--active' : ''}`}
            aria-hidden={i !== active}
          >
            <h2 className="solutions__title">{slide.title}</h2>
            <div className="solutions__desc">
              <SlideBody body={slide.body} />
            </div>
          </div>
        ))}
      </div>

      <div className="solutions__image" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        {slides.map((slide, i) => (
          <img
            key={slide.slug}
            className={`solutions__photo ${i === active ? 'solutions__photo--active' : ''}`}
            src={slide.image}
            alt={i === active ? slide.alt : ''}
            aria-hidden={i !== active}
            style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable="false"
          />
        ))}
      </div>

      <div className="solutions__nav" role="group" aria-label="Elegir solución" onKeyDown={onNavKeyDown}>
        {slides.map((slide, i) => (
          <LineLink
            key={slide.slug}
            label={slide.title}
            isActive={i === active}
            isPlaying={i === active && isPlaying}
            duration={durations[i]}
            onClick={() => goTo(i)}
            onComplete={next}
            tabIndex={i === active ? 0 : -1}
          />
        ))}
      </div>
    </section>
  );
}
