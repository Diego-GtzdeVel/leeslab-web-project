import { FUNCIONES } from '@/content/hydralog.js';
import './Features.css';

export default function Features({ items = FUNCIONES }) {
  return (
    <section className="features">
      <div className="features__heading">
        <h2 className="features__title">Funciones de Hydralog</h2>
        <p className="features__subtitle">
          Todo lo que necesita para monitorear su sistema de medición
        </p>
      </div>

      <ul className="features__grid">
        {items.map((item) => (
          <li className="features__card" key={item.title}>
            <div className="features__icon">
              <img src={item.icon} alt="" aria-hidden="true" width="32" height="32" />
            </div>
            <div className="features__text">
              <h3 className="features__name">{item.title}</h3>
              <p className="features__desc">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
