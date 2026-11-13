import { ESTANDARES } from '@/content/norma.js';
import './Standards.css';

export default function Standards({ items = ESTANDARES }) {
  return (
    <section className="standards">
      <div className="standards__heading">
        <h2 className="standards__title">Estándares de competencia</h2>
        <p className="standards__subtitle">
          Contamos con acreditación como PSI en {items.length} estándares de competencia:
        </p>
      </div>

      <ul className="standards__grid">
        {items.map((item) => (
          <li className="standards__card" key={item.code}>
            <img
              className="standards__image"
              src={item.image}
              alt=""
              loading="lazy"
              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            />
            <div className="standards__text">
              <h3 className="standards__code">{item.code}</h3>
              <p className="standards__desc">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
