import { CAMBIO_PSI } from '@/content/norma.js';
import './PsiChange.css';

export default function PsiChange({ items = CAMBIO_PSI }) {
  return (
    <section className="psi-change">
      <h2 className="psi-change__title">¿Cuenta con un equipo acreditado?</h2>

      <div className="psi-change__body">
        <p className="psi-change__intro">
          Si tiene en mente hacer un cambio de PSI, nosotros le damos asesoría en el proceso
        </p>

        <dl className="psi-change__list">
          {items.map((item) => (
            <div className="psi-change__row" key={item.name}>
              <dt className="psi-change__name">{item.name}</dt>
              <dd className="psi-change__desc">{item.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
