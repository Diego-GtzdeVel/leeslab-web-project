import Tooltip from '@/components/Tooltip/Tooltip.jsx';
import { PROCESO_PASOS } from '@/content/norma.js';
import procesoImage from '@/assets/norma/proceso.png';
import './Process.css';

export default function Process({ steps = PROCESO_PASOS }) {
  return (
    <section className="process">
      <h2 className="process__title">Cómo le ayudamos a cumplir</h2>

      <div className="process__diagram">
        <img
          className="process__image"
          src={procesoImage}
          alt={`Proceso en ${steps.length} pasos: ${steps.map((s, i) => `${i + 1}. ${s.title}`).join(', ')}.`}
        />
        {/* Zonas con tooltip sobre cada tarjeta (solo escritorio) */}
        {steps.map((step, i) => (
          <Tooltip
            key={step.title}
            className="process__hotspot"
            title={step.title}
            text={step.text}
            label={`Paso ${i + 1}: ${step.title}`}
            align={step.align}
            style={{
              left: `${step.x}%`,
              top: `${step.y}%`,
              width: `${step.w}%`,
              height: `${step.h}%`,
            }}
          />
        ))}
      </div>

      {/* En tablet y móvil, los pasos se leen como lista */}
      <ol className="process__steps">
        {steps.map((step) => (
          <li className="process__step" key={step.title}>
            <h3 className="process__step-title">{step.title}</h3>
            <p className="process__step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
