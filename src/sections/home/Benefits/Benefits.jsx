import { Fragment } from 'react';
import spacer from '@/assets/benefits-spacer.svg';
import './Benefits.css';

const BENEFITS = [
  {
    name: 'Equipos de la más alta calidad',
    desc: 'Trabajamos con equipos de fabricantes líderes a nivel mundial en medición y control, seleccionados por su calidad, precisión y durabilidad.',
  },
  {
    name: 'Monitoreo 24/7',
    desc: 'Sus sistemas están bajo vigilancia constante. Detectamos fallas o desconexiones de manera oportuna.',
  },
  {
    name: 'Soporte continuo',
    desc: 'No lo dejamos solo después de la instalación. Damos mantenimiento, calibración y asistencia técnica durante toda la vida útil de su sistema.',
  },
  {
    name: 'Amplia experiencia',
    desc: 'Tenemos más de 20 años de experiencia implementando soluciones de medición de flujo en el sector hídrico mexicano.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">¿Por qué elegirnos?</h2>
        {BENEFITS.map((item, i) => (
          <Fragment key={item.name}>
            {i > 0 && <img className="benefits__spacer" src={spacer} alt="" aria-hidden="true" />}
            <div className="benefits__text">
              <h3 className="benefits__name">{item.name}</h3>
              <p className="benefits__desc">{item.desc}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
