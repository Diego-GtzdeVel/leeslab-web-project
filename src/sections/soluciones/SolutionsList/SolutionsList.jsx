import { Link as RouterLink } from 'react-router-dom';
import { SOLUCIONES_LISTA } from '@/content/solucionesLista.js';
import './SolutionsList.css';

export default function SolutionsList({ items = SOLUCIONES_LISTA }) {
  return (
    <section className="solutions-list">
      <h2 className="solutions-list__title">Nuestras soluciones</h2>

      <ul className="solutions-list__items">
        {items.map((item) => (
          <li key={item.slug}>
            <RouterLink className="solutions-list__card" to={`/soluciones/${item.slug}`}>
              <img className="solutions-list__icon" src={item.icon} alt="" aria-hidden="true" />
              <div className="solutions-list__text">
                <h3 className="solutions-list__name">{item.title}</h3>
                <p className="solutions-list__desc">{item.summary}</p>
              </div>
            </RouterLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
